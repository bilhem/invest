#!/usr/bin/env python3
"""
strap_picture.py — Packshots de brins de bracelet à partir des plans PDF.
Aucune IA générative : détection d'image classique + rendu procédural.

Pour chaque plan :
  1. chaque page du PDF est convertie en image ;
  2. le programme cherche la vue du brin (forme allongée, fermée, avec une rangée de trous) ;
  3. il récupère la silhouette exacte (contour, ogive, trous) et la nettoie
     (flèches de cote, traits d'attache, dents de pointillés) ;
  4. il la redresse (attache en haut, pointe en bas) et la remplit avec l'échantillon cuir :
     bords arrondis, lumière studio, couture, ombre portée.
Il sort aussi une image de contrôle par plan et un rapport, pour vérifier les 3000 références vite.

Installation :
    pip install pymupdf opencv-python-headless numpy pillow

Utilisation :
    # un dossier entier, même échantillon pour tout
    python strap_picture.py plans/ --swatch cuir_marine.jpg --out packshots/

    # un échantillon et une couleur de fil par plan, via un fichier de correspondance
    python strap_picture.py plans/ --mapping correspondance.csv --out packshots/

correspondance.csv (séparateur ;), seule la colonne "fichier" est obligatoire :
    fichier;echantillon;fil;couture;couleur
    ConsultPlan-16389327848881805280.pdf;cuir_marine.jpg;#2c2838;oui;
    ConsultPlan-15523740896257016573.pdf;cuir_brun.jpg;#e8e0d0;oui;#5a2a1e
"""
from __future__ import annotations

import argparse
import csv
import math
import os
import sys
from concurrent.futures import ProcessPoolExecutor
from dataclasses import dataclass
from pathlib import Path

import cv2
import numpy as np
from PIL import Image

MM_PER_INCH = 25.4


# --------------------------------------------------------------------------- #
# Réglages
# --------------------------------------------------------------------------- #
@dataclass
class Reglages:
    dpi: int = 300               # résolution de lecture du PDF
    echelle_plan: float = 1.0    # 1.0 = plan à l'échelle 1:1 (Interstrap, Mestel)
    largeur_mm: float = 0.0      # pour une photo/scan sans échelle : largeur réelle max du brin
    # rendu
    taille: int = 2000           # image carrée de sortie (px)
    remplissage: float = 0.82    # part de la hauteur occupée par le brin
    fond: str = "#ffffff"        # ou "transparent"
    ombre: float = 0.32
    arrondi_mm: float = 0.9      # rayon du bord rembordé
    brillance: float = 0.16
    grain: float = 1.0
    echantillon_mm: float = 20.0 # largeur réelle couverte par la photo d'échantillon
    couleur: str = ""            # forcer une teinte (#rrggbb)
    # couture
    couture: bool = True
    fil: str = "#2c2838"
    couture_retrait_mm: float = 1.3
    couture_pas_mm: float = 1.25
    couture_point_mm: float = 0.85
    couture_fil_mm: float = 0.32
    couture_angle: float = 18.0
    # détection
    lissage_mm: float = 0.35     # lissage du contour (retouche)
    vue_forcee: str = ""         # "x0,y0,x1,y1" en fraction de page pour forcer la zone (ex: 0,0.4,0.55,0.8)


def hex_rgb(h: str) -> np.ndarray:
    h = h.lstrip("#")
    return np.array([int(h[i:i + 2], 16) for i in (0, 2, 4)], dtype=np.float32) / 255.0


# --------------------------------------------------------------------------- #
# 1. Lecture des pages
# --------------------------------------------------------------------------- #
def pages_en_images(chemin: Path, dpi: int):
    """Renvoie une liste d'images en niveaux de gris (np.uint8), une par page."""
    ext = chemin.suffix.lower()
    if ext in (".png", ".jpg", ".jpeg", ".tif", ".tiff", ".bmp"):
        return [np.asarray(Image.open(chemin).convert("L"))], False
    try:
        import fitz  # PyMuPDF
        doc = fitz.open(chemin)
        out = []
        for p in doc:
            pix = p.get_pixmap(dpi=dpi, colorspace=fitz.csGRAY, alpha=False)
            out.append(np.frombuffer(pix.samples, np.uint8).reshape(pix.height, pix.width).copy())
        return out, True
    except ImportError:
        import pypdfium2 as pdfium  # solution de secours
        doc = pdfium.PdfDocument(str(chemin))
        return [np.asarray(doc[i].render(scale=dpi / 72).to_pil().convert("L")) for i in range(len(doc))], True


# --------------------------------------------------------------------------- #
# 2. Détection de la vue du brin
# --------------------------------------------------------------------------- #
@dataclass
class Detection:
    masque: np.ndarray        # silhouette du brin (bool), dans le repère de la page
    trous: list               # [(cx, cy, r_px)]
    score: float
    page: int
    px_mm: float
    rect: tuple               # minAreaRect


def traits(gray: np.ndarray, px_mm: float) -> np.ndarray:
    """Traits du dessin en blanc (uint8 0/255). Seuil adaptatif : marche sur PDF et sur photo."""
    bloc = int(px_mm * 6) | 1
    th = cv2.adaptiveThreshold(gray, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY_INV, bloc, 12)
    # on ignore ce qui est en couleur claire / gris très léger (trames)
    th[gray > 200] = 0
    return th


def chercher_trous(lines: np.ndarray, px_mm: float):
    """Petites zones rondes fermées = trous d'ardillon potentiels."""
    vide = (lines == 0).astype(np.uint8)
    n, lab, stats, cent = cv2.connectedComponentsWithStats(vide, connectivity=4)
    r_min, r_max = 0.35 * px_mm, 2.6 * px_mm
    petits = []
    for i in range(1, n):
        x, y, w, h, a = stats[i]
        if math.pi * r_min ** 2 * 0.6 <= a <= math.pi * r_max ** 2 and 0.6 < w / max(h, 1) < 1.6:
            if a / (math.pi * (max(w, h) / 2) ** 2) > 0.6:
                petits.append((cent[i][0], cent[i][1], max(w, h) / 2))
    return petits


def detecter_brin(gray: np.ndarray, px_mm: float, page: int, zone=None) -> Detection | None:
    """Essaie deux lectures et garde la meilleure :
    - traits épais seulement (le contour du brin est épais, les cotes/flèches sont fines :
      elles disparaissent, donc ne coupent plus le brin et ne forment plus de faux cadres) ;
    - tous les traits (pour les scans/photos où tout a la même épaisseur)."""
    lines = traits(gray, px_mm)
    H, W = gray.shape
    if zone is not None:
        x0, y0, x1, y1 = zone
        keep = np.zeros_like(lines)
        keep[int(y0 * H):int(y1 * H), int(x0 * W):int(x1 * W)] = 1
        lines = lines * keep
    petits = chercher_trous(lines, px_mm)
    # plusieurs seuils d'épaisseur : l'épaisseur des traits varie selon le dessinateur
    variantes = [lines]
    for mm in (0.25, 0.33, 0.42):
        e = max(2, int(round(px_mm * mm)))
        variantes.append(cv2.morphologyEx(lines, cv2.MORPH_OPEN,
                                          cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (e, e))))
    best = None
    for variante in variantes:
        d = _detecter(variante, petits, px_mm, page)
        if d and (best is None or d.score > best.score):
            best = d
    return best


def _detecter(lines: np.ndarray, petits, px_mm: float, page: int) -> Detection | None:
    H, W = lines.shape
    # fermeture minime : relie les traits pleins sans souder les pointillés de couture
    k = max(1, int(round(px_mm * 0.15)))
    lines_c = cv2.morphologyEx(lines, cv2.MORPH_CLOSE, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * k + 1,) * 2))

    vide = (lines_c == 0).astype(np.uint8)
    n, lab, stats, cent = cv2.connectedComponentsWithStats(vide, connectivity=4)

    meilleur = None
    for i in range(1, n):
        x, y, w, h, a = stats[i]
        if a < (8 * px_mm) * (30 * px_mm) * 0.3:      # trop petit pour un brin
            continue
        if x == 0 or y == 0 or x + w >= W or y + h >= H:  # touche le bord : c'est le fond
            continue
        comp = (lab[y:y + h, x:x + w] == i).astype(np.uint8)
        cnts, _ = cv2.findContours(comp, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
        c = max(cnts, key=cv2.contourArea)
        (cx, cy), (rw, rh), ang = cv2.minAreaRect(c + np.array([x, y]))
        L, l = max(rw, rh), min(rw, rh)
        if l < 6 * px_mm or l > 40 * px_mm or L < 40 * px_mm or L > 260 * px_mm:
            continue
        allong = L / l
        if allong < 2.5:
            continue
        rempli = cv2.contourArea(c) / (rw * rh)     # un brin remplit bien son rectangle
        if rempli < 0.6:
            continue
        # trous à l'intérieur ?
        plein = np.zeros((h, w), np.uint8)
        cv2.drawContours(plein, [c], -1, 1, -1)
        nb_trous = sum(1 for (tx, ty, tr) in petits
                       if x <= tx < x + w and y <= ty < y + h and plein[int(ty - y), int(tx - x)])
        score = min(allong, 8) + rempli * 3 + min(nb_trous, 10) * 2.5
        if meilleur is None or score > meilleur[0]:
            meilleur = (score, i, (x, y, w, h), c, (cx, cy, rw, rh, ang), nb_trous)

    if meilleur is None:
        return None
    score, idx, (x, y, w, h), c, rect, nb_trous = meilleur

    # --- silhouette exacte : on part de l'intérieur trouvé et on s'étend jusqu'au contour extérieur
    # on travaille dans une fenêtre autour du brin (rapide)
    pad = int(6 * px_mm)
    y0, y1, x0, x1 = max(0, y - pad), min(H, y + h + pad), max(0, x - pad), min(W, x + w + pad)
    labw = lab[y0:y1, x0:x1]
    m = np.zeros(labw.shape, np.uint8)
    cv2.drawContours(m, [c + np.array([x - x0, y - y0])], -1, 1, -1)
    # le vide extérieur = la composante majoritaire sur le pourtour de la fenêtre
    bord = np.concatenate([labw[0], labw[-1], labw[:, 0], labw[:, -1]])
    vals, cnt = np.unique(bord[bord > 0], return_counts=True)
    permis = (labw != vals[np.argmax(cnt)]).astype(np.uint8) if len(vals) else np.ones_like(m)

    croissance = int(math.ceil(2.5 * px_mm))
    ker = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3, 3))
    for _ in range(croissance):
        m = cv2.dilate(m, ker) & permis
    m = cv2.dilate(m, ker, iterations=max(1, k // 2)) & permis      # inclut l'épaisseur du trait

    # retouche : on enlève les traits de cote collés (fins) et on bouche les encoches de flèches
    r_ouv = max(2, int(px_mm * 1.1))
    m = cv2.morphologyEx(m, cv2.MORPH_OPEN, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * r_ouv + 1,) * 2))
    r_fer = max(2, int(px_mm * 1.2))
    m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * r_fer + 1,) * 2))
    cnts, _ = cv2.findContours(m, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
    c = max(cnts, key=cv2.contourArea) + np.array([x0, y0])
    full = np.zeros((H, W), np.uint8)
    cv2.drawContours(full, [c], -1, 1, -1)

    trous = [(tx, ty, tr) for (tx, ty, tr) in petits if full[int(ty), int(tx)]]
    rect = cv2.minAreaRect(c)
    return Detection(full.astype(bool), trous, score, page, px_mm, rect)


# --------------------------------------------------------------------------- #
# 3. Redressement et retouche de la silhouette
# --------------------------------------------------------------------------- #
def redresser(det: Detection, cible_px_mm: float, lissage_mm: float):
    """Renvoie (masque_redressé float 0..1, trous redressés) au pas cible_px_mm,
    attache en haut, pointe en bas, axe vertical."""
    (cx, cy), (rw, rh), ang = det.rect
    if rw < rh:
        ang = ang + 90  # on veut l'axe long horizontal après rotation de -ang
    M = cv2.getRotationMatrix2D((cx, cy), ang, 1.0)
    H, W = det.masque.shape
    m = cv2.warpAffine(det.masque.astype(np.uint8) * 255, M, (W, H), flags=cv2.INTER_LINEAR)
    ys, xs = np.nonzero(m > 127)
    x0, x1, y0, y1 = xs.min(), xs.max(), ys.min(), ys.max()
    m = m[y0:y1 + 1, x0:x1 + 1]
    trous = []
    for tx, ty, tr in det.trous:
        p = M @ np.array([tx, ty, 1.0])
        trous.append((p[0] - x0, p[1] - y0, tr))

    # axe long horizontal -> vertical
    m = np.ascontiguousarray(m.T)
    trous = [(ty, tx, tr) for tx, ty, tr in trous]
    # pointe en bas : l'extrémité la plus étroite
    prof = (m > 127).sum(1)
    n = len(prof)
    haut, bas = prof[int(n * 0.02):int(n * 0.12)].mean(), prof[int(n * 0.88):int(n * 0.98)].mean()
    if haut < bas:
        m = m[::-1].copy()
        trous = [(tx, n - 1 - ty, tr) for tx, ty, tr in trous]

    # mise à l'échelle + lissage du contour (retouche)
    f = cible_px_mm / det.px_mm
    new = (max(1, int(m.shape[1] * f)), max(1, int(m.shape[0] * f)))
    mf = cv2.resize(m.astype(np.float32) / 255, new, interpolation=cv2.INTER_CUBIC)
    s = max(0.6, lissage_mm * cible_px_mm)
    mf = cv2.GaussianBlur(mf, (0, 0), s)
    mf = np.clip((mf - 0.5) * 3 + 0.5, 0, 1)  # bord net mais lisse
    trous = [(tx * f, ty * f, tr * f) for tx, ty, tr in trous]
    # perçage des trous (cercles propres, anticrénelés)
    if trous:
        sub = 4
        perc = np.zeros(mf.shape, np.float32)
        for tx, ty, tr in trous:
            cv2.circle(perc, (int(tx * sub), int(ty * sub)), int(tr * sub), 1.0, -1, cv2.LINE_AA, 2)
        mf = mf * (1 - perc)
    return mf, trous


# --------------------------------------------------------------------------- #
# 4. Rendu
# --------------------------------------------------------------------------- #
def texture(path: str, r: Reglages, px_mm: float, shape) -> np.ndarray:
    H, W = shape
    if path:
        img = np.asarray(Image.open(path).convert("RGB"), dtype=np.float32) / 255
        sigma = max(img.shape[:2]) / 6
        low = cv2.GaussianBlur(img, (0, 0), sigma)
        mean = img.reshape(-1, 3).mean(0)
        flat = np.clip(img / np.maximum(low, 1e-3) * mean, 0, 1)
    else:
        rng = np.random.default_rng(1)
        flat = np.clip(0.5 + cv2.GaussianBlur(rng.normal(0, 0.06, (400, 400)).astype(np.float32), (0, 0), 1.2), 0, 1)
        flat = np.repeat(flat[..., None], 3, 2)
        mean = flat.reshape(-1, 3).mean(0)
    if r.couleur:
        flat = np.clip(flat / np.maximum(mean, 1e-3) * hex_rgb(r.couleur), 0, 1)
    tw = max(8, int(r.echantillon_mm * px_mm))
    th = max(8, int(tw * flat.shape[0] / flat.shape[1]))
    t = cv2.resize(flat, (tw, th), interpolation=cv2.INTER_AREA)
    t = np.concatenate([t, t[:, ::-1]], 1)
    t = np.concatenate([t, t[::-1]], 0)
    big = np.tile(t, (H // t.shape[0] + 2, W // t.shape[1] + 2, 1))
    oy, ox = t.shape[0] // 3, t.shape[1] // 5
    return big[oy:oy + H, ox:ox + W]


def dessiner_couture(col: np.ndarray, masque: np.ndarray, r: Reglages, px_mm: float):
    """Points de couture le long du contour, en retrait, sauf sur le bord d'attache (en haut)."""
    e = int(round(r.couture_retrait_mm * px_mm))
    mb = (masque > 0.5).astype(np.uint8)
    inner = cv2.erode(mb, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * e + 1,) * 2))
    cnts, _ = cv2.findContours(inner, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
    if not cnts:
        return col
    c = max(cnts, key=cv2.contourArea)[:, 0, :].astype(np.float32)
    c = cv2.GaussianBlur(c[None], (0, 0), sigmaX=px_mm * 0.6)[0] if len(c) > 10 else c
    ytop = np.nonzero(mb.any(1))[0][0]
    seg = np.diff(np.vstack([c, c[:1]]), axis=0)
    ln = np.hypot(seg[:, 0], seg[:, 1])
    cum = np.concatenate([[0], np.cumsum(ln)])
    H, W = mb.shape
    fil = np.zeros((H, W), np.float32)
    ombre = np.zeros((H, W), np.float32)
    piq = np.zeros((H, W), np.float32)
    reflet = np.zeros((H, W), np.float32)
    lw, ww = r.couture_point_mm * px_mm / 2, r.couture_fil_mm * px_mm / 2
    sub = 4  # sous-pixel pour l'anticrénelage
    for kk in np.arange(0, cum[-1], r.couture_pas_mm * px_mm):
        i = min(np.searchsorted(cum, kk) - 1, len(seg) - 1)
        i = max(i, 0)
        f = (kk - cum[i]) / max(ln[i], 1e-6)
        x, y = c[i] + f * seg[i]
        if y < ytop + e * 1.6:          # pas de couture sur le bord coupé de l'attache
            continue
        a = math.degrees(math.atan2(seg[i][1], seg[i][0])) + r.couture_angle
        ctr = (int(x * sub), int(y * sub))
        ax = (int(lw * sub), int(ww * sub))
        cv2.ellipse(fil, ctr, ax, a, 0, 360, 1.0, -1, cv2.LINE_AA, 2)
        cv2.ellipse(ombre, (int((x + ww * .5) * sub), int((y + ww * .8) * sub)), ax, a, 0, 360, 1.0, -1, cv2.LINE_AA, 2)
        cv2.ellipse(reflet, (int(x * sub), int((y - ww * .3) * sub)), (int(lw * .6 * sub), max(1, int(ww * .25 * sub))),
                    a, 0, 360, 1.0, -1, cv2.LINE_AA, 2)
        ra = math.radians(a)
        for s in (-1.15, 1.15):
            hx, hy = x + s * lw * math.cos(ra), y + s * lw * math.sin(ra)
            cv2.circle(piq, (int(hx * sub), int(hy * sub)), max(1, int(ww * .55 * sub)), 1.0, -1, cv2.LINE_AA, 2)
    ombre = cv2.GaussianBlur(ombre, (0, 0), max(0.5, ww * .8))
    tc = hex_rgb(r.fil)
    col = col * (1 - 0.5 * ombre[..., None])
    col = col * (1 - 0.65 * cv2.GaussianBlur(piq, (0, 0), 0.6)[..., None])
    col = col * (1 - fil[..., None]) + tc * fil[..., None] * (0.85 + 0.15 * 1)
    col = col + (np.minimum(tc * 1.6 + 0.1, 1) - col) * (0.55 * reflet * fil)[..., None]
    return np.clip(col, 0, 1)


def rendre(masque: np.ndarray, trous, r: Reglages, echantillon: str, px_mm: float) -> Image.Image:
    S = r.taille * 2                      # sur-échantillonnage x2
    pad = int(3 * px_mm)
    m = np.pad(masque.astype(np.float32), pad)          # on ne calcule que la zone du brin
    hm, wm = m.shape
    inside = (m > 0.5).astype(np.uint8)
    ytop = np.nonzero(inside.any(1))[0][0]              # bord d'attache (non arrondi)
    dist = cv2.distanceTransform(inside, cv2.DIST_L2, 5) / px_mm
    er = r.arrondi_mm
    t = np.clip(dist / er, 0, 1)
    h = er * np.sqrt(1 - (1 - t) ** 2) + 0.25 * np.clip(dist / 10, 0, 1)
    yy = (np.arange(hm)[:, None] - ytop) / px_mm
    h = np.where((yy < er) & (inside > 0), np.maximum(h, er * 0.85), h)

    tex = texture(echantillon, r, px_mm, (hm, wm))
    lum = tex.mean(-1)
    grain = lum - cv2.GaussianBlur(lum, (0, 0), 6)
    hp = cv2.GaussianBlur((h * px_mm + r.grain * grain * 4).astype(np.float32), (0, 0), 1.5)
    gy, gx = np.gradient(hp)
    n = np.dstack([-gx, -gy, np.ones_like(gx)])
    n /= np.linalg.norm(n, axis=2, keepdims=True)
    L = np.array([-0.35, -0.55, 0.76]); L /= np.linalg.norm(L)
    Hh = (L + [0, 0, 1]); Hh /= np.linalg.norm(Hh)
    diff = np.clip(n @ L, 0, 1)
    spec = np.clip(n @ Hh, 0, 1) ** 60
    grad = 1.06 - 0.12 * np.clip(yy / max(1, masque.shape[0] / px_mm), 0, 1)
    col = tex * ((0.42 + 0.68 * diff) * grad)[..., None] + r.brillance * spec[..., None]
    col *= (0.82 + 0.18 * np.clip(dist / (er * 1.2), 0, 1))[..., None]
    col = np.clip(col, 0, 1).astype(np.float32)
    if r.couture:
        col = dessiner_couture(col, m, r, px_mm)

    # placement centré dans l'image carrée
    oy, ox = (S - hm) // 2, (S - wm) // 2
    alpha_full = np.zeros((S, S), np.float32)
    alpha_full[oy:oy + hm, ox:ox + wm] = m
    # ombre portée calculée en basse résolution (rapide), puis agrandie
    q = 8
    small = cv2.resize(alpha_full, (S // q, S // q), interpolation=cv2.INTER_AREA)
    small = np.roll(small, (int(1.6 * px_mm / q), int(0.8 * px_mm / q)), (0, 1))
    small = cv2.GaussianBlur(small, (0, 0), 3 * px_mm / q)
    sh = cv2.resize(small, (S, S), interpolation=cv2.INTER_LINEAR) * r.ombre

    a = m[..., None]
    if r.fond == "transparent":
        out = np.zeros((S, S, 4), np.float32)
        out[..., 3] = sh
        zone = out[oy:oy + hm, ox:ox + wm]
        za = np.clip(a[..., 0] + zone[..., 3] * (1 - a[..., 0]), 0, 1)
        zone[..., :3] = col * a / np.maximum(za, 1e-4)[..., None]
        zone[..., 3] = za
        img = Image.fromarray((np.clip(out, 0, 1) * 255).astype(np.uint8), "RGBA")
    else:
        out = hex_rgb(r.fond)[None, None, :] * (1 - sh[..., None])
        zone = out[oy:oy + hm, ox:ox + wm]
        out[oy:oy + hm, ox:ox + wm] = zone * (1 - a) + col * a
        img = Image.fromarray((np.clip(out, 0, 1) * 255).astype(np.uint8))
    return img.resize((r.taille, r.taille), Image.LANCZOS)


def image_controle(gray: np.ndarray, det: Detection, chemin: Path):
    """Page réduite avec la silhouette détectée en rouge : pour valider d'un coup d'œil."""
    rgb = cv2.cvtColor(gray, cv2.COLOR_GRAY2BGR)
    cnts, _ = cv2.findContours(det.masque.astype(np.uint8), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
    ep = max(2, int(det.px_mm * 0.4))
    cv2.drawContours(rgb, cnts, -1, (0, 0, 230), ep)
    for tx, ty, tr in det.trous:
        cv2.circle(rgb, (int(tx), int(ty)), int(tr + ep), (0, 160, 0), ep)
    f = 1400 / max(rgb.shape[:2])
    rgb = cv2.resize(rgb, None, fx=f, fy=f, interpolation=cv2.INTER_AREA)
    cv2.imwrite(str(chemin), rgb)


# --------------------------------------------------------------------------- #
# 5. Traitement d'un plan / d'un dossier
# --------------------------------------------------------------------------- #
def traiter(plan: Path, r: Reglages, echantillon: str, sortie: Path) -> dict:
    pages, est_pdf = pages_en_images(plan, r.dpi)
    zone = tuple(float(v) for v in r.vue_forcee.split(",")) if r.vue_forcee else None
    meilleure, gris = None, None
    for i, g in enumerate(pages, 1):
        if est_pdf:
            px_mm = r.dpi / MM_PER_INCH / r.echelle_plan
        else:
            px_mm = g.shape[1] / 280  # estimation provisoire pour une photo, corrigée plus bas
        det = detecter_brin(g, px_mm, i, zone)
        if det and (meilleure is None or det.score > meilleure.score):
            meilleure, gris = det, g
    if meilleure is None:
        return {"fichier": plan.name, "statut": "ÉCHEC : aucun brin trouvé", "page": "", "longueur_mm": "",
                "largeur_mm": "", "trous": "", "score": ""}

    if not est_pdf:  # photo / scan : on calibre avec la largeur réelle si fournie
        (_, _), (rw, rh), _ = meilleure.rect
        largeur_px = min(rw, rh)
        meilleure.px_mm = largeur_px / (r.largeur_mm or 21.0)

    (_, _), (rw, rh), _ = meilleure.rect
    long_mm, larg_mm = max(rw, rh) / meilleure.px_mm, min(rw, rh) / meilleure.px_mm
    cible = r.remplissage * r.taille * 2 / long_mm
    masque, trous = redresser(meilleure, cible, r.lissage_mm)
    img = rendre(masque, trous, r, echantillon, cible)

    nom = plan.stem
    sortie.mkdir(parents=True, exist_ok=True)
    (sortie / "controle").mkdir(exist_ok=True)
    img.save(sortie / f"{nom}.png")
    image_controle(gris, meilleure, sortie / "controle" / f"{nom}_controle.jpg")
    statut = "OK" if meilleure.score > 12 else "À VÉRIFIER"
    return {"fichier": plan.name, "statut": statut, "page": meilleure.page, "longueur_mm": round(long_mm, 1),
            "largeur_mm": round(larg_mm, 1), "trous": len(meilleure.trous), "score": round(meilleure.score, 1)}


def _traiter_sur(t):
    plan, r, ech, sortie = t
    try:
        return traiter(plan, r, ech, sortie)
    except Exception as e:  # un plan qui plante ne bloque pas les autres
        return {"fichier": plan.name, "statut": f"ERREUR : {e}", "page": "", "longueur_mm": "",
                "largeur_mm": "", "trous": "", "score": ""}


def main():
    p = argparse.ArgumentParser(description="Packshots de brins à partir des plans PDF (sans IA générative).")
    p.add_argument("entree", help="un plan (PDF ou image) ou un dossier de plans")
    p.add_argument("--out", default="packshots", help="dossier de sortie")
    p.add_argument("--swatch", default="", help="photo d'échantillon par défaut")
    p.add_argument("--mapping", help="CSV fichier;echantillon;fil;couture;couleur")
    p.add_argument("--workers", type=int, default=0, help="nombre de plans traités en parallèle (défaut : tous les cœurs - 1)")
    for k, v in Reglages().__dict__.items():
        flag = "--" + k.replace("_", "-")
        if isinstance(v, bool):
            p.add_argument(flag, type=lambda s: s.lower() in ("1", "oui", "true", "yes"))
        else:
            p.add_argument(flag, type=type(v))
    a = p.parse_args()

    base = Reglages()
    for k in base.__dict__:
        v = getattr(a, k)
        if v is not None:
            setattr(base, k, v)

    entree = Path(a.entree)
    plans = sorted([f for f in entree.iterdir() if f.suffix.lower() in (".pdf", ".png", ".jpg", ".jpeg", ".tif", ".tiff")]
                   ) if entree.is_dir() else [entree]

    corr = {}
    if a.mapping:
        with open(a.mapping, encoding="utf-8-sig") as f:
            for row in csv.DictReader(f, delimiter=";"):
                corr[row["fichier"].strip()] = row

    sortie = Path(a.out)
    taches = []
    for plan in plans:
        r = Reglages(**base.__dict__)
        ech = a.swatch
        row = corr.get(plan.name)
        if row:
            ech = (row.get("echantillon") or ech).strip()
            if row.get("fil"): r.fil = row["fil"].strip()
            if row.get("couleur"): r.couleur = row["couleur"].strip()
            if row.get("couture"): r.couture = row["couture"].strip().lower() in ("1", "oui", "true", "yes")
        taches.append((plan, r, ech, sortie))

    rapport = []
    workers = a.workers or max(1, (os.cpu_count() or 2) - 1)
    with ProcessPoolExecutor(max_workers=workers) as ex:
        for n, res in enumerate(ex.map(_traiter_sur, taches), 1):
            rapport.append(res)
            print(f"[{n}/{len(plans)}] {res['fichier']} -> {res['statut']}"
                  + (f"  ({res['longueur_mm']} x {res['largeur_mm']} mm, {res['trous']} trous)" if res["score"] != "" else ""))

    sortie.mkdir(parents=True, exist_ok=True)
    with open(sortie / "rapport.csv", "w", newline="", encoding="utf-8-sig") as f:
        w = csv.DictWriter(f, fieldnames=list(rapport[0].keys()), delimiter=";")
        w.writeheader()
        w.writerows(rapport)
    ok = sum(1 for x in rapport if x["statut"] == "OK")
    print(f"\nTerminé : {ok}/{len(rapport)} OK. Rapport : {sortie / 'rapport.csv'}  |  contrôles : {sortie / 'controle'}")


if __name__ == "__main__":
    main()

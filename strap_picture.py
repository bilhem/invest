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
import re
import zlib
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
    matiere: str = "auto"        # "auto", "lisse", "grandes_ecailles" (alligator classique) ou "ecailles" (toutes écailles carrées)
    ecaille_mm: float = 7.0      # longueur des grandes écailles du centre
    ecaille_relief: float = 1.0  # intensité du bombé des écailles et des sillons
    ecaille_grande: float = 0.85 # grandes écailles : hauteur d'une écaille en part de la largeur du brin
    queue: str = "auto"          # disposition alligator : "deux_colonnes", "carree", "irreguliere" ou "auto" (varie selon la référence)
    graine: int = -1             # disposition des écailles ; -1 = tirée de la référence (chaque brin est unique)
    # couture
    couture: bool = True
    fil: str = ""                # couleur du fil (#rrggbb) ; vide = ton sur ton, plus foncé que le cuir
    couture_retrait_mm: float = 1.3
    couture_pas_mm: float = 1.25
    couture_point_mm: float = 0.85
    couture_fil_mm: float = 0.32
    couture_angle: float = 18.0
    # détection
    lissage_mm: float = 0.35     # lissage du contour (retouche)
    symetrie: bool = True        # retouche par symétrie gauche/droite (désactiver pour un brin asymétrique)
    vue_forcee: str = ""         # "x0,y0,x1,y1" en fraction de page pour forcer la zone (ex: 0,0.4,0.55,0.8)


def hex_rgb(h: str) -> np.ndarray:
    h = h.lstrip("#")
    return np.array([int(h[i:i + 2], 16) for i in (0, 2, 4)], dtype=np.float32) / 255.0


# --------------------------------------------------------------------------- #
# 1. Lecture des pages
# --------------------------------------------------------------------------- #
def pages_en_images(chemin: Path, dpi: int):
    """Renvoie (images en niveaux de gris, une par page ; est_pdf ; texte de chaque page)."""
    ext = chemin.suffix.lower()
    if ext in (".png", ".jpg", ".jpeg", ".tif", ".tiff", ".bmp"):
        return [np.asarray(Image.open(chemin).convert("L"))], False, [""]
    try:
        import fitz  # PyMuPDF
        doc = fitz.open(chemin)
        out, texte = [], []
        for p in doc:
            pix = p.get_pixmap(dpi=dpi, colorspace=fitz.csGRAY, alpha=False)
            out.append(np.frombuffer(pix.samples, np.uint8).reshape(pix.height, pix.width).copy())
            texte.append(p.get_text("text"))
        return out, True, texte
    except ImportError:
        import pypdfium2 as pdfium  # solution de secours
        doc = pdfium.PdfDocument(str(chemin))
        imgs = [np.asarray(doc[i].render(scale=dpi / 72).to_pil().convert("L")) for i in range(len(doc))]
        texte = [doc[i].get_textpage().get_text_range() for i in range(len(doc))]
        return imgs, True, texte


# Pages à ignorer : normes Richemont génériques (marquage, barrettes, vis…) et fiches produit.
PAGES_IGNOREES = re.compile(r"BCA_P000|\bBA[CD]_P|\bVIF_P|\bGOD_P|\bREC_P|FICHE PRODUIT|Largeur bracelet de", re.I)


def largeur_attache_texte(texte: str) -> float:
    """Largeur à l'attache (mm) lue dans la fiche produit ou le cartouche, 0 si introuvable.
    Formats vus : '21x19 – 115/75', '21-18 rembordé', 'Largeur entre-cornes : 20'."""
    t = texte.replace(",", ".")
    for motif in (r"(\d{1,2}(?:\.\d)?)\s*[xX×/]\s*(\d{1,2}(?:\.\d)?)\s*[–—-]\s*\d{2,3}\s*/\s*\d{2,3}",
                  r"\b(\d{2}(?:\.\d)?)\s*-\s*(\d{2}(?:\.\d)?)\s*(?:remb|coup|tranch|rb[ée]|rd[ée])",
                  r"[Ll]argeur\s+entre[- ]cornes\s*:?\s*(\d{1,2}(?:\.\d)?)"):
        m = re.search(motif, t, flags=re.I)
        if m:
            v = max(float(g) for g in m.groups() if g)
            if 6 <= v <= 40:
                return v
    return 0.0


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
    pas_trous_px: float = 0.0 # entraxe moyen des trous alignés (pour l'échelle)


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


def evaluer(c: np.ndarray, petits, px_mm: float):
    """Note une forme candidate. Un brin = allongé, pas un rectangle parfait,
    une pointe à un bout et/ou une rangée de trous alignés à pas régulier.
    Renvoie (score, trous_alignés, pas_px) ou None."""
    (cx, cy), (rw, rh), ang = cv2.minAreaRect(c)
    L, l = max(rw, rh), min(rw, rh)
    if l < 3 * px_mm or l > 60 * px_mm or L < 25 * px_mm or L > 330 * px_mm:
        return None
    allong = L / l
    if allong < 3:
        return None
    rempli = cv2.contourArea(c) / max(rw * rh, 1)
    if rempli < 0.6:
        return None
    # repère du rectangle : u = axe long, v = axe court
    t = math.radians(ang if rw >= rh else ang + 90)
    u, v = np.array([math.cos(t), math.sin(t)]), np.array([-math.sin(t), math.cos(t)])
    p = c[:, 0, :].astype(np.float64) - [cx, cy]
    pu, pv = p @ u, p @ v
    # profil de largeur le long du brin -> pointe ?
    bins = np.linspace(-L / 2, L / 2, 41)
    larg = np.zeros(40)
    for k in range(40):
        sel = (pu >= bins[k]) & (pu < bins[k + 1])
        if sel.any():
            larg[k] = pv[sel].max() - pv[sel].min()
    bouts = min(larg[:2].mean(), larg[-2:].mean()) / max(larg.max(), 1)
    pointe = bouts < 0.6

    # trous alignés sur l'axe, rayon homogène, pas régulier
    cand = []
    for tx, ty, tr in petits:
        q = np.array([tx - cx, ty - cy])
        a_u, a_v = q @ u, q @ v
        if abs(a_u) < L / 2 * 0.95 and abs(a_v) < 0.2 * l and 0.015 < tr / l < 0.13:
            if cv2.pointPolygonTest(c, (float(tx), float(ty)), False) > 0:
                cand.append((a_u, tx, ty, tr))
    alignes, pas = [], 0.0
    if len(cand) >= 3:
        rmed = np.median([q[3] for q in cand])
        cand = sorted([q for q in cand if 0.6 * rmed < q[3] < 1.6 * rmed])
        if len(cand) >= 3:
            gaps = np.diff([q[0] for q in cand])
            g = np.median(gaps)
            if g > 2 * rmed:
                ok = set()
                for k, gg in enumerate(gaps):
                    if 0.75 * g < gg < 1.25 * g:
                        ok.update((k, k + 1))
                if len(ok) >= 3:
                    alignes = [(cand[k][1], cand[k][2], cand[k][3]) for k in sorted(ok)]
                    pas = float(g)
    if not pointe and not alignes:
        return None
    if not pointe and allong > 10:       # bande très fine sans pointe = ligne de tableau
        return None
    if rempli > 0.975:   # rectangle parfait = case de texte, ligne de tableau, cadre…
        return None
    score = (6 if pointe else 0) + min(len(alignes), 12) * 2 + min(allong, 7) * 0.5 \
        + (2 if 0.75 < rempli < 0.975 else 0)
    return score, alignes, pas


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
        if a < (3 * px_mm) * (25 * px_mm) * 0.5:      # trop petit pour un brin
            continue
        if x == 0 or y == 0 or x + w >= W or y + h >= H:  # touche le bord : c'est le fond
            continue
        comp = (lab[y:y + h, x:x + w] == i).astype(np.uint8)
        cnts, _ = cv2.findContours(comp, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
        c = max(cnts, key=cv2.contourArea) + np.array([x, y])
        ev = evaluer(c, petits, px_mm)
        if ev and (meilleur is None or ev[0] > meilleur[0]):
            meilleur = (ev[0], i, (x, y, w, h), c - np.array([x, y]), ev[1], ev[2])

    if meilleur is None:
        return None
    score, idx, (x, y, w, h), c, trous_alignes, pas = meilleur

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

    trous = [(tx, ty, tr) for (tx, ty, tr) in trous_alignes if full[int(ty), int(tx)]]
    rect = cv2.minAreaRect(c)
    return Detection(full.astype(bool), trous, score, page, px_mm, rect, pas)


# --------------------------------------------------------------------------- #
# 3. Redressement et retouche de la silhouette
# --------------------------------------------------------------------------- #
def redresser(det: Detection, cible_px_mm: float, lissage_mm: float, symetrie: bool = True):
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
    if symetrie:
        # un brin est symétrique : ce qui ne dépasse que d'un côté (cote, cercle de détail,
        # flèche) est un reste du dessin -> on garde l'intersection avec le miroir
        on = mf > 0.5
        rows = np.nonzero(on.any(1))[0]
        centres = [(np.argmax(on[y]) + len(on[y]) - 1 - np.argmax(on[y][::-1])) / 2 for y in rows]
        axe = float(np.median(centres))
        pad = int(abs(mf.shape[1] / 2 - axe)) + 4
        mf = np.pad(mf, ((0, 0), (pad, pad)))
        dx = (mf.shape[1] - 1) / 2 - (axe + pad)
        M = np.float32([[1, 0, dx], [0, 1, 0]])
        mf = cv2.warpAffine(mf, M, (mf.shape[1], mf.shape[0]), flags=cv2.INTER_LINEAR)
        mf = np.minimum(mf, mf[:, ::-1])
        trous = [(tx + pad + dx, ty, tr) for tx, ty, tr in trous]
        cols = np.nonzero((mf > 0.02).any(0))[0]
        c0, c1 = max(0, cols[0] - 2), cols[-1] + 3
        mf = mf[:, c0:c1]
        trous = [(tx - c0, ty, tr) for tx, ty, tr in trous]
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
def zone_propre(img: np.ndarray, frac: float = 0.45) -> np.ndarray:
    """Plus grande zone carrée de l'échantillon sans couture, bord ni reflet :
    la fenêtre où le relief (gradient) est le plus faible."""
    g = cv2.GaussianBlur(img.mean(-1), (0, 0), 1.0)
    gx, gy = cv2.Sobel(g, cv2.CV_32F, 1, 0), cv2.Sobel(g, cv2.CV_32F, 0, 1)
    e = np.hypot(gx, gy)
    e = e + 0.5 * np.abs(g - np.median(g))      # évite aussi les zones trop claires/sombres
    s = max(8, int(min(img.shape[:2]) * frac))
    ii = cv2.integral(e.astype(np.float64))
    best, pos = None, (0, 0)
    for y in range(0, img.shape[0] - s + 1, 2):
        for x in range(0, img.shape[1] - s + 1, 2):
            v = ii[y + s, x + s] - ii[y, x + s] - ii[y + s, x] + ii[y, x]
            if best is None or v < best:
                best, pos = v, (y, x)
    y, x = pos
    return img[y:y + s, x:x + s]


def texture(path: str, r: Reglages, px_mm: float, shape) -> np.ndarray:
    """Matière = teinte de l'échantillon + son grain fin (zone propre, répétée en miroir)
    + légères marbrures et pores procéduraux pour éviter tout motif répété."""
    H, W = shape
    rng = np.random.default_rng(7)
    if path:
        img = np.asarray(Image.open(path).convert("RGB"), dtype=np.float32) / 255
        patch = zone_propre(img)
        # teinte = médiane de toute la photo, sans les sillons/reflets ni les ombres
        px = img.reshape(-1, 3)
        lum_all = px.mean(1)
        lo, hi = np.percentile(lum_all, [15, 85])
        base = np.median(px[(lum_all >= lo) & (lum_all <= hi)], 0)
        lum = patch.mean(-1)
        detail = (lum - cv2.GaussianBlur(lum, (0, 0), max(1.0, patch.shape[0] / 8))) / max(lum.mean(), 1e-3)
    else:
        base = np.array([0.35, 0.2, 0.15], np.float32)
        detail = np.zeros((64, 64), np.float32)
    if r.couleur:
        base = hex_rgb(r.couleur)
    # grain fin de l'échantillon, à l'échelle réelle, tuilé en miroir
    taille_patch_mm = r.echantillon_mm * 0.45
    tw = max(8, int(taille_patch_mm * px_mm))
    d = cv2.resize(detail.astype(np.float32), (tw, tw), interpolation=cv2.INTER_CUBIC)
    d = np.concatenate([d, d[:, ::-1]], 1)
    d = np.concatenate([d, d[::-1]], 0)
    d = np.tile(d, (H // d.shape[0] + 2, W // d.shape[1] + 2))[:H, :W]
    # marbrures douces (variation de teinte du cuir) + pores fins
    def bruit(echelle_mm, amp):
        n = rng.normal(0, 1, (max(2, int(H / (echelle_mm * px_mm))) + 2, max(2, int(W / (echelle_mm * px_mm))) + 2))
        n = cv2.resize(n.astype(np.float32), (W, H), interpolation=cv2.INTER_CUBIC)
        return n / max(n.std(), 1e-6) * amp
    marbre = bruit(6.0, 0.035)
    pores = cv2.GaussianBlur(rng.normal(0, 1, (H, W)).astype(np.float32), (0, 0), max(0.6, 0.06 * px_mm))
    pores = pores / max(pores.std(), 1e-6) * 0.025 * r.grain
    var = 1 + np.clip(d, -0.25, 0.25) * 0.8 + marbre + pores
    return np.clip(base[None, None, :] * var[..., None], 0, 1).astype(np.float32)


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
    if r.fil:
        tc = hex_rgb(r.fil)
    else:  # ton sur ton : teinte du cuir, assombrie
        cuir = np.median(col[mb > 0], 0)
        tc = cuir * 0.55 if cuir.mean() > 0.18 else np.clip(cuir * 1.6 + 0.07, 0, 1)
    col = col * (1 - 0.5 * ombre[..., None])
    col = col * (1 - 0.65 * cv2.GaussianBlur(piq, (0, 0), 0.6)[..., None])
    col = col * (1 - fil[..., None]) + tc * fil[..., None] * (0.85 + 0.15 * 1)
    col = col + (np.minimum(tc * 1.6 + 0.1, 1) - col) * (0.55 * reflet * fil)[..., None]
    return np.clip(col, 0, 1)


def detecter_matiere(path: str) -> str:
    """'ecailles' si la photo montre de longs sillons droits (alligator, croco), sinon 'lisse'."""
    if not path:
        return "lisse"
    g = np.asarray(Image.open(path).convert("L"))
    f = 400 / max(g.shape)
    g = cv2.resize(g, None, fx=f, fy=f, interpolation=cv2.INTER_CUBIC)
    # sillons = fines lignes claires : filtre « top-hat » puis recherche de segments droits
    th = cv2.morphologyEx(g, cv2.MORPH_TOPHAT, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (25, 25)))
    bords = (th > 10).astype(np.uint8) * 255
    lignes = cv2.HoughLinesP(bords, 1, np.pi / 180, 50, minLineLength=int(0.3 * min(g.shape)), maxLineGap=15)
    return "grandes_ecailles" if lignes is not None and len(lignes) >= 3 else "lisse"


def couleur_sillon(path: str, base: np.ndarray) -> np.ndarray:
    """Teinte des sillons entre écailles, prise sur les pixels les plus clairs de la photo."""
    if not path:
        return np.clip(base * 1.5, 0, 1)
    img = np.asarray(Image.open(path).convert("RGB"), dtype=np.float32) / 255
    lum = img.mean(-1)
    clairs = img[lum >= np.percentile(lum, 96)]
    c = np.median(clairs, 0)
    ratio = min(c.mean() / max(base.mean(), 1e-3), 1.9)
    return np.clip(base * ratio, 0, 1)


def ecailles(inside: np.ndarray, px_mm: float, r: Reglages, graine: int = 11):
    """Écailles d'alligator « carrées » qui suivent la forme du brin :
    une rangée centrale de grandes écailles, des plus petites vers les bords.
    Renvoie (relief en mm, variation de teinte, intensité des sillons)."""
    rng = np.random.default_rng(graine)
    hm, wm = inside.shape
    rows = np.nonzero(inside.any(1))[0]
    a = np.full(hm, wm / 2.0, np.float32)
    w = np.ones(hm, np.float32)
    for y in rows:
        xs = np.nonzero(inside[y])[0]
        a[y], w[y] = (xs[0] + xs[-1]) / 2, max((xs[-1] - xs[0]) / 2, 1)
    # largeur lissée (la pointe affine les écailles progressivement)
    a = cv2.GaussianBlur(a[:, None], (0, 0), px_mm * 2)[:, 0]
    w = np.maximum(cv2.GaussianBlur(w[:, None], (0, 0), px_mm * 2)[:, 0], 1)
    X = np.arange(wm, dtype=np.float32)[None, :]
    u = (X - a[:, None]) / w[:, None]                       # -1..1 à travers le brin
    v = np.arange(hm, dtype=np.float32)[:, None] / px_mm    # mm le long du brin
    largeur_max = w[rows].max() * 2 / px_mm

    # colonnes : centre large, flancs, et petits bords si le brin est assez large
    j = cv2.GaussianBlur(rng.normal(0, 1, (hm, 1)).astype(np.float32), (0, 0), px_mm * 3)[:, 0]
    j = j / max(j.std(), 1e-6)
    b1 = 0.46 + 0.03 * j[:, None]          # écaille centrale ≈ moitié de la largeur
    bornes = [b1]
    if largeur_max >= 24:
        bornes.append(0.8 + 0.03 * j[::-1, None])
    au = np.abs(u)
    colonne = np.zeros(u.shape, np.int32)
    for k, b in enumerate(bornes, 1):
        colonne[au >= b] = k
    # distance horizontale (mm) au sillon de colonne le plus proche
    d_h = np.full(u.shape, 99.0, np.float32)
    for b in bornes:
        d_h = np.minimum(d_h, np.abs(au - b) * w[:, None] / px_mm)

    # rangées : chaque colonne a sa propre suite de longueurs (décalées entre colonnes)
    longueur = hm / px_mm + 10
    facteurs = [1.0, 0.7, 0.5]
    d_v = np.full(u.shape, 99.0, np.float32)
    cellule = np.zeros(u.shape, np.int64)
    for k in range(len(bornes) + 1):
        L0 = r.ecaille_mm * facteurs[k]
        bords, y0 = [-rng.uniform(0, L0)], 0
        while bords[-1] < longueur:
            bords.append(bords[-1] + L0 * rng.uniform(0.8, 1.2))
        bords = np.array(bords, np.float32)
        sel = colonne == k
        idx = np.clip(np.searchsorted(bords, v, side="right") - 1, 0, len(bords) - 2)
        idx = np.broadcast_to(idx, u.shape)
        haut, bas = bords[idx], bords[idx + 1]
        dv = np.minimum(v - haut, bas - v)
        d_v[sel] = dv[sel]
        cote = 1 if k == 0 else (np.sign(u[sel]).astype(np.int64) + 2)  # l'écaille centrale n'a pas de côté
        cellule[sel] = (idx[sel] * 7 + k) * 3 + cote

    d = np.minimum(d_h, d_v)
    d = np.maximum(d + 0.18 * bruit_lisse(u.shape, 1.6 * px_mm, rng), 0)   # tracé organique
    # bombé de chaque écaille + sillon étroit entre elles
    rel = r.ecaille_relief
    # écailles plates à bords arrondis (pas de pyramide) et sillon fin
    t = np.clip(d / 0.55, 0, 1)
    relief = 0.14 * rel * t * t * (3 - 2 * t)
    sillon = np.exp(-(d / 0.14) ** 2)
    # teinte propre à chaque écaille (aléatoire mais reproductible)
    teintes = rng.normal(0, 0.06, cellule.max() + 1).astype(np.float32)
    teinte = 1 + teintes[cellule] + 0.05 * (1 - np.exp(-d / 2.0))
    return relief.astype(np.float32), teinte.astype(np.float32), sillon.astype(np.float32)


def bruit_lisse(shape, taille_px: float, rng) -> np.ndarray:
    """Bruit doux, moyenne 0, écart-type 1, de « grain » taille_px (pour des contours organiques)."""
    H, W = shape
    gh, gw = max(2, int(H / max(taille_px, 1)) + 2), max(2, int(W / max(taille_px, 1)) + 2)
    n = cv2.resize(rng.normal(0, 1, (gh, gw)).astype(np.float32), (W, H), interpolation=cv2.INTER_CUBIC)
    return n / max(float(n.std()), 1e-6)


def grandes_ecailles(inside: np.ndarray, px_mm: float, r: Reglages, graine: int = 5):
    """Alligator « grandes écailles » : en haut et au milieu, de grandes écailles qui prennent
    toute la largeur (sillons transversaux) ; vers la pointe, des écailles de plus en plus petites
    et irrégulières (partie queue de la peau). Pavage de Voronoï, reproductible.
    Renvoie (relief en mm, variation de teinte, intensité des sillons)."""
    rng = np.random.default_rng(graine)
    hm, wm = inside.shape
    rows = np.nonzero(inside.any(1))[0]
    a = np.full(hm, wm / 2.0, np.float32)
    w = np.ones(hm, np.float32)
    for y in rows:
        xs = np.nonzero(inside[y])[0]
        a[y], w[y] = (xs[0] + xs[-1]) / 2, max((xs[-1] - xs[0]) / 2, 1)
    a = cv2.GaussianBlur(a[:, None], (0, 0), px_mm * 2)[:, 0]
    w = np.maximum(cv2.GaussianBlur(w[:, None], (0, 0), px_mm * 2)[:, 0], 1)
    y0, y1 = rows[0], rows[-1]
    L = (y1 - y0) / px_mm

    # --- graines : une par grande écaille, puis plusieurs par rangée en approchant la pointe
    # queue « irreguliere » : écailles de plus en plus petites et désordonnées
    # queue « carree »      : grille d'écailles carrées bien rangées (2 ou 3 colonnes)
    # « deux_colonnes »    : deux colonnes de grandes écailles allongées, sillons décalés (alligator classique)
    if r.queue in ("irreguliere", "carree", "deux_colonnes"):
        queue = r.queue
    else:  # auto : varie d'une référence à l'autre
        queue = rng.choice(["deux_colonnes", "deux_colonnes", "carree", "irreguliere"])
    graines, grandes = [], []
    v, k = -2.0, 0
    debut_queue = 0.45           # part de la longueur où les écailles commencent à rapetisser
    if queue == "deux_colonnes":
        ub = rng.uniform(-0.25, 0.15)                      # frontière entre colonnes, pas au centre
        for (ua, ue) in ((-1.0, ub), (ub, 1.0)):
            uc, frac = (ua + ue) / 2, (ue - ua) / 2
            vv = -rng.uniform(0, 8)
            while vv < L + 4:
                f = np.clip(vv / L, 0, 1)
                yc = int(np.clip(y0 + vv * px_mm, y0, y1))
                Wc = 2 * w[yc] / px_mm * frac
                h = Wc * rng.uniform(1.0, 1.6) * r.ecaille_grande / 0.85
                if f > 0.72:                                   # vers la pointe : plus courtes
                    h *= 1 - 0.55 * (f - 0.72) / 0.28
                h = max(2.2, h)
                yy = y0 + (vv + h / 2) * px_mm
                yi = int(np.clip(yy, y0, y1))
                graines.append((a[yi] + (uc + rng.uniform(-0.04, 0.04) * frac) * w[yi], yy))
                grandes.append(9.0)
                vv += h
        v = L + 99                                         # saute la boucle générale
    while v < L + 4:
        f = np.clip(v / L, 0, 1)
        yc = int(np.clip(y0 + v * px_mm, y0, y1))
        W = 2 * w[yc] / px_mm
        if f < debut_queue:
            h, n = max(2.2, r.ecaille_grande * W * rng.uniform(0.85, 1.15)), 1
        elif queue == "carree":
            n = 3 if W >= 15 else 2
            h = max(2.2, W / n * rng.uniform(0.95, 1.1))   # écailles à peu près carrées
        else:
            s = 1 - 0.84 * ((f - debut_queue) / (1 - debut_queue)) ** 0.6
            h = max(2.2, r.ecaille_grande * W * s * rng.uniform(0.85, 1.15))
            n = 1 if s > 0.85 else max(2, int(round(W / h * 1.15)))
        for i in range(n):
            if n == 1:
                u, dv = rng.uniform(-0.06, 0.06), 0.0
            elif queue == "carree" and f >= debut_queue:
                u, dv = -1 + (2 * i + 1) / n + rng.uniform(-0.04, 0.04), 0.0
            else:
                u = -1 + (2 * i + 1 + (0.5 if k % 2 else 0)) / n + rng.uniform(-0.22, 0.22) / n
                u = float(np.clip(u, -1.1, 1.1))
                dv = rng.uniform(-0.18, 0.18) * h
            yy = y0 + (v + h / 2 + dv) * px_mm
            yi = int(np.clip(yy, y0, y1))
            graines.append((a[yi] + u * w[yi], yy))
            # grandes écailles : sillon partiel, il ne traverse pas toute la largeur
            grandes.append(rng.uniform(0.55, 0.9) if n == 1 else 9.0)
        v += h
        k += 1
    G = np.array(graines, np.float32)
    # écailles allongées dans le sens du brin : on calcule le pavage dans un repère comprimé en y
    ky = 0.6 if queue == "deux_colonnes" else 1.0
    G = G * np.array([1.0, ky], np.float32)

    # --- Voronoï : distance au sillon = distance au bissecteur des 2 graines les plus proches
    d_edge = np.full((hm, wm), 99.0, np.float32)
    cell = np.zeros((hm, wm), np.int32)
    X = np.arange(wm, dtype=np.float32)[None, :, None]
    for ya in range(0, hm, 128):
        yb = min(hm, ya + 128)
        Y = np.arange(ya, yb, dtype=np.float32)[:, None, None] * ky
        d2 = (X - G[None, None, :, 0]) ** 2 + (Y - G[None, None, :, 1]) ** 2
        idx = np.argpartition(d2, 1, axis=2)[..., :2]
        da = np.take_along_axis(d2, idx, 2)
        o = np.argsort(da, axis=2)
        idx = np.take_along_axis(idx, o, 2)
        da = np.take_along_axis(da, o, 2)
        s1, s2 = G[idx[..., 0]], G[idx[..., 1]]
        sep = np.maximum(np.linalg.norm(s1 - s2, axis=-1), 1e-3)
        d_edge[ya:yb] = (da[..., 1] - da[..., 0]) / (2 * sep) / px_mm
        cell[ya:yb] = idx[..., 0]

    # les sillons s'estompent le long du bord (zone de couture, comme sur un vrai bracelet)
    bord = cv2.distanceTransform(inside, cv2.DIST_L2, 5) / px_mm
    fondu = np.clip((bord - 0.5) / 0.8, 0, 1)
    rel = r.ecaille_relief
    # sillons organiques : tracé légèrement ondulé, épaisseur et profondeur irrégulières
    bombe = 0.08 * rel * (1 - np.exp(-d_edge / 2.0))               # léger bombé lisse de chaque écaille
    d_edge = np.maximum(d_edge + 0.12 * bruit_lisse((hm, wm), 2.5 * px_mm, rng), 0)   # tracé ondulé
    casse = np.clip(0.85 + 0.15 * bruit_lisse((hm, wm), 1.5 * px_mm, rng), 0.5, 1)   # léger relief irrégulier
    t = np.clip(d_edge / 0.5, 0, 1)
    creux = (1 - t * t * (3 - 2 * t)) * casse                        # 1 au fond du sillon, 0 sur l'écaille
    relief = (0.16 * rel * (1 - creux) + bombe) * fondu + (0.16 + 0.08) * rel * (1 - fondu)
    sillon = np.exp(-(d_edge / 0.12) ** 2) * fondu * casse
    # sur les grandes écailles, le sillon s'arrête avant les bords (trait partiel, comme sur la peau)
    U = np.abs((np.arange(wm, dtype=np.float32)[None, :] - a[:, None]) / w[:, None])
    lim = np.array(grandes, np.float32)[cell]
    partiel = np.clip((lim - U) / 0.12, 0, 1)
    sillon = sillon * partiel
    relief = relief + ((0.16 + 0.08) * rel - relief) * (1 - partiel)   # pas de creux là où le sillon est masqué
    teintes = rng.normal(0, 0.05, len(G)).astype(np.float32)
    teinte = 1 + teintes[cell] + 0.05 * (1 - np.exp(-d_edge / 2.5))
    return relief.astype(np.float32), teinte.astype(np.float32), sillon.astype(np.float32)


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
    matiere = r.matiere if r.matiere != "auto" else detecter_matiere(echantillon)
    if matiere in ("ecailles", "grandes_ecailles"):
        motif = ecailles if matiere == "ecailles" else grandes_ecailles
        relief, teinte, sillon = motif(inside, px_mm, r, graine=r.graine if r.graine >= 0 else 5)
        h = h + relief * (inside > 0)
        base = np.median(tex[inside > 0], 0)
        gcol = couleur_sillon(echantillon, base)
        tex = tex * teinte[..., None]
        tex = tex + (gcol[None, None, :] - tex) * (0.8 * sillon)[..., None]
        h = h - 0.05 * r.ecaille_relief * sillon
        brillance = max(r.brillance, 0.3)       # alligator : finition brillante
    else:
        brillance = r.brillance
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
    col = tex * ((0.42 + 0.68 * diff) * grad)[..., None] + brillance * spec[..., None]
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
    pages, est_pdf, textes = pages_en_images(plan, r.dpi)
    texte = "\n".join(textes)
    zone = tuple(float(v) for v in r.vue_forcee.split(",")) if r.vue_forcee else None
    meilleure, gris = None, None
    for i, g in enumerate(pages, 1):
        if PAGES_IGNOREES.search(textes[i - 1]):
            continue
        # échelle provisoire (la vraie est calée plus bas) : 1:1 pour un PDF, ~A4 pour une photo
        px_mm = r.dpi / MM_PER_INCH / r.echelle_plan if est_pdf else g.shape[1] / 280
        det = detecter_brin(g, px_mm, i, zone)
        if det and (meilleure is None or det.score > meilleure.score):
            meilleure, gris = det, g
    if meilleure is None:
        return {"fichier": plan.name, "statut": "ÉCHEC : aucun brin trouvé", "page": "", "echelle": "", "matiere": "",
                "longueur_mm": "", "largeur_mm": "", "trous": "", "score": ""}

    # --- échelle réelle du dessin (les plans sont souvent imprimés réduits ou agrandis)
    (_, _), (rw, rh), _ = meilleure.rect
    larg_px = min(rw, rh)
    l_txt = r.largeur_mm or largeur_attache_texte(texte)
    ech_txt = larg_px / l_txt if l_txt else 0
    ech_pas = meilleure.pas_trous_px / 6.0 if meilleure.pas_trous_px else 0  # entraxe standard 6 mm
    if ech_txt:
        meilleure.px_mm, source = ech_txt, f"cote texte {l_txt:g} mm"
    elif ech_pas:
        meilleure.px_mm, source = ech_pas, "pas des trous 6 mm"
    else:
        source = "échelle du PDF"
    doute = bool(ech_txt and ech_pas and abs(ech_txt / ech_pas - 1) > 0.2)

    if r.graine < 0:   # même référence -> même peau ; références différentes -> peaux différentes
        r.graine = zlib.crc32(plan.stem.encode()) % 100000

    # matière : la fiche produit fait foi (« Alligator », « Toutes écailles carrées », « croco »…)
    if r.matiere == "auto":
        if re.search(r"[ée]cailles?\s+carr[ée]es", texte, re.I):
            r.matiere = "ecailles"                      # « Toutes Écailles Carrées »
        elif re.search(r"alligator|crocodile|croco\b|[ée]cailles?|ca[iï]man", texte, re.I):
            r.matiere = "grandes_ecailles"

    long_mm, larg_mm = max(rw, rh) / meilleure.px_mm, larg_px / meilleure.px_mm
    cible = r.remplissage * r.taille * 2 / long_mm
    masque, trous = redresser(meilleure, cible, r.lissage_mm, r.symetrie)
    img = rendre(masque, trous, r, echantillon, cible)

    nom = plan.stem
    sortie.mkdir(parents=True, exist_ok=True)
    (sortie / "controle").mkdir(exist_ok=True)
    img.save(sortie / f"{nom}.png")
    image_controle(gris, meilleure, sortie / "controle" / f"{nom}_controle.jpg")
    plausible = 50 <= long_mm <= 260 and 6 <= larg_mm <= 32
    statut = "OK" if meilleure.score >= 14 and plausible and not doute else "À VÉRIFIER"
    return {"fichier": plan.name, "statut": statut, "page": meilleure.page, "echelle": source,
            "matiere": r.matiere if r.matiere != "auto" else detecter_matiere(echantillon),
            "longueur_mm": round(long_mm, 1), "largeur_mm": round(larg_mm, 1),
            "trous": len(meilleure.trous), "score": round(meilleure.score, 1)}


def _traiter_sur(t):
    plan, r, ech, sortie = t
    try:
        return traiter(plan, r, ech, sortie)
    except Exception as e:  # un plan qui plante ne bloque pas les autres
        return {"fichier": plan.name, "statut": f"ERREUR : {e}", "page": "", "echelle": "", "matiere": "",
                "longueur_mm": "", "largeur_mm": "", "trous": "", "score": ""}


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

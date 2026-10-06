import fs from 'node:fs';
import path from 'node:path';

/**
 * Official developer logos, /public/images/developers/logos/<name>.<ext>. Server-side, at build time.
 * SVG first (vector), then PNG / WebP. Returns the public path (and the intrinsic size of a PNG, so the browser
 * reserves the exact box before the file arrives), or null while the file is not there yet:
 * the page then shows the developer's name only (no empty frame, no placeholder, no logo taken from anywhere else).
 */
const DIR = path.join(process.cwd(), 'public', 'images', 'developers', 'logos');
const EXTENSIONS = ['svg', 'png', 'webp'] as const;

/** Other file names accepted for the same developer (the logo pack calls Sobha « sobha », the brief « sobha-realty »). */
const ALIASES: Record<string, string[]> = { 'sobha-realty': ['sobha'] };

export type DeveloperLogoFile = { src: string; width?: number; height?: number };

/** PNG header: 8-byte signature, then the IHDR chunk whose first two fields are width and height (big-endian). */
function pngSize(file: string): { width: number; height: number } | null {
  try {
    const fd = fs.openSync(file, 'r');
    try {
      const buf = Buffer.alloc(24);
      fs.readSync(fd, buf, 0, 24, 0);
      if (buf.toString('ascii', 1, 4) !== 'PNG') return null;
      return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
    } finally {
      fs.closeSync(fd);
    }
  } catch {
    return null;
  }
}

export function findDeveloperLogo(name: string): DeveloperLogoFile | null {
  for (const base of [name, ...(ALIASES[name] ?? [])]) {
    for (const ext of EXTENSIONS) {
      const file = path.join(DIR, `${base}.${ext}`);
      if (!fs.existsSync(file)) continue;
      return { src: `/images/developers/logos/${base}.${ext}`, ...(ext === 'png' ? pngSize(file) ?? {} : {}) };
    }
  }
  return null;
}

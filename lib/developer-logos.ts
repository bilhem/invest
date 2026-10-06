import fs from 'node:fs';
import path from 'node:path';

/**
 * Official developer logos, /public/images/developers/logos/<name>.<ext>. Server-side, at build time.
 * SVG first (vector), then a transparent PNG / WebP. Returns the public path, or null while the file is not there yet:
 * the page then shows the developer's name only (no empty frame, no placeholder, no logo taken from anywhere else).
 */
const DIR = path.join(process.cwd(), 'public', 'images', 'developers', 'logos');
const EXTENSIONS = ['svg', 'png', 'webp'] as const;

export function findDeveloperLogo(name: string): string | null {
  for (const ext of EXTENSIONS) {
    if (fs.existsSync(path.join(DIR, `${name}.${ext}`))) return `/images/developers/logos/${name}.${ext}`;
  }
  return null;
}

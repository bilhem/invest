// Lists image slots whose commercial rights are not confirmed (lib/images.ts).
// Usage: npm run images:check            -> report only
//        npm run images:check -- --strict -> exit code 1 if any asset is unconfirmed (use before a production launch)
import { readFileSync } from 'node:fs';

const src = readFileSync(new URL('../lib/images.ts', import.meta.url), 'utf8');
const unconfirmed = [...src.matchAll(/src: `\$\{[A-Z]+\}\/([^`]+)`[^}]*?rights: 'unconfirmed'/g)].map((m) => m[1]);
const total = (src.match(/rights: 'unconfirmed'/g) || []).length;

if (total === 0) {
  console.log('OK: no image is marked as rights-unconfirmed.');
} else {
  console.log(`${total} image(s) marked rights: 'unconfirmed' in lib/images.ts:`);
  unconfirmed.forEach((f) => console.log(`  - ${f}`));
  console.log('Replace each with a licensed original (same path) and set rights: \'cleared\' before going live.');
  if (process.argv.includes('--strict')) process.exit(1);
}

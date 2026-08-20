// Astro's Vite asset pipeline emits the raw original of every locally
// imported image into dist/_astro/ alongside the optimized <Picture>
// variants, with no built-in option to skip it (withastro/astro#8143,
// #4961). Those originals are never linked from any page, so this
// deletes any dist/_astro file that no built HTML file references.
import { readdirSync, readFileSync, rmSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const distDir = new URL('../dist/', import.meta.url).pathname;
const assetsDir = join(distDir, '_astro');

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const htmlFiles = walk(distDir).filter((f) => extname(f) === '.html');
const referenced = new Set();
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf-8');
  for (const match of html.matchAll(/\/_astro\/([^"'\s)]+)/g)) {
    referenced.add(match[1]);
  }
}

let removed = 0;
let freedBytes = 0;
for (const file of readdirSync(assetsDir)) {
  if (!referenced.has(file)) {
    const full = join(assetsDir, file);
    freedBytes += statSync(full).size;
    rmSync(full);
    removed += 1;
  }
}

if (removed > 0) {
  console.log(
    `[clean-unreferenced-assets] removed ${removed} unreferenced file(s), freed ${(freedBytes / 1024).toFixed(1)} kB`,
  );
}

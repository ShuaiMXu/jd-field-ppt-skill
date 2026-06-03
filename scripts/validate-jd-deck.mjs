#!/usr/bin/env node
import { readFileSync } from 'node:fs';

const file = process.argv[2];
if (!file) {
  console.error('Usage: node validate-jd-deck.mjs path/to/index.html');
  process.exit(2);
}

const html = readFileSync(file, 'utf8');
const allowedLayouts = new Set([
  'cover-field',
  'agenda-bands',
  'executive-summary',
  'kpi-strip',
  'compare-before-after',
  'journey-lane',
  'matrix-priority',
  'anatomy-system',
  'evidence-table',
  'roadmap',
  'risk-control',
  'closing-action',
]);

const errors = [];
const warnings = [];
const slideMatches = [...html.matchAll(/<section\b[^>]*class=["'][^"']*\bslide\b[^"']*["'][^>]*>/gi)];
const allowedHex = new Set([
  '#171a26',
  '#3d414d',
  '#828794',
  '#c2c4cc',
  '#f2f3f7',
  '#ffffff',
  '#f5f6fa',
  '#ff0f23',
  '#e53029',
  '#fff0f4',
  '#ffd6e1',
  '#b5691a',
  '#fff4e8',
  '#00d900',
  '#ebfbeb',
  '#2aa32a',
  '#ffbf00',
  '#fff9e0',
  '#b26b00',
  '#0073ff',
  '#e5f5ff',
]);

if (slideMatches.length === 0) errors.push('P0: no .slide sections found.');

for (const [i, match] of slideMatches.entries()) {
  const tag = match[0];
  const layout = tag.match(/data-layout=["']([^"']+)["']/i)?.[1];
  if (!layout) errors.push(`P0: slide ${i + 1} is missing data-layout.`);
  else if (!allowedLayouts.has(layout)) errors.push(`P0: slide ${i + 1} uses unknown data-layout "${layout}".`);
}

const forbidden = [
  [/linear-gradient\([^)]*(purple|#6d5dfc|#7c3aed|#4f46e5)/i, 'P0: purple/blue gradient detected.'],
  [/\b(bokeh|orb|blob|星云|光斑)\b/i, 'P0: decorative orb/blob language detected.'],
  [/#f5ead7|#eadcc8|#d9c2a3/i, 'P0: beige magazine palette detected.'],
  [/#0f172a|#111827|#172554/i, 'P0: dark-blue tech palette detected.'],
];

for (const [pattern, message] of forbidden) {
  if (pattern.test(html)) errors.push(message);
}

const jdRedCount = (html.match(/#ff0f23/gi) || []).length;
if (jdRedCount === 0) warnings.push('P1: JD brand red #ff0f23 was not found.');
if (jdRedCount > 18) warnings.push(`P1: JD brand red appears ${jdRedCount} times; check whether emphasis is overused.`);

const hexValues = [...new Set((html.match(/#[0-9a-f]{3,8}\b/gi) || []).map((value) => value.toLowerCase()))];
for (const hex of hexValues) {
  if (!allowedHex.has(hex)) errors.push(`P0: non-JD base color detected: ${hex}. Add a token rationale or replace it with jd-color-tokens.md values.`);
}

const genericHeadings = [...html.matchAll(/<h[12][^>]*>\s*(背景|方案|总结|目录|现状分析|下一步)\s*<\/h[12]>/gi)];
if (genericHeadings.length > 0) warnings.push('P1: generic section heading found; rewrite headings as conclusions.');

if (/<svg[\s\S]*?<text\b/i.test(html)) warnings.push('P1: SVG text found; prefer editable HTML text.');
if (!/ArrowRight|ArrowLeft|onclick="go/.test(html)) warnings.push('P2: slide navigation controls were not detected.');

if (errors.length) {
  console.error(['JD deck validation failed:', ...errors, ...warnings.map((item) => `WARN: ${item}`)].join('\n'));
  process.exit(1);
}

console.log(['JD deck validation passed.', `${slideMatches.length} slides checked.`, ...warnings.map((item) => `WARN: ${item}`)].join('\n'));

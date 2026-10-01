// Verifica o site gerado. Uso: node _fonte/verificar.mjs  (sai com código 1 se houver erro)

import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const IGNORAR = new Set(['_fonte', '.git', 'node_modules', '_backup-servidor']);
const erros = [];
const avisos = [];

function htmls(dir) {
  return readdirSync(dir).flatMap((n) => {
    if (IGNORAR.has(n)) return [];
    const p = join(dir, n);
    if (statSync(p).isDirectory()) return htmls(p);
    return n.endsWith('.html') ? [p] : [];
  });
}

function existeCaminho(url) {
  const limpo = decodeURIComponent(url.split(/[?#]/)[0]);
  const alvo = join(RAIZ, limpo);
  if (limpo.endsWith('/')) return existsSync(join(alvo, 'index.html'));
  return existsSync(alvo);
}

const titulos = new Map();
const descricoes = new Map();
const arquivos = htmls(RAIZ);

for (const arq of arquivos) {
  const rel = relative(RAIZ, arq).replace(/\\/g, '/');
  const html = readFileSync(arq, 'utf8');
  const titulo = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
  const h1s = (html.match(/<h1[\s>]/g) || []).length;

  if (!titulo) erros.push(`${rel}: sem <title>`);
  if (titulo.length > 70) avisos.push(`${rel}: title com ${titulo.length} caracteres`);
  if (!desc) erros.push(`${rel}: sem meta description`);
  if (desc && (desc.length < 70 || desc.length > 170)) avisos.push(`${rel}: description com ${desc.length} caracteres`);
  if (h1s !== 1) erros.push(`${rel}: ${h1s} elementos <h1>`);
  if (/lorem|ipsum|example\.com|Jhon Doe/i.test(html)) erros.push(`${rel}: texto de exemplo encontrado`);
  if (rel !== '404.html' && !/<link rel="canonical"/.test(html)) erros.push(`${rel}: sem canonical`);

  if (titulos.has(titulo)) erros.push(`${rel}: title duplicado com ${titulos.get(titulo)}`);
  titulos.set(titulo, rel);
  if (desc && descricoes.has(desc)) erros.push(`${rel}: description duplicada com ${descricoes.get(desc)}`);
  descricoes.set(desc, rel);

  for (const [, url] of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    if (!existeCaminho(url)) erros.push(`${rel}: link quebrado ${url}`);
  }
  for (const [, lista] of html.matchAll(/srcset="([^"]*)"/g)) {
    for (const item of lista.split(',')) {
      const url = item.trim().split(' ')[0];
      if (url.startsWith('/') && !existeCaminho(url)) erros.push(`${rel}: imagem quebrada ${url}`);
    }
  }
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(json); } catch { erros.push(`${rel}: JSON-LD inválido`); }
  }
}

const sitemap = readFileSync(join(RAIZ, 'sitemap.xml'), 'utf8');
for (const [, loc] of sitemap.matchAll(/<loc>([^<]*)<\/loc>/g)) {
  if (!existeCaminho(new URL(loc).pathname)) erros.push(`sitemap: URL sem página ${loc}`);
}

console.log(`${arquivos.length} páginas verificadas.`);
avisos.forEach((a) => console.log('AVISO ' + a));
erros.forEach((e) => console.log('ERRO  ' + e));
if (erros.length) process.exit(1);
console.log('Tudo certo.');

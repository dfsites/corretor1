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
const locs = [...sitemap.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
for (const loc of locs) {
  if (!existeCaminho(loc)) erros.push(`sitemap: URL sem página ${loc}`);
}
// Toda página indexável deve estar no sitemap.
for (const arq of arquivos) {
  const rel = '/' + relative(RAIZ, arq).replace(/\\/g, '/').replace(/index\.html$/, '');
  if (rel !== '/404.html' && !locs.includes(rel)) erros.push(`sitemap: página ausente ${rel}`);
}

// ---------- Regras do blog ----------
const { artigos, redirecionamentosBlog } = await import('./artigos.mjs');
const PROIBIDOS = [
  /alta performance/i, /segredo/i, /explod/i, /milionári/i, /definitiv/i, /imparável/i, /domine o mercado/i,
  /que mais fecham/i, /faturar/i, /vend(a|er) mais/i, /ganh(e|ar) mais/i, /ninguém te conta/i,
];
const htaccess = readFileSync(join(RAIZ, '.htaccess'), 'utf8');
for (const a of artigos) {
  const rel = `blog/${a.slug}/index.html`;
  const html = readFileSync(join(RAIZ, rel), 'utf8');
  for (const campo of ['titulo', 'h1', 'descricao']) {
    for (const re of PROIBIDOS) if (re.test(a[campo])) erros.push(`${rel}: termo proibido em ${campo} (${re})`);
  }
  if (!/rel="author" href="\/autor\//.test(html)) erros.push(`${rel}: sem link de autor`);
  for (const m of ['article:published_time', 'article:modified_time', 'article:author', 'name="author"']) {
    if (!html.includes(m)) erros.push(`${rel}: sem meta ${m}`);
  }
  const posting = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((m) => JSON.parse(m[1]))
    .find((j) => j['@type'] === 'BlogPosting');
  if (!posting) erros.push(`${rel}: sem BlogPosting`);
  else {
    if (posting.author?.['@type'] !== 'Person' || !posting.author?.name) erros.push(`${rel}: author do BlogPosting não é Person`);
    for (const k of ['headline', 'datePublished', 'dateModified', 'mainEntityOfPage', 'publisher']) {
      if (!posting[k]) erros.push(`${rel}: BlogPosting sem ${k}`);
    }
  }
  for (const f of a.fontes || []) if (!/^https:\/\//.test(f.url)) erros.push(`${rel}: fonte sem https ${f.url}`);
  if (a.titulo.length > 56) avisos.push(`${rel}: titulo com ${a.titulo.length} caracteres (+ " | Corretor 1%")`);
}
for (const [de, para] of redirecionamentosBlog) {
  if (!htaccess.includes(`Redirect 301 ${de} `)) erros.push(`.htaccess: falta redirecionamento ${de}`);
  if (!existeCaminho(para)) erros.push(`redirecionamento ${de} aponta para página inexistente ${para}`);
  if (locs.includes(de)) erros.push(`sitemap: contém URL redirecionada ${de}`);
}

console.log(`${arquivos.length} páginas verificadas.`);
avisos.forEach((a) => console.log('AVISO ' + a));
erros.forEach((e) => console.log('ERRO  ' + e));
if (erros.length) process.exit(1);
console.log('Tudo certo.');

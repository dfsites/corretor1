// Gera as capas de compartilhamento de todas as páginas de conteúdo.
// Uso: node _fonte/gerar_capas.mjs   (requer Python com Pillow)
// Rode de novo sempre que publicar um texto novo ou mudar um h1.
import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { artigos } from './artigos.mjs';
import { editorias } from './editorias.mjs';
import { colecoes, itensColecao } from './colecoes.mjs';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const nomeEditoria = Object.fromEntries(editorias.map((e) => [e.id, e.nome]));
const lista = [
  ...artigos.map((a) => ({ arquivo: `assets/img/capas/blog/${a.slug}.jpg`, rotulo: `Blog · ${nomeEditoria[a.editoria]}`, titulo: a.h1 })),
  ...colecoes.flatMap((c) =>
    itensColecao[c.id].map((it) => ({ arquivo: `assets/img/capas/${c.id}/${it.slug}.jpg`, rotulo: c.nome, titulo: it.h1 })),
  ),
];
const tmp = join(mkdtempSync(join(tmpdir(), 'capas-')), 'lista.json');
writeFileSync(tmp, JSON.stringify(lista));
process.stdout.write(execFileSync('python', [join(RAIZ, '_fonte', 'gerar_capas.py'), RAIZ, tmp], { encoding: 'utf8' }));

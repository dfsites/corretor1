// Séries de referência (seção 6 do docs/PLANO-EDITORIAL.md): cada uma tem prefixo de URL e template próprios.
// Um módulo por item em _fonte/<id>/<slug>.mjs (export default { ... }); o nome do arquivo deve ser igual ao slug.
//
// Campos do item:
//   slug, titulo (<= ~55 caracteres), h1, descricao (120 a 160), corpo (HTML)
//   termo        (glossário) nome do verbete como aparece no índice A a Z
//   grupo        (legislação) norma a que o comentário pertence, ex.: 'Lei nº 6.530/1978'
//   ordem        (legislação) número para ordenar dentro do grupo
//   autor, data, atualizado?, avisoJuridico?, fontes [{ titulo, url }]
//   relacionados [caminhos internos, ex.: '/blog/autorizacao-de-venda/', '/glossario/averbacao/']

import { existsSync, readdirSync } from 'node:fs';

export const colecoes = [
  {
    id: 'glossario',
    nome: 'Glossário imobiliário',
    titulo: 'Glossário imobiliário para corretores',
    descricao:
      'Termos usados na rotina do corretor de imóveis, com definição clara, onde aparecem na prática, o que verificar e a base legal de cada um.',
    intro: 'Termos do mercado imobiliário explicados para quem trabalha com intermediação: definição, uso na rotina, pontos de verificação e base legal.',
    rotulo: 'Verbete',
    minPalavras: 250,
  },
  {
    id: 'documentos',
    nome: 'Documentos explicados',
    titulo: 'Documentos imobiliários explicados',
    descricao:
      'Para que serve cada documento usado em compra, venda e locação de imóveis, quem emite, como solicitar, validade usual e o que conferir.',
    intro: 'Os documentos que aparecem na intermediação de imóveis: finalidade, emissor, como solicitar, validade e os erros mais comuns.',
    rotulo: 'Documento',
    minPalavras: 400,
  },
  {
    id: 'legislacao',
    nome: 'Legislação comentada',
    titulo: 'Legislação comentada para corretores de imóveis',
    descricao:
      'Comentários práticos sobre os dispositivos legais que regem a corretagem de imóveis, com link para o texto oficial e os limites de cada regra.',
    intro: 'Comentários sobre os dispositivos legais que mais afetam o trabalho do corretor, sempre com link para o texto oficial.',
    rotulo: 'Comentário',
    minPalavras: 400,
  },
];

async function carregar(id) {
  const pasta = new URL(`./${id}/`, import.meta.url);
  if (!existsSync(pasta)) return [];
  const arquivos = readdirSync(pasta).filter((f) => f.endsWith('.mjs')).sort();
  const lista = await Promise.all(arquivos.map((f) => import(new URL(f, pasta)).then((m) => m.default)));
  lista.forEach((item, i) => {
    if (`${item.slug}.mjs` !== arquivos[i]) throw new Error(`${id}/${arquivos[i]} tem slug "${item.slug}"`);
  });
  return lista;
}

export const itensColecao = Object.fromEntries(await Promise.all(colecoes.map(async (c) => [c.id, await carregar(c.id)])));

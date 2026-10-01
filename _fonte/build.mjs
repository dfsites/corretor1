// Gera o site estático Corretor 1% na raiz do repositório.
// Uso: node _fonte/build.mjs   (sem dependências externas)

import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { site } from './site.mjs';
import { artigos, redirecionamentosBlog } from './artigos.mjs';
import { autores } from './autores.mjs';
import { editorias, personas, trilhas, MIN_ARTIGOS_CATEGORIA } from './editorias.mjs';
import { ebooks, cursos } from './produtos.mjs';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
// Pastas geradas pelo build (apagadas e recriadas a cada execução).
const PASTAS_GERADAS = ['sobre', 'cursos', 'mentoria', 'ebooks', 'blog', 'contato', 'politica-de-privacidade', 'autor'];
const ATUALIZADO = '2026-10-01';

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const abs = (caminho) => site.url + caminho;
const dataBR = (iso) => iso.split('-').reverse().join('/');

const MENU = [
  ['/blog/', 'Blog'],
  ['/sobre/', 'O Método'],
  ['/cursos/', 'Cursos'],
  ['/mentoria/', 'Mentoria'],
  ['/ebooks/', 'E-books'],
];

// ---------- Contato ----------
function linkWhats(texto = 'Olá! Vim pelo site Corretor 1% e quero saber mais.') {
  if (!site.contato.whatsapp) return '';
  return `https://wa.me/${site.contato.whatsapp}?text=${encodeURIComponent(texto)}`;
}
function linkEmail(assunto) {
  return `mailto:${site.contato.email}?subject=${encodeURIComponent(assunto)}`;
}
/** Botão principal de contato: WhatsApp se configurado, senão e-mail. */
function botaoContato(rotulo, assunto, classe = 'botao') {
  const w = linkWhats(`Olá! Vim pelo site Corretor 1% e tenho interesse em: ${assunto}.`);
  const href = w || linkEmail(assunto);
  const extra = w ? ' target="_blank" rel="noopener"' : '';
  return `<a class="${classe}" href="${esc(href)}"${extra}>${esc(rotulo)}</a>`;
}

// ---------- Layout ----------
function layout({ caminho, titulo, descricao, corpo, jsonld = [], tipoOg = 'website', imagem = '/assets/img/og-corretor1.jpg', metaExtra = '' }) {
  const tituloCompleto = caminho === '/' ? titulo : `${titulo} | ${site.nome}`;
  const menu = MENU.map(
    ([href, rotulo]) =>
      `<li><a href="${href}"${caminho.startsWith(href) ? ' aria-current="page"' : ''}>${rotulo}</a></li>`,
  ).join('');
  const schemas = jsonld.map((j) => `<script type="application/ld+json">${JSON.stringify(j)}</script>`).join('\n');
  return `<!doctype html>
<html lang="${site.idioma}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${site.ga4 ? `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${site.ga4}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${site.ga4}');
</script>
` : ''}<title>${esc(tituloCompleto)}</title>
<meta name="description" content="${esc(descricao)}">
<link rel="canonical" href="${abs(caminho)}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#001D23">
${site.googleSiteVerification ? `<meta name="google-site-verification" content="${esc(site.googleSiteVerification)}">` : ''}
<meta property="og:locale" content="pt_BR">
<meta property="og:type" content="${tipoOg}">
<meta property="og:site_name" content="${esc(site.nome)}">
<meta property="og:title" content="${esc(tituloCompleto)}">
<meta property="og:description" content="${esc(descricao)}">
<meta property="og:url" content="${abs(caminho)}">
<meta property="og:image" content="${abs(imagem)}">
<meta name="twitter:card" content="summary_large_image">
${metaExtra}
<link rel="icon" href="/assets/img/favicon.png" type="image/png">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<link rel="stylesheet" href="/assets/css/style.css?v=${ATUALIZADO}i">
${schemas}
</head>
<body>
<a class="pular" href="#conteudo">Pular para o conteúdo</a>
<header class="topo">
  <div class="container">
    <a class="marca" href="/" aria-label="${esc(site.nome)} — página inicial">Corretor<span>1%</span></a>
    <button class="menu-botao" type="button" aria-expanded="false" aria-controls="menu">Menu</button>
    <nav aria-label="Principal">
      <ul class="menu" id="menu">${menu}<li><a class="botao" href="/blog/#por-onde-comecar">Comece por aqui</a></li></ul>
    </nav>
  </div>
</header>
<main id="conteudo">
${corpo}
</main>
${rodape()}
<script src="/assets/js/site.js?v=${ATUALIZADO}i" defer></script>
</body>
</html>
`;
}

function rodape() {
  const redes = [
    site.contato.instagram && `<li><a href="${esc(site.contato.instagram)}" rel="noopener" target="_blank">Instagram</a></li>`,
    site.contato.whatsapp && `<li><a href="${esc(linkWhats())}" rel="noopener" target="_blank">WhatsApp</a></li>`,
    `<li><a href="mailto:${esc(site.contato.email)}">${esc(site.contato.email)}</a></li>`,
  ]
    .filter(Boolean)
    .join('');
  const recentes = artigos
    .slice(0, 4)
    .map((a) => `<li><a href="/blog/${a.slug}/">${esc(a.h1.split(':')[0])}</a></li>`)
    .join('');
  return `<footer class="rodape">
  <div class="container">
    <div class="grade">
      <div>
        <p class="marca">Corretor<span>1%</span></p>
        <p>Conteúdo, cursos, mentoria e e-books para a formação profissional do corretor de imóveis.</p>
      </div>
      <div>
        <h2>Navegação</h2>
        <ul>${MENU.map(([h, r]) => `<li><a href="${h}">${r}</a></li>`).join('')}<li><a href="/contato/">Contato</a></li></ul>
      </div>
      <div>
        <h2>Artigos</h2>
        <ul>${recentes}</ul>
      </div>
      <div>
        <h2>Contato</h2>
        <ul>${redes}</ul>
      </div>
    </div>
    <div class="final">
      <p>Copyright © 2024–${new Date(ATUALIZADO).getFullYear()} • ${esc(site.nome)} • Todos os direitos reservados.</p>
      <p class="empresa">${esc(site.empresa.nome)} · CNPJ ${esc(site.empresa.cnpj)} · ${esc(site.empresa.endereco)}</p>
      <p><a href="/politica-de-privacidade/">Política de Privacidade</a></p>
    </div>
  </div>
</footer>`;
}

function cabecalho({ titulo, texto, trilha = [] }) {
  const t = trilha.length
    ? `<p class="trilha"><a href="/">Início</a>${trilha.map(([h, r]) => ` › ${h ? `<a href="${h}">${esc(r)}</a>` : esc(r)}`).join('')}</p>`
    : '';
  return `<section class="cabecalho-pagina"><div class="container">${t}<h1>${esc(titulo)}</h1>${texto ? `<p>${texto}</p>` : ''}</div></section>`;
}

function schemaTrilha(itens) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [['/', 'Início'], ...itens].map(([c, n], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: n,
      item: abs(c),
    })),
  };
}

const ORGANIZACAO = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': abs('/#organizacao'),
  name: site.nome,
  url: abs('/'),
  logo: abs('/assets/img/apple-touch-icon.png'),
  description: site.descricao,
  email: site.contato.email,
  parentOrganization: { '@type': 'Organization', name: site.empresa.nome, taxID: site.empresa.cnpj },
};

// Enquanto o site não vende produtos, a faixa leva à biblioteca do blog (sem cadastro nem contato comercial).
function faixaCta(titulo, texto) {
  return `<section class="faixa-cta"><div class="container estreito">
  <h2>${esc(titulo)}</h2>
  <p>${esc(texto)}</p>
  <div class="botoes"><a class="botao" href="/blog/#por-onde-comecar">Comece por aqui</a></div>
</div></section>`;
}

// ---------- Produtos ----------
function cartoesProdutos(lista, tipo) {
  if (!lista.length) {
    const nome = tipo === 'ebook' ? 'e-books' : 'cursos';
    return `<div class="aviso">
  <h3>${nome === 'e-books' ? 'E-books' : 'Cursos'} em preparação</h3>
  <p>Os ${nome} Corretor 1% serão publicados nesta página. Enquanto isso, os temas estão disponíveis nos <a href="/blog/">artigos do blog</a>.</p>
</div>`;
  }
  return `<div class="grade">${lista
    .map(
      (p) => `<article class="cartao produto">
  ${p.capa ? `<img class="capa" src="${esc(p.capa)}" alt="Capa: ${esc(p.titulo)}" width="300" height="400" loading="lazy">` : ''}
  <h3>${esc(p.titulo)}</h3>
  <p>${esc(p.descricao)}</p>
  ${p.preco ? `<p class="preco">${esc(p.preco)}</p>` : ''}
  ${p.link ? `<a class="botao" href="${esc(p.link)}" rel="noopener" target="_blank">Comprar agora</a>` : ''}
</article>`,
    )
    .join('')}</div>`;
}

function cartoesArtigos(lista) {
  return `<div class="grade">${lista
    .map(
      (a) => `<article class="cartao">
  <span class="tema">${esc(editorias.find((e) => e.id === a.editoria)?.nome || '')}</span>
  <h3><a href="/blog/${a.slug}/">${esc(a.h1)}</a></h3>
  <p>${esc(a.descricao)}</p>
  <a class="mais" href="/blog/${a.slug}/">Ler artigo →</a>
</article>`,
    )
    .join('')}</div>`;
}

const PILARES = [
  ['Posicionamento', 'Escolher um nicho, construir autoridade e ser lembrado como referência na sua região ou segmento.'],
  ['Captação', 'Conquistar imóveis vendáveis, com preço coerente e exclusividade por escrito.'],
  ['Conversão', 'Qualificar, conduzir visitas, negociar e fechar com um processo que se repete.'],
  ['Rotina', 'Transformar metas de renda em metas semanais de atividade e cumpri-las com constância.'],
  ['Reputação', 'Proteger a comissão, fazer pós-venda e transformar cada cliente em fonte de indicações.'],
];
const pilaresHtml = (escuro = false) =>
  `<div class="grade">${PILARES.map(
    ([t, d], i) => `<div class="cartao"><div class="numero">${String(i + 1).padStart(2, '0')}</div><h3>${t}</h3><p>${d}</p></div>`,
  ).join('')}</div>`;

// ---------- Páginas ----------
const paginas = [];

// Início
paginas.push({
  caminho: '/',
  titulo: 'Corretor 1% — Cursos e mentoria para corretores de imóveis de elite',
  descricao: site.descricao,
  jsonld: [
    ORGANIZACAO,
    { '@context': 'https://schema.org', '@type': 'WebSite', name: site.nome, url: abs('/'), inLanguage: 'pt-BR', publisher: { '@id': abs('/#organizacao') } },
  ],
  corpo: `<section class="hero">
  <picture>
    <source type="image/webp" srcset="/assets/img/elite-768.webp 768w, /assets/img/elite-1200.webp 1200w, /assets/img/elite-1920.webp 1920w" sizes="100vw">
    <img src="/assets/img/elite-1200.jpg" alt="Profissionais de terno no alto de um edifício observando o horizonte da cidade" width="1200" height="677" fetchpriority="high">
  </picture>
  <div class="container">
    <span class="selo">Corretor 1%</span>
    <h1>${esc(site.chamada)}</h1>
    <p class="sub">${esc(site.subchamada)}</p>
    <div class="botoes">
      <a class="botao" href="/blog/#por-onde-comecar">Comece por aqui</a>
      <a class="botao vazado" href="/cursos/">Ver cursos</a>
    </div>
  </div>
</section>

<section class="secao">
  <div class="container estreito centro">
    <h2>O 1% que se destaca</h2>
    <p class="intro">Em todo mercado existe um pequeno grupo de corretores que concentra os melhores imóveis, os melhores clientes e as maiores comissões. Eles não têm sorte: têm <strong>método, constância e posicionamento</strong>. O Corretor 1% existe para levar você até esse grupo.</p>
  </div>
</section>

<section class="secao clara">
  <div class="container">
    <h2 class="centro">Como podemos acelerar a sua carreira</h2>
    <div class="grade">
      <div class="cartao"><h3>Cursos</h3><p>Trilhas práticas de captação, negociação, marketing e rotina para você aplicar no dia seguinte.</p><a class="mais" href="/cursos/">Conhecer os cursos →</a></div>
      <div class="cartao"><h3>Mentoria individualizada</h3><p>Acompanhamento próximo, com diagnóstico dos seus números e um plano de ação feito para a sua realidade.</p><a class="mais" href="/mentoria/">Saber como funciona →</a></div>
      <div class="cartao"><h3>E-books</h3><p>Materiais diretos ao ponto, com roteiros e modelos para usar no atendimento e na captação.</p><a class="mais" href="/ebooks/">Ver e-books →</a></div>
    </div>
  </div>
</section>

<section class="secao escura">
  <div class="container">
    <h2>O Método Corretor 1%</h2>
    <p class="intro" style="color:#c9cbd2">Cinco frentes que organizam o trabalho do corretor de imóveis.</p>
    ${pilaresHtml(true)}
    <p style="margin-top:28px"><a href="/sobre/" style="color:var(--ouro)">Entenda o método completo →</a></p>
  </div>
</section>

<section class="secao">
  <div class="container">
    <h2>E-books Corretor 1%</h2>
    <p class="intro">Conhecimento prático para ler em uma noite e aplicar na manhã seguinte.</p>
    ${cartoesProdutos(ebooks.filter((e) => e.destaque).slice(0, 3).length ? ebooks.filter((e) => e.destaque).slice(0, 3) : ebooks.slice(0, 3), 'ebook')}
  </div>
</section>

<section class="secao clara">
  <div class="container">
    <h2>Conteúdo para corretores</h2>
    <p class="intro">Biblioteca profissional sobre carreira, captação, atendimento, comissão e rotina de trabalho.</p>
    ${cartoesArtigos(artigos.slice(0, 3))}
    <p style="margin-top:28px"><a href="/blog/">Ver todos os artigos →</a></p>
  </div>
</section>

${faixaCta('Comece pela biblioteca', 'Artigos sobre carreira, captação, atendimento, negociação e gestão, organizados pelo seu momento na profissão.')}`,
});

// O Método
paginas.push({
  caminho: '/sobre/',
  titulo: 'O Método Corretor 1%: os cinco pilares',
  descricao:
    'Conheça o Método Corretor 1%: posicionamento, captação, conversão, rotina e reputação, os pilares que organizam o trabalho do corretor de imóveis.',
  jsonld: [ORGANIZACAO, schemaTrilha([['/sobre/', 'O Método']])],
  corpo: `${cabecalho({ titulo: 'O Método Corretor 1%', texto: 'Por que alguns poucos corretores vendem muito mais do que todos os outros, e como fazer parte desse grupo.', trilha: [[null, 'O Método']] })}
<section class="secao"><div class="container estreito">
  <h2>O que significa “Corretor 1%”</h2>
  <p>Todo mercado imobiliário tem um pequeno grupo de profissionais que se destaca: são lembrados primeiro pelos proprietários, recebem as melhores indicações e fecham os negócios de maior valor. O <strong>Corretor 1%</strong> é esse corretor, o 1% que se destaca em vendas e comissões.</p>
  <p>Chegar lá não depende de talento nato nem de sorte. Depende de fazer, de forma consistente, as coisas certas, que a maioria não faz ou faz sem método.</p>
  <h2>Os cinco pilares</h2>
</div>
<div class="container">${pilaresHtml()}</div>
<div class="container estreito">
  <h2>Para quem é</h2>
  <ul class="lista-check">
    <li>Corretores em início de carreira que querem encurtar o caminho até as primeiras vendas.</li>
    <li>Corretores experientes que sentem que o faturamento parou de crescer.</li>
    <li>Profissionais que querem deixar de ser associados e construir a própria marca.</li>
    <li>Quem quer trocar volume de trabalho por qualidade de negócios.</li>
  </ul>
  <h2>Como aplicar o método</h2>
  <p>Você pode começar pelos <a href="/ebooks/">e-books</a>, aprofundar com os <a href="/cursos/">cursos</a> ou ter acompanhamento próximo na <a href="/mentoria/">mentoria individualizada</a>. E o <a href="/blog/">blog</a> traz conteúdo gratuito sobre cada um dos pilares.</p>
</div></section>
${faixaCta('Estude os pilares', 'Cada pilar do método tem artigos no blog, com fontes e orientações práticas.')}`,
});

// Cursos
const TRILHAS = [
  ['Captação e exclusividade', 'Onde encontrar proprietários, como conduzir a visita de captação, precificar com dados e conquistar a exclusividade por escrito.'],
  ['Atendimento e fechamento', 'Qualificação de clientes, roteiro de visitas, follow-up, proposta e negociação até a assinatura.'],
  ['Comissão e negociação', 'Contrato de corretagem, tabela de honorários, parcerias e como defender o valor do seu trabalho.'],
  ['Marketing e posicionamento', 'Nicho, presença digital, anúncios que vendem e construção de autoridade na sua região.'],
  ['Rotina e gestão da carreira', 'Metas de atividade, indicadores, organização da semana e planejamento financeiro do corretor.'],
];
paginas.push({
  caminho: '/cursos/',
  titulo: 'Cursos para corretores de imóveis',
  descricao:
    'Cursos práticos para corretores de imóveis: captação e exclusividade, atendimento e fechamento, comissão, marketing imobiliário e organização da rotina.',
  jsonld: [ORGANIZACAO, schemaTrilha([['/cursos/', 'Cursos']])],
  corpo: `${cabecalho({ titulo: 'Cursos para corretores de imóveis', texto: 'Formação prática, organizada nos pilares do Método Corretor 1%, para você aplicar no dia a dia e ver resultado nas comissões.', trilha: [[null, 'Cursos']] })}
<section class="secao"><div class="container">
  <h2>Trilhas de formação</h2>
  <p class="intro">Cada trilha resolve um gargalo específico da carreira do corretor.</p>
  <div class="grade">${TRILHAS.map(([t, d]) => `<div class="cartao"><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>
</div></section>
<section class="secao clara"><div class="container">
  <h2>Cursos disponíveis</h2>
  ${cartoesProdutos(cursos, 'curso')}
</div></section>
<section class="secao"><div class="container estreito">
  <h2>Prefere acompanhamento individual?</h2>
  <p>Os cursos ensinam o método. A <a href="/mentoria/">mentoria individualizada</a> aplica o método aos seus números, ao seu nicho e à sua rotina, com acompanhamento próximo.</p>
</div></section>
${faixaCta('Enquanto os cursos não são publicados', 'Os temas das trilhas já são tratados nos artigos do blog.')}`,
});

// Mentoria
const FAQ_MENTORIA = [
  ['A mentoria é individual?', 'Sim. A mentoria Corretor 1% é individualizada: o plano é construído a partir dos seus números, do seu nicho e da sua rotina.'],
  ['Serve para quem está começando?', 'Sim. Para quem está começando, o foco é estruturar nicho, rotina e captação desde cedo, evitando os erros que mais atrasam a carreira.'],
  ['Preciso ter CRECI?', 'Para intermediar negócios, sim, porque a profissão é regulamentada. Se você ainda está em formação, a mentoria pode ajudar a planejar a entrada no mercado.'],
  ['Como faço para participar?', 'A mentoria ainda não está aberta para inscrições. Quando estiver, as informações serão publicadas nesta página.'],
];
paginas.push({
  caminho: '/mentoria/',
  titulo: 'Mentoria individualizada para corretores de imóveis',
  descricao:
    'Mentoria individualizada para corretores de imóveis: diagnóstico dos seus números, plano de ação sob medida e acompanhamento para vender mais e aumentar as comissões.',
  jsonld: [
    ORGANIZACAO,
    schemaTrilha([['/mentoria/', 'Mentoria']]),
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_MENTORIA.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
  ],
  corpo: `${cabecalho({ titulo: 'Mentoria individualizada para corretores', texto: 'Acompanhamento próximo para você sair da média e entrar no grupo dos corretores que mais vendem.', trilha: [[null, 'Mentoria']] })}
<section class="secao"><div class="container">
  <h2>Como funciona</h2>
  <div class="grade">
    <div class="cartao"><div class="numero">01</div><h3>Diagnóstico</h3><p>Analisamos o seu momento: nicho, carteira, origem dos clientes, taxas de conversão e rotina.</p></div>
    <div class="cartao"><div class="numero">02</div><h3>Plano de ação</h3><p>Definimos metas de renda e as transformamos em metas semanais de atividade, com prioridades claras.</p></div>
    <div class="cartao"><div class="numero">03</div><h3>Acompanhamento</h3><p>Encontros periódicos para revisar resultados, destravar negociações e ajustar a estratégia.</p></div>
    <div class="cartao"><div class="numero">04</div><h3>Evolução</h3><p>Com os indicadores na mão, você sabe exatamente o que funciona e onde investir o seu tempo.</p></div>
  </div>
</div></section>
<section class="secao clara"><div class="container estreito">
  <h2>O que você trabalha na mentoria</h2>
  <ul class="lista-check">
    <li>Escolha de nicho e posicionamento na sua região.</li>
    <li>Estratégia de captação e de exclusividade.</li>
    <li>Processo de atendimento, follow-up e fechamento.</li>
    <li>Negociação e proteção da sua comissão.</li>
    <li>Marketing pessoal e presença digital.</li>
    <li>Rotina, metas e indicadores semanais.</li>
  </ul>
</div></section>
<section class="secao"><div class="container estreito faq">
  <h2>Perguntas frequentes</h2>
  ${FAQ_MENTORIA.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('\n  ')}
</div></section>
${faixaCta('Enquanto a mentoria não abre', 'O blog reúne o conteúdo de base sobre cada tema trabalhado na mentoria.')}`,
});

// E-books
paginas.push({
  caminho: '/ebooks/',
  titulo: 'E-books para corretores de imóveis',
  descricao:
    'E-books Corretor 1% para corretores de imóveis: captação, negociação, comissão, marketing e rotina de trabalho, com roteiros e modelos práticos.',
  jsonld: [ORGANIZACAO, schemaTrilha([['/ebooks/', 'E-books']])],
  corpo: `${cabecalho({ titulo: 'E-books para corretores de imóveis', texto: 'Materiais objetivos, com roteiros e modelos para usar no atendimento, na captação e na negociação.', trilha: [[null, 'E-books']] })}
<section class="secao"><div class="container">
  ${cartoesProdutos(ebooks, 'ebook')}
</div></section>
<section class="secao clara"><div class="container estreito">
  <h2>Enquanto isso, leia no blog</h2>
  <p>Conteúdo gratuito sobre os mesmos temas dos e-books:</p>
  <ul>${artigos.map((a) => `<li><a href="/blog/${a.slug}/">${esc(a.h1)}</a></li>`).join('')}</ul>
</div></section>`,
});

// ---------- Blog: editorias, autoria e relações ----------
const ED = Object.fromEntries(editorias.map((e) => [e.id, e]));
for (const a of artigos) {
  if (!ED[a.editoria]) throw new Error(`Artigo ${a.slug}: editoria inexistente "${a.editoria}"`);
  if (!autores[a.autor]) throw new Error(`Artigo ${a.slug}: autor inexistente "${a.autor}"`);
  if (typeof a.pilar === 'string' && !artigos.some((x) => x.slug === a.pilar)) throw new Error(`Artigo ${a.slug}: pilar inexistente "${a.pilar}"`);
  for (const p of a.personas || []) if (!personas[p]) throw new Error(`Artigo ${a.slug}: persona inexistente "${p}"`);
}
const urlArtigo = (a) => `/blog/${a.slug}/`;
const urlAutor = (id) => `/autor/${id}/`;
const idPessoa = (id) => abs(`${urlAutor(id)}#pessoa`);
const artigosDa = (id) => artigos.filter((a) => a.editoria === id);
const temCategoria = (id) => artigosDa(id).length >= MIN_ARTIGOS_CATEGORIA;
const urlEditoria = (id) => (temCategoria(id) ? `/blog/categoria/${id}/` : `/blog/#${id}`);
const pilarDaEditoria = (id) => artigos.find((a) => a.editoria === id && a.pilar === true);
const satelitesDe = (a) => artigos.filter((x) => x.pilar === a.slug);

/** Relacionados: explícitos; senão pilar, satélites, mesma editoria e pilares das próximas etapas da trilha. */
function relacionadosDe(a) {
  if (a.relacionados?.length) return a.relacionados.map((s) => artigos.find((x) => x.slug === s)).filter(Boolean).slice(0, 3);
  const ordem = editorias.map((e) => e.id);
  const i = ordem.indexOf(a.editoria);
  const proximas = [...ordem.slice(i + 1), ...ordem.slice(0, i)];
  const candidatos = [
    typeof a.pilar === 'string' ? artigos.find((x) => x.slug === a.pilar) : null,
    pilarDaEditoria(a.editoria),
    ...satelitesDe(a),
    ...artigosDa(a.editoria),
    ...proximas.map(pilarDaEditoria),
  ];
  const vistos = new Set([a.slug]);
  return candidatos.filter((x) => x && !vistos.has(x.slug) && vistos.add(x.slug)).slice(0, 3);
}

function schemaPessoa(id, completo = false) {
  const p = autores[id];
  const base = { '@context': 'https://schema.org', '@type': 'Person', '@id': idPessoa(id), name: p.nome, url: abs(urlAutor(id)) };
  if (!completo) return base;
  return {
    ...base,
    jobTitle: p.cargo,
    description: p.resumo,
    ...(p.foto ? { image: abs(p.foto) } : {}),
    ...(p.sameAs?.length ? { sameAs: p.sameAs } : {}),
    // A empresa entra como organização vinculada; o CRECI-J não é credencial da pessoa.
    ...(p.empresa ? { worksFor: { '@type': 'Organization', name: p.empresa.nome } } : {}),
    knowsAbout: ['Corretagem de imóveis', 'Avaliação de imóveis', 'Direito imobiliário', 'Administração de imóveis'],
  };
}

// Links para artigos ainda não publicados viram texto simples (voltam a ser link quando o artigo existir).
const slugsPublicados = new Set(artigos.map((a) => a.slug));
const pendentes = new Set();
function semLinksPendentes(html) {
  return html.replace(/<a href="\/blog\/([a-z0-9-]+)\/">([\s\S]*?)<\/a>/g, (inteiro, slug, texto) => {
    if (slugsPublicados.has(slug) || slug === 'categoria') return inteiro;
    pendentes.add(slug);
    return texto;
  });
}

const rotuloPersonas = (a) => (a.personas || []).map((p) => personas[p]).join(' · ');

// Blog (índice)
const trilhasPersona = Object.keys(personas)
  .map((p) => {
    const lista = (trilhas[p] || []).map((slug) => {
      const a = artigos.find((x) => x.slug === slug);
      if (!a) throw new Error(`Trilha ${p}: artigo inexistente "${slug}"`);
      return a;
    });
    if (!lista.length) return '';
    return `<div class="cartao"><h3>${esc(personas[p])}</h3><ul>${lista
      .map((a) => `<li><a href="${urlArtigo(a)}">${esc(a.h1.split(':')[0])}</a></li>`)
      .join('')}</ul></div>`;
  })
  .join('');
const secoesEditoria = editorias
  .filter((e) => artigosDa(e.id).length)
  .map(
    (e) => `<section class="secao-editoria" id="${e.id}">
  <h2>${esc(e.nome)}</h2>
  <p class="intro">${esc(e.descricao)}</p>
  ${cartoesArtigos(artigosDa(e.id))}
  ${temCategoria(e.id) ? `<p><a href="/blog/categoria/${e.id}/">Todos os artigos de ${esc(e.nome)} →</a></p>` : ''}
</section>`,
  )
  .join('\n');
paginas.push({
  caminho: '/blog/',
  titulo: 'Blog para corretores de imóveis',
  descricao:
    'Artigos sobre a profissão de corretor de imóveis: formação e CRECI, captação, atendimento, comissão de corretagem, rotina de trabalho e presença profissional.',
  jsonld: [ORGANIZACAO, schemaTrilha([['/blog/', 'Blog']])],
  corpo: `${cabecalho({
    titulo: 'Blog Corretor 1%',
    texto: `Biblioteca profissional sobre a corretagem de imóveis: entrada na profissão, captação, atendimento, comissão, rotina e presença profissional. Artigos de <a href="${urlAutor('daniel-ferreira')}">Daniel Ferreira</a>.`,
    trilha: [[null, 'Blog']],
  })}
<section class="secao clara" id="por-onde-comecar"><div class="container">
  <h2>Por onde começar</h2>
  <p class="intro">Escolha a trilha que corresponde ao seu momento na profissão.</p>
  <div class="grade">${trilhasPersona}</div>
</div></section>
<section class="secao"><div class="container">
${secoesEditoria}
</div></section>`,
});

// Páginas de categoria (só editorias com artigos suficientes)
for (const e of editorias.filter((x) => temCategoria(x.id))) {
  const caminho = `/blog/categoria/${e.id}/`;
  paginas.push({
    caminho,
    titulo: `${e.nome}: artigos para corretores`,
    descricao: e.descricao,
    jsonld: [
      { '@context': 'https://schema.org', '@type': 'CollectionPage', name: e.nome, description: e.descricao, url: abs(caminho) },
      schemaTrilha([['/blog/', 'Blog'], [caminho, e.nome]]),
    ],
    corpo: `${cabecalho({ titulo: e.nome, texto: esc(e.descricao), trilha: [['/blog/', 'Blog'], [null, e.nome]] })}
<section class="secao"><div class="container">${cartoesArtigos(artigosDa(e.id))}</div></section>`,
  });
}

// Artigos
for (const a of artigos) {
  const caminho = urlArtigo(a);
  const autor = autores[a.autor];
  const ed = ED[a.editoria];
  const atualizado = a.atualizado && a.atualizado !== a.data ? a.atualizado : null;
  const satelites = a.pilar === true ? satelitesDe(a) : [];
  const pilar = typeof a.pilar === 'string' ? artigos.find((x) => x.slug === a.pilar) : null;
  paginas.push({
    caminho,
    titulo: a.titulo,
    descricao: a.descricao,
    tipoOg: 'article',
    metaExtra: [
      `<meta name="author" content="${esc(autor.nome)}">`,
      `<meta property="article:published_time" content="${a.data}">`,
      `<meta property="article:modified_time" content="${a.atualizado || a.data}">`,
      `<meta property="article:author" content="${abs(urlAutor(a.autor))}">`,
      `<meta property="article:section" content="${esc(ed.nome)}">`,
    ].join('\n'),
    jsonld: [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: a.h1,
        description: a.descricao,
        datePublished: a.data,
        dateModified: a.atualizado || a.data,
        inLanguage: 'pt-BR',
        mainEntityOfPage: abs(caminho),
        image: abs('/assets/img/og-corretor1.jpg'),
        articleSection: ed.nome,
        author: { '@type': 'Person', '@id': idPessoa(a.autor), name: autor.nome, url: abs(urlAutor(a.autor)) },
        publisher: { '@id': abs('/#organizacao') },
        ...(a.fontes?.length ? { citation: a.fontes.map((f) => f.url) } : {}),
      },
      schemaPessoa(a.autor),
      ORGANIZACAO,
      schemaTrilha([['/blog/', 'Blog'], [urlEditoria(a.editoria), ed.nome], [caminho, a.h1]]),
    ],
    corpo: `<section class="cabecalho-pagina"><div class="container estreito">
  <p class="trilha"><a href="/">Início</a> › <a href="/blog/">Blog</a> › <a href="${urlEditoria(a.editoria)}">${esc(ed.nome)}</a></p>
  <h1>${esc(a.h1)}</h1>
  <p>${esc(a.descricao)}</p>
  <p class="meta-artigo">Por <a rel="author" href="${urlAutor(a.autor)}">${esc(autor.nome)}</a> · Publicado em <time datetime="${a.data}">${dataBR(a.data)}</time>${
    atualizado ? ` · Atualizado em <time datetime="${atualizado}">${dataBR(atualizado)}</time>` : ''
  }</p>
  ${a.personas?.length ? `<p class="personas">Indicado para: ${esc(rotuloPersonas(a))}</p>` : ''}
</div></section>
<article class="artigo"><div class="container estreito">
${pilar ? `<p class="nota-pilar">Este artigo aprofunda um tema de <a href="${urlArtigo(pilar)}">${esc(pilar.h1.split(':')[0])}</a>.</p>` : ''}
${semLinksPendentes(a.corpo.trim())}
${
  satelites.length
    ? `<section class="neste-tema"><h2>Artigos deste tema</h2><ul>${satelites.map((s) => `<li><a href="${urlArtigo(s)}">${esc(s.h1)}</a></li>`).join('')}</ul></section>`
    : ''
}
${a.avisoJuridico ? '<p class="aviso-juridico">Conteúdo informativo, elaborado a partir da legislação citada. Não substitui a orientação de um advogado para um caso concreto.</p>' : ''}
${
  a.fontes?.length
    ? `<section class="fontes"><h2>Fontes e referências</h2><ul>${a.fontes
        .map((f) => `<li><a href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.titulo)}</a></li>`)
        .join('')}</ul></section>`
    : ''
}
<aside class="caixa-autor">
  <p class="rotulo">Sobre o autor</p>
  <p><a href="${urlAutor(a.autor)}"><strong>${esc(autor.nome)}</strong></a></p>
  <p>${esc(autor.resumo)}</p>
</aside>
</div></article>
<section class="secao clara"><div class="container"><h2>Leituras relacionadas</h2>${cartoesArtigos(relacionadosDe(a))}</div></section>`,
  });
}

// Páginas de autor
for (const [id, p] of Object.entries(autores)) {
  const caminho = urlAutor(id);
  const lista = artigos.filter((a) => a.autor === id);
  paginas.push({
    caminho,
    titulo: `${p.nome}, ${p.cargo.charAt(0).toLowerCase()}${p.cargo.slice(1)}`,
    descricao: p.resumo,
    tipoOg: 'profile',
    jsonld: [
      { '@context': 'https://schema.org', '@type': 'ProfilePage', url: abs(caminho), mainEntity: { '@id': idPessoa(id) } },
      schemaPessoa(id, true),
      schemaTrilha([['/blog/', 'Blog'], [caminho, p.nome]]),
    ],
    corpo: `${cabecalho({ titulo: p.nome, texto: esc(p.cargo), trilha: [['/blog/', 'Blog'], [null, p.nome]] })}
<section class="secao"><div class="container estreito">
  ${p.bio.map((par) => `<p>${esc(par)}</p>`).join('\n  ')}
  ${p.registros?.length ? `<h2>Registros profissionais</h2><ul class="lista-check">${p.registros.map((r) => `<li>${esc(r)}</li>`).join('')}</ul>` : ''}
  ${p.empresa ? `<h2>Empresa</h2><p>${esc(p.nome)} é ${esc(p.empresa.vinculo)} da ${esc(p.empresa.nome)}, inscrita no ${esc(p.empresa.registro)} (registro de pessoa jurídica).</p>` : ''}
  ${p.formacao?.length ? `<h2>Formação</h2><ul class="lista-check">${p.formacao.map((r) => `<li>${esc(r)}</li>`).join('')}</ul>` : ''}
  ${p.sameAs?.length ? `<p>Mais informações: <a href="${esc(p.sameAs[0])}" target="_blank" rel="noopener me">página profissional de ${esc(p.nome)}</a>.</p>` : ''}
</div></section>
<section class="secao clara"><div class="container">
  <h2>Artigos de ${esc(p.nome)}</h2>
  ${cartoesArtigos(lista)}
</div></section>`,
  });
}

// Contato
const canais = [
  site.contato.whatsapp && `<li><strong>WhatsApp:</strong> <a href="${esc(linkWhats())}" target="_blank" rel="noopener">enviar mensagem</a></li>`,
  `<li><strong>E-mail:</strong> <a href="mailto:${esc(site.contato.email)}">${esc(site.contato.email)}</a></li>`,
  site.contato.instagram && `<li><strong>Instagram:</strong> <a href="${esc(site.contato.instagram)}" target="_blank" rel="noopener">perfil oficial</a></li>`,
]
  .filter(Boolean)
  .join('');
paginas.push({
  caminho: '/contato/',
  titulo: 'Contato',
  descricao: 'Fale com o Corretor 1% sobre cursos, mentoria individualizada e e-books para corretores de imóveis.',
  jsonld: [ORGANIZACAO, schemaTrilha([['/contato/', 'Contato']])],
  corpo: `${cabecalho({ titulo: 'Fale com o Corretor 1%', texto: 'Dúvidas sobre cursos, mentoria ou e-books? Escolha o canal de sua preferência.', trilha: [[null, 'Contato']] })}
<section class="secao"><div class="container estreito">
  <ul class="lista-check">${canais}</ul>
  <p>Ao escrever, conte um pouco do seu momento: há quanto tempo atua, em que região e qual é o seu principal desafio hoje. Assim conseguimos indicar o melhor caminho.</p>
  <div class="botoes">${botaoContato('Enviar mensagem', 'contato pelo site')}</div>
</div></section>`,
});

// Política de privacidade
paginas.push({
  caminho: '/politica-de-privacidade/',
  titulo: 'Política de Privacidade',
  descricao: 'Como o site Corretor 1% trata dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD).',
  jsonld: [schemaTrilha([['/politica-de-privacidade/', 'Política de Privacidade']])],
  corpo: `${cabecalho({ titulo: 'Política de Privacidade', trilha: [[null, 'Política de Privacidade']] })}
<section class="secao"><div class="container estreito">
  <p>Última atualização: ${dataBR(ATUALIZADO)}.</p>
  <h2>Quem é o responsável</h2>
  <p>O site ${esc(site.nome)} é mantido por ${esc(site.empresa.nome)}, CNPJ ${esc(site.empresa.cnpj)}, ${esc(site.empresa.endereco)}, controladora dos dados pessoais tratados por meio deste site.</p>
  <h2>Quais dados coletamos</h2>
  <p>Este site não possui cadastro nem formulários. Além dos dados de navegação coletados pelo Google Analytics (veja a seção Cookies), coletamos apenas os dados que você nos envia voluntariamente ao entrar em contato por e-mail${site.contato.whatsapp ? ' ou WhatsApp' : ''}, como nome, telefone, e-mail e o conteúdo da mensagem.</p>
  <h2>Para que usamos</h2>
  <p>Usamos esses dados exclusivamente para responder ao seu contato e apresentar os nossos cursos, mentorias e e-books, com base no seu consentimento e no legítimo interesse, conforme a Lei nº 13.709/2018 (LGPD).</p>
  <h2>Compras</h2>
  <p>As compras de cursos e e-books são processadas por plataformas de pagamento de terceiros, que têm as próprias políticas de privacidade. Não armazenamos dados de cartão neste site.</p>
  <h2>Cookies</h2>
  <p>Este site utiliza o Google Analytics, serviço do Google, para medir a audiência de forma agregada: páginas visitadas, tempo de permanência, origem do acesso e tipo de dispositivo. Para isso, o Google Analytics utiliza cookies e dados de navegação, tratados pelo Google conforme a <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Política de Privacidade do Google</a>. Não utilizamos cookies de publicidade. Você pode bloquear ou apagar cookies nas configurações do seu navegador ou usar o <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">complemento de desativação do Google Analytics</a>.</p>
  <h2>Seus direitos</h2>
  <p>Você pode solicitar a qualquer momento acesso, correção ou exclusão dos seus dados pelo e-mail <a href="mailto:${esc(site.contato.email)}">${esc(site.contato.email)}</a>.</p>
</div></section>`,
});

// ---------- Escrita ----------
for (const p of PASTAS_GERADAS) rmSync(join(RAIZ, p), { recursive: true, force: true });

function escrever(rel, conteudo) {
  const destino = join(RAIZ, rel);
  mkdirSync(dirname(destino), { recursive: true });
  writeFileSync(destino, conteudo, 'utf8');
}

for (const p of paginas) {
  escrever(p.caminho === '/' ? 'index.html' : join(p.caminho, 'index.html'), layout(p));
}

escrever(
  '404.html',
  layout({
    caminho: '/404.html',
    titulo: 'Página não encontrada',
    descricao: 'A página que você procura não existe ou mudou de endereço. Veja o início do site ou os artigos do blog.',
    corpo: `${cabecalho({ titulo: 'Página não encontrada', texto: 'O endereço que você acessou não existe ou mudou de lugar.' })}
<section class="secao"><div class="container estreito"><div class="botoes"><a class="botao" href="/">Ir para o início</a><a class="botao vazado" style="color:var(--navy)!important;border-color:var(--navy)" href="/blog/">Ver artigos</a></div></div></section>`,
  }).replace('<meta name="robots" content="index, follow, max-image-preview:large">', '<meta name="robots" content="noindex">')
    .replace(/<link rel="canonical"[^>]*>\n/, ''),
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paginas
  .map((p) => {
    const art = artigos.find((a) => `/blog/${a.slug}/` === p.caminho);
    return `  <url><loc>${abs(p.caminho)}</loc><lastmod>${art ? art.atualizado || art.data : ATUALIZADO}</lastmod></url>`;
  })
  .join('\n')}
</urlset>
`;
escrever('sitemap.xml', sitemap);

// robots.txt: rastreamento público liberado para buscadores, IAs e crawlers compatíveis (política do proprietário, 2026-10-01).
const ROBOTS_GRUPOS = [
  ['Regra geral: libera qualquer crawler atual ou futuro que respeite robots.txt', ['*']],
  ['Google Search', ['Googlebot']],
  ['Outros crawlers do ecossistema Google', ['GoogleOther']],
  ['Gemini / Google AI', ['Google-Extended']],
  ['Bing / Microsoft', ['bingbot']],
  ['OpenAI: ChatGPT Search', ['OAI-SearchBot']],
  ['OpenAI: treinamento/modelos', ['GPTBot']],
  ['OpenAI: acessos iniciados pelo usuário', ['ChatGPT-User']],
  ['OpenAI: validação de páginas de anúncios', ['OAI-AdsBot']],
  ['Anthropic: Claude', ['ClaudeBot']],
  ['Anthropic: Claude Search', ['Claude-SearchBot']],
  ['Anthropic: acessos iniciados pelo usuário', ['Claude-User']],
  ['Perplexity', ['PerplexityBot', 'Perplexity-User']],
  ['Meta AI / Facebook', ['Meta-ExternalAgent', 'Meta-ExternalFetcher', 'facebookexternalhit', 'Facebot']],
];
escrever(
  'robots.txt',
  '# robots.txt\n# Política: rastreamento público liberado para buscadores, IAs e crawlers compatíveis com robots.txt.\n\n' +
    ROBOTS_GRUPOS.map(([titulo, agentes]) => `# ${titulo}\n` + agentes.map((ag) => `User-agent: ${ag}\nAllow: /\n`).join('\n')).join('\n') +
    `\n# Sitemap principal\nSitemap: ${abs('/sitemap.xml')}\n`,
);

const host = new URL(site.url).host;
const protocolo = new URL(site.url).protocol.replace(':', '');
escrever(
  '.htaccess',
  `# Gerado por _fonte/build.mjs — não editar à mão.
DirectoryIndex index.html
ErrorDocument 404 /404.html
Options -Indexes

# Arquivos internos do projeto não devem ser servidos.
RedirectMatch 404 ^/(_fonte|\\.git|\\.github)(/.*)?$
RedirectMatch 404 (?i)^/.*\\.(md|mjs)$
RedirectMatch 404 ^/package\\.json$

# Artigos que mudaram de endereço
${redirecionamentosBlog.map(([de, para]) => `Redirect 301 ${de} ${site.url}${para}`).join('\n')}

# Páginas do template antigo -> páginas novas
Redirect 301 /about.html ${site.url}/sobre/
Redirect 301 /causes.html ${site.url}/cursos/
Redirect 301 /service.html ${site.url}/cursos/
Redirect 301 /donate.html ${site.url}/ebooks/
Redirect 301 /team.html ${site.url}/sobre/
Redirect 301 /testimonial.html ${site.url}/mentoria/
Redirect 301 /contact.html ${site.url}/contato/

<IfModule mod_rewrite.c>
  RewriteEngine On
  # Artigos que mudaram de endereço: destino final em um único salto (vale para http e sem www)
${redirecionamentosBlog
  .map(([de, para]) => `  RewriteRule ^${de.replace(/^\//, '').replace(/\/$/, '').replace(/[.]/g, '\\.')}/?$ ${site.url}${para} [R=301,L]`)
  .join('\n')}
  # Qualquer outro host (com/sem www) -> host canônico
  RewriteCond %{HTTP_HOST} !^${host.replace(/\./g, '\\.')}$ [NC]
  RewriteRule ^(.*)$ ${protocolo}://${host}/$1 [R=301,L]
${protocolo === 'https' ? `  # http -> https (considera proxy que informa X-Forwarded-Proto)
  RewriteCond %{HTTPS} off
  RewriteCond %{HTTP:X-Forwarded-Proto} !https
  RewriteRule ^(.*)$ https://${host}/$1 [R=301,L]
` : ''}</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript application/xml text/xml image/svg+xml
</IfModule>
`,
);

if (pendentes.size) console.log(`Links para artigos ainda não publicados (renderizados como texto): ${[...pendentes].join(', ')}`);
console.log(`Build concluído: ${paginas.length} páginas + 404, sitemap.xml, robots.txt, .htaccess`);

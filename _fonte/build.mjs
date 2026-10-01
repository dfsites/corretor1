// Gera o site estático Corretor 1% na raiz do repositório.
// Uso: node _fonte/build.mjs   (sem dependências externas)

import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { site } from './site.mjs';
import { artigos } from './artigos.mjs';
import { ebooks, cursos } from './produtos.mjs';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
// Pastas geradas pelo build (apagadas e recriadas a cada execução).
const PASTAS_GERADAS = ['sobre', 'cursos', 'mentoria', 'ebooks', 'blog', 'contato', 'politica-de-privacidade'];
const ATUALIZADO = '2026-10-01';

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const abs = (caminho) => site.url + caminho;
const dataBR = (iso) => iso.split('-').reverse().join('/');

const MENU = [
  ['/sobre/', 'O Método'],
  ['/cursos/', 'Cursos'],
  ['/mentoria/', 'Mentoria'],
  ['/ebooks/', 'E-books'],
  ['/blog/', 'Blog'],
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
function layout({ caminho, titulo, descricao, corpo, jsonld = [], tipoOg = 'website', imagem = '/assets/img/og-corretor1.jpg' }) {
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
<title>${esc(tituloCompleto)}</title>
<meta name="description" content="${esc(descricao)}">
<link rel="canonical" href="${abs(caminho)}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#001D23">
<meta property="og:locale" content="pt_BR">
<meta property="og:type" content="${tipoOg}">
<meta property="og:site_name" content="${esc(site.nome)}">
<meta property="og:title" content="${esc(tituloCompleto)}">
<meta property="og:description" content="${esc(descricao)}">
<meta property="og:url" content="${abs(caminho)}">
<meta property="og:image" content="${abs(imagem)}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/assets/img/favicon.png" type="image/png">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<link rel="stylesheet" href="/assets/css/style.css?v=${ATUALIZADO}c">
${schemas}
</head>
<body>
<a class="pular" href="#conteudo">Pular para o conteúdo</a>
<header class="topo">
  <div class="container">
    <a class="marca" href="/" aria-label="${esc(site.nome)} — página inicial">Corretor<span>1%</span></a>
    <button class="menu-botao" type="button" aria-expanded="false" aria-controls="menu">Menu</button>
    <nav aria-label="Principal">
      <ul class="menu" id="menu">${menu}<li><a class="botao" href="/contato/">Fale conosco</a></li></ul>
    </nav>
  </div>
</header>
<main id="conteudo">
${corpo}
</main>
${rodape()}
<script src="/assets/js/site.js?v=${ATUALIZADO}c" defer></script>
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
        <p>Cursos, mentorias individualizadas e e-books para corretores de imóveis que querem fazer parte do 1% que se destaca.</p>
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
      <p>${esc(site.empresa.nome)} · CNPJ ${esc(site.empresa.cnpj)} · ${esc(site.empresa.endereco)}</p>
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

function faixaCta(titulo, texto, assunto) {
  return `<section class="faixa-cta"><div class="container estreito">
  <h2>${esc(titulo)}</h2>
  <p>${esc(texto)}</p>
  <div class="botoes">${botaoContato('Quero fazer parte', assunto)}</div>
</div></section>`;
}

// ---------- Produtos ----------
function cartoesProdutos(lista, tipo) {
  if (!lista.length) {
    const nome = tipo === 'ebook' ? 'e-books' : 'cursos';
    return `<div class="aviso">
  <h3>Novos ${nome} em breve</h3>
  <p>Estamos finalizando os ${nome} Corretor 1%. Fale com a gente para ser avisado em primeira mão do lançamento.</p>
  ${botaoContato('Quero ser avisado', `lançamento dos ${nome}`)}
</div>`;
  }
  return `<div class="grade">${lista
    .map(
      (p) => `<article class="cartao produto">
  ${p.capa ? `<img class="capa" src="${esc(p.capa)}" alt="Capa: ${esc(p.titulo)}" width="300" height="400" loading="lazy">` : ''}
  <h3>${esc(p.titulo)}</h3>
  <p>${esc(p.descricao)}</p>
  ${p.preco ? `<p class="preco">${esc(p.preco)}</p>` : ''}
  ${p.link ? `<a class="botao" href="${esc(p.link)}" rel="noopener" target="_blank">Comprar agora</a>` : botaoContato('Tenho interesse', p.titulo)}
</article>`,
    )
    .join('')}</div>`;
}

function cartoesArtigos(lista) {
  return `<div class="grade">${lista
    .map(
      (a) => `<article class="cartao">
  <span class="tema">${esc(a.tema)}</span>
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
      <a class="botao" href="/mentoria/">Conheça a mentoria</a>
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
    <p class="intro" style="color:#c9cbd2">Cinco pilares que separam o corretor de alta performance da média do mercado.</p>
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
    <p class="intro">Artigos sobre carreira, comissão, captação, vendas e marketing imobiliário.</p>
    ${cartoesArtigos(artigos.slice(0, 3))}
    <p style="margin-top:28px"><a href="/blog/">Ver todos os artigos →</a></p>
  </div>
</section>

${faixaCta('Pronto para fazer parte do 1%?', 'Conte onde você está hoje na carreira e onde quer chegar. Vamos mostrar o caminho.', 'mentoria individualizada')}`,
});

// O Método
paginas.push({
  caminho: '/sobre/',
  titulo: 'O Método Corretor 1%: 5 pilares da alta performance',
  descricao:
    'Conheça o Método Corretor 1%: posicionamento, captação, conversão, rotina e reputação, os pilares dos corretores de imóveis que mais vendem.',
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
${faixaCta('Comece a sua virada', 'Fale com a gente e descubra qual caminho faz mais sentido para o seu momento.', 'Método Corretor 1%')}`,
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
    'Cursos práticos para corretores de imóveis: captação e exclusividade, atendimento e fechamento, comissão, marketing imobiliário e rotina de alta performance.',
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
${faixaCta('Quer saber qual curso começar?', 'Conte o seu momento de carreira e indicamos a trilha certa.', 'cursos Corretor 1%')}`,
});

// Mentoria
const FAQ_MENTORIA = [
  ['A mentoria é individual?', 'Sim. A mentoria Corretor 1% é individualizada: o plano é construído a partir dos seus números, do seu nicho e da sua rotina.'],
  ['Serve para quem está começando?', 'Sim. Para quem está começando, o foco é estruturar nicho, rotina e captação desde cedo, evitando os erros que mais atrasam a carreira.'],
  ['Preciso ter CRECI?', 'Para intermediar negócios, sim, porque a profissão é regulamentada. Se você ainda está em formação, a mentoria pode ajudar a planejar a entrada no mercado.'],
  ['Como faço para participar?', 'Entre em contato pelo botão desta página. Fazemos uma conversa inicial para entender o seu momento e apresentar o formato e o investimento.'],
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
${faixaCta('Vamos conversar sobre a sua carreira?', 'A primeira conversa serve para entender o seu momento e ver se a mentoria é para você.', 'mentoria individualizada')}`,
});

// E-books
paginas.push({
  caminho: '/ebooks/',
  titulo: 'E-books para corretores de imóveis',
  descricao:
    'E-books Corretor 1% para corretores de imóveis: captação, negociação, comissão, marketing e rotina de alta performance, com roteiros e modelos práticos.',
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

// Blog (índice)
paginas.push({
  caminho: '/blog/',
  titulo: 'Blog para corretores de imóveis',
  descricao:
    'Artigos para corretores de imóveis sobre carreira, CRECI, comissão, captação, vendas, marketing imobiliário e rotina de alta performance.',
  jsonld: [ORGANIZACAO, schemaTrilha([['/blog/', 'Blog']])],
  corpo: `${cabecalho({ titulo: 'Blog Corretor 1%', texto: 'Conteúdo prático para corretores de imóveis que querem vender mais e ganhar mais.', trilha: [[null, 'Blog']] })}
<section class="secao"><div class="container">${cartoesArtigos(artigos)}</div></section>`,
});

// Artigos
for (const a of artigos) {
  const caminho = `/blog/${a.slug}/`;
  const outros = artigos.filter((o) => o.slug !== a.slug).slice(0, 3);
  paginas.push({
    caminho,
    titulo: a.titulo,
    descricao: a.descricao,
    tipoOg: 'article',
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
        author: { '@id': abs('/#organizacao') },
        publisher: { '@id': abs('/#organizacao') },
      },
      ORGANIZACAO,
      schemaTrilha([['/blog/', 'Blog'], [caminho, a.h1]]),
    ],
    corpo: `<section class="cabecalho-pagina"><div class="container estreito">
  <p class="trilha"><a href="/">Início</a> › <a href="/blog/">Blog</a> › ${esc(a.tema)}</p>
  <h1>${esc(a.h1)}</h1>
  <p>${esc(a.descricao)}</p>
  <p class="meta-artigo">Publicado em <time datetime="${a.data}">${dataBR(a.data)}</time> · ${esc(a.tema)}</p>
</div></section>
<article class="artigo"><div class="container estreito">
${a.corpo.trim()}
<aside class="caixa-autor">
  <h2>Quer aplicar isso com acompanhamento?</h2>
  <p>Na <a href="/mentoria/">mentoria individualizada Corretor 1%</a> você transforma o conteúdo em plano de ação para a sua realidade.</p>
  ${botaoContato('Falar sobre a mentoria', 'mentoria individualizada')}
</aside>
</div></article>
<section class="secao clara"><div class="container"><h2>Continue lendo</h2>${cartoesArtigos(outros)}</div></section>`,
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
  <p>Este site não possui cadastro nem formulários. Coletamos apenas os dados que você nos envia voluntariamente ao entrar em contato por e-mail${site.contato.whatsapp ? ' ou WhatsApp' : ''}, como nome, telefone, e-mail e o conteúdo da mensagem.</p>
  <h2>Para que usamos</h2>
  <p>Usamos esses dados exclusivamente para responder ao seu contato e apresentar os nossos cursos, mentorias e e-books, com base no seu consentimento e no legítimo interesse, conforme a Lei nº 13.709/2018 (LGPD).</p>
  <h2>Compras</h2>
  <p>As compras de cursos e e-books são processadas por plataformas de pagamento de terceiros, que têm as próprias políticas de privacidade. Não armazenamos dados de cartão neste site.</p>
  <h2>Cookies</h2>
  <p>Este site não utiliza cookies de rastreamento ou publicidade. Se isso mudar, esta política será atualizada.</p>
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

escrever('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${abs('/sitemap.xml')}\n`);

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

console.log(`Build concluído: ${paginas.length} páginas + 404, sitemap.xml, robots.txt, .htaccess`);

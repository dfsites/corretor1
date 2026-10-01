const CC = {
  titulo: 'Código Civil (Lei nº 10.406/2002), art. 1.418 (Planalto)',
  url: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm',
};
const CPC = {
  titulo: 'Código de Processo Civil (Lei nº 13.105/2015), art. 876 (Planalto)',
  url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm',
};
const LRP = {
  titulo: 'Lei nº 6.015/1973 (Registros Públicos), art. 216-B, incluído pela Lei nº 14.382/2022 (Planalto)',
  url: 'https://www.planalto.gov.br/ccivil_03/leis/l6015compilada.htm',
};

export default {
  slug: 'adjudicacao',
  termo: 'Adjudicação',
  titulo: 'Adjudicação: significados no mercado imobiliário',
  h1: 'Adjudicação',
  descricao:
    'Os sentidos de adjudicação no mercado imobiliário: na execução de dívidas, na adjudicação compulsória do promitente comprador e no registro de imóveis.',
  autor: 'daniel-ferreira',
  data: '2026-10-01',
  avisoJuridico: true,
  fontes: [CC, CPC, LRP],
  relacionados: ['/glossario/promessa-de-compra-e-venda/', '/blog/do-aceite-ao-contrato/', '/glossario/penhora/'],
  corpo: `
<h2>O que é</h2>
<p>Adjudicar é atribuir a alguém, por decisão judicial ou por procedimento previsto em lei, a propriedade de um bem. No mercado imobiliário a palavra aparece em pelo menos três situações diferentes, e confundir uma com a outra é causa frequente de mal-entendido.</p>

<h2>Na execução de dívidas</h2>
<p>O art. 876 do Código de Processo Civil permite ao credor (exequente), oferecendo preço não inferior ao da avaliação, requerer que lhe sejam adjudicados os bens penhorados. Em vez de o imóvel ir a leilão, ele passa ao credor como forma de pagamento da dívida.</p>

<h2>Adjudicação compulsória</h2>
<p>O art. 1.418 do Código Civil prevê que o promitente comprador titular de direito real pode exigir do promitente vendedor, ou de terceiros a quem os direitos forem cedidos, a outorga da escritura definitiva; se houver recusa, pode requerer ao juiz a adjudicação do imóvel. É o caminho para quem pagou o preço combinado em uma promessa de compra e venda e não consegue a escritura.</p>
<p>Desde a Lei nº 14.382/2022, o art. 216-B da Lei de Registros Públicos admite a adjudicação compulsória extrajudicial, feita no registro de imóveis da situação do bem, sem prejuízo da via judicial. Entre os documentos exigidos estão o instrumento da promessa ou da cessão e a prova do inadimplemento, e o requerente deve estar representado por advogado.</p>

<h2>Onde aparece na rotina do corretor</h2>
<ul>
  <li>Imóvel que consta como adjudicado na matrícula: a origem da propriedade foi uma decisão ou procedimento, e não uma compra comum.</li>
  <li>Comprador antigo que nunca recebeu a escritura e quer regularizar antes de vender.</li>
  <li>Imóveis oferecidos por credores que os receberam em processos de execução.</li>
</ul>

<h2>O que verificar</h2>
<ul>
  <li>O registro da adjudicação na matrícula e a cadeia de titularidade até o atual vendedor.</li>
  <li>Se há recursos ou pendências no processo que originou a adjudicação.</li>
  <li>Em promessas antigas, se a situação foi regularizada antes de anunciar o imóvel.</li>
</ul>

<h2>Base legal</h2>
<p>Código de Processo Civil, art. 876; Código Civil, art. 1.418; Lei nº 6.015/1973, art. 216-B.</p>
`,
};

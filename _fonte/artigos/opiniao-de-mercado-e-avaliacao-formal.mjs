// Pauta 48 do docs/PLANO-EDITORIAL.md. Satélite do pilar "Preço de mercado".
export default {
  slug: 'opiniao-de-mercado-e-avaliacao-formal',
  titulo: 'Opinião de mercado e avaliação formal (PTAM)',
  h1: 'Opinião de mercado do corretor e avaliação formal (PTAM): diferenças e limites',
  descricao:
    'Diferenças entre a opinião de mercado do corretor, o Parecer Técnico de Avaliação Mercadológica (PTAM) e a avaliação por norma técnica, com seus limites.',
  editoria: 'preco-e-mercado',
  personas: ['desenvolvimento'],
  pilar: 'preco-de-mercado-de-imoveis',
  autor: 'daniel-ferreira',
  data: '2026-10-01',
  avisoJuridico: true,
  fontes: [
    {
      titulo: 'Lei nº 6.530/1978, art. 3º: atribuições do corretor de imóveis (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/l6530.htm',
    },
    {
      titulo: 'Resolução COFECI nº 1.066/2007, com o Ato Normativo COFECI nº 001/2011: CNAI e PTAM (COFECI)',
      url: 'https://intranet.cofeci.gov.br/arquivos/legislacao/docs/Resolucao/2007/Resolucao_COFECI_1066_2007.pdf',
    },
    {
      titulo: 'Código de Defesa do Consumidor (Lei nº 8.078/1990), art. 39, VIII (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm',
    },
    { titulo: 'Cadastro Nacional de Avaliadores Imobiliários (COFECI)', url: 'https://www.cofeci.gov.br/cnai' },
  ],
  corpo: `
<p>Todo corretor que capta imóveis dá opinião sobre preço. Alguns são chamados a produzir um documento formal sobre o valor de um imóvel, para uma partilha, uma ação judicial ou uma decisão de investimento. São trabalhos diferentes, com requisitos, responsabilidades e limites próprios, e confundi-los gera problemas para o cliente e para o profissional.</p>
<p>O pilar <a href="/blog/preco-de-mercado-de-imoveis/">preço de mercado de imóveis</a> apresenta os três níveis de forma resumida e explica como fundamentar uma sugestão de preço. Este artigo aprofunda o que separa a opinião de mercado do Parecer Técnico de Avaliação Mercadológica e da avaliação conforme norma técnica.</p>

<h2>A base legal da opinião de mercado</h2>
<p>A Lei nº 6.530/1978 (art. 3º) atribui ao corretor de imóveis a intermediação na compra, venda, permuta e locação de imóveis e acrescenta que ele pode "opinar quanto à comercialização imobiliária". É dessa atribuição que decorrem tanto a opinião de mercado do dia a dia quanto o Parecer Técnico de Avaliação Mercadológica.</p>
<p>A Resolução COFECI nº 1.066/2007, que regulamenta o PTAM e o Cadastro Nacional de Avaliadores Imobiliários (CNAI), deixa claro, no parágrafo único do art. 1º, que a inscrição no CNAI é opcional e que nada impede o corretor não inscrito de opinar quanto à comercialização imobiliária.</p>

<h2>Opinião de mercado</h2>
<p>É a sugestão de preço que o corretor faz ao proprietário, normalmente na captação ou durante a comercialização. Pode ser apresentada em conversa, por mensagem ou em um relatório simples com os comparáveis utilizados.</p>
<p>Alguns cuidados mantêm a opinião de mercado dentro do seu papel:</p>
<ul>
  <li><strong>Nomeie corretamente.</strong> Não chame a opinião de mercado de laudo, avaliação técnica ou parecer. O nome cria no cliente a expectativa de um documento que ela não é.</li>
  <li><strong>Registre premissas e data.</strong> Indique os comparáveis, as fontes e a data da pesquisa. Uma opinião sem data perde utilidade rapidamente.</li>
  <li><strong>Apresente faixa, não número exato.</strong> A opinião de mercado orienta uma decisão comercial; ela não pretende fixar um valor único.</li>
  <li><strong>Limite a finalidade.</strong> Se o cliente pretende usar a sugestão em processo judicial, partilha ou garantia, a opinião de mercado provavelmente não é o instrumento adequado.</li>
</ul>

<h2>Parecer Técnico de Avaliação Mercadológica (PTAM)</h2>
<h3>O que é</h3>
<p>Segundo o art. 4º da Resolução COFECI nº 1.066/2007, o PTAM é o documento elaborado por corretor de imóveis no qual é apresentada, com base em critérios técnicos, análise de mercado com vistas à determinação do valor de comercialização de um imóvel, judicial ou extrajudicialmente.</p>

<h3>Quem pode elaborar</h3>
<p>O art. 6º permite a elaboração do PTAM a todo corretor de imóveis, pessoa física, regularmente inscrito em Conselho Regional. A pessoa jurídica inscrita pode patrocinar a elaboração do parecer, que deve ser chancelado por corretor pessoa física (parágrafo único do art. 6º).</p>

<h3>O que o parecer deve conter</h3>
<p>O art. 5º lista os requisitos mínimos. Organizados como checklist:</p>
<div class="tabela"><table>
  <thead><tr><th>Item</th><th>Conteúdo mínimo previsto</th></tr></thead>
  <tbody>
    <tr><td>Solicitante e objetivo</td><td>Identificação do solicitante e objetivo do parecer (art. 5º, I e II).</td></tr>
    <tr><td>Caracterização do imóvel</td><td>Identificação do proprietário, número da matrícula no Registro de Imóveis e endereço completo ou descrição detalhada da localização (art. 5º, § 1º).</td></tr>
    <tr><td>Descrição do imóvel</td><td>Medidas perimétricas, área, localização e confrontações; acessórios e benfeitorias; contexto da vizinhança e infraestrutura; aproveitamento econômico; data da vistoria (art. 5º, § 2º).</td></tr>
    <tr><td>Metodologia</td><td>Indicação da metodologia utilizada (art. 5º, IV).</td></tr>
    <tr><td>Resultado</td><td>Valor resultante e sua data de referência (art. 5º, V).</td></tr>
    <tr><td>Responsável</td><td>Identificação, breve currículo e assinatura do corretor avaliador (art. 5º, VI).</td></tr>
    <tr><td>Anexos recomendados</td><td>Mapa de localização, certidão atualizada da matrícula e relatório fotográfico (art. 5º, § 3º).</td></tr>
  </tbody>
</table></div>
<p>A lista mostra a principal diferença prática em relação à opinião de mercado: o PTAM exige vistoria, documentação do imóvel, metodologia declarada e um valor com data de referência, assinado por um profissional identificado.</p>

<h3>CNAI, certificado e selo</h3>
<p>A mesma resolução organiza o Cadastro Nacional de Avaliadores Imobiliários:</p>
<ul>
  <li><strong>Requisitos de inscrição (art. 2º):</strong> ser corretor de imóveis com diploma de curso superior em gestão imobiliária ou equivalente, ou com certificado de conclusão de curso de avaliação imobiliária, aceitos apenas os cursos reconhecidos pelo COFECI. O Conselho Federal pode exigir aprovação prévia em prova de conhecimentos. O Ato Normativo COFECI nº 001/2011, publicado junto com a resolução, detalha esses requisitos.</li>
  <li><strong>Certificado (art. 7º):</strong> o corretor registrado recebe Certificado de Registro de Avaliador Imobiliário, com validade de três anos.</li>
  <li><strong>Selo certificador (arts. 8º e 10):</strong> o corretor inscrito no CNAI tem direito ao selo fornecido pelo Conselho Regional para cada PTAM emitido, vinculado a uma Declaração de Avaliação Mercadológica.</li>
  <li><strong>Arquivo (art. 12):</strong> o avaliador deve manter por cinco anos cópias do parecer, da declaração e do selo, apresentando-as ao Conselho Regional, quando solicitado, em até cinco dias úteis.</li>
  <li><strong>Responsabilidade (art. 14):</strong> a transgressão às regras da resolução pelo inscrito no CNAI é considerada infração ética de natureza grave, nos termos do Código de Ética Profissional.</li>
</ul>
<p>A resolução também prevê taxas para inscrição e para o fornecimento do selo, calculadas sobre o valor da anuidade. Antes de se inscrever, confira no COFECI e no CRECI da sua região as regras e os valores vigentes, porque atos posteriores podem ter atualizado procedimentos.</p>

<h2>Avaliação conforme norma técnica</h2>
<p>A norma brasileira de avaliação de bens é a ABNT NBR 14653, citada nos considerandos da própria Resolução COFECI nº 1.066/2007: a parte 1 trata dos procedimentos gerais, a parte 2 dos imóveis urbanos e a parte 3 dos imóveis rurais. A norma estabelece procedimentos e graus de fundamentação que vão além do que se faz em uma opinião de mercado.</p>
<p>A mesma resolução menciona, ainda nos considerandos, o art. 39, VIII, do Código de Defesa do Consumidor, que veda colocar no mercado de consumo serviço em desacordo com as normas expedidas pelos órgãos oficiais competentes ou, se normas específicas não existirem, pela ABNT ou outra entidade credenciada. Para quem presta serviço de avaliação, isso reforça a importância de conhecer as normas técnicas aplicáveis ao trabalho.</p>
<p>Quando o destinatário do documento (um juízo, uma instituição financeira, um órgão público) exige avaliação conforme norma, ou indica o profissional habilitado para fazê-la, essa exigência define o trabalho. Antes de aceitar o serviço, confirme o que será aceito.</p>

<h2>Qual instrumento usar em cada situação</h2>
<div class="tabela"><table>
  <thead><tr><th>Situação</th><th>Instrumento usual</th><th>Observação</th></tr></thead>
  <tbody>
    <tr><td>Definir preço de anúncio na captação</td><td>Opinião de mercado</td><td>Com pesquisa registrada e faixa de preço.</td></tr>
    <tr><td>Revisar preço durante a venda</td><td>Opinião de mercado atualizada</td><td>Com os números do período de divulgação.</td></tr>
    <tr><td>Cliente precisa de documento sobre o valor de comercialização</td><td>PTAM</td><td>Com os requisitos do art. 5º da Resolução COFECI nº 1.066/2007.</td></tr>
    <tr><td>Juízo, banco ou órgão exige avaliação por norma ou profissional específico</td><td>Conforme a exigência</td><td>Confirmar antes qual documento e qual profissional serão aceitos.</td></tr>
  </tbody>
</table></div>

<h2>Limites e cuidados</h2>
<ul>
  <li><strong>Escopo:</strong> o PTAM trata do valor de comercialização. Não use o documento para afirmar o que ele não analisa, como questões jurídicas da titularidade ou condições estruturais da construção.</li>
  <li><strong>Independência:</strong> se o corretor também intermedeia a venda do imóvel avaliado, informe isso ao solicitante. A transparência sobre o interesse na comercialização protege a credibilidade do documento.</li>
  <li><strong>Data de referência:</strong> o valor vale para a data indicada. Use-o com cautela se o mercado tiver mudado desde então.</li>
  <li><strong>Dados pessoais:</strong> o parecer reúne dados do proprietário e documentos do imóvel. Trate essas informações conforme a <a href="/blog/lgpd-na-rotina-do-corretor/">LGPD na rotina do corretor</a>.</li>
  <li><strong>Conduta profissional:</strong> as regras éticas da profissão valem também para o trabalho de avaliação. Veja <a href="/blog/etica-profissional-na-corretagem/">ética profissional na corretagem</a>.</li>
</ul>

<h2>Erros comuns</h2>
<ul>
  <li>Entregar uma opinião de mercado com o nome de laudo ou parecer.</li>
  <li>Emitir PTAM sem vistoria ou sem a certidão da matrícula.</li>
  <li>Omitir a metodologia ou a data de referência do valor.</li>
  <li>Aceitar um trabalho sem confirmar se o destinatário aceita aquele tipo de documento.</li>
  <li>Deixar de informar que também intermedeia a venda do imóvel avaliado.</li>
  <li>Não guardar cópias do parecer e dos documentos vinculados.</li>
</ul>
<p>Para a rotina de precificação na captação, veja também <a href="/blog/preco-de-anuncio-e-valor-de-mercado/">preço de anúncio, preço de venda e valor de mercado</a> e <a href="/blog/conversa-sobre-preco-com-o-proprietario/">como conversar com o proprietário sobre preço</a>. A perícia e a avaliação também são caminhos de especialização tratados em <a href="/blog/desenvolvimento-profissional-do-corretor/">desenvolvimento profissional do corretor</a>.</p>
`,
};

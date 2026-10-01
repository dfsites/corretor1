export default {
  slug: 'fontes-de-dados-de-mercado',
  titulo: 'Fontes de dados para pesquisa de mercado imobiliário',
  h1: 'Fontes de dados para pesquisa de mercado imobiliário',
  descricao:
    'De onde tirar dados para fundamentar o preço de um imóvel: carteira própria, anúncios, registro de imóveis, bases públicas de ITBI e como avaliar cada fonte.',
  editoria: 'preco-e-mercado',
  personas: ['desenvolvimento'],
  pilar: 'preco-de-mercado-de-imoveis',
  autor: 'daniel-ferreira',
  data: '2026-10-01',
  fontes: [
    {
      titulo: 'Lei nº 6.015/1973: Registros Públicos, art. 176 (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/l6015compilada.htm',
    },
    {
      titulo: 'Prefeitura de São Paulo: dados das transações imobiliárias com recolhimento de ITBI',
      url: 'https://prefeitura.sp.gov.br/web/fazenda/w/acesso_a_informacao/31501',
    },
  ],
  corpo: `
<p>Uma sugestão de preço é tão boa quanto os dados que a sustentam. O pilar <a href="/blog/preco-de-mercado-de-imoveis/">preço de mercado</a> explica como fundamentar a sugestão, e o artigo sobre <a href="/blog/imoveis-comparaveis/">imóveis comparáveis</a> mostra como selecionar e analisar as referências. Este artigo trata de uma etapa anterior: onde buscar os dados, o que cada fonte realmente mostra e quais cuidados ela exige.</p>

<h2>Dois tipos de dado: preço pedido e preço pago</h2>
<p>Antes de qualquer fonte, uma distinção. Quase toda informação disponível sobre imóveis se encaixa em um de dois grupos:</p>
<ul>
  <li><strong>Preço pedido:</strong> o valor que alguém está tentando obter. Aparece em anúncios. Mostra a concorrência, não o fechamento.</li>
  <li><strong>Preço pago:</strong> o valor pelo qual um negócio efetivamente se concluiu. É mais difícil de obter e mais valioso.</li>
</ul>
<p>Uma boa pesquisa combina os dois e deixa claro, para o proprietário, qual é qual. A diferença está detalhada em <a href="/blog/preco-de-anuncio-e-valor-de-mercado/">preço de anúncio, preço de venda e valor de mercado</a>.</p>

<h2>Fonte 1: a sua própria carteira e o seu histórico</h2>
<p>Os negócios que você e sua equipe concluíram são a fonte mais confiável que existe, porque você conhece os detalhes: preço final, forma de pagamento, tempo de comercialização, estado do imóvel, motivo da venda. O problema é o volume: no início da carreira, essa base é pequena.</p>
<p>Por isso vale registrar cada negócio de forma padronizada desde o primeiro, mesmo os de locação. Uma ficha simples com endereço (ou referência), tipo, metragem, características, preço pedido, preço final, condições e datas transforma o seu histórico em base de pesquisa ao longo dos anos. Veja <a href="/blog/crm-para-corretor/">CRM para corretor de imóveis</a>.</p>
<p>Negócios de parceiros e colegas também ajudam, desde que você registre a origem da informação e trate como indício o que não puder confirmar.</p>

<h2>Fonte 2: anúncios ativos e antigos</h2>
<p>Anúncios em portais, sites de imobiliárias e redes mostram o que está à venda agora e por quanto. São a fonte mais farta e a mais sujeita a distorções:</p>
<ul>
  <li>o mesmo imóvel pode aparecer várias vezes, com preços diferentes;</li>
  <li>metragem e características às vezes estão erradas ou incompletas;</li>
  <li>anúncios desatualizados continuam no ar depois da venda;</li>
  <li>o preço anunciado raramente é o preço de fechamento.</li>
</ul>
<p>Anúncios que estão no ar há muito tempo sem venda são úteis por outro motivo: indicam valores que o mercado não está aceitando. Guarde capturas de tela com data dos anúncios que usar, porque eles saem do ar e você pode precisar mostrar a referência depois.</p>

<h2>Fonte 3: o registro de imóveis</h2>
<p>A matrícula do imóvel registra as transmissões de propriedade. Pela Lei nº 6.015/1973 (art. 176, § 1º, III, item 5), entre os requisitos do registro está "o valor do contrato, da coisa ou da dívida". Isso significa que a certidão de matrícula de um imóvel vendido costuma trazer o valor declarado na transmissão.</p>
<p>Cuidados com essa fonte:</p>
<ul>
  <li>o valor registrado é o declarado no título, que pode não refletir integralmente o negócio (por exemplo, quando parte do pagamento foi feita de outra forma);</li>
  <li>há defasagem: o registro acontece depois da assinatura, às vezes meses depois;</li>
  <li>cada certidão tem custo, então ela é mais útil para confirmar comparáveis específicos do que para pesquisas amplas.</li>
</ul>
<p>Os serviços eletrônicos que facilitam pedir certidões estão em <a href="/blog/servicos-eletronicos-de-registro/">matrícula online e serviços eletrônicos de registro</a>.</p>

<h2>Fonte 4: bases públicas municipais de ITBI</h2>
<p>Alguns municípios publicam dados das transações imobiliárias sobre as quais houve recolhimento de ITBI, o imposto municipal sobre a transmissão de imóveis. Quando existe, essa é uma das poucas fontes públicas de valores de negócios concluídos em volume.</p>
<p>Um exemplo é a Prefeitura de São Paulo, que mantém uma página com os "principais dados das Transações Imobiliárias para as quais houve recolhimento de ITBI", com arquivos para download por ano. A própria página informa limitações: as tabelas não trazem transações de imóveis rurais nem aquelas cujo ITBI foi pago por programa de parcelamento incentivado, e houve correções em dados de anos anteriores.</p>
<p>Cuidados ao usar bases de ITBI:</p>
<ul>
  <li><strong>Verifique se o seu município publica.</strong> Muitos não publicam, e os que publicam usam formatos diferentes.</li>
  <li><strong>Leia as notas da própria base.</strong> Elas explicam o que está incluído e o que ficou de fora.</li>
  <li><strong>Entenda qual valor aparece.</strong> A base pode trazer o valor declarado na transação, a base de cálculo do imposto ou ambos. Não são necessariamente a mesma coisa.</li>
  <li><strong>Não identifique pessoas.</strong> Use os dados para analisar valores e regiões, não para expor quem comprou ou vendeu.</li>
</ul>

<h2>Fonte 5: índices e estatísticas</h2>
<p>Índices de preços de imóveis e estatísticas de mercado mostram tendências gerais: se os preços de uma cidade ou região subiram ou caíram em determinado período. São úteis para contextualizar a conversa com o proprietário, por exemplo para explicar por que um negócio de dois anos atrás não serve mais como referência sem ajuste.</p>
<p>Eles não substituem a pesquisa do imóvel específico. Um índice municipal não diz quanto vale um apartamento em uma rua, com uma vista e um estado de conservação determinados. Quando usar um índice, informe a fonte, a metodologia resumida e o período de referência.</p>

<h2>Fonte 6: conhecimento local</h2>
<p>Conversas com outros corretores da região, síndicos, administradoras e moradores trazem informações que não aparecem em nenhuma base: negócios fechados sem anúncio, problemas de um condomínio, obras previstas na vizinhança. Esse conhecimento é parte do que diferencia o corretor que atua há tempo em uma região, tema de <a href="/blog/especializacao-por-regiao/">especialização por região</a>.</p>
<p>Registre a fonte de cada informação e trate como indício o que não puder confirmar por documento.</p>

<h2>Como avaliar cada fonte</h2>
<div class="tabela"><table>
  <thead><tr><th>Fonte</th><th>Mostra</th><th>Confiabilidade</th><th>Principal cuidado</th></tr></thead>
  <tbody>
    <tr><td>Carteira própria</td><td>Preço pago e condições</td><td>Alta</td><td>Volume pequeno no início</td></tr>
    <tr><td>Anúncios</td><td>Preço pedido</td><td>Variável</td><td>Duplicidade e dados errados</td></tr>
    <tr><td>Registro de imóveis</td><td>Valor declarado na transmissão</td><td>Alta quanto ao registro</td><td>Defasagem e valor declarado</td></tr>
    <tr><td>Bases de ITBI</td><td>Transações com imposto recolhido</td><td>Depende do município</td><td>Ler as notas da base</td></tr>
    <tr><td>Índices</td><td>Tendência geral</td><td>Depende da metodologia</td><td>Não serve para o imóvel específico</td></tr>
    <tr><td>Conhecimento local</td><td>Contexto e negócios não anunciados</td><td>Indício</td><td>Confirmar quando possível</td></tr>
  </tbody>
</table></div>

<h2>Registre a pesquisa</h2>
<p>Guarde, junto da ficha do imóvel, as referências usadas, a fonte de cada uma e a data da consulta. Isso permite repetir a pesquisa meses depois, apresentar os dados ao proprietário com transparência e revisar a sugestão de preço quando o mercado mudar. Quando a pesquisa embasa uma revisão, veja <a href="/blog/revisao-de-preco-durante-a-comercializacao/">revisão de preço durante a comercialização</a>.</p>

<h2>Erros comuns</h2>
<ul>
  <li>Usar apenas anúncios e apresentar o resultado como "valor de mercado".</li>
  <li>Misturar preço pedido e preço pago na mesma média.</li>
  <li>Usar dados antigos sem considerar a variação do período.</li>
  <li>Não registrar a fonte e a data das referências.</li>
  <li>Expor dados pessoais de compradores e vendedores obtidos em bases públicas.</li>
</ul>
`,
};

// Pauta 43 do docs/PLANO-EDITORIAL.md. Satélite do pilar "Preço de mercado".
export default {
  slug: 'preco-de-anuncio-e-valor-de-mercado',
  titulo: 'Preço de anúncio, preço de venda e valor de mercado',
  h1: 'Preço de anúncio, preço de venda e valor de mercado: diferenças',
  descricao:
    'A diferença entre preço de anúncio, preço de venda e valor de mercado, e onde entram valor venal, base do ITBI e avaliação do banco na negociação.',
  editoria: 'preco-e-mercado',
  personas: ['iniciante'],
  pilar: 'preco-de-mercado-de-imoveis',
  autor: 'daniel-ferreira',
  data: '2026-10-01',
  fontes: [
    {
      titulo: 'Código Tributário Nacional (Lei nº 5.172/1966), arts. 33 e 38: valor venal no IPTU e no ITBI (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/l5172compilado.htm',
    },
    {
      titulo: 'Decreto nº 81.871/1978, art. 5º: anúncio somente com autorização escrita (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/decreto/antigos/d81871.htm',
    },
  ],
  corpo: `
<p>Um mesmo imóvel costuma ter vários números associados a ele: o valor que o proprietário pede, o valor pelo qual imóveis parecidos foram vendidos, o valor que a prefeitura usa para cobrar impostos e o valor que o banco atribui quando analisa um financiamento. Quando esses números se misturam na conversa, proprietário e comprador tomam decisões com base em referências erradas.</p>
<p>Cada número tem uma finalidade própria, explicada abaixo. A forma de fundamentar a sugestão de preço está no pilar <a href="/blog/preco-de-mercado-de-imoveis/">preço de mercado de imóveis</a>.</p>

<h2>Preço de anúncio</h2>
<p>É o valor pedido pelo proprietário e divulgado em portais, placas e redes sociais. Quem decide o preço de anúncio é o proprietário, idealmente orientado pelo corretor a partir de uma pesquisa de mercado.</p>
<p>Três pontos práticos sobre o preço de anúncio:</p>
<ul>
  <li><strong>Ele não é uma medida de valor.</strong> Mostra uma expectativa. Imóveis anunciados muito acima do mercado podem permanecer meses em divulgação sem receber propostas, e continuam aparecendo nas buscas como se fossem referência.</li>
  <li><strong>Ele costuma incluir uma margem de negociação.</strong> O tamanho dessa margem varia conforme a região, o tipo de imóvel e o momento do mercado. Não existe um percentual que sirva para todos os casos.</li>
  <li><strong>Ele precisa estar autorizado.</strong> O Decreto nº 81.871/1978 (art. 5º) exige contrato escrito de mediação ou autorização escrita antes de qualquer anúncio público do imóvel. O preço divulgado deve ser o que consta dessa autorização. Os detalhes estão em <a href="/blog/autorizacao-de-venda/">autorização de venda</a> e em <a href="/blog/regras-de-publicidade-do-corretor/">regras de publicidade do corretor</a>.</li>
</ul>

<h2>Preço de venda</h2>
<p>É o valor efetivamente pago quando o negócio é concluído. Ele aparece na proposta aceita, no contrato e na escritura. Como referência de mercado, é mais confiável que o preço de anúncio, porque registra o que um comprador de fato aceitou pagar.</p>
<p>Ao usar preços de venda como referência, observe as condições do negócio, e não apenas o número:</p>
<ul>
  <li><strong>Forma de pagamento.</strong> Uma venda à vista e uma venda com parcelamento direto com o vendedor podem ter o mesmo valor nominal e representar negócios diferentes.</li>
  <li><strong>Permuta ou bens na negociação.</strong> Quando parte do pagamento é feita com outro imóvel ou com um veículo, o valor total depende de como esses bens foram considerados.</li>
  <li><strong>Data.</strong> Uma venda de muitos meses atrás pode não refletir o mercado atual.</li>
  <li><strong>Circunstâncias.</strong> Vendas por necessidade urgente, entre parentes ou em situações especiais nem sempre representam condições normais de mercado.</li>
</ul>
<p>Informações sobre negócios de clientes devem ser usadas com cuidado. Na pesquisa, o que importa são as características do imóvel e as condições do negócio, não a identificação das partes. Veja <a href="/blog/lgpd-na-rotina-do-corretor/">LGPD na rotina do corretor</a>.</p>

<h2>Valor de mercado</h2>
<p>É a estimativa do valor pelo qual o imóvel seria negociado em condições normais de mercado, em determinada data. Três características distinguem o valor de mercado dos outros números:</p>
<ol>
  <li><strong>É uma estimativa.</strong> Resulta de pesquisa e análise, não de uma tabela. Por isso, na rotina do corretor, costuma ser apresentado como faixa.</li>
  <li><strong>Tem data de referência.</strong> O mesmo imóvel pode ter valores de mercado diferentes em momentos diferentes.</li>
  <li><strong>Depende do grau de fundamentação.</strong> Pode ser estimado em uma opinião de mercado do corretor, em um Parecer Técnico de Avaliação Mercadológica ou em uma avaliação conforme norma técnica. As diferenças estão em <a href="/blog/opiniao-de-mercado-e-avaliacao-formal/">opinião de mercado e avaliação formal</a>.</li>
</ol>

<h2>Outros valores que aparecem na negociação</h2>
<p>Além dos três conceitos principais, outros números costumam surgir durante uma compra e venda. Eles têm finalidades próprias e não devem ser usados para definir o preço do imóvel.</p>

<h3>Valor venal do IPTU</h3>
<p>É a base de cálculo do imposto predial e territorial urbano (Código Tributário Nacional, art. 33), definida pelo município segundo critérios próprios. Ele serve para a cobrança do imposto e pode ser bem diferente do valor de mercado, para mais ou para menos. Não é referência para precificar um imóvel.</p>

<h3>Base de cálculo do ITBI</h3>
<p>O imposto sobre a transmissão de imóveis é de competência dos municípios e do Distrito Federal. O art. 38 do Código Tributário Nacional define que a base de cálculo é o valor venal dos bens ou direitos transmitidos. Com a redação incluída pela Lei Complementar nº 227/2026, o mesmo artigo passou a estabelecer que:</p>
<ul>
  <li>valor venal, para esse fim, é o valor pelo qual o bem seria negociado à vista, em condições normais de mercado;</li>
  <li>esse valor é estimado por critérios técnicos, como análise de preços praticados no mercado, informações de cartórios e agentes financeiros e características do imóvel;</li>
  <li>os municípios e o Distrito Federal devem divulgar os critérios utilizados, e o contribuinte pode contestar o valor apresentando avaliação contraditória, nos termos da legislação local.</li>
</ul>
<p>O corretor não calcula o imposto. Ele orienta o comprador a consultar a prefeitura sobre o valor que será considerado e os procedimentos locais. As etapas de escritura e registro estão em <a href="/blog/escritura-e-registro/">escritura e registro</a>, e os documentos envolvidos em <a href="/blog/documentos-imobiliarios-basicos/">documentos imobiliários que o corretor precisa conhecer</a>.</p>

<h3>Valor de avaliação do agente financeiro</h3>
<p>Quando há financiamento, a instituição financeira faz a própria avaliação do imóvel. As regras de cada instituição definem como esse valor é considerado na concessão do crédito. Se a avaliação ficar abaixo do preço combinado, o comprador pode precisar complementar o pagamento com recursos próprios ou renegociar. Por isso, em negócios com financiamento, convém tratar essa possibilidade antes de assinar compromissos. Veja <a href="/blog/financiamento-imobiliario-para-corretores/">financiamento imobiliário para corretores</a>.</p>

<h3>Valor declarado na escritura</h3>
<p>É o valor do negócio informado no instrumento de transmissão. Ele deve corresponder ao negócio efetivamente realizado. Declarar valor diferente do praticado pode trazer consequências fiscais e jurídicas para as partes, e o corretor não deve orientar ou participar desse tipo de ajuste.</p>

<h2>Resumo comparativo</h2>
<div class="tabela"><table>
  <thead><tr><th>Valor</th><th>Quem define</th><th>Para que serve</th><th>Cuidado</th></tr></thead>
  <tbody>
    <tr><td>Preço de anúncio</td><td>Proprietário, orientado pelo corretor</td><td>Divulgação do imóvel</td><td>Mostra expectativa, não valor</td></tr>
    <tr><td>Preço de venda</td><td>Acordo entre comprador e vendedor</td><td>Conclusão do negócio; referência de mercado</td><td>Observar condições de pagamento e data</td></tr>
    <tr><td>Valor de mercado</td><td>Estimativa por pesquisa e análise</td><td>Fundamentar a sugestão de preço</td><td>É faixa, com data de referência</td></tr>
    <tr><td>Valor venal do IPTU</td><td>Município</td><td>Cobrança do IPTU</td><td>Não serve para precificar</td></tr>
    <tr><td>Base do ITBI</td><td>Município ou Distrito Federal, por critérios técnicos</td><td>Cálculo do imposto de transmissão</td><td>Confirmar na prefeitura; pode ser contestada</td></tr>
    <tr><td>Avaliação do banco</td><td>Instituição financeira</td><td>Concessão do financiamento</td><td>Pode ficar abaixo do preço combinado</td></tr>
  </tbody>
</table></div>

<h2>Como explicar essas diferenças</h2>
<p>A maior parte das dúvidas aparece em duas situações. Com o proprietário, quando ele compara o próprio imóvel com o anúncio de um vizinho: a resposta é mostrar que anúncio indica expectativa, e que a referência mais segura são os negócios concluídos e o tempo que os imóveis concorrentes estão parados. Com o comprador, quando ele usa o valor venal ou a avaliação de um banco como argumento de preço: a resposta é explicar a finalidade de cada número, sem desqualificar a dúvida.</p>
<p>Em ambos os casos, ter a pesquisa organizada facilita a conversa. A forma de apresentar essa pesquisa ao dono do imóvel está em <a href="/blog/conversa-sobre-preco-com-o-proprietario/">como conversar com o proprietário sobre preço</a>.</p>

<h2>Erros comuns</h2>
<ul>
  <li>Tratar anúncios ativos como se fossem preços de venda.</li>
  <li>Usar o valor venal do IPTU como argumento para baixar ou aumentar o preço.</li>
  <li>Comparar preços de venda sem considerar a forma de pagamento.</li>
  <li>Apresentar o valor de mercado como número exato, sem faixa e sem data.</li>
  <li>Prometer ao comprador que o banco vai avaliar o imóvel pelo preço combinado.</li>
  <li>Divulgar um preço diferente do que foi autorizado pelo proprietário.</li>
</ul>
`,
};

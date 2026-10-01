// Pauta 42 do docs/PLANO-EDITORIAL.md. Pilar da editoria "Preço e mercado".
export default {
  slug: 'preco-de-mercado-de-imoveis',
  titulo: 'Preço de mercado: como o corretor fundamenta o preço',
  h1: 'Preço de mercado: como o corretor fundamenta a sugestão de preço de um imóvel',
  descricao:
    'Como o corretor fundamenta a sugestão de preço de um imóvel: comparáveis, ajustes, faixa de preço e a diferença entre opinião de mercado, PTAM e laudo.',
  editoria: 'preco-e-mercado',
  personas: ['iniciante', 'desenvolvimento'],
  pilar: true,
  autor: 'daniel-ferreira',
  data: '2026-10-01',
  fontes: [
    {
      titulo: 'Lei nº 6.530/1978, art. 3º: atribuições do corretor de imóveis (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/l6530.htm',
    },
    {
      titulo: 'Resolução COFECI nº 1.066/2007: CNAI e Parecer Técnico de Avaliação Mercadológica (COFECI)',
      url: 'https://intranet.cofeci.gov.br/arquivos/legislacao/docs/Resolucao/2007/Resolucao_COFECI_1066_2007.pdf',
    },
    { titulo: 'Cadastro Nacional de Avaliadores Imobiliários (COFECI)', url: 'https://www.cofeci.gov.br/cnai' },
  ],
  corpo: `
<p>O preço é a informação que mais influencia o andamento de uma venda. Um imóvel bem documentado, bem fotografado e bem divulgado continua parado se estiver anunciado muito acima do que o mercado aceita pagar. Por isso, a sugestão de preço não pode ser um palpite: precisa de pesquisa, critério e registro.</p>
<p>A Lei nº 6.530/1978 (art. 3º) atribui ao corretor de imóveis, além da intermediação, a possibilidade de <strong>opinar quanto à comercialização imobiliária</strong>. O desafio é transformar essa opinião em uma sugestão fundamentada e saber onde ela termina e onde começa a avaliação formal.</p>

<h2>Preço de anúncio, preço de venda e valor de mercado</h2>
<p>Três números costumam ser tratados como se fossem o mesmo, e não são:</p>
<div class="tabela"><table>
  <thead><tr><th>Conceito</th><th>O que representa</th><th>Onde aparece</th></tr></thead>
  <tbody>
    <tr><td>Preço de anúncio</td><td>O valor pedido pelo proprietário e divulgado.</td><td>Portais, placas, redes sociais.</td></tr>
    <tr><td>Preço de venda</td><td>O valor efetivamente pago na negociação concluída.</td><td>Proposta aceita, contrato, escritura.</td></tr>
    <tr><td>Valor de mercado</td><td>A estimativa do valor pelo qual o imóvel seria negociado em condições normais de mercado, em determinada data.</td><td>Pesquisa de mercado, parecer técnico, laudo de avaliação.</td></tr>
  </tbody>
</table></div>
<p>A consequência prática é direta: anúncios mostram o que os proprietários <em>pedem</em>, não o que os compradores <em>pagam</em>. Uma pesquisa feita só com anúncios ativos tende a superestimar o valor, porque inclui imóveis que estão justamente parados por estarem caros. A diferença entre os três conceitos está detalhada em <a href="/blog/preco-de-anuncio-e-valor-de-mercado/">preço de anúncio, preço de venda e valor de mercado</a>.</p>

<h2>Opinião de mercado, PTAM e avaliação formal</h2>
<p>O corretor pode fundamentar preço em níveis diferentes de formalidade. Confundir esses níveis gera expectativas erradas no proprietário e, em alguns casos, problemas profissionais.</p>
<div class="tabela"><table>
  <thead><tr><th>Instrumento</th><th>O que é</th><th>Quando costuma ser usado</th></tr></thead>
  <tbody>
    <tr><td>Opinião de mercado</td><td>Sugestão de preço do corretor, apoiada em pesquisa de imóveis semelhantes e no conhecimento da região.</td><td>Captação e acompanhamento de uma venda ou locação.</td></tr>
    <tr><td>Parecer Técnico de Avaliação Mercadológica (PTAM)</td><td>Documento elaborado por corretor de imóveis com análise de mercado baseada em critérios técnicos, com requisitos mínimos definidos pelo COFECI.</td><td>Quando o cliente precisa de um documento formal sobre o valor de comercialização, judicial ou extrajudicialmente.</td></tr>
    <tr><td>Avaliação conforme norma técnica</td><td>Trabalho que segue a norma brasileira de avaliação de bens (ABNT NBR 14653), com procedimentos e graus de fundamentação próprios.</td><td>Situações em que o solicitante, o banco ou o juízo exigem esse padrão.</td></tr>
  </tbody>
</table></div>

<h3>O que diz a Resolução COFECI nº 1.066/2007</h3>
<p>A Resolução COFECI nº 1.066/2007 regulamenta o Cadastro Nacional de Avaliadores Imobiliários (CNAI) e o Parecer Técnico de Avaliação Mercadológica. Alguns pontos do texto disponibilizado pelo COFECI:</p>
<ul>
  <li>O PTAM é definido como o documento elaborado por corretor de imóveis no qual é apresentada, com base em critérios técnicos, análise de mercado com vistas à determinação do valor de comercialização de um imóvel (art. 4º).</li>
  <li>O parecer deve conter, no mínimo: identificação do solicitante, objetivo do parecer, identificação e caracterização do imóvel, metodologia utilizada, valor resultante com data de referência, e identificação, breve currículo e assinatura do corretor avaliador (art. 5º).</li>
  <li>A inscrição no CNAI é opcional e não impede o corretor não inscrito de opinar quanto à comercialização imobiliária (art. 1º, parágrafo único).</li>
  <li>O corretor inscrito no CNAI tem direito ao selo certificador, fornecido pelo Conselho Regional, para cada parecer emitido (art. 8º).</li>
</ul>
<p>A mesma resolução menciona, em seus considerandos, a norma ABNT NBR 14653 (parte 1 para procedimentos gerais, parte 2 para imóveis urbanos e parte 3 para imóveis rurais). Antes de emitir um parecer, confira no COFECI e no CRECI da sua região a versão vigente das normas e os modelos de documento adotados.</p>
<p>Na rotina de captação, o que se faz quase sempre é a opinião de mercado. Ela é útil e legítima, mas não deve ser apresentada como laudo nem como avaliação formal. Se o proprietário precisa de um documento para partilha, processo, garantia ou outra finalidade específica, verifique antes qual tipo de trabalho e qual profissional o destinatário aceita. Os limites entre esses instrumentos estão em <a href="/blog/opiniao-de-mercado-e-avaliacao-formal/">opinião de mercado e avaliação formal</a>.</p>

<h2>Como fundamentar a sugestão de preço, etapa por etapa</h2>

<h3>1. Conheça o imóvel antes de pesquisar</h3>
<p>A pesquisa só é comparável se o imóvel estiver bem descrito. Antes de buscar referências, levante área privativa e total, número de quartos, suítes e vagas, andar e posição, estado de conservação, reformas, áreas comuns, valor de condomínio e de IPTU. Confira se a área construída está averbada na matrícula: uma ampliação não averbada pode afetar a venda e o financiamento do comprador. As informações que vêm da conversa com o dono estão detalhadas em <a href="/blog/entrevista-inicial-com-o-proprietario/">entrevista inicial com o proprietário</a>.</p>

<h3>2. Defina o mercado de referência</h3>
<p>Compare o imóvel com outros que disputam o mesmo comprador: mesma região ou região equivalente, mesmo tipo (apartamento, casa, lote, sala), padrão construtivo semelhante e faixa de área próxima. Um apartamento de três quartos em prédio sem elevador não disputa o mesmo comprador que um de três quartos em condomínio com lazer completo, ainda que fiquem no mesmo bairro.</p>

<h3>3. Reúna imóveis comparáveis</h3>
<p>Procure ao menos algumas referências de cada tipo de fonte disponível:</p>
<ul>
  <li><strong>Negócios concluídos:</strong> são as melhores referências, porque mostram preço pago. Podem vir da sua carteira, de parceiros e, em alguns municípios, de dados públicos de transações.</li>
  <li><strong>Imóveis anunciados há pouco tempo:</strong> mostram a concorrência atual.</li>
  <li><strong>Imóveis anunciados há muito tempo:</strong> indicam o limite que o mercado não está aceitando.</li>
</ul>
<p>Para cada comparável, registre endereço ou condomínio, área, características, preço, data da informação e fonte. Sem esse registro, a pesquisa não pode ser mostrada ao proprietário nem refeita depois. Critérios de seleção estão em <a href="/blog/imoveis-comparaveis/">imóveis comparáveis</a>, e onde buscar os dados, em <a href="/blog/fontes-de-dados-de-mercado/">fontes de dados para pesquisa de mercado</a>.</p>

<h3>4. Ajuste as diferenças</h3>
<p>Nenhum comparável é igual ao imóvel avaliado. O trabalho do corretor é identificar as diferenças relevantes e considerar seu efeito no preço: andar, vista, posição solar, estado de conservação, vagas, lazer, idade do prédio, documentação. Avaliações formais usam procedimentos de tratamento de dados previstos na norma técnica, que vão além deste roteiro. Para a opinião de mercado, o essencial é ser coerente e explicar cada ajuste.</p>
<p><strong>Exemplo simplificado (valores hipotéticos):</strong></p>
<div class="tabela"><table>
  <thead><tr><th>Referência</th><th>Situação</th><th>Área</th><th>Valor</th><th>Valor por m²</th><th>Observação</th></tr></thead>
  <tbody>
    <tr><td>A</td><td>Vendido há 4 meses</td><td>90 m²</td><td>R$ 720.000</td><td>R$ 8.000</td><td>Reformado, andar alto</td></tr>
    <tr><td>B</td><td>Vendido há 6 meses</td><td>85 m²</td><td>R$ 646.000</td><td>R$ 7.600</td><td>Original, andar baixo</td></tr>
    <tr><td>C</td><td>Anunciado há 30 dias</td><td>92 m²</td><td>R$ 782.000</td><td>R$ 8.500</td><td>Reformado, valor pedido</td></tr>
    <tr><td>D</td><td>Anunciado há 8 meses</td><td>88 m²</td><td>R$ 792.000</td><td>R$ 9.000</td><td>Sem propostas, valor pedido</td></tr>
  </tbody>
</table></div>
<p>Se o imóvel avaliado tem 90 m², está em bom estado mas não foi reformado e fica em andar intermediário, as referências A e B delimitam a faixa mais provável de negociação. A referência C mostra o que a concorrência está pedindo, e a D indica um patamar que o mercado não tem aceitado. O exemplo é apenas ilustrativo: valor por metro quadrado não é regra, e imóveis com características diferentes exigem análise própria.</p>

<h3>5. Trabalhe com uma faixa</h3>
<p>O resultado de uma opinião de mercado é mais honesto quando apresentado como faixa: um valor provável de negociação e um preço de anúncio coerente com ele. A distância entre os dois depende da margem de negociação usual na região e do prazo do proprietário. Quem precisa vender rápido deve anunciar mais perto do valor provável de negociação.</p>

<h3>6. Registre a pesquisa</h3>
<p>Guarde a pesquisa com data, fontes e comparáveis utilizados. Ela serve para apresentar a sugestão ao proprietário, para revisar o preço depois de algumas semanas e para responder com clareza se alguém questionar como o valor foi definido.</p>

<h2>O que mais influencia o preço de um imóvel</h2>
<ul>
  <li><strong>Localização:</strong> região, rua, vizinhança, acesso a serviços e transporte.</li>
  <li><strong>Características do imóvel:</strong> área, distribuição dos ambientes, quartos, suítes, vagas, andar, vista e posição solar.</li>
  <li><strong>Estado de conservação e reformas:</strong> com atenção ao que de fato agrega valor ao comprador.</li>
  <li><strong>Condomínio:</strong> infraestrutura, idade do prédio, valor da taxa e situação financeira.</li>
  <li><strong>Documentação:</strong> matrícula regular, área averbada, ausência de pendências que dificultem financiamento.</li>
  <li><strong>Liquidez:</strong> quantos imóveis semelhantes estão à venda e há quanto tempo.</li>
  <li><strong>Condições de pagamento aceitas:</strong> um imóvel que aceita financiamento alcança mais compradores.</li>
</ul>
<p>Cada um desses fatores está explicado em <a href="/blog/caracteristicas-que-influenciam-o-valor/">características que influenciam o valor de um imóvel</a>.</p>

<h2>Erros comuns na sugestão de preço</h2>
<ul>
  <li>Aceitar o valor desejado pelo proprietário sem pesquisa, para não perder a captação.</li>
  <li>Usar apenas anúncios como referência.</li>
  <li>Comparar imóveis de tipologias ou padrões diferentes.</li>
  <li>Aplicar a média de metro quadrado do bairro como se servisse para qualquer imóvel.</li>
  <li>Usar referências antigas sem considerar a mudança do mercado.</li>
  <li>Ignorar a documentação: área não averbada ou pendências podem reduzir o público comprador.</li>
  <li>Apresentar opinião de mercado como se fosse laudo de avaliação.</li>
</ul>

<h2>Da pesquisa à conversa com o proprietário</h2>
<p>A pesquisa só cumpre sua função se for apresentada de forma clara. Mostre os comparáveis, explique as diferenças e deixe registrada a faixa sugerida (o roteiro dessa conversa está em <a href="/blog/conversa-sobre-preco-com-o-proprietario/">como conversar com o proprietário sobre preço</a>). Se o proprietário decidir anunciar acima dela, documente a decisão e combine desde o início um momento para revisar o preço. Esses combinados podem constar da <a href="/blog/autorizacao-de-venda/">autorização de venda</a>, que define preço e condições da comercialização.</p>

<h2>Quando revisar o preço</h2>
<p>Alguns sinais indicam que o preço precisa ser revisto: poucas consultas sobre o anúncio, visitas sem propostas, propostas sempre na mesma faixa abaixo do pedido, ou imóveis semelhantes vendidos por valores menores durante a comercialização. Como conduzir a revisão está em <a href="/blog/revisao-de-preco-durante-a-comercializacao/">revisão de preço durante a comercialização</a>; o acompanhamento desses sinais faz parte da <a href="/blog/como-captar-imoveis/">captação de imóveis</a>.</p>
`,
};

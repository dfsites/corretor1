// Artigos do blog. Cada artigo vira /blog/<slug>/.
//
// Linha editorial (ver docs/PLANO-EDITORIAL.md):
//   biblioteca profissional de corretagem: sóbrio, específico, sem promessas de renda,
//   sem números inventados, sem linguagem de "guru". Lei citada = fonte primária em `fontes`.
//
// Campos:
//   slug, titulo (<= ~55 caracteres; o build acrescenta " | Corretor 1%"), h1, descricao (120 a 160)
//   editoria   id de _fonte/editorias.mjs
//   personas   ['futuro' | 'iniciante' | 'desenvolvimento']
//   pilar      true se for a página principal da editoria; senão, slug do pilar que o artigo reforça
//   autor      id de _fonte/autores.mjs
//   data       publicação original (AAAA-MM-DD)
//   atualizado data da última revisão de conteúdo (opcional; só aparece se for diferente de `data`)
//   avisoJuridico true para conteúdo com base legal (mostra aviso de caráter informativo)
//   fontes     [{ titulo, url }]; preferir Planalto, COFECI, CRECI, STJ, Receita, BCB, Caixa
//   relacionados [slugs] (opcional; senão o build escolhe pela editoria/pilar)
//   corpo      HTML

const PLANALTO_LEI_6530 = {
  titulo: 'Lei nº 6.530/1978: regulamenta a profissão de Corretor de Imóveis (Planalto)',
  url: 'https://www.planalto.gov.br/ccivil_03/leis/l6530.htm',
};
const PLANALTO_DECRETO_81871 = {
  titulo: 'Decreto nº 81.871/1978: regulamenta a Lei nº 6.530/1978 (Planalto)',
  url: 'https://www.planalto.gov.br/ccivil_03/decreto/antigos/d81871.htm',
};
const PLANALTO_CODIGO_CIVIL = {
  titulo: 'Código Civil (Lei nº 10.406/2002), arts. 722 a 729: da corretagem (Planalto)',
  url: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm',
};
const PLANALTO_LGPD = {
  titulo: 'Lei nº 13.709/2018: Lei Geral de Proteção de Dados Pessoais (Planalto)',
  url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm',
};
const COFECI = { titulo: 'Conselho Federal de Corretores de Imóveis (COFECI)', url: 'https://www.cofeci.gov.br/' };

const artigosBase = [
  {
    slug: 'como-ser-corretor-de-imoveis',
    titulo: 'Como se tornar corretor de imóveis: formação e CRECI',
    h1: 'Como se tornar corretor de imóveis: formação, registro no CRECI e início da carreira',
    descricao:
      'O que a lei exige para exercer a corretagem, como funciona a inscrição no CRECI, os modelos de atuação e o que esperar dos primeiros meses na profissão.',
    editoria: 'comecando-na-profissao',
    personas: ['futuro', 'iniciante'],
    pilar: true,
    autor: 'daniel-ferreira',
    data: '2026-10-01',
    fontes: [PLANALTO_LEI_6530, PLANALTO_DECRETO_81871, PLANALTO_CODIGO_CIVIL, COFECI],
    corpo: `
<p>A corretagem de imóveis é uma profissão regulamentada no Brasil. Antes de pensar em clientes e negócios, quem pretende atuar na área precisa cumprir requisitos formais de formação e registro. Este artigo reúne esse caminho e os pontos práticos do início da carreira, para quem está avaliando a profissão ou acabou de obter o registro.</p>

<h2>O que faz um corretor de imóveis</h2>
<p>A <strong>Lei nº 6.530/1978</strong> define, no art. 3º, que compete ao corretor de imóveis exercer a intermediação na compra, venda, permuta e locação de imóveis, podendo ainda opinar quanto à comercialização imobiliária.</p>
<p>No dia a dia, isso se traduz em atividades como:</p>
<ul>
  <li>captar imóveis e formalizar a autorização do proprietário para intermediar;</li>
  <li>pesquisar o mercado e orientar o proprietário sobre preço e condições de venda ou locação;</li>
  <li>divulgar os imóveis e atender os interessados;</li>
  <li>organizar e acompanhar visitas;</li>
  <li>receber, apresentar e negociar propostas;</li>
  <li>acompanhar a documentação até a conclusão do negócio.</li>
</ul>
<p>As atribuições e os limites da profissão estão detalhados em <a href="/blog/o-que-faz-um-corretor-de-imoveis/">o que faz um corretor de imóveis</a>.</p>

<h2>Formação exigida</h2>
<p>Pelo art. 2º da Lei nº 6.530/1978, o exercício da profissão é permitido ao possuidor do título de <strong>Técnico em Transações Imobiliárias (TTI)</strong>. O curso é oferecido por instituições autorizadas, em formato presencial ou a distância.</p>
<p>Outras formações na área imobiliária podem ser aceitas para a inscrição, conforme as normas do sistema COFECI-CRECI. Antes de se matricular em qualquer curso, confirme no CRECI da sua região se aquela formação permite o registro.</p>

<h2>Inscrição no CRECI</h2>
<p>Com a formação concluída, o próximo passo é a inscrição no Conselho Regional de Corretores de Imóveis (CRECI) do estado onde você vai atuar. A lei atribui ao Conselho Federal (COFECI) a regulamentação da inscrição; documentos, taxas e prazos são informados por cada CRECI regional.</p>
<p>Dois pontos merecem atenção desde o início:</p>
<ul>
  <li><strong>O registro é condição para intermediar.</strong> Atuar sem inscrição é exercício irregular da profissão.</li>
  <li><strong>O número de inscrição deve constar de toda propaganda.</strong> O Decreto nº 81.871/1978 (art. 4º) determina que o número do CRECI apareça em toda publicidade e em qualquer impresso relativo à atividade profissional.</li>
</ul>
<p>A manutenção do registro depende do pagamento da anuidade ao conselho. As etapas, os documentos e os custos estão em <a href="/blog/inscricao-no-creci/">inscrição no CRECI</a>.</p>

<h2>Modelos de atuação</h2>
<p>Depois do registro, o corretor escolhe como vai trabalhar. Os modelos mais comuns são:</p>
<ul>
  <li><strong>Associado a uma imobiliária:</strong> a Lei nº 6.530/1978 (art. 6º) prevê que o corretor se associe a imobiliárias por meio de contrato de associação, mantendo sua autonomia profissional. A remuneração é dividida conforme o contrato, e a imobiliária costuma oferecer estrutura, marca e carteira de imóveis.</li>
  <li><strong>Autônomo:</strong> o corretor trabalha com a própria marca, assume os custos de divulgação, deslocamento e ferramentas, e recebe a remuneração integral dos negócios que intermedeia.</li>
  <li><strong>Contratado por empresa:</strong> algumas imobiliárias e incorporadoras contratam corretores com vínculo de trabalho, em condições definidas no contrato.</li>
</ul>
<p>Não existe um modelo melhor para todos. Para quem está começando, trabalhar ligado a uma empresa costuma facilitar o aprendizado dos processos; a atuação autônoma exige carteira de contatos, organização e capacidade de investimento próprias.</p>

<h2>Como funciona a remuneração</h2>
<p>A remuneração do corretor é, em regra, a <strong>comissão de corretagem</strong>, devida quando o resultado previsto no contrato de mediação é alcançado (Código Civil, art. 725). Por isso, a renda é variável e pode levar meses para se estabilizar.</p>
<p>O quanto um corretor recebe depende de muitos fatores, entre eles:</p>
<ul>
  <li>o mercado e a região de atuação;</li>
  <li>o segmento (venda, locação, lançamentos, imóveis rurais);</li>
  <li>o volume e o valor dos negócios concluídos;</li>
  <li>o modelo de atuação e a divisão prevista em contrato;</li>
  <li>o percentual de comissão praticado;</li>
  <li>a experiência e a carteira de relacionamentos;</li>
  <li>a capacidade de gerar oportunidades e de conduzir negociações.</li>
</ul>
<p>Antes de começar, é prudente ter uma reserva financeira para os primeiros meses. Os detalhes sobre comissão estão em <a href="/blog/comissao-de-corretor-de-imoveis/">comissão de corretagem de imóveis</a>.</p>

<h2>Os primeiros meses na profissão</h2>
<ol>
  <li><strong>Defina onde vai atuar.</strong> Uma região ou um tipo de imóvel bem delimitado permite conhecer o estoque e os preços praticados em profundidade.</li>
  <li><strong>Estude a documentação básica.</strong> Matrícula do imóvel, certidões, escritura, registro e tributos da transação aparecem em praticamente todo negócio.</li>
  <li><strong>Registre todos os contatos desde o primeiro dia.</strong> Uma planilha ou um CRM simples evita que oportunidades se percam. Veja <a href="/blog/ferramentas-digitais-do-corretor/">ferramentas digitais do corretor</a>.</li>
  <li><strong>Organize uma rotina.</strong> Sem horário imposto, a organização da semana passa a ser responsabilidade do próprio corretor. Veja <a href="/blog/rotina-de-trabalho-do-corretor-de-imoveis/">rotina de trabalho do corretor de imóveis</a>.</li>
  <li><strong>Aprenda os processos centrais:</strong> <a href="/blog/como-captar-imoveis/">captação de imóveis</a> e <a href="/blog/atendimento-ao-comprador-de-imoveis/">atendimento ao comprador</a>.</li>
</ol>
<p>Um roteiro mais detalhado para esse período está em <a href="/blog/primeiros-passos-depois-do-creci/">primeiros passos depois de obter o CRECI</a>, e os caminhos de especialização ao longo da carreira em <a href="/blog/desenvolvimento-profissional-do-corretor/">desenvolvimento profissional do corretor</a>.</p>
`,
  },
  {
    slug: 'comissao-de-corretor-de-imoveis',
    titulo: 'Comissão de corretagem: regras e formalização',
    h1: 'Comissão de corretagem de imóveis: o que diz a lei, como é definida e como formalizar',
    descricao:
      'Como o Código Civil trata a remuneração do corretor, o papel das tabelas de referência, quem costuma pagar, parcerias e a importância de formalizar por escrito.',
    editoria: 'corretagem-e-comissao',
    personas: ['iniciante', 'desenvolvimento'],
    pilar: true,
    autor: 'daniel-ferreira',
    data: '2026-10-01',
    avisoJuridico: true,
    fontes: [PLANALTO_CODIGO_CIVIL, PLANALTO_LEI_6530, PLANALTO_DECRETO_81871],
    corpo: `
<p>A comissão de corretagem é a forma de remuneração do corretor de imóveis. Boa parte dos conflitos envolvendo comissão nasce de combinações verbais, prazos indefinidos ou parcerias sem registro. Conhecer as regras gerais ajuda a formalizar corretamente cada contratação.</p>

<h2>O contrato de corretagem no Código Civil</h2>
<p>O Código Civil trata da corretagem nos <strong>arts. 722 a 729</strong>. Pelo art. 722, no contrato de corretagem uma pessoa se obriga a obter para outra um ou mais negócios, conforme as instruções recebidas. O art. 723 estabelece que o corretor deve executar a mediação com diligência e prudência e prestar ao cliente as informações sobre o andamento do negócio, inclusive esclarecimentos sobre a segurança ou o risco da operação.</p>

<h2>Quando a comissão é devida</h2>
<ul>
  <li><strong>Resultado alcançado (art. 725):</strong> a remuneração é devida quando o corretor consegue o resultado previsto no contrato de mediação, ainda que o negócio não se efetive em virtude de arrependimento das partes.</li>
  <li><strong>Negócio direto entre as partes (art. 726):</strong> se o negócio é iniciado e concluído diretamente entre as partes, em regra não há comissão. Porém, se a corretagem foi ajustada <strong>por escrito com exclusividade</strong>, o corretor tem direito à remuneração integral mesmo sem a sua mediação, salvo se comprovada sua inércia ou ociosidade.</li>
  <li><strong>Dispensa ou fim do prazo (art. 727):</strong> se o corretor é dispensado, ou se o prazo do contrato termina, e o negócio se realiza depois como fruto do seu trabalho, a corretagem continua devida.</li>
</ul>
<p>A aplicação dessas regras a casos concretos depende das provas e das circunstâncias de cada negociação, e é frequentemente discutida nos tribunais.</p>

<h2>Como o valor é definido</h2>
<p>O art. 724 do Código Civil determina que, se a remuneração não estiver fixada em lei nem ajustada entre as partes, ela será arbitrada segundo a natureza do negócio e os usos locais. Na prática, o percentual é <strong>combinado com o cliente</strong>, normalmente tendo como referência as tabelas de honorários divulgadas por entidades da categoria em cada região.</p>
<p>Essas tabelas variam por estado e por tipo de operação (venda de imóvel urbano, rural, lançamentos, locação, administração). Consulte a referência vigente na sua região e registre o percentual acordado antes de iniciar o trabalho.</p>

<h2>Quem paga a comissão</h2>
<p>Pelo costume do mercado, a comissão é paga por quem contratou o corretor; na venda, normalmente o proprietário. As partes podem combinar de outra forma, desde que isso fique claro e registrado. Deixar essa definição para o momento da assinatura é uma das principais fontes de desentendimento.</p>

<h2>Parcerias e divisão de comissão</h2>
<p>Em parcerias entre corretores (quando um capta o imóvel e outro apresenta o comprador, por exemplo), o art. 728 do Código Civil estabelece que, se o negócio se concluir com a intermediação de mais de um corretor, a remuneração será paga a todos em partes iguais, salvo ajuste em contrário. Por isso, quando a divisão pretendida for outra, ela precisa estar combinada. Registre por escrito, antes do início da negociação, quem participa, qual a função de cada um e o percentual de cada parte. O assunto está detalhado em <a href="/blog/parcerias-entre-corretores/">parcerias entre corretores</a>.</p>

<h2>Formalização da contratação</h2>
<p>Além de proteger a comissão, a formalização é exigência da própria regulamentação profissional:</p>
<ul>
  <li>o Decreto nº 81.871/1978 (art. 5º) estabelece que somente pode anunciar publicamente o corretor que tiver contrato escrito de mediação ou autorização escrita para a alienação do imóvel;</li>
  <li>a Lei nº 6.530/1978 (art. 20, III) veda anunciar publicamente proposta de transação a que o corretor não esteja autorizado por documento escrito.</li>
</ul>
<p>Um documento de autorização deve identificar as partes e o imóvel, as condições de comercialização, o prazo, a existência ou não de exclusividade e a remuneração. O conteúdo recomendado do documento está em <a href="/blog/autorizacao-de-venda/">autorização de venda</a>, e o processo de captação em <a href="/blog/como-captar-imoveis/">captação de imóveis</a>.</p>
`,
  },
  {
    slug: 'como-captar-imoveis',
    titulo: 'Captação de imóveis: processo e exclusividade',
    h1: 'Captação de imóveis: do primeiro contato com o proprietário à autorização de venda',
    descricao:
      'As etapas da captação de imóveis: origem das oportunidades, entrevista com o proprietário, visita, documentos, preço, autorização escrita e exclusividade.',
    editoria: 'captacao',
    personas: ['iniciante', 'desenvolvimento'],
    pilar: true,
    autor: 'daniel-ferreira',
    data: '2026-10-01',
    fontes: [PLANALTO_DECRETO_81871, PLANALTO_LEI_6530, PLANALTO_CODIGO_CIVIL],
    corpo: `
<p>Captar é obter, do proprietário, a autorização para intermediar a venda ou a locação de um imóvel. É uma etapa que define boa parte do trabalho que vem depois: um imóvel com preço coerente, documentação em ordem e proprietário bem informado tende a ter uma comercialização mais organizada.</p>

<h2>O que caracteriza uma boa captação</h2>
<p>Uma carteira extensa não é, por si só, um bom indicador. Imóveis muito acima do valor de mercado, com documentação pendente ou sem autorização formal consomem tempo e investimento em divulgação sem perspectiva de conclusão. Uma boa captação reúne três elementos:</p>
<ul>
  <li>preço compatível com o mercado da região;</li>
  <li>proprietário com motivação e prazo claros;</li>
  <li>documentação conhecida e autorização por escrito.</li>
</ul>

<h2>De onde vêm as captações</h2>
<ul>
  <li><strong>Rede de relacionamento:</strong> pessoas que conhecem o seu trabalho e indicam proprietários.</li>
  <li><strong>Atuação em uma região delimitada:</strong> conhecer os condomínios e as ruas de uma área permite identificar imóveis disponíveis e ser reconhecido localmente, sempre respeitando as regras de cada condomínio.</li>
  <li><strong>Proprietários que anunciam por conta própria:</strong> parte deles busca apoio profissional depois de algum tempo.</li>
  <li><strong>Clientes atendidos anteriormente:</strong> quem comprou ou alugou com você pode vender no futuro ou indicar alguém.</li>
  <li><strong>Presença digital:</strong> conteúdo informativo e um perfil profissional ajudam proprietários a conhecer o seu trabalho antes do contato.</li>
</ul>

<h2>Entrevista inicial com o proprietário</h2>
<p>Antes de discutir preço, entenda a situação do proprietário. Algumas perguntas essenciais:</p>
<ul>
  <li>Por que pretende vender e em que prazo?</li>
  <li>O imóvel está ocupado? Há inquilino?</li>
  <li>Quem são os proprietários que constam na matrícula? Todos estão de acordo com a venda?</li>
  <li>Existe financiamento, inventário ou outra pendência?</li>
  <li>O imóvel já foi anunciado? Por quanto tempo e com quais resultados?</li>
</ul>
<p>O roteiro completo, com o que registrar em cada bloco, está em <a href="/blog/entrevista-inicial-com-o-proprietario/">entrevista inicial com o proprietário</a>.</p>

<h2>Visita de captação e levantamento de informações</h2>
<p>Na visita, registre as características do imóvel com precisão: metragem, número de quartos e vagas, estado de conservação, reformas, posição solar, vista, áreas comuns, valor de condomínio e de IPTU. Fotografe com autorização e anote o que precisa ser verificado em documentos.</p>

<h2>Documentação</h2>
<p>Solicite ou oriente a obtenção da matrícula atualizada e verifique a situação de IPTU e condomínio. Divergências entre o imóvel real e o que consta na matrícula (como área construída não averbada) precisam ser identificadas cedo, porque podem afetar a venda e o financiamento do comprador.</p>

<h2>Preço</h2>
<p>A lei permite ao corretor opinar quanto à comercialização imobiliária (Lei nº 6.530/1978, art. 3º). Fundamente a sugestão de preço com dados: imóveis semelhantes à venda, negócios concluídos na região quando houver informação disponível, e as características específicas do imóvel. Apresente os números ao proprietário de forma clara e combine um momento para revisar o preço caso não haja interesse no período definido. Os critérios para fundamentar essa sugestão estão em <a href="/blog/preco-de-mercado-de-imoveis/">preço de mercado de imóveis</a>.</p>

<h2>Autorização por escrito</h2>
<p>A autorização escrita não é apenas uma boa prática. O Decreto nº 81.871/1978 (art. 5º) estabelece que somente pode anunciar publicamente o corretor que tiver contrato escrito de mediação ou autorização escrita para a alienação do imóvel. O documento deve identificar o imóvel e os proprietários, o preço e as condições, o prazo, a remuneração e se há exclusividade. O conteúdo recomendado está em <a href="/blog/autorizacao-de-venda/">autorização de venda</a>.</p>

<h2>Exclusividade</h2>
<p>Pelo art. 726 do Código Civil, quando a corretagem é ajustada por escrito com exclusividade, o corretor tem direito à remuneração integral ainda que o negócio seja realizado sem a sua mediação, salvo se comprovada sua inércia ou ociosidade. Para o proprietário, a exclusividade faz sentido quando vem acompanhada de compromissos concretos: plano de divulgação, frequência de retorno, prazo definido e relatórios de visitas e propostas.</p>

<h2>Depois da captação</h2>
<p>Mantenha o proprietário informado sobre visitas, retornos dos interessados e propostas recebidas. O relacionamento ao longo da comercialização é o que sustenta conversas difíceis, como a revisão de preço. A divulgação do imóvel é tratada em <a href="/blog/marketing-para-corretor-de-imoveis/">marketing para corretor de imóveis</a> (as regras de anúncio estão em <a href="/blog/regras-de-publicidade-do-corretor/">regras de publicidade do corretor</a>), e a formalização da remuneração em <a href="/blog/comissao-de-corretor-de-imoveis/">comissão de corretagem</a>.</p>
`,
  },
  {
    slug: 'atendimento-ao-comprador-de-imoveis',
    titulo: 'Atendimento ao comprador: do contato ao fechamento',
    h1: 'Atendimento ao comprador de imóveis: do primeiro contato ao fechamento',
    descricao:
      'Como estruturar o atendimento ao comprador de imóveis: primeiro contato, qualificação, seleção de imóveis, visitas, acompanhamento, proposta e conclusão do negócio.',
    editoria: 'atendimento',
    personas: ['iniciante', 'desenvolvimento'],
    pilar: true,
    autor: 'daniel-ferreira',
    data: '2026-10-01',
    fontes: [PLANALTO_CODIGO_CIVIL],
    corpo: `
<p>O atendimento ao comprador vai do primeiro contato até a assinatura e o registro do negócio. Cada etapa tem objetivos próprios, e organizá-las como um processo ajuda o corretor a atender melhor, perder menos oportunidades e identificar onde precisa melhorar.</p>

<h2>1. Primeiro contato</h2>
<p>Quem procura um imóvel costuma falar com mais de um profissional ao mesmo tempo. Responder com prontidão, apresentar-se com nome e número de inscrição no CRECI e fazer as primeiras perguntas de qualificação já na resposta inicial são práticas que organizam o atendimento desde o começo.</p>

<h2>2. Qualificação do comprador</h2>
<p>Antes de selecionar imóveis, entenda a necessidade do cliente:</p>
<ul>
  <li><strong>motivação:</strong> por que pretende comprar;</li>
  <li><strong>prazo:</strong> quando precisa estar no imóvel;</li>
  <li><strong>capacidade de pagamento:</strong> recursos próprios, uso de FGTS, financiamento já aprovado ou a solicitar, necessidade de vender outro imóvel;</li>
  <li><strong>decisores:</strong> quem mais participa da decisão;</li>
  <li><strong>critérios:</strong> o que é indispensável e o que é desejável.</li>
</ul>
<p>Registre essas informações. Elas orientam a seleção de imóveis e evitam visitas sem aderência ao perfil. O roteiro detalhado está em <a href="/blog/qualificacao-do-comprador/">qualificação do comprador</a>.</p>

<h2>3. Seleção de imóveis</h2>
<p>Apresente poucas opções, coerentes com o perfil. Antes de agendar, confirme disponibilidade, preço, condições aceitas pelo proprietário e eventuais pendências de documentação. Sempre que possível, conheça o imóvel pessoalmente antes de levar o cliente.</p>

<h2>4. Visitas</h2>
<p>Combine horários com o proprietário ou responsável, confirme a visita com o cliente e prepare as informações relevantes: metragem, condomínio, IPTU, características da região. Durante a visita, observe as reações e pergunte o que o cliente achou de cada ambiente. Ao final, peça que compare as opções vistas: essa conversa revela o que realmente pesa na decisão. Preparação, condução e registro estão em <a href="/blog/visitas-a-imoveis/">visitas a imóveis</a>.</p>

<h2>5. Acompanhamento após a visita</h2>
<p>Muitos negócios não avançam por falta de acompanhamento, não por recusa do cliente. Registre a próxima ação e a data de cada atendimento em andamento. Cada novo contato deve trazer algo útil: um imóvel compatível, uma informação sobre a documentação, uma atualização sobre condições de pagamento. Veja como organizar esses retornos em <a href="/blog/controle-de-follow-up/">controle de follow-up</a>.</p>

<h2>6. Proposta e negociação</h2>
<ol>
  <li><strong>Formalize a proposta por escrito:</strong> valor, forma de pagamento, prazos, condições e validade.</li>
  <li><strong>Apresente a proposta ao proprietário</strong> com o contexto necessário para que ele avalie: perfil do comprador, forma de pagamento e prazos.</li>
  <li><strong>Considere todas as condições,</strong> não apenas o preço: prazo de entrega das chaves, itens que permanecem no imóvel e cronograma de pagamento também fazem parte do acordo.</li>
  <li><strong>Registre cada contraproposta</strong> para que as duas partes saibam exatamente o que está sendo negociado.</li>
</ol>
<p>A estrutura da proposta escrita e as diferenças entre proposta, contraproposta e contrato estão em <a href="/blog/proposta-de-compra-de-imovel/">proposta de compra de imóvel</a>.</p>

<h2>7. Conclusão do negócio</h2>
<p>O Código Civil (art. 723) determina que o corretor execute a mediação com diligência e prudência e preste ao cliente os esclarecimentos sobre a segurança ou o risco do negócio. Na prática, isso significa acompanhar a verificação da matrícula atualizada e das certidões necessárias, orientar sobre as etapas de escritura e registro e manter as partes informadas até a conclusão.</p>

<h2>Registro e indicadores</h2>
<p>Anote quantos contatos resultam em visitas, quantas visitas resultam em propostas e quantas propostas resultam em negócios. Esses números mostram em que etapa o processo precisa de ajuste. Veja como organizar esse controle em <a href="/blog/rotina-de-trabalho-do-corretor-de-imoveis/">rotina de trabalho do corretor de imóveis</a>.</p>
`,
  },
  {
    slug: 'rotina-de-trabalho-do-corretor-de-imoveis',
    titulo: 'Rotina de trabalho do corretor de imóveis',
    h1: 'Rotina de trabalho do corretor de imóveis: organização da semana e indicadores',
    descricao:
      'Como organizar a semana do corretor de imóveis entre prospecção, captação, atendimento e acompanhamento, e quais indicadores ajudam a avaliar o próprio trabalho.',
    editoria: 'rotina-e-gestao',
    personas: ['iniciante', 'desenvolvimento'],
    pilar: true,
    autor: 'daniel-ferreira',
    data: '2026-10-01',
    corpo: `
<p>A maior parte dos corretores não tem horário definido por um empregador. Essa autonomia exige que o próprio profissional organize a semana; sem isso, o tempo tende a ser consumido por mensagens e demandas imediatas, enquanto atividades que sustentam o trabalho no médio prazo (como captação e acompanhamento) ficam para depois.</p>

<h2>As atividades centrais</h2>
<ol>
  <li><strong>Prospecção:</strong> buscar novos proprietários e interessados.</li>
  <li><strong>Captação:</strong> visitar imóveis, levantar informações e formalizar autorizações.</li>
  <li><strong>Atendimento:</strong> qualificação, visitas, propostas e negociações.</li>
  <li><strong>Acompanhamento:</strong> retorno a clientes em andamento, a proprietários e pós-venda.</li>
</ol>
<p>Divulgação, produção de conteúdo, documentação e estudo são atividades de apoio. São necessárias, mas precisam de espaço próprio na agenda para não ocupar o tempo das atividades centrais.</p>

<h2>Um exemplo de organização semanal</h2>
<p>A distribuição abaixo é apenas um ponto de partida. Ajuste conforme o seu segmento e a disponibilidade dos seus clientes:</p>
<ul>
  <li><strong>Início de cada dia:</strong> revisão da agenda e retorno aos atendimentos em andamento.</li>
  <li><strong>Dois períodos na semana:</strong> prospecção ativa e contato com a rede de relacionamento.</li>
  <li><strong>Dois períodos na semana:</strong> visitas de captação e atualização da carteira.</li>
  <li><strong>Fim da semana:</strong> visitas com compradores, que costumam ter mais disponibilidade nesses dias.</li>
  <li><strong>Um período semanal:</strong> divulgação dos imóveis e produção de conteúdo.</li>
  <li><strong>Um período semanal:</strong> estudo de mercado, legislação e documentação.</li>
</ul>

<h2>Registro de informações</h2>
<p>Uma rotina só funciona se as informações estiverem registradas. Use uma planilha ou um sistema de CRM para manter, em um só lugar, os dados de clientes e proprietários, o histórico de contatos, a próxima ação de cada atendimento e a situação de cada imóvel e proposta. As ferramentas para isso estão em <a href="/blog/ferramentas-digitais-do-corretor/">ferramentas digitais do corretor</a>, e a organização dos retornos em <a href="/blog/controle-de-follow-up/">controle de follow-up</a>.</p>

<h2>Indicadores</h2>
<p>Separe dois tipos de indicador:</p>
<ul>
  <li><strong>De atividade</strong> (o que depende diretamente de você): contatos de prospecção, visitas de captação, visitas com compradores, propostas encaminhadas.</li>
  <li><strong>De conversão</strong> (a relação entre as etapas): quantos contatos geram visitas, quantas visitas geram propostas, quantas propostas resultam em negócio.</li>
</ul>
<p>Depois de algumas semanas de registro, esses números mostram onde o processo perde oportunidades. Por exemplo, muitas visitas e poucas propostas indicam que vale revisar a qualificação dos clientes ou a seleção de imóveis.</p>

<h2>Proteção dos períodos de trabalho</h2>
<p>Durante os períodos de prospecção e captação, reduza interrupções: silencie notificações que não sejam de negociações em andamento e responda às demais mensagens em horários definidos.</p>

<h2>Revisão periódica</h2>
<p>Uma vez por mês, revise os indicadores, a carteira de imóveis e os atendimentos parados. Ajuste a distribuição da semana com base no que os números mostram. Inclua também períodos de descanso: uma rotina sustentável ao longo do tempo é mais útil do que semanas intensas seguidas de interrupções.</p>
<p>Leia também: <a href="/blog/atendimento-ao-comprador-de-imoveis/">atendimento ao comprador de imóveis</a> e <a href="/blog/como-captar-imoveis/">captação de imóveis</a>.</p>
`,
  },
  {
    slug: 'marketing-para-corretor-de-imoveis',
    titulo: 'Marketing para corretor de imóveis: presença e anúncios',
    h1: 'Marketing para corretor de imóveis: posicionamento, presença digital, anúncios e reputação',
    descricao:
      'Como o corretor pode organizar a presença digital, produzir anúncios corretos e informativos, respeitar as regras de publicidade da profissão e construir reputação.',
    editoria: 'marketing',
    personas: ['iniciante', 'desenvolvimento'],
    pilar: true,
    autor: 'daniel-ferreira',
    data: '2026-10-01',
    fontes: [PLANALTO_DECRETO_81871, PLANALTO_LEI_6530, PLANALTO_LGPD],
    corpo: `
<p>Antes do primeiro contato, o cliente costuma ver um anúncio, um perfil profissional ou um conteúdo publicado pelo corretor. Marketing, para o corretor de imóveis, é organizar essa presença de forma profissional, correta e coerente com a sua área de atuação.</p>

<h2>Posicionamento</h2>
<p>Defina com clareza em que você atua: uma região, um tipo de imóvel, uma faixa de preço ou um perfil de cliente. Essa definição orienta o conteúdo que você produz, os imóveis que capta e a forma como se apresenta. Um corretor com atuação delimitada é mais facilmente associado a um assunto e a um lugar.</p>

<h2>Presença digital</h2>
<ul>
  <li><strong>Perfil profissional:</strong> nome, foto nítida, área de atuação, número de inscrição no CRECI e forma de contato.</li>
  <li><strong>Perfil de empresa no Google:</strong> para quem atende em uma região, ajuda clientes a encontrar o corretor em buscas locais.</li>
  <li><strong>Site próprio:</strong> reúne imóveis, conteúdo e contato em um endereço que não depende de uma única rede social.</li>
  <li><strong>Redes sociais:</strong> funcionam melhor com regularidade possível de manter do que com períodos intensos seguidos de ausência.</li>
</ul>

<h2>Conteúdo informativo</h2>
<p>Conteúdo que responde dúvidas reais (documentação, etapas da compra, financiamento, custos da transação, características da região) tende a atrair pessoas com interesse concreto e demonstra conhecimento. Evite promessas e afirmações que não possa comprovar.</p>

<h2>Anúncios de imóveis</h2>
<ol>
  <li><strong>Fotografias:</strong> luz natural, ambientes organizados, enquadramento horizontal, sem distorções que alterem a percepção do imóvel.</li>
  <li><strong>Título:</strong> tipo de imóvel, localização e o principal diferencial.</li>
  <li><strong>Descrição:</strong> metragem, quartos, vagas, valor de condomínio e IPTU, estado de conservação e pontos de interesse próximos, com informações corretas.</li>
  <li><strong>Preço:</strong> coerente com o mercado e com o que foi autorizado pelo proprietário.</li>
</ol>

<h2>Regras de publicidade da profissão</h2>
<p>A regulamentação da profissão traz exigências específicas para a publicidade:</p>
<ul>
  <li>o número de inscrição do corretor ou da pessoa jurídica deve constar de toda propaganda e de qualquer impresso relativo à atividade profissional (Decreto nº 81.871/1978, art. 4º; Lei nº 6.530/1978, art. 20, IV);</li>
  <li>somente pode anunciar publicamente o corretor que tiver contrato escrito de mediação ou autorização escrita do proprietário (Decreto nº 81.871/1978, art. 5º);</li>
  <li>no anúncio de imóvel loteado ou em condomínio, deve constar o número do registro do loteamento ou da incorporação no Registro de Imóveis (Lei nº 6.530/1978, art. 20, V).</li>
</ul>
<p>Consulte também as orientações do CRECI da sua região sobre publicidade. O tema está detalhado em <a href="/blog/regras-de-publicidade-do-corretor/">regras de publicidade do corretor</a>.</p>

<h2>Dados pessoais de clientes</h2>
<p>Formulários, listas de contatos e conversas por mensagem envolvem dados pessoais. A Lei Geral de Proteção de Dados (Lei nº 13.709/2018) exige que esses dados sejam tratados para finalidades legítimas e informadas ao titular, com segurança e com base legal adequada. Colete apenas o necessário e guarde as informações de forma protegida. Veja <a href="/blog/lgpd-na-rotina-do-corretor/">LGPD na rotina do corretor</a>.</p>

<h2>Reputação</h2>
<p>Avaliações reais de clientes, histórico de atendimentos bem conduzidos e presença consistente na região de atuação constroem reputação ao longo do tempo. Peça avaliações apenas a quem foi efetivamente atendido e nunca publique depoimentos que não sejam autênticos.</p>
<p>Leia também: <a href="/blog/como-captar-imoveis/">captação de imóveis</a>.</p>
`,
  },
];

// Artigos novos: um módulo por artigo em _fonte/artigos/<slug>.mjs (export default { ... }).
// Ordem: os 6 primeiros artigos e, depois, os módulos em ordem alfabética de arquivo.
import { readdirSync } from 'node:fs';
const pastaModulos = new URL('./artigos/', import.meta.url);
const modulos = readdirSync(pastaModulos)
  .filter((f) => f.endsWith('.mjs'))
  .sort();
const artigosModulos = await Promise.all(modulos.map((f) => import(new URL(f, pastaModulos)).then((m) => m.default)));
for (const [i, a] of artigosModulos.entries()) {
  if (`${a.slug}.mjs` !== modulos[i]) throw new Error(`Arquivo ${modulos[i]} tem slug "${a.slug}"`);
}

export const artigos = [...artigosBase, ...artigosModulos];
if (new Set(artigos.map((a) => a.slug)).size !== artigos.length) throw new Error('Slug de artigo duplicado');

// URLs antigas de artigos que mudaram de endereço (301 no .htaccess).
export const redirecionamentosBlog = [
  ['/blog/como-vender-mais-imoveis/', '/blog/atendimento-ao-comprador-de-imoveis/'],
  ['/blog/rotina-do-corretor-de-alta-performance/', '/blog/rotina-de-trabalho-do-corretor-de-imoveis/'],
];

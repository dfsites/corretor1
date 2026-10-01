// Editorias do blog, na ordem da trilha de estudo.
// A página /blog/categoria/<id>/ só é gerada quando a editoria tem MIN_ARTIGOS_CATEGORIA ou mais artigos;
// antes disso, a editoria aparece como seção (âncora #<id>) no índice do blog.

export const MIN_ARTIGOS_CATEGORIA = 3;

export const editorias = [
  {
    id: 'comecando-na-profissao',
    nome: 'Começando na profissão',
    descricao: 'Formação, registro no CRECI, modelos de atuação e os primeiros meses de quem está entrando na corretagem.',
  },
  {
    id: 'carreira',
    nome: 'Carreira e desenvolvimento',
    descricao: 'Especialização, ética profissional, reputação, parcerias e formação continuada.',
  },
  {
    id: 'captacao',
    nome: 'Captação de imóveis',
    descricao: 'Do primeiro contato com o proprietário à autorização de venda, exclusividade e organização da carteira.',
  },
  {
    id: 'preco-e-mercado',
    nome: 'Preço e mercado',
    descricao: 'Formação do preço, pesquisa de mercado, imóveis comparáveis e a conversa sobre preço com o proprietário.',
  },
  {
    id: 'atendimento',
    nome: 'Atendimento ao cliente',
    descricao: 'Primeiro contato, qualificação, registro de preferências e acompanhamento de compradores e locatários.',
  },
  {
    id: 'visitas',
    nome: 'Visitas',
    descricao: 'Preparação, condução e registro de visitas a imóveis, com atenção à segurança.',
  },
  {
    id: 'negociacao',
    nome: 'Negociação',
    descricao: 'Propostas, contrapropostas, condições de pagamento e formalização do que foi negociado.',
  },
  {
    id: 'corretagem-e-comissao',
    nome: 'Corretagem e comissão',
    descricao: 'Contrato de corretagem, comissão, parcerias e formalização da contratação do corretor.',
  },
  {
    id: 'rotina-e-gestao',
    nome: 'Rotina e gestão',
    descricao: 'Organização da semana, registro de contatos, indicadores, carteira e documentação.',
  },
  {
    id: 'marketing',
    nome: 'Marketing e posicionamento',
    descricao: 'Presença digital, anúncios, fotografia, regras de publicidade e reputação.',
  },
  {
    id: 'tecnologia',
    nome: 'Tecnologia',
    descricao: 'CRM, assinatura eletrônica, segurança de dados, LGPD e ferramentas de apoio, incluindo inteligência artificial.',
  },
];

export const personas = {
  futuro: 'Quem quer ser corretor',
  iniciante: 'Corretor iniciante',
  desenvolvimento: 'Corretor em atividade',
};

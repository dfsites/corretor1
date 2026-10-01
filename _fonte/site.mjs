// Configuração central do site Corretor 1%.
// Altere aqui e rode `node _fonte/build.mjs` para regenerar as páginas.

export const site = {
  nome: 'Corretor 1%',
  // URL canônica (https + www, definida pelo proprietário em 2026-10-01).
  // O .htaccess redireciona http e o domínio sem www para cá.
  url: 'https://www.corretor1.com.br',
  idioma: 'pt-BR',
  chamada: 'Faça parte da elite do mercado imobiliário!',
  subchamada:
    'Alcance a Excelência: Integrando ao Grupo de Elite que Representa 1% dos Corretores de imóveis com Alto Desempenho em Vendas e Comissões!',
  descricao:
    'Formação, conteúdo e materiais profissionais para corretores de imóveis que querem aprimorar carreira, processos e atuação no mercado.',
  autor: {
    nome: 'Daniel Ferreira',
    slug: 'daniel-ferreira',
    descricao: 'Autor principal do blog Corretor1.',
  },
  // Empresa responsável (mesmo padrão de rodapé do Guia Gramado e do 4D).
  empresa: {
    nome: '4D Desenvolvimento Pessoal Ltda.',
    cnpj: '49.142.726/0001-58',
    endereco: 'Av. Prefeito Osmar Cunha, 416 · Florianópolis/SC · CEP 88015-100',
  },
  contato: {
    // Confirmado pelo proprietário em 2026-10-01.
    email: 'contato@corretor1.com.br',
    // Número com DDI e DDD, só dígitos (ex.: '5561999999999'). Vazio = botão de WhatsApp oculto.
    whatsapp: '',
    instagram: '', // ex.: 'https://www.instagram.com/corretor1'
  },
};

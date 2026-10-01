// Configuração central do site Corretor 1%.
// Altere aqui e rode `node _fonte/build.mjs` para regenerar as páginas.

export const site = {
  nome: 'Corretor 1%',
  // Enquanto o certificado SSL do domínio não estiver válido, a URL canônica fica em http.
  // Quando o https funcionar, troque para 'https://corretor1.com.br' e rode o build.
  url: 'http://corretor1.com.br',
  idioma: 'pt-BR',
  chamada: 'Faça parte da elite do mercado imobiliário!',
  subchamada:
    'Alcance a Excelência: Integrando ao Grupo de Elite que Representa 1% dos Corretores de imóveis com Alto Desempenho em Vendas e Comissões!',
  descricao:
    'Cursos, mentorias individualizadas e e-books para corretores de imóveis que querem alto desempenho em vendas e comissões.',
  contato: {
    // Confirmar se esta caixa de e-mail existe na hospedagem.
    email: 'contato@corretor1.com.br',
    // Número com DDI e DDD, só dígitos (ex.: '5561999999999'). Vazio = botão de WhatsApp oculto.
    whatsapp: '',
    instagram: '', // ex.: 'https://www.instagram.com/corretor1'
  },
};

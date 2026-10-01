// Produtos à venda: e-books e cursos.
// Para publicar um produto, adicione um objeto à lista e rode o build.
// Lista vazia = o site mostra o aviso "em breve" com convite para entrar em contato.
//
// Campos:
//   titulo     (obrigatório) nome do produto
//   descricao  (obrigatório) uma ou duas frases sobre o que o corretor aprende
//   preco      texto livre, ex.: 'R$ 47,00' (opcional)
//   link       URL de compra (Hotmart, Kiwify, Eduzz, checkout próprio etc.)
//   capa       caminho da imagem, ex.: '/assets/img/ebooks/captacao.webp' (opcional, proporção 3:4)
//   destaque   true para aparecer na página inicial
//
// Exemplo:
// {
//   titulo: 'Captação de Exclusividade',
//   descricao: 'Roteiro para conquistar imóveis exclusivos e valorizar sua comissão.',
//   preco: 'R$ 47,00',
//   link: 'https://pay.exemplo.com/abc',
//   capa: '/assets/img/ebooks/captacao.webp',
//   destaque: true,
// },

export const ebooks = [];

export const cursos = [];

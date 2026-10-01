// Autores do blog. Página: /autor/<id>/
//
// Regra: só dados publicados pelo próprio autor. Fontes usadas (consultadas em 2026-10-01):
//   - https://danielferreiracorretor.com/sobre
//   - https://www.kitcontratosimobiliarios.com.br/ (seção "Quem escreveu")
// Não acrescentar títulos, números ou conquistas sem fonte do próprio autor.

export const autores = {
  'daniel-ferreira': {
    nome: 'Daniel Ferreira',
    cargo: 'Corretor de imóveis e perito avaliador',
    resumo:
      'Corretor de imóveis em Brasília desde 2007, perito avaliador e administrador. Fundador da Daniel Ferreira Imóveis e autor dos artigos do Corretor 1%.',
    // Parágrafos da biografia (página do autor).
    bio: [
      'Daniel Ferreira é corretor de imóveis desde 2007, em Brasília (DF). Iniciou a carreira em construtoras, atuando com lançamentos e imóveis prontos: apartamentos, casas, lotes em condomínios fechados, salas e lojas comerciais.',
      'Em 2013 passou a atuar de forma autônoma e, em 2017, fundou a Daniel Ferreira Imóveis. Concentra o trabalho na região sul de Brasília (Jardim Botânico, Lago Sul, DF-140 e Alphaville), com compra e venda, captação, negociação, locação, administração de imóveis, avaliação e documentação.',
      'É perito avaliador, bacharel em Administração e pós-graduado em Direito Imobiliário e Condominial. Antes do mercado imobiliário, trabalhou na área de tecnologia da informação, como programador e desenvolvedor web.',
    ],
    // Registros PESSOAIS (pessoa física). Registro de empresa vai em `empresa`, nunca aqui.
    registros: [
      'Corretor de imóveis: CRECI-DF 12.668',
      'Perito avaliador: CNAI 27.316',
      'Administrador: CRA-DF 31.440',
    ],
    // Empresa da qual o autor é sócio. CRECI-J é registro de pessoa jurídica.
    empresa: {
      nome: 'Daniel Ferreira Imóveis',
      registro: 'CRECI-J/DF 30.400',
      vinculo: 'sócio-proprietário',
    },
    formacao: ['Bacharel em Administração', 'Pós-graduado em Direito Imobiliário e Condominial'],
    regiao: 'Brasília/DF',
    desde: '2007',
    // Perfis e sites do próprio autor (schema.org sameAs).
    sameAs: [
      'https://danielferreiracorretor.com/sobre',
      'https://www.facebook.com/danielferreiraimoveisdf/',
      'https://twitter.com/danielf_imoveis',
    ],
    foto: '', // ex.: '/assets/img/autores/daniel-ferreira.webp' (quadrada). Vazio = sem foto.
  },
};

# Projeto

Nome: Corretor 1% (corretor1.com.br)
Domínio: corretor1.com.br
Pasta: --corretor-1-novo
Categoria: CORRETORES
Grupo: CORRETORES
Objetivo: vender cursos e mentorias individualizadas para corretores de imóveis que querem alto desempenho em vendas e comissões (decisão do proprietário, 2026-10-01)
Público: corretores de imóveis (não o cliente comprador/vendedor de imóvel)
Modelo de monetização: cursos e mentorias individualizadas
Intenção principal: atrair corretores via conteúdo (SEO) e converter para cursos/mentorias
Região: Brasil (conteúdo nacional, sem foco regional)
Idioma: pt-BR
Stack: HTML estático gerado por Node sem dependências (`_fonte/build.mjs`) — escolhido com carta branca do proprietário em 2026-10-01
Framework: nenhum
Template/base: próprio (layout azul-marinho + dourado); imagem do topo reaproveitada do site antigo a pedido do proprietário
Status: EM DESENVOLVIMENTO — nova versão pronta para publicar

## Conceito da marca

"Corretor 1%" = o 1% dos corretores de imóveis que se destaca. A marca vende o caminho para fazer parte dessa elite.

Chamada principal (definida pelo proprietário — usar literalmente na home):

> **Faça parte da elite do mercado imobiliário!**
> Alcance a Excelência: Integrando ao Grupo de Elite que Representa 1% dos Corretores de imóveis com Alto Desempenho em Vendas e Comissões!

## Objetivo atual

Refazer o site (hoje no ar com template de ONG não personalizado) e começar a ranquear no Google com conteúdo para corretores.

## Arquitetura atual

Ver README.md. Fontes em `_fonte/` (site.mjs, produtos.mjs, artigos.mjs, build.mjs, verificar.mjs); saída na raiz do repositório. Publicação via GitHub (DEPLOY.md).

## Estrutura implementada

- Home com a chamada principal e CTA para cursos/mentoria
- Sobre / Método Corretor 1%
- Cursos
- Mentoria individualizada
- Blog por temas: carreira, comissão, captação, vendas, marketing, produtividade do corretor
- Contato, Política de Privacidade, sitemap

## Projetos relacionados

- corretor50k.com.br — papel A verificar. Como o corretor1 também venderá e-books (decisão de 2026-10-01), o risco de canibalização com o corretor50k aumentou: definir papéis antes de iniciar o corretor50k e evitar os mesmos termos-alvo.
- corretordf.com.br — foco provável no cliente final em DF; não concorre se o corretor1 mantiver o público "corretores".

## Decisões importantes identificadas

- 2026-10-01: público = corretores; monetização = cursos e mentorias individualizadas; chamada principal definida (acima).
- 2026-10-01: proprietário deu carta branca para estrutura, design e conteúdo; manter a imagem do topo do site antigo; reservar espaço para venda de e-books.
- E-books e cursos são vendidos por plataforma externa (link de compra em `_fonte/produtos.mjs`); o site não usa banco de dados.

## Próxima etapa

Publicar; configurar contato (WhatsApp/e-mail); cadastrar e-books; ativar SSL.

## Observações

Não transformar hipóteses em fatos: campos marcados "A verificar" ou "A DEFINIR" não foram confirmados.

# Corretor 1% — corretor1.com.br

Site de cursos, mentorias individualizadas e e-books para corretores de imóveis.

Site estático (HTML + CSS) gerado por um script Node sem dependências. A raiz do repositório **é** o site publicado.

## Comandos

Capas de compartilhamento (rodar ao publicar texto novo ou mudar um h1; requer Python com Pillow): `node _fonte/gerar_capas.mjs`.

```bash
node _fonte/build.mjs      # gera as páginas, sitemap.xml, robots.txt e .htaccess
node _fonte/verificar.mjs  # confere links, títulos, descrições, h1 e JSON-LD
```

Requer Node 18+. Não há `npm install`.

## Onde editar

| O quê | Arquivo |
|---|---|
| Nome, chamada, URL, e-mail, WhatsApp, Instagram | `_fonte/site.mjs` |
| E-books e cursos à venda | `_fonte/produtos.mjs` |
| Artigos do blog | `_fonte/artigos.mjs` |
| Autores (bio, registros) | `_fonte/autores.mjs` |
| Editorias e personas | `_fonte/editorias.mjs` |
| Planejamento editorial (interno) | `docs/PLANO-EDITORIAL.md` |
| Páginas, layout, menu, rodapé | `_fonte/build.mjs` |
| Visual | `assets/css/style.css` |

**Não edite os `.html` gerados nem o `.htaccess`.** Eles são sobrescritos a cada build.

## Como adicionar um e-book

1. Coloque a capa em `assets/img/ebooks/` (proporção 3:4, de preferência `.webp`).
2. Adicione um item em `ebooks` no arquivo `_fonte/produtos.mjs`, com título, descrição, preço, link de compra e capa.
3. Rode `node _fonte/build.mjs` e `node _fonte/verificar.mjs`.
4. Faça commit e push na branch `main`.

## Como adicionar um artigo

Siga `docs/PLANO-EDITORIAL.md` (linha editorial, pautas, anti-canibalização). Cada artigo novo é um módulo em `_fonte/artigos/<slug>.mjs` (`export default { ... }`; o nome do arquivo deve ser igual ao `slug`). Campos: `slug`, `titulo` (até ~55 caracteres), `h1`, `descricao` (120 a 160), `editoria`, `personas`, `pilar` (`true` ou slug do pilar), `autor`, `data`, `atualizado` (só em revisão real), `avisoJuridico`, `fontes` e `corpo` (HTML; tabelas dentro de `<div class="tabela">`). Os 6 primeiros artigos ficam em `_fonte/artigos.mjs`. O build gera byline, schema, relacionados, satélites no pilar e, quando a editoria chegar a 3 artigos, a página de categoria. Trilhas de "Por onde começar" ficam em `_fonte/editorias.mjs`. Se um slug mudar, registre o 301 em `redirecionamentosBlog`.

O verificador barra travessões e termos vetados no texto editorial e links externos que não sejam de fontes oficiais (.gov.br, .jus.br, .leg.br).

## Publicação

Push na branch `main` de `github.com/dfsites/corretor1` publica o site (ver `DEPLOY.md`).

# Corretor 1% — corretor1.com.br

Site de cursos, mentorias individualizadas e e-books para corretores de imóveis.

Site estático (HTML + CSS) gerado por um script Node sem dependências. A raiz do repositório **é** o site publicado.

## Comandos

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
| Páginas, layout, menu, rodapé | `_fonte/build.mjs` |
| Visual | `assets/css/style.css` |

**Não edite os `.html` gerados nem o `.htaccess`.** Eles são sobrescritos a cada build.

## Como adicionar um e-book

1. Coloque a capa em `assets/img/ebooks/` (proporção 3:4, de preferência `.webp`).
2. Adicione um item em `ebooks` no arquivo `_fonte/produtos.mjs`, com título, descrição, preço, link de compra e capa.
3. Rode `node _fonte/build.mjs` e `node _fonte/verificar.mjs`.
4. Faça commit e push na branch `main`.

## Como adicionar um artigo

Adicione um objeto em `_fonte/artigos.mjs` com `slug`, `titulo` (até ~55 caracteres), `h1`, `descricao` (120–160 caracteres), `tema`, `data` e `corpo` (HTML). Público: corretores de imóveis. Não invente números.

## Publicação

Push na branch `main` de `github.com/dfsites/corretor1` publica o site (ver `DEPLOY.md`).

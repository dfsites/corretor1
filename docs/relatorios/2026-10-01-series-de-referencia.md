# Relatório: séries de referência (seção 6 do plano editorial)

Data: 2026-10-01 · Glossário (`/glossario/`), Documentos explicados (`/documentos/`), Legislação comentada (`/legislacao/`) e Perguntas de quem quer ser corretor (blog). Publicação em blocos, à medida que cada agente termina.

## Infraestrutura

- `_fonte/colecoes.mjs`: configuração das séries e carregamento de `_fonte/<serie>/<slug>.mjs`.
- `build.mjs`: índice por série (glossário em ordem alfabética com navegação por letra; legislação agrupada por norma), página de item com autoria, datas, fontes, "Leia também", aviso jurídico e "Mais em"; schema `Article` (com `DefinedTerm` no glossário) e `DefinedTermSet` no índice do glossário; sitemap; links pendentes viram texto; seção "Biblioteca de referência" no blog e links no rodapé.
- `verificar.mjs`: travessões, termos vetados, links externos só oficiais, autoria e tamanho mínimo (glossário 250 palavras; documentos e legislação 400).

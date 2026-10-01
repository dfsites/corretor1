# Resumo geral: corretor1.com.br (2026-10-01)

Relatório consolidado do trabalho realizado em 2026-10-01. Detalhes de cada etapa nos relatórios desta pasta.

## Situação do site

- Endereço oficial: https://www.corretor1.com.br (http e domínio sem www redirecionam com 301).
- 234 páginas no sitemap; 211 textos publicados:

| Tipo | Quantidade | Onde |
|---|---|---|
| Artigos do blog | 128 | `/blog/` (6 iniciais + 117 pautas do plano + 5 perguntas) |
| Verbetes do glossário | 54 | `/glossario/` |
| Documentos explicados | 11 | `/documentos/` |
| Comentários de legislação | 18 | `/legislacao/` |

- 11 editorias com página de categoria; página de autor de Daniel Ferreira (registros pessoais separados do CRECI-J da imobiliária).
- Venda: nenhuma por enquanto, sem pré-cadastro; estrutura de produtos pronta em `_fonte/produtos.mjs`.
- Google Search Console verificado e sitemap enviado; Google Analytics 4 (G-QW0NECVSML); aviso de cookies; `robots.txt` liberando buscadores e crawlers de IA.

## Relatórios desta pasta

| Arquivo | Conteúdo |
|---|---|
| `2026-10-01-primeiro-ciclo-editorial.md` | Auditoria, autoria, 15 artigos, Analytics e cookies |
| `2026-10-01-segundo-ciclo-editorial.md` | 27 artigos |
| `2026-10-01-terceiro-ciclo-editorial.md` | 55 artigos |
| `2026-10-01-quarto-ciclo-editorial.md` | 20 artigos; banco de 117 pautas concluído |
| `2026-10-01-series-de-referencia.md` | Glossário, documentos, legislação comentada e perguntas |

## Qualidade e testes

- Fontes: só oficiais (Planalto, COFECI, CRECI, STJ, TST, Receita Federal, PGFN, gov.br, Prefeitura de São Paulo), conferidas no texto vigente; nenhum link para outros sites do proprietário.
- Verificador automático (`_fonte/verificar.mjs`): title, description, h1, canonical, links internos, JSON-LD, sitemap, autoria, redirecionamentos, travessões, termos vetados, clichês, links externos só oficiais, categorias e tamanho mínimo das séries.
- Layout: todas as páginas testadas com 390 px e 1.280 px, sem rolagem lateral.
- Domínio real: todas as URLs do sitemap respondem 200; URLs antigas respondem 301 em um único salto; arquivos internos respondem 404.

## Publicação

- Por FTP incremental para `/www`, com reconexão automática (a integração GitHub → hospedagem não grava na pasta pública).
- Código no GitHub (`dfsites/corretor1`, branch `main`); pontos de restauração nas tags `backup-pre-auditoria-editorial-2026-10-01`, `backup-pre-ciclo1-2026-10-01` e `backup-pre-ciclo3-2026-10-01`.

## Pendências

Do proprietário:
1. Trocar as senhas do FTP e do banco de dados (foram informadas na conversa).
2. Apagar `F:\Program Files\Git\tmp_x.pdf` (arquivo de teste deixado por um agente; remoção bloqueada pelo sistema).
3. Revisão jurídica das páginas com aviso jurídico.
4. Foto do autor; WhatsApp e Instagram, se desejar.
5. Links de compra quando houver produtos.
6. Opcional: corrigir a pasta de destino do deploy GitHub no painel da hospedagem.

Melhorias possíveis:
1. Aprofundar os 6 pilares iniciais e os artigos mais curtos, conforme dados do Search Console.
2. Imagens próprias por artigo ou editoria.
3. Ampliar as séries de referência.
4. Atualizar o registro geral do portfólio (`__PORTFOLIO_DOMINIOS__`), com autorização.

Cuidado: `_backup-servidor/` contém `.ssh` e `.ftpaccess` da conta da hospedagem; fica só no computador local e fora do Git.

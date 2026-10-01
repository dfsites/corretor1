## 2026-10-01 — Auditoria editorial do blog

- Criada estrutura de autoria para Daniel Ferreira no blog.
- Ajustado Schema.org para Person/BlogPosting e vínculo de autor.
- Preparada página de autor em /autor/daniel-ferreira/.
- Revisado o posicionamento do índice do blog para biblioteca profissional.
- Revisados títulos e trechos promocionais dos seis artigos existentes, preservando URLs.
- Adicionados persona, pilar e artigos relacionados aos conteúdos existentes.
- Criado EDITORIAL.md com 55 pautas futuras, prioridades, personas, clusters e pilares.
- Mantidas URLs publicadas; nenhum artigo vazio foi criado.

# Changelog

## 2026-10-01 — Publicação

- Backup completo do site antigo (100 arquivos) em `_backup-servidor/2026-10-01/` (fora do git).
- Nova versão enviada por FTP para `/www`; site antigo e `phpinfo` removidos a pedido do proprietário.
- Testado no ar: 14 páginas 200; http e sem-www → 301 https://www; páginas antigas → 301; 404 funcionando.

## 2026-10-01 — HTTPS e www

- URL canônica passa a ser https://www.corretor1.com.br (canonicals, sitemap, Open Graph).
- .htaccess: 301 de http e do domínio sem www para o endereço canônico.

## 2026-10-01 — Nova versão do site

- Site refeito do zero: HTML estático gerado por `_fonte/build.mjs` (sem dependências), visual azul-marinho e dourado.
- Mantida a imagem do topo do site antigo (otimizada para WebP: de 767 KB para ~80 KB).
- Páginas: início, O Método, Cursos, Mentoria, E-books, Blog com 6 artigos, Contato, Política de Privacidade, 404.
- Espaço para venda de e-books e cursos via `_fonte/produtos.mjs`.
- SEO: canonical, Open Graph, JSON-LD, sitemap.xml, robots.txt, 301 das páginas do template antigo.
- Verificador automático `_fonte/verificar.mjs`.
- README.md e DEPLOY.md criados; repositório git iniciado (GitHub `dfsites/corretor1`).

## 2026-10-01 — Definição do projeto e verificação do site publicado

- Definidos objetivo (cursos e mentorias individualizadas), público (corretores de imóveis), conceito "Corretor 1%" e chamada principal.
- Verificado que o domínio já está no ar com template de ONG não personalizado; HTTPS com certificado inválido; DNS/hospedagem Uni5 identificados.
- Atualizados PROJECT.md, DOMAIN.md, STATUS.md e TODO.md. Nenhum código criado; nenhum acesso ao servidor.

## 2026-09-30 — Criação da pasta

Pasta `--corretor-1-novo` criada pelo processo de organização do workspace mestre, apenas com documentação inicial (CLAUDE.md, DOMAIN.md, PROJECT.md, STATUS.md, TODO.md, CHANGELOG.md).

Nenhum código, framework ou dependência foi criado.

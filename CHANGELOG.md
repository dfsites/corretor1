# Changelog

## 2026-10-01 — Auditoria editorial do blog

- Consolidadas 7 auditorias externas (Gemini, DeepSeek, Grok, Kimi, Meta, GPT, Claude) + auditoria própria; backup Git na tag `backup-pre-auditoria-editorial-2026-10-01`.
- Autoria: Daniel Ferreira (`_fonte/autores.mjs`, dados de danielferreiracorretor.com/sobre e kitcontratosimobiliarios.com.br), página `/autor/daniel-ferreira/`, byline com `rel="author"`, Person/ProfilePage no JSON-LD, `meta author` e `article:*`.
- Editorias (`_fonte/editorias.mjs`, 11 áreas); índice do blog reorganizado por editoria + "Por onde começar" por persona; páginas `/blog/categoria/<id>/` geradas só com 3+ artigos.
- Os 6 artigos revisados: tom sóbrio, sem termos de "guru", sem faixa de comissão sem fonte, com "Fontes e referências" (Planalto) e aviso jurídico quando aplicável.
- Dois endereços trocados (publicados no mesmo dia): `/blog/como-vender-mais-imoveis/` → `/blog/atendimento-ao-comprador-de-imoveis/` e `/blog/rotina-do-corretor-de-alta-performance/` → `/blog/rotina-de-trabalho-do-corretor-de-imoveis/` (301).
- Relacionados por pilar/editoria/trilha; CTA de mentoria trocado por caixa de autor com menção discreta.
- Topo: botão "Fale conosco" → "Comece por aqui" (/blog/#por-onde-comecar); Blog primeiro no menu.
- `docs/PLANO-EDITORIAL.md`: 117 pautas por editoria, persona, pilar e prioridade.
- Verificador ampliado: autoria, meta article, BlogPosting/Person, termos proibidos, sitemap completo, redirecionamentos.

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

# Status

Última verificação: 2026-10-01

## Situação atual

PUBLICADO — nova versão no ar em https://www.corretor1.com.br desde 2026-10-01 (enviada por FTP).

## Desenvolvimento

HTML estático gerado por `_fonte/build.mjs` (Node, sem dependências). Verificação automática em `_fonte/verificar.mjs` (links, title, description, h1, canonical, JSON-LD, sitemap).

## Conteúdo

15 páginas: início, O Método, Cursos, Mentoria, E-books, Blog, 6 artigos, autor (Daniel Ferreira), Contato, Política de Privacidade (+404). Blog organizado em 11 editorias; plano de 117 pautas em `docs/PLANO-EDITORIAL.md`.
E-books e cursos: listas vazias — páginas mostram "em breve" até o proprietário cadastrar os produtos.

## SEO

Title/description únicos, canonical, Open Graph (+ article:*), JSON-LD (Organization, WebSite, BlogPosting com autor Person, ProfilePage, BreadcrumbList, FAQPage), sitemap.xml, robots.txt, redirecionamentos 301 das páginas do template antigo.

## Infraestrutura

Hospedagem: Uni5 (Apache), FTP/SSH ativos. HTTPS válido; canônico https://www.corretor1.com.br com 301 de http e sem-www.

## Publicação

Publicado: SIM — nova versão (2026-10-01). Site antigo removido; backup em `_backup-servidor/`. Integração GitHub → hospedagem não grava em `/www` (ver DEPLOY.md).

## Pendências

- Foto real do autor (página de autor publicada sem foto, por decisão)

- Informar WhatsApp e Instagram (opcional) em `_fonte/site.mjs`
- Cadastrar e-books e cursos (`_fonte/produtos.mjs`)
- Google Search Console + envio do sitemap
- Corrigir a pasta de destino do deploy via GitHub no painel da hospedagem
- Confirmar a divisão de papéis com corretor50k.com.br

## Próxima ação

Google Search Console + sitemap; configurar contato.

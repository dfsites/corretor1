# Status

Última verificação: 2026-10-01

## Situação atual

EM DESENVOLVIMENTO — nova versão do site gerada e verificada localmente; publicação via GitHub (`dfsites/corretor1`, branch `main`).

## Desenvolvimento

HTML estático gerado por `_fonte/build.mjs` (Node, sem dependências). Verificação automática em `_fonte/verificar.mjs` (links, title, description, h1, canonical, JSON-LD, sitemap).

## Conteúdo

14 páginas: início, O Método, Cursos, Mentoria, E-books, Blog, 6 artigos, Contato, Política de Privacidade (+404).
E-books e cursos: listas vazias — páginas mostram "em breve" até o proprietário cadastrar os produtos.

## SEO

Title/description únicos, canonical, Open Graph, JSON-LD (Organization, WebSite, BlogPosting, BreadcrumbList, FAQPage), sitemap.xml, robots.txt, redirecionamentos 301 das páginas do template antigo.

## Infraestrutura

Hospedagem: Uni5 (Apache), FTP/SSH ativos. HTTPS quebrado (certificado de outro nome) — canonical em http até corrigir (ver DEPLOY.md).

## Publicação

Publicado: ainda a versão antiga (template). Push para `dfsites/corretor1` (main) feito em 2026-10-01, mas o servidor não atualizou em ~2 min — verificar a integração GitHub no painel da Uni5.

## Pendências

- Confirmar se o e-mail contato@corretor1.com.br existe (é o único canal de contato configurado)
- Informar WhatsApp e Instagram (opcional) em `_fonte/site.mjs`
- Cadastrar e-books e cursos (`_fonte/produtos.mjs`)
- Ativar SSL na Uni5 e trocar a URL para https
- Google Search Console + envio do sitemap
- Remover arquivos antigos do template no servidor, se a publicação não limpar
- Confirmar a divisão de papéis com corretor50k.com.br

## Próxima ação

Conferir o site no ar após o push.

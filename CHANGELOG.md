# Changelog

## 2026-10-01 — Primeiro ciclo editorial (15 artigos)

- 15 artigos novos em `_fonte/artigos/<slug>.mjs` (carregados automaticamente por `_fonte/artigos.mjs`): 5 pilares (preço de mercado, visitas, proposta de compra, desenvolvimento profissional, ferramentas digitais) e 10 satélites (o que faz um corretor, inscrição no CRECI, primeiros passos, autorização de venda, entrevista com o proprietário, qualificação do comprador, parcerias, regras de publicidade, controle de follow-up, LGPD).
- Fontes conferidas no texto oficial: Lei 6.530/1978, Decreto 81.871/1978, Código Civil, Lei 8.245/1991, Lei 8.036/1990, CDC, Lei 8.906/1994, LGPD, Lei 14.063/2020, MP 2.200-2/2001, Resolução CD/ANPD 2/2022, Resoluções COFECI 326/1992, 458/1995, 1.065/2007, 1.066/2007 e 1.402/2017, páginas do CRECISP e do CRECI-PR.
- Artigos antigos: links contextuais para os novos; travessões removidos; comissão corrigida para refletir o art. 728 do Código Civil (divisão em partes iguais entre corretores, salvo ajuste em contrário).
- Páginas de categoria geradas: Começando na profissão (4 artigos) e Captação (3).
- "Por onde começar" com trilhas explícitas por público (`trilhas` em `_fonte/editorias.mjs`).
- Verificador: travessões e termos vetados no texto editorial (fronteira de palavra com acentos), clichês, links externos só para fontes oficiais, categoria obrigatória com 3+ artigos.
- CSS: tabelas responsivas; caixa do autor e títulos de página sem travessão.
- Meta tag de verificação do Google Search Console.

## 2026-10-01 — Ajustes finais da auditoria editorial

- Autor: registros pessoais (CRECI-DF 12.668, CNAI 27.316, CRA-DF 31.440) separados do registro da empresa; CRECI-J/DF 30.400 passa a constar só na seção "Empresa" (Daniel Ferreira Imóveis, pessoa jurídica). Person schema ganha `worksFor` com o nome da imobiliária, sem o CRECI-J.
- `.htaccess`: regras de reescrita para os dois artigos renomeados, levando http/sem-www direto à URL nova em um único 301 (os `Redirect 301` existentes foram mantidos).
- `docs/PLANO-EDITORIAL.md`: nota de que o banco editorial não é ordem automática de publicação.

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

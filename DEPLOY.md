# Deploy — corretor1.com.br

- Repositório: https://github.com/dfsites/corretor1 (branch `main`)
- Publicação: **por FTP** (feita assim em 2026-10-01). Existe webhook do GitHub para o Git da KingHost/Uni5 (responde 200), mas os arquivos NÃO chegam à pasta pública `/www` — verificar a pasta de destino no painel antes de confiar no push.
- FTP: a pasta pública é `/www`. Com FTPS (TLS) a raiz vista é a pasta pessoal (`/home/corretor1`), então use caminhos `/www/...`. O host `ftp.corretor1.com.br` falhou por IPv6; o host alternativo (IPv4) funcionou.
- Envie só os arquivos do site: `git ls-files` sem `_fonte/`, `*.md`, `package.json`, `.git*` — e o `.htaccess` por último.
- `/www/erros/` é da hospedagem (páginas de erro padrão); não apagar.
- Hospedagem: Uni5 (Apache). FTP e SSH ativos. **Credenciais não ficam no repositório nem nos documentos.**
- Banco de dados MySQL: existe na hospedagem, mas o site não usa.

## Antes de cada push

```bash
node _fonte/build.mjs
node _fonte/verificar.mjs
```

Os arquivos gerados (HTML, sitemap.xml, robots.txt, .htaccess) são versionados, porque o servidor serve a raiz do repositório sem build.

## Proteções no .htaccess

- `_fonte/`, `.git/`, arquivos `.md` e `.mjs` e `package.json` respondem 404.
- Páginas do template antigo (`about.html`, `causes.html` etc.) redirecionam com 301 para as novas.
- http e domínio sem www redirecionam para `https://www.corretor1.com.br`.

## Endereço canônico

`https://www.corretor1.com.br` (SSL ativado em 2026-10-01). O `.htaccess` redireciona com 301 `http://` e o domínio sem www para esse endereço. Para mudar, altere `url` em `_fonte/site.mjs` e rode o build.

## Depois de publicar

- Cadastrar o domínio no Google Search Console e enviar `sitemap.xml`.

## Histórico

- 2026-10-01: site antigo (template Charity) removido de `/www` a pedido do proprietário; backup completo local em `_backup-servidor/2026-10-01/` (fora do git). Removido também `phpinfo-*.php` (expunha dados do servidor).

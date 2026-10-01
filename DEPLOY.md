# Deploy — corretor1.com.br

- Repositório: https://github.com/dfsites/corretor1 (branch `main`)
- Publicação: via GitHub, ativa na hospedagem (informado pelo proprietário em 2026-10-01). Push em `main` publica.
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
- Conferir se os arquivos antigos do template (pastas `css/`, `js/`, `lib/`, `img/`) continuam no servidor e, se sim, removê-los.

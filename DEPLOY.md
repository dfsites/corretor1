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
- `www` redireciona para o domínio sem www.

## Pendência: HTTPS

O certificado do domínio está inválido (responde com o certificado de outro nome). Depois de ativar o SSL no painel da Uni5:

1. Em `_fonte/site.mjs`, trocar `url` para `https://corretor1.com.br`.
2. Rodar o build. Ele passa a gerar o redirecionamento http → https no `.htaccess` e os canonicals em https.
3. Fazer commit e push.

## Depois de publicar

- Cadastrar o domínio no Google Search Console e enviar `sitemap.xml`.
- Conferir se os arquivos antigos do template (pastas `css/`, `js/`, `lib/`, `img/`) continuam no servidor e, se sim, removê-los.

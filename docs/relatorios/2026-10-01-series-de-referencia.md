# Relatório: séries de referência (seção 6 do plano editorial)

Data: 2026-10-01 · Glossário (`/glossario/`), Documentos explicados (`/documentos/`), Legislação comentada (`/legislacao/`) e Perguntas de quem quer ser corretor (blog). Publicação em blocos, à medida que cada agente termina.

## Infraestrutura

- `_fonte/colecoes.mjs`: configuração das séries e carregamento de `_fonte/<serie>/<slug>.mjs`.
- `build.mjs`: índice por série (glossário em ordem alfabética com navegação por letra; legislação agrupada por norma), página de item com autoria, datas, fontes, "Leia também", aviso jurídico e "Mais em"; schema `Article` (com `DefinedTerm` no glossário) e `DefinedTermSet` no índice do glossário; sitemap; links pendentes viram texto; seção "Biblioteca de referência" no blog e links no rodapé.
- `verificar.mjs`: travessões, termos vetados, links externos só oficiais, autoria e tamanho mínimo (glossário 250 palavras; documentos e legislação 400).

## Bloco: glossário partes 2 e 4 (28 verbetes) e legislação parte 1 (9 páginas)

- Glossário: memorial descritivo, IPTU, CCIR, georreferenciamento, distrato, hipoteca, usufruto, nua-propriedade, condomínio edilício, convenção de condomínio, fração ideal, área privativa e comum, benfeitorias, direito de preferência; servidão, loteamento, patrimônio de afetação, Reurb, penhora, indisponibilidade de bens, consolidação da propriedade, SFH, SFI, valor venal, evicção, vícios redibitórios, direito de superfície, tombamento.
- Legislação: Lei 6.530/1978 (4 páginas), Decreto 81.871/1978 (2 páginas, com registro das revogações de 2022), Código Civil arts. 722 a 729 (3 páginas).
- Fontes lidas no Planalto: Código Civil, Leis 4.591/1964, 4.947/1966, 6.015/1973, 6.766/1979, 8.245/1991, 9.514/1997, 10.257/2001, 13.465/2017, 4.380/1964, CTN, CPC, CF, Decreto-Lei 25/1937, Lei 6.530/1978 e Decreto 81.871/1978.
- Envio por FTP passou a ser incremental e com reconexão automática, depois de quedas de conexão do servidor.

## Bloco: glossário parte 1 (14 verbetes) e documentos explicados (11)

- Glossário: matrícula, averbação, ITBI, laudêmio, foro e enfiteuse, habite-se, escritura pública, registro de imóveis, promessa de compra e venda, arras, alienação fiduciária, usucapião, desmembramento e unificação, incorporação imobiliária. Verbetes que têm artigo no blog ficaram na definição e apontam para ele.
- Documentos: certidão de matrícula, negativa de IPTU, quitação condominial, distribuição cível e de execução, nascimento ou casamento, procuração pública, débitos federais, CNDT, protesto, guia de ITBI, laudo de vistoria de locação.
- Fontes: Lei 6.015/1973, Lei 7.433/1985, Decreto 93.240/1986, Lei 13.097/2015, CTN, Código Civil, Lei 4.591/1964, CLT art. 642-A, Lei 9.492/1997, Lei 8.245/1991, CF, Decretos-Leis 9.760/1946 e 2.398/1987, páginas oficiais do gov.br (certidão de regularidade fiscal) e do TST.
- Verificador: a regra de "definitiva" passou a barrar só o sentido promocional ("técnica definitiva"), para não bloquear termos jurídicos como "venda definitiva".

## Bloco: glossário parte 3 (12 verbetes), legislação parte 2 (9 páginas) e perguntas (5 artigos)

- Glossário: outorga conjugal, procuração, inventário, partilha, espólio, adjudicação, cessão de direitos, dação em pagamento, comodato, locação por temporada, ação renovatória, ação de despejo.
- Legislação: Lei 8.245/1991 (deveres e taxas, direito de preferência, garantias), LGPD (conceitos e bases legais; direitos e segurança), CDC (oferta e publicidade), Resoluções COFECI 326/1992, 1.065/2007 e 1.066/2007.
- Perguntas no blog: atuar em outro estado, ter outro emprego, estagiário intermediar, vender imóvel próprio ou de parentes, quem não tem CRECI receber comissão.
- Fontes adicionais lidas: CPC, Lei 6.015/1973 art. 216-B, Res. COFECI 327/1992 e 1.476/2022, Lei das Contravenções Penais art. 47, CLT art. 482.

## Fechamento das séries

- No ar: 54 verbetes, 11 documentos, 18 comentários de legislação e 5 perguntas; site com 234 páginas.
- Ligação de volta: 64 artigos do blog ganharam a seção "Na biblioteca de referência", com os itens das séries que apontam para eles.
- Build, verificador e testes no domínio real aprovados.
- Layout: 234 páginas testadas com 390 px e 1.280 px (468 carregamentos): nenhuma rolagem lateral, um h1 por página, tabelas cabendo na tela.
- Arquivo fora do projeto para apagar à mão: `F:\Program Files\Git	mp_x.pdf` (PDF público de resolução do COFECI baixado por um agente; a remoção automática foi bloqueada pela proteção do sistema).

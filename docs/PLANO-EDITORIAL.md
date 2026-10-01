# Plano editorial — Blog Corretor 1% (corretor1.com.br)

Documento interno. Não é publicado: o `.htaccess` bloqueia `.md` e o envio por FTP não inclui `docs/`.
Versão: 2026-10-01. Consolida a auditoria própria e as auditorias externas enviadas pelo proprietário (Gemini, DeepSeek, Grok, Kimi, Meta AI, GPT e Claude Chat).

---

## 1. Posicionamento e regras

### 1.1 Posicionamento

O blog é uma **biblioteca profissional de corretagem de imóveis**. Ele ensina a profissão com sobriedade, base legal e experiência prática. Não é blog de vendas, de motivação nem de "segredos".

Autor principal: **Daniel Ferreira** (id `daniel-ferreira` em `_fonte/autores.mjs`).

### 1.2 Personas

| id | Persona | Quem é | O que procura |
|---|---|---|---|
| `futuro` | Quer ser corretor | Avalia entrar na profissão | Requisitos, custos, rotina real, remuneração, modelos de atuação |
| `iniciante` | Corretor iniciante | 0 a 24 meses de registro | Processos básicos: captação, atendimento, visita, proposta, documentos, organização |
| `desenvolvimento` | Corretor em desenvolvimento | Já atua e quer melhorar | Processos, indicadores, especialização, posicionamento, qualidade das captações |

O maior volume de pautas vai para `iniciante`.

### 1.3 Tom: termos e títulos proibidos

Nunca usar em títulos, H1, H2, descrições ou CTAs:

- "segredo(s)", "7 segredos para…", "o segredo para fechar mais"
- "explodir suas vendas", "venda mais e ganhe mais", "vender mais", "faturar mais", "faturar R$ X por mês"
- "corretores milionários", "o método dos corretores milionários"
- "ninguém te conta isso", "a técnica definitiva", "faça isso e venda qualquer imóvel"
- "como conseguir clientes todos os dias", "10 erros que estão destruindo sua carreira"
- "alta performance", "corretores que mais fecham", "domine o mercado", "seja imparável"
- qualquer equivalente sensacionalista, motivacional ou de promessa de resultado

Também não usar títulos que existem só porque uma ferramenta de SEO mostrou volume de busca. Não criar variações artificiais ("guia", "dicas", "passo a passo", "entenda") para a mesma pergunta.

### 1.4 As quatro perguntas (aprovação de pauta)

Antes de aprovar qualquer título:

1. Um corretor ou futuro corretor realmente teria essa dúvida?
2. O artigo consegue ensinar algo útil e concreto?
3. O assunto reforça a autoridade do Corretor 1%?
4. O título continuaria profissional se fosse publicado por uma escola ou instituição de formação profissional?

Se qualquer resposta for "não", a pauta é descartada.

### 1.5 Remuneração

- Nunca citar valores de renda, faturamento ou prazos para "chegar lá".
- Quando o tema aparecer, explicar que a remuneração varia conforme: mercado, região, segmento, volume de negócios, modelo de contratação, percentual de comissão, experiência, geração de oportunidades e capacidade comercial.
- Percentuais de comissão: não publicar faixas sem fonte. Remeter às tabelas de referência regionais e à combinação entre as partes (Código Civil, art. 724).

### 1.6 Conteúdo jurídico e normativo

- Conteúdo **informativo**, nunca aconselhamento jurídico individual.
- Artigos com base legal usam `avisoJuridico: true`, que exibe o aviso de caráter informativo.
- Toda lei ou norma citada deve vir de **fonte primária ou institucional** (Planalto, COFECI, CRECI, STJ/tribunais, Receita Federal, Banco Central, Caixa, ANPD, ONR). A fonte vai no bloco **"Fontes e referências"** (campo `fontes`).
- Não copiar texto das fontes. Usar para validar e citar o dispositivo (lei, artigo, inciso).
- Norma não conferida = "verificar antes de publicar". Não publicar número de resolução ou artigo sem conferir o texto vigente.

**Fontes já conferidas no Planalto (2026-10-01):**

| Norma | Dispositivos conferidos | URL |
|---|---|---|
| Lei nº 6.530/1978 | arts. 2º (TTI), 3º (atribuições; opinar quanto à comercialização), 4º (inscrição por resolução do COFECI), 6º (associação a imobiliárias), 20 (vedações: III anúncio sem autorização escrita; IV anúncio sem nº de inscrição; V loteamento/condomínio sem nº de registro) | https://www.planalto.gov.br/ccivil_03/leis/l6530.htm |
| Decreto nº 81.871/1978 | arts. 4º (nº de inscrição em toda propaganda) e 5º (anúncio só com contrato escrito de mediação ou autorização escrita) | https://www.planalto.gov.br/ccivil_03/decreto/antigos/d81871.htm |
| Código Civil (Lei nº 10.406/2002) | arts. 722 a 729 (corretagem) | https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm |
| Lei nº 13.709/2018 (LGPD) | texto geral | https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm |

### 1.7 CTA

- O conhecimento é o elemento principal. CTA discreto, no fim, sem heading próprio, e só quando fizer sentido.
- Proibido: "Quer vender mais?", "Quer faturar mais?", "Transforme sua carreira".
- Preferir links contextuais para o pilar, para satélites e para a página do autor. Cursos e mentoria aparecem em uma linha discreta.

---

## 2. Inventário dos artigos publicados

Todos de autoria de Daniel Ferreira, publicados em 2026-10-01. As URLs abaixo são definitivas. Itens 1 a 6: base inicial; itens 7 a 21: primeiro ciclo; itens 22 a 48: segundo ciclo.

| # | URL | Editoria | Papel | Persona | Intenção principal | O que cobre (não repetir em satélites) |
|---|---|---|---|---|---|---|
| 1 | /blog/como-ser-corretor-de-imoveis/ | comecando-na-profissao | Pilar | futuro, iniciante | Como entrar na profissão | Atribuições (Lei 6.530, art. 3º), formação TTI, inscrição no CRECI (visão geral), modelos de atuação (visão geral), remuneração (variáveis), primeiros meses |
| 2 | /blog/comissao-de-corretor-de-imoveis/ | corretagem-e-comissao | Pilar | iniciante, desenvolvimento | Como funciona a comissão de corretagem | CC arts. 722–729 em visão geral, quando é devida (resumo), definição do valor (art. 724, tabelas de referência), quem paga, parcerias (resumo), formalização |
| 3 | /blog/como-captar-imoveis/ | captacao | Pilar | iniciante, desenvolvimento | Processo de captação de imóveis | Boa captação, origem das captações, entrevista (resumo), visita e levantamento (resumo), documentação (resumo), preço (resumo), autorização escrita, exclusividade (CC art. 726), pós-captação |
| 4 | /blog/atendimento-ao-comprador-de-imoveis/ | atendimento | Pilar | iniciante, desenvolvimento | Processo de atendimento ao comprador | Primeiro contato, qualificação, seleção de imóveis, visitas (resumo), acompanhamento, proposta e negociação (resumo), conclusão (CC art. 723), indicadores. **301** de /blog/como-vender-mais-imoveis/ |
| 5 | /blog/rotina-de-trabalho-do-corretor-de-imoveis/ | rotina-e-gestao | Pilar | iniciante, desenvolvimento | Organização da semana do corretor | Atividades centrais, exemplo de semana, registro (planilha/CRM em resumo), indicadores de atividade e conversão (resumo), revisão periódica. **301** de /blog/rotina-do-corretor-de-alta-performance/ |
| 6 | /blog/marketing-para-corretor-de-imoveis/ | marketing | Pilar | iniciante, desenvolvimento | Marketing profissional do corretor | Posicionamento, presença digital, conteúdo, anúncios (resumo), regras de publicidade (Decreto 81.871, arts. 4º e 5º; Lei 6.530, art. 20, IV e V), LGPD (resumo), reputação |
| 7 | /blog/o-que-faz-um-corretor-de-imoveis/ | comecando-na-profissao | Satélite de /blog/como-ser-corretor-de-imoveis/ | futuro | O que faz um corretor de imóveis: atribuições e limites da profissão | Primeiro ciclo (2026-10-01) |
| 8 | /blog/inscricao-no-creci/ | comecando-na-profissao | Satélite de /blog/como-ser-corretor-de-imoveis/ | futuro | Inscrição no CRECI: etapas, documentos e custos | Primeiro ciclo (2026-10-01) |
| 9 | /blog/primeiros-passos-depois-do-creci/ | comecando-na-profissao | Satélite de /blog/como-ser-corretor-de-imoveis/ | iniciante | Primeiros passos depois de obter o CRECI | Primeiro ciclo (2026-10-01) |
| 10 | /blog/desenvolvimento-profissional-do-corretor/ | carreira | Pilar | iniciante, desenvolvimento | Desenvolvimento profissional do corretor de imóveis: etapas e caminhos de especialização | Primeiro ciclo (2026-10-01) |
| 11 | /blog/entrevista-inicial-com-o-proprietario/ | captacao | Satélite de /blog/como-captar-imoveis/ | iniciante | Entrevista inicial com o proprietário: o que perguntar e registrar | Primeiro ciclo (2026-10-01) |
| 12 | /blog/autorizacao-de-venda/ | captacao | Satélite de /blog/como-captar-imoveis/ | iniciante | Autorização de venda: o que deve constar no documento | Primeiro ciclo (2026-10-01) |
| 13 | /blog/preco-de-mercado-de-imoveis/ | preco-e-mercado | Pilar | iniciante, desenvolvimento | Preço de mercado: como o corretor fundamenta a sugestão de preço de um imóvel | Primeiro ciclo (2026-10-01) |
| 14 | /blog/qualificacao-do-comprador/ | atendimento | Satélite de /blog/atendimento-ao-comprador-de-imoveis/ | iniciante | Qualificação do comprador: necessidades, capacidade de pagamento e prazo | Primeiro ciclo (2026-10-01) |
| 15 | /blog/visitas-a-imoveis/ | visitas | Pilar | iniciante | Visitas a imóveis: preparação, condução e registro | Primeiro ciclo (2026-10-01) |
| 16 | /blog/proposta-de-compra-de-imovel/ | negociacao | Pilar | iniciante | Proposta de compra de imóvel: como estruturar e formalizar | Primeiro ciclo (2026-10-01) |
| 17 | /blog/parcerias-entre-corretores/ | corretagem-e-comissao | Satélite de /blog/comissao-de-corretor-de-imoveis/ | iniciante, desenvolvimento | Parcerias entre corretores: como combinar, formalizar e dividir a comissão | Primeiro ciclo (2026-10-01) |
| 18 | /blog/controle-de-follow-up/ | rotina-e-gestao | Satélite de /blog/rotina-de-trabalho-do-corretor-de-imoveis/ | iniciante | Controle de follow-up: organização e frequência dos retornos | Primeiro ciclo (2026-10-01) |
| 19 | /blog/regras-de-publicidade-do-corretor/ | marketing | Satélite de /blog/marketing-para-corretor-de-imoveis/ | iniciante, desenvolvimento | Regras de publicidade do corretor de imóveis | Primeiro ciclo (2026-10-01) |
| 20 | /blog/ferramentas-digitais-do-corretor/ | tecnologia | Pilar | iniciante | Ferramentas digitais do corretor: organização, comunicação e documentos | Primeiro ciclo (2026-10-01) |
| 21 | /blog/lgpd-na-rotina-do-corretor/ | tecnologia | Satélite de /blog/ferramentas-digitais-do-corretor/ | iniciante, desenvolvimento | LGPD na rotina do corretor: dados de clientes e proprietários | Primeiro ciclo (2026-10-01) |
| 22 | /blog/vale-a-pena-ser-corretor-de-imoveis/ | comecando-na-profissao | Satélite de /blog/como-ser-corretor-de-imoveis/ | futuro | Vale a pena ser corretor de imóveis? O que considerar antes de decidir | Segundo ciclo (2026-10-01) |
| 23 | /blog/curso-tecnico-em-transacoes-imobiliarias/ | comecando-na-profissao | Satélite de /blog/como-ser-corretor-de-imoveis/ | futuro | Curso de Técnico em Transações Imobiliárias (TTI): como funciona e como escolher a escola | Segundo ciclo (2026-10-01) |
| 24 | /blog/como-funciona-a-remuneracao-do-corretor/ | comecando-na-profissao | Satélite de /blog/como-ser-corretor-de-imoveis/ | futuro | Como funciona a remuneração do corretor de imóveis | Segundo ciclo (2026-10-01) |
| 25 | /blog/corretor-autonomo-associado-ou-contratado/ | comecando-na-profissao | Satélite de /blog/como-ser-corretor-de-imoveis/ | futuro, iniciante | Corretor autônomo, associado ou contratado: diferenças entre os modelos de atuação | Segundo ciclo (2026-10-01) |
| 26 | /blog/documentos-imobiliarios-basicos/ | comecando-na-profissao | Satélite de /blog/como-ser-corretor-de-imoveis/ | iniciante | Documentos imobiliários que o corretor precisa conhecer: matrícula, certidões, escritura, ITBI e registro | Segundo ciclo (2026-10-01) |
| 27 | /blog/etica-profissional-na-corretagem/ | carreira | Satélite de /blog/desenvolvimento-profissional-do-corretor/ | iniciante | Ética profissional na corretagem: deveres perante clientes, colegas e o conselho | Segundo ciclo (2026-10-01) |
| 28 | /blog/planejamento-financeiro-do-corretor/ | carreira | Satélite de /blog/desenvolvimento-profissional-do-corretor/ | futuro, iniciante | Planejamento e controle financeiro do corretor com renda variável | Segundo ciclo (2026-10-01) |
| 29 | /blog/visita-de-captacao/ | captacao | Satélite de /blog/como-captar-imoveis/ | iniciante | Visita de captação: roteiro e levantamento de informações do imóvel | Segundo ciclo (2026-10-01) |
| 30 | /blog/exclusividade-na-intermediacao/ | captacao | Satélite de /blog/como-captar-imoveis/ | iniciante, desenvolvimento | Exclusividade na intermediação: como funciona e como apresentar ao proprietário | Segundo ciclo (2026-10-01) |
| 31 | /blog/documentacao-na-captacao/ | captacao | Satélite de /blog/como-captar-imoveis/ | iniciante | Documentação na fase de captação: o que verificar antes de anunciar | Segundo ciclo (2026-10-01) |
| 32 | /blog/preco-de-anuncio-e-valor-de-mercado/ | preco-e-mercado | Satélite de /blog/preco-de-mercado-de-imoveis/ | iniciante | Preço de anúncio, preço de venda e valor de mercado: diferenças | Segundo ciclo (2026-10-01) |
| 33 | /blog/conversa-sobre-preco-com-o-proprietario/ | preco-e-mercado | Satélite de /blog/preco-de-mercado-de-imoveis/ | iniciante | Como conversar com o proprietário sobre preço (inclui a apresentação da pesquisa de mercado) | Segundo ciclo (2026-10-01) |
| 34 | /blog/opiniao-de-mercado-e-avaliacao-formal/ | preco-e-mercado | Satélite de /blog/preco-de-mercado-de-imoveis/ | desenvolvimento | Opinião de mercado do corretor e avaliação formal (PTAM): diferenças e limites | Segundo ciclo (2026-10-01) |
| 35 | /blog/primeiro-contato-com-o-interessado/ | atendimento | Satélite de /blog/atendimento-ao-comprador-de-imoveis/ | iniciante | Primeiro contato com o interessado: como responder e o que perguntar | Segundo ciclo (2026-10-01) |
| 36 | /blog/atendimento-por-whatsapp/ | atendimento | Satélite de /blog/atendimento-ao-comprador-de-imoveis/ | iniciante | Atendimento por WhatsApp: organização, registros e cuidados profissionais | Segundo ciclo (2026-10-01) |
| 37 | /blog/financiamento-imobiliario-para-corretores/ | atendimento | Satélite de /blog/atendimento-ao-comprador-de-imoveis/ | iniciante | Financiamento imobiliário: o que o corretor precisa saber para orientar o comprador | Segundo ciclo (2026-10-01) |
| 38 | /blog/informacoes-antes-da-visita/ | visitas | Satélite de /blog/visitas-a-imoveis/ | iniciante | O que o corretor deve saber sobre o imóvel antes da visita | Segundo ciclo (2026-10-01) |
| 39 | /blog/seguranca-em-visitas/ | visitas | Satélite de /blog/visitas-a-imoveis/ | iniciante, desenvolvimento | Segurança do corretor durante visitas | Segundo ciclo (2026-10-01) |
| 40 | /blog/apresentacao-da-proposta-ao-proprietario/ | negociacao | Satélite de /blog/proposta-de-compra-de-imovel/ | iniciante | Como apresentar uma proposta ao proprietário | Segundo ciclo (2026-10-01) |
| 41 | /blog/sinal-e-arras/ | negociacao | Satélite de /blog/proposta-de-compra-de-imovel/ | iniciante | Sinal e arras na compra de imóvel: noções para o corretor | Segundo ciclo (2026-10-01) |
| 42 | /blog/do-aceite-ao-contrato/ | negociacao | Satélite de /blog/proposta-de-compra-de-imovel/ | iniciante, desenvolvimento | Do aceite da proposta ao contrato: etapas até a escritura | Segundo ciclo (2026-10-01) |
| 43 | /blog/escritura-e-registro/ | negociacao | Satélite de /blog/proposta-de-compra-de-imovel/ | iniciante | Escritura e registro: o que o corretor acompanha até a conclusão | Segundo ciclo (2026-10-01) |
| 44 | /blog/contrato-de-corretagem/ | corretagem-e-comissao | Satélite de /blog/comissao-de-corretor-de-imoveis/ | iniciante, desenvolvimento | Contrato de corretagem: o que diz o Código Civil (inclui deveres de diligência e informação) | Segundo ciclo (2026-10-01) |
| 45 | /blog/crm-para-corretor/ | rotina-e-gestao | Satélite de /blog/rotina-de-trabalho-do-corretor-de-imoveis/ | iniciante, desenvolvimento | CRM para corretor de imóveis: o que registrar e como escolher (inclui planilha × CRM) | Segundo ciclo (2026-10-01) |
| 46 | /blog/indicadores-comerciais-do-corretor/ | rotina-e-gestao | Satélite de /blog/rotina-de-trabalho-do-corretor-de-imoveis/ | desenvolvimento | Indicadores comerciais do corretor: quais acompanhar e como calcular a taxa de conversão | Segundo ciclo (2026-10-01) |
| 47 | /blog/fotografia-de-imoveis/ | marketing | Satélite de /blog/marketing-para-corretor-de-imoveis/ | iniciante | Fotografia de imóveis com celular: orientações práticas | Segundo ciclo (2026-10-01) |
| 48 | /blog/descricao-de-imoveis/ | marketing | Satélite de /blog/marketing-para-corretor-de-imoveis/ | iniciante | Descrição de imóveis em anúncios: como escrever com clareza e correção | Segundo ciclo (2026-10-01) |
| 49 | /blog/quanto-custa-comecar-como-corretor/ | comecando-na-profissao | Satélite de /blog/como-ser-corretor-de-imoveis/ | futuro | Quanto custa começar como corretor de imóveis | Terceiro ciclo (2026-10-01) |
| 50 | /blog/contrato-de-associacao-corretor-imobiliaria/ | comecando-na-profissao | Satélite de /blog/como-ser-corretor-de-imoveis/ | iniciante | Contrato de associação entre corretor e imobiliária: o que observar | Terceiro ciclo (2026-10-01) |
| 51 | /blog/como-avaliar-uma-imobiliaria/ | comecando-na-profissao | Satélite de /blog/como-ser-corretor-de-imoveis/ | futuro, iniciante | Como avaliar uma imobiliária antes de se associar | Terceiro ciclo (2026-10-01) |
| 52 | /blog/habilidades-do-corretor-de-imoveis/ | comecando-na-profissao | Satélite de /blog/como-ser-corretor-de-imoveis/ | futuro | Habilidades importantes para o trabalho do corretor de imóveis | Terceiro ciclo (2026-10-01) |
| 53 | /blog/como-escolher-regiao-de-atuacao/ | comecando-na-profissao | Satélite de /blog/como-ser-corretor-de-imoveis/ | iniciante | Como escolher a região ou o segmento de atuação no início da carreira | Terceiro ciclo (2026-10-01) |
| 54 | /blog/o-que-estudar-nos-primeiros-meses/ | comecando-na-profissao | Satélite de /blog/como-ser-corretor-de-imoveis/ | iniciante | O que estudar nos primeiros meses como corretor | Terceiro ciclo (2026-10-01) |
| 55 | /blog/como-ganhar-experiencia-no-inicio/ | comecando-na-profissao | Satélite de /blog/como-ser-corretor-de-imoveis/ | iniciante | Como ganhar experiência no início da carreira sem carteira própria | Terceiro ciclo (2026-10-01) |
| 56 | /blog/especializacao-por-regiao/ | carreira | Satélite de /blog/desenvolvimento-profissional-do-corretor/ | desenvolvimento | Especialização por região: como construir conhecimento local | Terceiro ciclo (2026-10-01) |
| 57 | /blog/especializacao-por-tipo-de-imovel/ | carreira | Satélite de /blog/desenvolvimento-profissional-do-corretor/ | desenvolvimento | Especialização por tipo de imóvel e segmento | Terceiro ciclo (2026-10-01) |
| 58 | /blog/reputacao-profissional-na-corretagem/ | carreira | Satélite de /blog/desenvolvimento-profissional-do-corretor/ | iniciante, desenvolvimento | Como a reputação profissional se constrói na corretagem | Terceiro ciclo (2026-10-01) |
| 59 | /blog/corretagem-em-lancamentos/ | carreira | Satélite de /blog/desenvolvimento-profissional-do-corretor/ | iniciante, desenvolvimento | Corretagem em lançamentos: como funciona o trabalho com incorporadoras | Terceiro ciclo (2026-10-01) |
| 60 | /blog/atuacao-em-locacao-e-administracao/ | carreira | Satélite de /blog/desenvolvimento-profissional-do-corretor/ | iniciante, desenvolvimento | Atuação em locação e administração de imóveis | Terceiro ciclo (2026-10-01) |
| 61 | /blog/perito-avaliador-cnai/ | carreira | Satélite de /blog/desenvolvimento-profissional-do-corretor/ | desenvolvimento | Perito avaliador imobiliário: o que é e como funciona o registro no CNAI | Terceiro ciclo (2026-10-01) |
| 62 | /blog/corretor-pessoa-juridica/ | carreira | Satélite de /blog/desenvolvimento-profissional-do-corretor/ | desenvolvimento | Corretor pessoa jurídica: quando abrir empresa e como funciona o registro no CRECI | Terceiro ciclo (2026-10-01) |
| 63 | /blog/como-apresentar-os-servicos-ao-proprietario/ | captacao | Satélite de /blog/como-captar-imoveis/ | iniciante | Como apresentar os serviços do corretor ao proprietário | Terceiro ciclo (2026-10-01) |
| 64 | /blog/prospeccao-de-proprietarios/ | captacao | Satélite de /blog/como-captar-imoveis/ | iniciante | Prospecção de proprietários em uma região de atuação | Terceiro ciclo (2026-10-01) |
| 65 | /blog/organizacao-da-carteira-de-imoveis/ | captacao | Satélite de /blog/como-captar-imoveis/ | desenvolvimento | Organização e atualização da carteira de imóveis | Terceiro ciclo (2026-10-01) |
| 66 | /blog/retorno-ao-proprietario/ | captacao | Satélite de /blog/como-captar-imoveis/ | iniciante, desenvolvimento | Retorno ao proprietário: visitas, interessados e relatórios periódicos | Terceiro ciclo (2026-10-01) |
| 67 | /blog/captacao-para-locacao/ | captacao | Satélite de /blog/como-captar-imoveis/ | iniciante | Captação de imóvel para locação: particularidades | Terceiro ciclo (2026-10-01) |
| 68 | /blog/imovel-com-pendencias-documentais/ | captacao | Satélite de /blog/como-captar-imoveis/ | desenvolvimento | Imóvel com pendências documentais: como conduzir a captação | Terceiro ciclo (2026-10-01) |
| 69 | /blog/imoveis-comparaveis/ | preco-e-mercado | Satélite de /blog/preco-de-mercado-de-imoveis/ | iniciante, desenvolvimento | Imóveis comparáveis: como selecionar e analisar | Terceiro ciclo (2026-10-01) |
| 70 | /blog/caracteristicas-que-influenciam-o-valor/ | preco-e-mercado | Satélite de /blog/preco-de-mercado-de-imoveis/ | iniciante | Características que influenciam o valor de um imóvel | Terceiro ciclo (2026-10-01) |
| 71 | /blog/revisao-de-preco-durante-a-comercializacao/ | preco-e-mercado | Satélite de /blog/preco-de-mercado-de-imoveis/ | desenvolvimento | Imóvel acima do preço de mercado: revisão de preço durante a comercialização | Terceiro ciclo (2026-10-01) |
| 72 | /blog/valor-do-aluguel/ | preco-e-mercado | Satélite de /blog/preco-de-mercado-de-imoveis/ | iniciante | Valor do aluguel: como orientar o proprietário na locação | Terceiro ciclo (2026-10-01) |
| 73 | /blog/historico-do-cliente/ | atendimento | Satélite de /blog/atendimento-ao-comprador-de-imoveis/ | iniciante | Registro das preferências e do histórico do cliente | Terceiro ciclo (2026-10-01) |
| 74 | /blog/comprador-que-precisa-vender-outro-imovel/ | atendimento | Satélite de /blog/atendimento-ao-comprador-de-imoveis/ | desenvolvimento | Comprador que precisa vender outro imóvel: como conduzir o atendimento | Terceiro ciclo (2026-10-01) |
| 75 | /blog/fgts-na-compra-do-imovel/ | atendimento | Satélite de /blog/atendimento-ao-comprador-de-imoveis/ | iniciante | Uso do FGTS na compra do imóvel: regras gerais que o corretor deve conhecer | Terceiro ciclo (2026-10-01) |
| 76 | /blog/atendimento-ao-interessado-em-locacao/ | atendimento | Satélite de /blog/atendimento-ao-comprador-de-imoveis/ | iniciante | Atendimento ao interessado em locação: do primeiro contato à assinatura | Terceiro ciclo (2026-10-01) |
| 77 | /blog/garantias-locaticias/ | atendimento | Satélite de /blog/atendimento-ao-comprador-de-imoveis/ | iniciante | Garantias locatícias: caução, fiador, seguro-fiança e título de capitalização | Terceiro ciclo (2026-10-01) |
| 78 | /blog/pos-venda-na-corretagem/ | atendimento | Satélite de /blog/atendimento-ao-comprador-de-imoveis/ | desenvolvimento | Pós-venda: acompanhamento do cliente depois da conclusão do negócio | Terceiro ciclo (2026-10-01) |
| 79 | /blog/preparacao-do-imovel-para-visita/ | visitas | Satélite de /blog/visitas-a-imoveis/ | iniciante | Preparação do imóvel para visitação: orientações ao proprietário | Terceiro ciclo (2026-10-01) |
| 80 | /blog/registro-apos-a-visita/ | visitas | Satélite de /blog/visitas-a-imoveis/ | iniciante | O que registrar depois da visita | Terceiro ciclo (2026-10-01) |
| 81 | /blog/visita-a-imovel-ocupado/ | visitas | Satélite de /blog/visitas-a-imoveis/ | desenvolvimento | Visita a imóvel ocupado por inquilino: regras e cuidados | Terceiro ciclo (2026-10-01) |
| 82 | /blog/contraproposta/ | negociacao | Satélite de /blog/proposta-de-compra-de-imovel/ | iniciante, desenvolvimento | Contraproposta: como conduzir e registrar | Terceiro ciclo (2026-10-01) |
| 83 | /blog/negociacao-de-prazo-e-pagamento/ | negociacao | Satélite de /blog/proposta-de-compra-de-imovel/ | desenvolvimento | Negociação de prazo e forma de pagamento | Terceiro ciclo (2026-10-01) |
| 84 | /blog/imovel-em-inventario/ | negociacao | Satélite de /blog/proposta-de-compra-de-imovel/ | desenvolvimento | Venda de imóvel em inventário: cuidados na intermediação | Terceiro ciclo (2026-10-01) |
| 85 | /blog/venda-de-imovel-financiado/ | negociacao | Satélite de /blog/proposta-de-compra-de-imovel/ | desenvolvimento | Venda de imóvel financiado: quitação, transferência e etapas | Terceiro ciclo (2026-10-01) |
| 86 | /blog/quando-a-comissao-e-devida/ | corretagem-e-comissao | Satélite de /blog/comissao-de-corretor-de-imoveis/ | iniciante, desenvolvimento | Quando a comissão é devida: resultado útil, desistência e arrependimento | Terceiro ciclo (2026-10-01) |
| 87 | /blog/comissao-na-locacao/ | corretagem-e-comissao | Satélite de /blog/comissao-de-corretor-de-imoveis/ | iniciante | Comissão na locação: intermediação e administração | Terceiro ciclo (2026-10-01) |
| 88 | /blog/tabelas-de-honorarios/ | corretagem-e-comissao | Satélite de /blog/comissao-de-corretor-de-imoveis/ | iniciante | Tabelas de honorários de referência: o que são e como consultar | Terceiro ciclo (2026-10-01) |
| 89 | /blog/tributacao-da-comissao/ | corretagem-e-comissao | Satélite de /blog/comissao-de-corretor-de-imoveis/ | iniciante | Recibo, nota fiscal e tributos sobre a comissão | Terceiro ciclo (2026-10-01) |
| 90 | /blog/comissao-em-lancamentos/ | corretagem-e-comissao | Satélite de /blog/comissao-de-corretor-de-imoveis/ | desenvolvimento | Comissão em lançamentos imobiliários: quem paga e como informar o comprador | Terceiro ciclo (2026-10-01) |
| 91 | /blog/controle-de-negocios-em-andamento/ | rotina-e-gestao | Satélite de /blog/rotina-de-trabalho-do-corretor-de-imoveis/ | desenvolvimento | Controle de propostas e negócios em andamento | Terceiro ciclo (2026-10-01) |
| 92 | /blog/organizacao-documental/ | rotina-e-gestao | Satélite de /blog/rotina-de-trabalho-do-corretor-de-imoveis/ | iniciante | Organização documental da intermediação | Terceiro ciclo (2026-10-01) |
| 93 | /blog/origem-dos-clientes/ | rotina-e-gestao | Satélite de /blog/rotina-de-trabalho-do-corretor-de-imoveis/ | desenvolvimento | Origem dos clientes: como medir de onde vêm os contatos | Terceiro ciclo (2026-10-01) |
| 94 | /blog/perfil-da-empresa-no-google/ | marketing | Satélite de /blog/marketing-para-corretor-de-imoveis/ | desenvolvimento | Perfil da Empresa no Google para corretores de imóveis | Terceiro ciclo (2026-10-01) |
| 95 | /blog/site-proprio-para-corretor/ | marketing | Satélite de /blog/marketing-para-corretor-de-imoveis/ | desenvolvimento | Site próprio para corretor de imóveis: quando faz sentido e o que deve conter | Terceiro ciclo (2026-10-01) |
| 96 | /blog/producao-de-conteudo/ | marketing | Satélite de /blog/marketing-para-corretor-de-imoveis/ | desenvolvimento | Produção de conteúdo para corretores: temas úteis e regularidade | Terceiro ciclo (2026-10-01) |
| 97 | /blog/portais-imobiliarios/ | marketing | Satélite de /blog/marketing-para-corretor-de-imoveis/ | iniciante | Portais imobiliários: como anunciar com informações corretas | Terceiro ciclo (2026-10-01) |
| 98 | /blog/redes-sociais-do-corretor/ | marketing | Satélite de /blog/marketing-para-corretor-de-imoveis/ | iniciante | Redes sociais do corretor: uso profissional e cuidados | Terceiro ciclo (2026-10-01) |
| 99 | /blog/assinatura-eletronica/ | tecnologia | Satélite de /blog/ferramentas-digitais-do-corretor/ | desenvolvimento | Assinatura eletrônica em documentos imobiliários: usos e limites | Terceiro ciclo (2026-10-01) |
| 100 | /blog/inteligencia-artificial-na-corretagem/ | tecnologia | Satélite de /blog/ferramentas-digitais-do-corretor/ | desenvolvimento | Inteligência artificial como apoio ao trabalho do corretor | Terceiro ciclo (2026-10-01) |
| 101 | /blog/backup-e-seguranca-da-informacao/ | tecnologia | Satélite de /blog/ferramentas-digitais-do-corretor/ | desenvolvimento | Backup e segurança da informação para corretores | Terceiro ciclo (2026-10-01) |
| 102 | /blog/certidoes-online/ | tecnologia | Satélite de /blog/ferramentas-digitais-do-corretor/ | iniciante | Certidões online: onde emitir e como conferir | Terceiro ciclo (2026-10-01) |
| 103 | /blog/servicos-eletronicos-de-registro/ | tecnologia | Satélite de /blog/ferramentas-digitais-do-corretor/ | iniciante | Matrícula online e serviços eletrônicos de registro de imóveis | Terceiro ciclo (2026-10-01) |
| 104 | /blog/formacao-continuada-do-corretor/ | carreira | Satélite de /blog/desenvolvimento-profissional-do-corretor/ | desenvolvimento | Formação continuada do corretor: cursos, especializações e atualização | Quarto ciclo (2026-10-01) |
| 105 | /blog/relacionamento-com-profissionais-do-mercado/ | carreira | Satélite de /blog/desenvolvimento-profissional-do-corretor/ | desenvolvimento | Relacionamento com outros profissionais: despachantes, correspondentes bancários, advogados e cartórios | Quarto ciclo (2026-10-01) |
| 106 | /blog/corretagem-de-imoveis-rurais/ | carreira | Satélite de /blog/desenvolvimento-profissional-do-corretor/ | desenvolvimento | Corretagem de imóveis rurais: particularidades da intermediação | Quarto ciclo (2026-10-01) |
| 107 | /blog/proprietario-que-anuncia-por-conta-propria/ | captacao | Satélite de /blog/como-captar-imoveis/ | iniciante | Proprietário que anuncia por conta própria: como abordar com profissionalismo | Quarto ciclo (2026-10-01) |
| 108 | /blog/renovacao-da-autorizacao-de-venda/ | captacao | Satélite de /blog/como-captar-imoveis/ | desenvolvimento | Renovação e encerramento da autorização de venda | Quarto ciclo (2026-10-01) |
| 109 | /blog/fontes-de-dados-de-mercado/ | preco-e-mercado | Satélite de /blog/preco-de-mercado-de-imoveis/ | desenvolvimento | Fontes de dados para pesquisa de mercado imobiliário | Quarto ciclo (2026-10-01) |
| 110 | /blog/atendimento-telefonico/ | atendimento | Satélite de /blog/atendimento-ao-comprador-de-imoveis/ | iniciante | Atendimento telefônico na corretagem: como conduzir ligações com clientes e proprietários | Quarto ciclo (2026-10-01) |
| 111 | /blog/clientes-indecisos/ | atendimento | Satélite de /blog/atendimento-ao-comprador-de-imoveis/ | desenvolvimento | Clientes indecisos: como apoiar a decisão sem pressionar | Quarto ciclo (2026-10-01) |
| 112 | /blog/atendimento-a-distancia/ | atendimento | Satélite de /blog/atendimento-ao-comprador-de-imoveis/ | desenvolvimento | Atendimento a compradores de outras cidades ou à distância | Quarto ciclo (2026-10-01) |
| 113 | /blog/sequencia-de-visitas/ | visitas | Satélite de /blog/visitas-a-imoveis/ | iniciante | Como organizar uma sequência de visitas | Quarto ciclo (2026-10-01) |
| 114 | /blog/visitas-com-varios-decisores/ | visitas | Satélite de /blog/visitas-a-imoveis/ | desenvolvimento | Visitas com famílias e mais de um decisor | Quarto ciclo (2026-10-01) |
| 115 | /blog/visitas-virtuais/ | visitas | Satélite de /blog/visitas-a-imoveis/ | desenvolvimento | Visitas virtuais e vídeos: quando usar e quais os limites | Quarto ciclo (2026-10-01) |
| 116 | /blog/divergencias-entre-as-partes/ | negociacao | Satélite de /blog/proposta-de-compra-de-imovel/ | desenvolvimento | Divergências entre comprador e vendedor: o papel do corretor | Quarto ciclo (2026-10-01) |
| 117 | /blog/permuta-de-imoveis/ | negociacao | Satélite de /blog/proposta-de-compra-de-imovel/ | desenvolvimento | Permuta de imóveis: como funciona a intermediação | Quarto ciclo (2026-10-01) |
| 118 | /blog/parcelamento-direto-com-o-vendedor/ | negociacao | Satélite de /blog/proposta-de-compra-de-imovel/ | desenvolvimento | Venda com parcelamento direto com o vendedor: cuidados | Quarto ciclo (2026-10-01) |
| 119 | /blog/corretor-contratado-pelo-comprador/ | corretagem-e-comissao | Satélite de /blog/comissao-de-corretor-de-imoveis/ | desenvolvimento | Contratação do corretor pelo comprador: como formalizar | Quarto ciclo (2026-10-01) |
| 120 | /blog/agenda-do-corretor/ | rotina-e-gestao | Satélite de /blog/rotina-de-trabalho-do-corretor-de-imoveis/ | iniciante | Agenda do corretor: compromissos, visitas e retornos (inclui agenda digital) | Quarto ciclo (2026-10-01) |
| 121 | /blog/videos-de-imoveis/ | marketing | Satélite de /blog/marketing-para-corretor-de-imoveis/ | iniciante | Vídeos de imóveis: gravação, edição e cuidados | Quarto ciclo (2026-10-01) |
| 122 | /blog/avaliacoes-de-clientes/ | marketing | Satélite de /blog/marketing-para-corretor-de-imoveis/ | desenvolvimento | Avaliações de clientes e reputação digital | Quarto ciclo (2026-10-01) |
| 123 | /blog/automacao-na-corretagem/ | tecnologia | Satélite de /blog/ferramentas-digitais-do-corretor/ | desenvolvimento | Automação na corretagem: o que automatizar e o que deve continuar pessoal | Quarto ciclo (2026-10-01) |

Os pilares mantêm a visão geral. Cada satélite aprofunda um trecho e aponta de volta para o pilar. Quando o satélite for publicado, o trecho correspondente do pilar ganha um link para ele.

---

## 3. Editorias (taxonomia)

A ordem segue a trilha de estudo. A página de categoria `/blog/categoria/<id>/` só é gerada automaticamente quando a editoria tiver **3 ou mais artigos**. Antes disso, a editoria aparece apenas como seção no índice `/blog/` (âncora `#<id>`).

| Ordem | id | Nome | Descrição | Pilar |
|---|---|---|---|---|
| 1 | comecando-na-profissao | Começando na profissão | Formação, registro no CRECI, modelos de atuação e primeiros meses | /blog/como-ser-corretor-de-imoveis/ |
| 2 | carreira | Carreira e desenvolvimento profissional | Ética, especialização, reputação, formação continuada e planejamento da carreira | **a criar**: pauta 16 |
| 3 | captacao | Captação de imóveis | Relação com proprietários, levantamento do imóvel, autorização e exclusividade | /blog/como-captar-imoveis/ |
| 4 | preco-e-mercado | Preço e mercado | Formação de preço, comparáveis, conversa sobre preço e limites da opinião de mercado | **a criar**: pauta 42 |
| 5 | atendimento | Atendimento ao cliente | Primeiro contato, qualificação, canais de atendimento, financiamento e acompanhamento | /blog/atendimento-ao-comprador-de-imoveis/ |
| 6 | visitas | Visitas | Preparação, condução, segurança e registro das visitas | **a criar**: pauta 64 |
| 7 | negociacao | Negociação | Proposta, contraproposta, condições de pagamento, sinal e etapas até a escritura | **a criar**: pauta 73 |
| 8 | corretagem-e-comissao | Corretagem e comissão | Contrato de corretagem, comissão, parcerias, tributação e formalização | /blog/comissao-de-corretor-de-imoveis/ |
| 9 | rotina-e-gestao | Rotina e gestão | Agenda, CRM, follow-up, indicadores, controle de propostas e documentos | /blog/rotina-de-trabalho-do-corretor-de-imoveis/ |
| 10 | marketing | Marketing e posicionamento | Presença digital, anúncios, fotografia, regras de publicidade e reputação | /blog/marketing-para-corretor-de-imoveis/ |
| 11 | tecnologia | Tecnologia | Ferramentas digitais, LGPD, assinatura eletrônica, IA como apoio e segurança da informação | **a criar**: pauta 110 |

Enquanto o pilar próprio não existir, os satélites apontam para o pilar mais próximo: carreira → como-ser-corretor; preço e mercado → como-captar-imoveis; visitas e negociação → atendimento-ao-comprador; tecnologia → rotina-de-trabalho.

---

## 4. Regras anti-canibalização

Regra geral: **uma pergunta, uma página principal**. Antes de criar uma pauta, verifique se vale mais atualizar um artigo existente.

| Tema | Página dona | Os demais só apontam |
|---|---|---|
| Autorização de venda | Captação (pauta 31) | Comissão, Marketing (publicidade) |
| Exclusividade | Captação (pauta 32) | Comissão (cita CC art. 726 em uma linha) |
| Retorno ao proprietário (visitas, interessados, relatórios) | Captação (pauta 37) | Visitas (pauta 69 trata do registro interno, não do retorno) |
| Conversa sobre preço com o proprietário (inclui apresentar a pesquisa) | Preço e mercado (pauta 46) | Captação |
| Imóvel acima do mercado / revisão de preço | Preço e mercado (pauta 47) | Captação |
| Parcerias entre corretores e divisão de comissão | Corretagem (pauta 87) | Carreira |
| Contrato de corretagem (forma, deveres do art. 723) | Corretagem (pauta 85) | Pilar de comissão faz só o resumo |
| Quando a comissão é devida (aprofundamento com jurisprudência) | Corretagem (pauta 86) | O pilar mantém o resumo dos arts. 725–727 |
| CRM e planilha (o que registrar, como escolher) | Rotina e gestão (pauta 93) | Tecnologia, Atendimento (pauta 55 trata do conteúdo do histórico, não da ferramenta) |
| Agenda (inclusive agenda digital) | Rotina e gestão (pauta 98) | Tecnologia |
| Organização documental e arquivos | Rotina e gestão (pauta 97) | Tecnologia (pauta 114 trata de backup e segurança) |
| Planejamento e controle financeiro do corretor | Carreira (pauta 22) | Começando na profissão |
| Modelos de atuação (inclui "corretor pode trabalhar sozinho?") | Começando (pauta 7) | Carreira |
| Especialização por região e autoridade local | Carreira (pauta 18) | Marketing |
| Regras de publicidade | Marketing (pauta 100) | O pilar de marketing mantém o resumo |
| LGPD | Tecnologia (pauta 111) | Atendimento, Marketing (uma linha) |
| Decisores múltiplos | Visitas (pauta 70) | Negociação (resumo no pilar 73) |
| Ferramentas do início da carreira | Tecnologia (pilar 110) | Começando na profissão |

Não publicar dois artigos que mudem só a forma do título ("como…", "guia de…", "passo a passo…", "dicas de…", "entenda…").

---

## 5. Pautas futuras (117)

> **Banco editorial, não fila de publicação.** O banco editorial não representa uma ordem automática de publicação. A produção deve ocorrer em ciclos, priorizando qualidade, intenção de busca, interlinking e análise dos resultados dos ciclos anteriores.

Persona: `futuro` = quer ser corretor · `iniciante` = 0 a 24 meses · `desenvolvimento` = já atua.
Prioridade: **P1** primeiro · **P2** depois · **P3** quando a base estiver formada.
Slug sugerido = planejamento, não URL criada. Nenhuma página vazia deve ser publicada.

### 5.1 Começando na profissão (pilar: /blog/como-ser-corretor-de-imoveis/)

| nº | Título | Slug sugerido | Persona | Tipo | Pilar que reforça | Prior. | Fontes primárias |
|---|---|---|---|---|---|---|---|
| 1 | O que faz um corretor de imóveis: atribuições e limites da profissão · **publicado** em /blog/o-que-faz-um-corretor-de-imoveis/ | o-que-faz-um-corretor-de-imoveis | futuro | satélite | como-ser-corretor-de-imoveis | P1 | Lei 6.530/1978, art. 3º (conferido) |
| 2 | Vale a pena ser corretor de imóveis? O que considerar antes de decidir · **publicado** em /blog/vale-a-pena-ser-corretor-de-imoveis/ | vale-a-pena-ser-corretor-de-imoveis | futuro | satélite | como-ser-corretor-de-imoveis | P1 | — |
| 3 | Curso de Técnico em Transações Imobiliárias (TTI): como funciona e como escolher a escola · **publicado** em /blog/curso-tecnico-em-transacoes-imobiliarias/ | curso-tecnico-em-transacoes-imobiliarias | futuro | satélite | como-ser-corretor-de-imoveis | P1 | Lei 6.530/1978, art. 2º (conferido); normas COFECI sobre formações aceitas e habilitação de escolas (verificar antes de publicar) |
| 4 | Inscrição no CRECI: etapas, documentos e custos · **publicado** em /blog/inscricao-no-creci/ | inscricao-no-creci | futuro | satélite | como-ser-corretor-de-imoveis | P1 | Lei 6.530/1978, art. 4º (conferido); resoluções COFECI de inscrição; site do CRECI regional (verificar antes de publicar) |
| 5 | Quanto custa começar como corretor de imóveis · **publicado** em /blog/quanto-custa-comecar-como-corretor/ | quanto-custa-comecar-como-corretor | futuro | satélite | como-ser-corretor-de-imoveis | P2 | Valores de anuidade e taxas no CRECI regional (verificar antes de publicar; citar data da consulta) |
| 6 | Como funciona a remuneração do corretor de imóveis · **publicado** em /blog/como-funciona-a-remuneracao-do-corretor/ | como-funciona-a-remuneracao-do-corretor | futuro | satélite | como-ser-corretor-de-imoveis | P1 | CC arts. 724–725 (conferido) |
| 7 | Corretor autônomo, associado ou contratado: diferenças entre os modelos de atuação · **publicado** em /blog/corretor-autonomo-associado-ou-contratado/ | corretor-autonomo-associado-ou-contratado | futuro, iniciante | satélite | como-ser-corretor-de-imoveis | P1 | Lei 6.530/1978, art. 6º (conferido); CLT (verificar antes de publicar) |
| 8 | Contrato de associação entre corretor e imobiliária: o que observar · **publicado** em /blog/contrato-de-associacao-corretor-imobiliaria/ | contrato-de-associacao-corretor-imobiliaria | iniciante | satélite | como-ser-corretor-de-imoveis | P2 | Lei 6.530/1978, art. 6º (conferido) |
| 9 | Como avaliar uma imobiliária antes de se associar · **publicado** em /blog/como-avaliar-uma-imobiliaria/ | como-avaliar-uma-imobiliaria | futuro, iniciante | satélite | como-ser-corretor-de-imoveis | P2 | — |
| 10 | Habilidades importantes para o trabalho do corretor de imóveis · **publicado** em /blog/habilidades-do-corretor-de-imoveis/ | habilidades-do-corretor-de-imoveis | futuro | satélite | como-ser-corretor-de-imoveis | P2 | — |
| 11 | Primeiros passos depois de obter o CRECI · **publicado** em /blog/primeiros-passos-depois-do-creci/ | primeiros-passos-depois-do-creci | iniciante | satélite | como-ser-corretor-de-imoveis | P1 | Decreto 81.871/1978, art. 4º (conferido) |
| 12 | Como escolher a região ou o segmento de atuação no início da carreira · **publicado** em /blog/como-escolher-regiao-de-atuacao/ | como-escolher-regiao-de-atuacao | iniciante | satélite | como-ser-corretor-de-imoveis | P2 | — |
| 13 | O que estudar nos primeiros meses como corretor · **publicado** em /blog/o-que-estudar-nos-primeiros-meses/ | o-que-estudar-nos-primeiros-meses | iniciante | satélite | como-ser-corretor-de-imoveis | P2 | — |
| 14 | Como ganhar experiência no início da carreira sem carteira própria · **publicado** em /blog/como-ganhar-experiencia-no-inicio/ | como-ganhar-experiencia-no-inicio | iniciante | satélite | como-ser-corretor-de-imoveis | P2 | — |
| 15 | Documentos imobiliários que o corretor precisa conhecer: matrícula, certidões, escritura, ITBI e registro · **publicado** em /blog/documentos-imobiliarios-basicos/ | documentos-imobiliarios-basicos | iniciante | satélite | como-ser-corretor-de-imoveis | P1 | Lei 6.015/1973 (Registros Públicos); CC arts. 108 e 1.245 (verificar antes de publicar) |

### 5.2 Carreira e desenvolvimento profissional (pilar a criar: pauta 16)

| nº | Título | Slug sugerido | Persona | Tipo | Pilar que reforça | Prior. | Fontes primárias |
|---|---|---|---|---|---|---|---|
| 16 | Desenvolvimento profissional do corretor de imóveis: etapas e caminhos de especialização · **publicado** em /blog/desenvolvimento-profissional-do-corretor/ | desenvolvimento-profissional-do-corretor | iniciante, desenvolvimento | **pilar** | — | P1 | — |
| 17 | Ética profissional na corretagem: deveres perante clientes, colegas e o conselho · **publicado** em /blog/etica-profissional-na-corretagem/ | etica-profissional-na-corretagem | iniciante | satélite | desenvolvimento-profissional-do-corretor | P1 | Res. COFECI 326/1992, Código de Ética (verificar antes de publicar); Lei 6.530/1978, art. 20 (conferido) |
| 18 | Especialização por região: como construir conhecimento local · **publicado** em /blog/especializacao-por-regiao/ | especializacao-por-regiao | desenvolvimento | satélite | desenvolvimento-profissional-do-corretor | P2 | — |
| 19 | Especialização por tipo de imóvel e segmento · **publicado** em /blog/especializacao-por-tipo-de-imovel/ | especializacao-por-tipo-de-imovel | desenvolvimento | satélite | desenvolvimento-profissional-do-corretor | P2 | — |
| 20 | Como a reputação profissional se constrói na corretagem · **publicado** em /blog/reputacao-profissional-na-corretagem/ | reputacao-profissional-na-corretagem | iniciante, desenvolvimento | satélite | desenvolvimento-profissional-do-corretor | P2 | — |
| 21 | Formação continuada do corretor: cursos, especializações e atualização · **publicado** em /blog/formacao-continuada-do-corretor/ | formacao-continuada-do-corretor | desenvolvimento | satélite | desenvolvimento-profissional-do-corretor | P3 | — |
| 22 | Planejamento e controle financeiro do corretor com renda variável · **publicado** em /blog/planejamento-financeiro-do-corretor/ | planejamento-financeiro-do-corretor | futuro, iniciante | satélite | desenvolvimento-profissional-do-corretor | P1 | — |
| 23 | Relacionamento com outros profissionais: despachantes, correspondentes bancários, advogados e cartórios · **publicado** em /blog/relacionamento-com-profissionais-do-mercado/ | relacionamento-com-profissionais-do-mercado | desenvolvimento | satélite | desenvolvimento-profissional-do-corretor | P3 | — |
| 24 | Corretagem em lançamentos: como funciona o trabalho com incorporadoras · **publicado** em /blog/corretagem-em-lancamentos/ | corretagem-em-lancamentos | iniciante, desenvolvimento | satélite | desenvolvimento-profissional-do-corretor | P2 | Lei 4.591/1964 (verificar antes de publicar) |
| 25 | Corretagem de imóveis rurais: particularidades da intermediação · **publicado** em /blog/corretagem-de-imoveis-rurais/ | corretagem-de-imoveis-rurais | desenvolvimento | satélite | desenvolvimento-profissional-do-corretor | P3 | CCIR, ITR e georreferenciamento: Lei 10.267/2001 e normas do INCRA (verificar antes de publicar) |
| 26 | Atuação em locação e administração de imóveis · **publicado** em /blog/atuacao-em-locacao-e-administracao/ | atuacao-em-locacao-e-administracao | iniciante, desenvolvimento | satélite | desenvolvimento-profissional-do-corretor | P2 | Lei 8.245/1991 (verificar antes de publicar) |
| 27 | Perito avaliador imobiliário: o que é e como funciona o registro no CNAI · **publicado** em /blog/perito-avaliador-cnai/ | perito-avaliador-cnai | desenvolvimento | satélite | desenvolvimento-profissional-do-corretor | P2 | Res. COFECI 1.066/2007 (verificar antes de publicar) |
| 28 | Corretor pessoa jurídica: quando abrir empresa e como funciona o registro no CRECI · **publicado** em /blog/corretor-pessoa-juridica/ | corretor-pessoa-juridica | desenvolvimento | satélite | desenvolvimento-profissional-do-corretor | P2 | Lei 6.530/1978, arts. 3º, parágrafo único, e 4º (conferido); resoluções COFECI de inscrição de PJ (verificar antes de publicar) |

### 5.3 Captação de imóveis (pilar: /blog/como-captar-imoveis/)

| nº | Título | Slug sugerido | Persona | Tipo | Pilar que reforça | Prior. | Fontes primárias |
|---|---|---|---|---|---|---|---|
| 29 | Entrevista inicial com o proprietário: o que perguntar e registrar · **publicado** em /blog/entrevista-inicial-com-o-proprietario/ | entrevista-inicial-com-o-proprietario | iniciante | satélite | como-captar-imoveis | P1 | — |
| 30 | Visita de captação: roteiro e levantamento de informações do imóvel · **publicado** em /blog/visita-de-captacao/ | visita-de-captacao | iniciante | satélite | como-captar-imoveis | P1 | — |
| 31 | Autorização de venda: o que deve constar no documento · **publicado** em /blog/autorizacao-de-venda/ | autorizacao-de-venda | iniciante | satélite | como-captar-imoveis | P1 | Decreto 81.871/1978, art. 5º; Lei 6.530/1978, art. 20, III (conferidos). `avisoJuridico` |
| 32 | Exclusividade na intermediação: como funciona e como apresentar ao proprietário · **publicado** em /blog/exclusividade-na-intermediacao/ | exclusividade-na-intermediacao | iniciante, desenvolvimento | satélite | como-captar-imoveis | P1 | CC art. 726 (conferido). `avisoJuridico` |
| 33 | Documentação na fase de captação: o que verificar antes de anunciar · **publicado** em /blog/documentacao-na-captacao/ | documentacao-na-captacao | iniciante | satélite | como-captar-imoveis | P1 | Lei 6.015/1973 (verificar antes de publicar) |
| 34 | Como apresentar os serviços do corretor ao proprietário · **publicado** em /blog/como-apresentar-os-servicos-ao-proprietario/ | como-apresentar-os-servicos-ao-proprietario | iniciante | satélite | como-captar-imoveis | P2 | — |
| 35 | Prospecção de proprietários em uma região de atuação · **publicado** em /blog/prospeccao-de-proprietarios/ | prospeccao-de-proprietarios | iniciante | satélite | como-captar-imoveis | P2 | LGPD (conferido) para contatos |
| 36 | Organização e atualização da carteira de imóveis · **publicado** em /blog/organizacao-da-carteira-de-imoveis/ | organizacao-da-carteira-de-imoveis | desenvolvimento | satélite | como-captar-imoveis | P2 | — |
| 37 | Retorno ao proprietário: visitas, interessados e relatórios periódicos · **publicado** em /blog/retorno-ao-proprietario/ | retorno-ao-proprietario | iniciante, desenvolvimento | satélite | como-captar-imoveis | P2 | — |
| 38 | Proprietário que anuncia por conta própria: como abordar com profissionalismo · **publicado** em /blog/proprietario-que-anuncia-por-conta-propria/ | proprietario-que-anuncia-por-conta-propria | iniciante | satélite | como-captar-imoveis | P3 | — |
| 39 | Captação de imóvel para locação: particularidades · **publicado** em /blog/captacao-para-locacao/ | captacao-para-locacao | iniciante | satélite | como-captar-imoveis | P2 | Lei 8.245/1991 (verificar antes de publicar) |
| 40 | Imóvel com pendências documentais: como conduzir a captação · **publicado** em /blog/imovel-com-pendencias-documentais/ | imovel-com-pendencias-documentais | desenvolvimento | satélite | como-captar-imoveis | P2 | Lei 6.015/1973 (verificar antes de publicar) |
| 41 | Renovação e encerramento da autorização de venda · **publicado** em /blog/renovacao-da-autorizacao-de-venda/ | renovacao-da-autorizacao-de-venda | desenvolvimento | satélite | como-captar-imoveis | P3 | CC art. 727 (conferido). `avisoJuridico` |

### 5.4 Preço e mercado (pilar a criar: pauta 42)

Limite editorial: não transformar em curso de avaliação formal. Diferenciar sempre a opinião de mercado do corretor (Lei 6.530, art. 3º, "opinar quanto à comercialização") do laudo e do parecer técnico.

| nº | Título | Slug sugerido | Persona | Tipo | Pilar que reforça | Prior. | Fontes primárias |
|---|---|---|---|---|---|---|---|
| 42 | Preço de mercado: como o corretor fundamenta a sugestão de preço de um imóvel · **publicado** em /blog/preco-de-mercado-de-imoveis/ | preco-de-mercado-de-imoveis | iniciante, desenvolvimento | **pilar** | — | P1 | Lei 6.530/1978, art. 3º (conferido) |
| 43 | Preço de anúncio, preço de venda e valor de mercado: diferenças · **publicado** em /blog/preco-de-anuncio-e-valor-de-mercado/ | preco-de-anuncio-e-valor-de-mercado | iniciante | satélite | preco-de-mercado-de-imoveis | P1 | — |
| 44 | Imóveis comparáveis: como selecionar e analisar · **publicado** em /blog/imoveis-comparaveis/ | imoveis-comparaveis | iniciante, desenvolvimento | satélite | preco-de-mercado-de-imoveis | P2 | — |
| 45 | Características que influenciam o valor de um imóvel · **publicado** em /blog/caracteristicas-que-influenciam-o-valor/ | caracteristicas-que-influenciam-o-valor | iniciante | satélite | preco-de-mercado-de-imoveis | P2 | — |
| 46 | Como conversar com o proprietário sobre preço (inclui a apresentação da pesquisa de mercado) · **publicado** em /blog/conversa-sobre-preco-com-o-proprietario/ | conversa-sobre-preco-com-o-proprietario | iniciante | satélite | preco-de-mercado-de-imoveis | P1 | — |
| 47 | Imóvel acima do preço de mercado: revisão de preço durante a comercialização · **publicado** em /blog/revisao-de-preco-durante-a-comercializacao/ | revisao-de-preco-durante-a-comercializacao | desenvolvimento | satélite | preco-de-mercado-de-imoveis | P2 | — |
| 48 | Opinião de mercado do corretor e avaliação formal (PTAM): diferenças e limites · **publicado** em /blog/opiniao-de-mercado-e-avaliacao-formal/ | opiniao-de-mercado-e-avaliacao-formal | desenvolvimento | satélite | preco-de-mercado-de-imoveis | P1 | Res. COFECI 1.066/2007; ABNT NBR 14653 (verificar antes de publicar). `avisoJuridico` |
| 49 | Fontes de dados para pesquisa de mercado imobiliário · **publicado** em /blog/fontes-de-dados-de-mercado/ | fontes-de-dados-de-mercado | desenvolvimento | satélite | preco-de-mercado-de-imoveis | P3 | Bases públicas municipais de ITBI, quando existirem (verificar antes de publicar) |
| 50 | Valor do aluguel: como orientar o proprietário na locação · **publicado** em /blog/valor-do-aluguel/ | valor-do-aluguel | iniciante | satélite | preco-de-mercado-de-imoveis | P2 | Lei 8.245/1991 (verificar antes de publicar) |

### 5.5 Atendimento ao cliente (pilar: /blog/atendimento-ao-comprador-de-imoveis/)

| nº | Título | Slug sugerido | Persona | Tipo | Pilar que reforça | Prior. | Fontes primárias |
|---|---|---|---|---|---|---|---|
| 51 | Primeiro contato com o interessado: como responder e o que perguntar · **publicado** em /blog/primeiro-contato-com-o-interessado/ | primeiro-contato-com-o-interessado | iniciante | satélite | atendimento-ao-comprador-de-imoveis | P1 | Decreto 81.871/1978, art. 4º (conferido) |
| 52 | Qualificação do comprador: necessidades, capacidade de pagamento e prazo · **publicado** em /blog/qualificacao-do-comprador/ | qualificacao-do-comprador | iniciante | satélite | atendimento-ao-comprador-de-imoveis | P1 | — |
| 53 | Atendimento por WhatsApp: organização, registros e cuidados profissionais · **publicado** em /blog/atendimento-por-whatsapp/ | atendimento-por-whatsapp | iniciante | satélite | atendimento-ao-comprador-de-imoveis | P1 | LGPD (conferido) |
| 54 | Atendimento telefônico na corretagem · **publicado** em /blog/atendimento-telefonico/ | atendimento-telefonico | iniciante | satélite | atendimento-ao-comprador-de-imoveis | P3 | — |
| 55 | Registro das preferências e do histórico do cliente · **publicado** em /blog/historico-do-cliente/ | historico-do-cliente | iniciante | satélite | atendimento-ao-comprador-de-imoveis | P2 | LGPD (conferido) |
| 56 | Comprador que precisa vender outro imóvel: como conduzir o atendimento · **publicado** em /blog/comprador-que-precisa-vender-outro-imovel/ | comprador-que-precisa-vender-outro-imovel | desenvolvimento | satélite | atendimento-ao-comprador-de-imoveis | P2 | — |
| 57 | Clientes indecisos: como apoiar a decisão sem pressionar · **publicado** em /blog/clientes-indecisos/ | clientes-indecisos | desenvolvimento | satélite | atendimento-ao-comprador-de-imoveis | P3 | — |
| 58 | Financiamento imobiliário: o que o corretor precisa saber para orientar o comprador · **publicado** em /blog/financiamento-imobiliario-para-corretores/ | financiamento-imobiliario-para-corretores | iniciante | satélite | atendimento-ao-comprador-de-imoveis | P1 | Lei 9.514/1997; normas da Caixa e do Banco Central (verificar antes de publicar) |
| 59 | Uso do FGTS na compra do imóvel: regras gerais que o corretor deve conhecer · **publicado** em /blog/fgts-na-compra-do-imovel/ | fgts-na-compra-do-imovel | iniciante | satélite | atendimento-ao-comprador-de-imoveis | P2 | Lei 8.036/1990; regras da Caixa (verificar antes de publicar) |
| 60 | Atendimento ao interessado em locação: do primeiro contato à assinatura · **publicado** em /blog/atendimento-ao-interessado-em-locacao/ | atendimento-ao-interessado-em-locacao | iniciante | satélite | atendimento-ao-comprador-de-imoveis | P2 | Lei 8.245/1991 (verificar antes de publicar) |
| 61 | Garantias locatícias: caução, fiador, seguro-fiança e título de capitalização · **publicado** em /blog/garantias-locaticias/ | garantias-locaticias | iniciante | satélite | atendimento-ao-comprador-de-imoveis | P2 | Lei 8.245/1991, art. 37 (verificar antes de publicar). `avisoJuridico` |
| 62 | Pós-venda: acompanhamento do cliente depois da conclusão do negócio · **publicado** em /blog/pos-venda-na-corretagem/ | pos-venda-na-corretagem | desenvolvimento | satélite | atendimento-ao-comprador-de-imoveis | P2 | — |
| 63 | Atendimento a compradores de outras cidades ou à distância · **publicado** em /blog/atendimento-a-distancia/ | atendimento-a-distancia | desenvolvimento | satélite | atendimento-ao-comprador-de-imoveis | P3 | — |

### 5.6 Visitas (pilar a criar: pauta 64)

| nº | Título | Slug sugerido | Persona | Tipo | Pilar que reforça | Prior. | Fontes primárias |
|---|---|---|---|---|---|---|---|
| 64 | Visitas a imóveis: preparação, condução e registro · **publicado** em /blog/visitas-a-imoveis/ | visitas-a-imoveis | iniciante | **pilar** | — | P1 | — |
| 65 | O que o corretor deve saber sobre o imóvel antes da visita · **publicado** em /blog/informacoes-antes-da-visita/ | informacoes-antes-da-visita | iniciante | satélite | visitas-a-imoveis | P1 | — |
| 66 | Preparação do imóvel para visitação: orientações ao proprietário · **publicado** em /blog/preparacao-do-imovel-para-visita/ | preparacao-do-imovel-para-visita | iniciante | satélite | visitas-a-imoveis | P2 | — |
| 67 | Como organizar uma sequência de visitas · **publicado** em /blog/sequencia-de-visitas/ | sequencia-de-visitas | iniciante | satélite | visitas-a-imoveis | P3 | — |
| 68 | Segurança do corretor durante visitas · **publicado** em /blog/seguranca-em-visitas/ | seguranca-em-visitas | iniciante, desenvolvimento | satélite | visitas-a-imoveis | P1 | — |
| 69 | O que registrar depois da visita · **publicado** em /blog/registro-apos-a-visita/ | registro-apos-a-visita | iniciante | satélite | visitas-a-imoveis | P2 | — |
| 70 | Visitas com famílias e mais de um decisor · **publicado** em /blog/visitas-com-varios-decisores/ | visitas-com-varios-decisores | desenvolvimento | satélite | visitas-a-imoveis | P3 | — |
| 71 | Visita a imóvel ocupado por inquilino: regras e cuidados · **publicado** em /blog/visita-a-imovel-ocupado/ | visita-a-imovel-ocupado | desenvolvimento | satélite | visitas-a-imoveis | P2 | Lei 8.245/1991, art. 23, IX (verificar antes de publicar) |
| 72 | Visitas virtuais e vídeos: quando usar e quais os limites · **publicado** em /blog/visitas-virtuais/ | visitas-virtuais | desenvolvimento | satélite | visitas-a-imoveis | P3 | — |

### 5.7 Negociação (pilar a criar: pauta 73)

| nº | Título | Slug sugerido | Persona | Tipo | Pilar que reforça | Prior. | Fontes primárias |
|---|---|---|---|---|---|---|---|
| 73 | Proposta de compra de imóvel: como estruturar e formalizar · **publicado** em /blog/proposta-de-compra-de-imovel/ | proposta-de-compra-de-imovel | iniciante | **pilar** | — | P1 | CC (verificar dispositivos antes de publicar) |
| 74 | Como apresentar uma proposta ao proprietário · **publicado** em /blog/apresentacao-da-proposta-ao-proprietario/ | apresentacao-da-proposta-ao-proprietario | iniciante | satélite | proposta-de-compra-de-imovel | P1 | CC art. 723 (conferido) |
| 75 | Contraproposta: como conduzir e registrar · **publicado** em /blog/contraproposta/ | contraproposta | iniciante, desenvolvimento | satélite | proposta-de-compra-de-imovel | P2 | — |
| 76 | Negociação de prazo e forma de pagamento · **publicado** em /blog/negociacao-de-prazo-e-pagamento/ | negociacao-de-prazo-e-pagamento | desenvolvimento | satélite | proposta-de-compra-de-imovel | P2 | — |
| 77 | Sinal e arras na compra de imóvel: noções para o corretor · **publicado** em /blog/sinal-e-arras/ | sinal-e-arras | iniciante | satélite | proposta-de-compra-de-imovel | P1 | CC arts. 417 a 420 (verificar antes de publicar). `avisoJuridico` |
| 78 | Do aceite da proposta ao contrato: etapas até a escritura · **publicado** em /blog/do-aceite-ao-contrato/ | do-aceite-ao-contrato | iniciante, desenvolvimento | satélite | proposta-de-compra-de-imovel | P1 | CC arts. 1.417–1.418, promessa de compra e venda (verificar antes de publicar). `avisoJuridico` |
| 79 | Divergências entre comprador e vendedor: o papel do corretor · **publicado** em /blog/divergencias-entre-as-partes/ | divergencias-entre-as-partes | desenvolvimento | satélite | proposta-de-compra-de-imovel | P3 | CC art. 723 (conferido) |
| 80 | Venda de imóvel em inventário: cuidados na intermediação · **publicado** em /blog/imovel-em-inventario/ | imovel-em-inventario | desenvolvimento | satélite | proposta-de-compra-de-imovel | P2 | CC e CPC, sucessões e alvará (verificar antes de publicar). `avisoJuridico` |
| 81 | Venda de imóvel financiado: quitação, transferência e etapas · **publicado** em /blog/venda-de-imovel-financiado/ | venda-de-imovel-financiado | desenvolvimento | satélite | proposta-de-compra-de-imovel | P2 | Lei 9.514/1997; normas dos bancos (verificar antes de publicar) |
| 82 | Permuta de imóveis: como funciona a intermediação · **publicado** em /blog/permuta-de-imoveis/ | permuta-de-imoveis | desenvolvimento | satélite | proposta-de-compra-de-imovel | P3 | CC art. 533 (verificar antes de publicar) |
| 83 | Venda com parcelamento direto com o vendedor: cuidados · **publicado** em /blog/parcelamento-direto-com-o-vendedor/ | parcelamento-direto-com-o-vendedor | desenvolvimento | satélite | proposta-de-compra-de-imovel | P3 | CC (verificar antes de publicar). `avisoJuridico` |
| 84 | Escritura e registro: o que o corretor acompanha até a conclusão · **publicado** em /blog/escritura-e-registro/ | escritura-e-registro | iniciante | satélite | proposta-de-compra-de-imovel | P1 | Lei 6.015/1973; CC arts. 108 e 1.245 (verificar antes de publicar) |

### 5.8 Corretagem e comissão (pilar: /blog/comissao-de-corretor-de-imoveis/)

| nº | Título | Slug sugerido | Persona | Tipo | Pilar que reforça | Prior. | Fontes primárias |
|---|---|---|---|---|---|---|---|
| 85 | Contrato de corretagem: o que diz o Código Civil (inclui deveres de diligência e informação) · **publicado** em /blog/contrato-de-corretagem/ | contrato-de-corretagem | iniciante, desenvolvimento | satélite | comissao-de-corretor-de-imoveis | P1 | CC arts. 722–729 (conferido). `avisoJuridico` |
| 86 | Quando a comissão é devida: resultado útil, desistência e arrependimento · **publicado** em /blog/quando-a-comissao-e-devida/ | quando-a-comissao-e-devida | iniciante, desenvolvimento | satélite | comissao-de-corretor-de-imoveis | P2 | CC arts. 725–727 (conferido); jurisprudência do STJ (verificar antes de publicar). `avisoJuridico` |
| 87 | Parcerias entre corretores: como combinar, formalizar e dividir a comissão · **publicado** em /blog/parcerias-entre-corretores/ | parcerias-entre-corretores | iniciante, desenvolvimento | satélite | comissao-de-corretor-de-imoveis | P1 | Código de Ética COFECI (verificar antes de publicar) |
| 88 | Comissão na locação: intermediação e administração · **publicado** em /blog/comissao-na-locacao/ | comissao-na-locacao | iniciante | satélite | comissao-de-corretor-de-imoveis | P2 | Lei 8.245/1991 (verificar antes de publicar) |
| 89 | Tabelas de honorários de referência: o que são e como consultar · **publicado** em /blog/tabelas-de-honorarios/ | tabelas-de-honorarios | iniciante | satélite | comissao-de-corretor-de-imoveis | P2 | CC art. 724 (conferido); tabelas regionais (verificar antes de publicar) |
| 90 | Recibo, nota fiscal e tributos sobre a comissão · **publicado** em /blog/tributacao-da-comissao/ | tributacao-da-comissao | iniciante | satélite | comissao-de-corretor-de-imoveis | P2 | Receita Federal (carnê-leão, IRPF); ISS municipal (verificar antes de publicar) |
| 91 | Contratação do corretor pelo comprador: como formalizar · **publicado** em /blog/corretor-contratado-pelo-comprador/ | corretor-contratado-pelo-comprador | desenvolvimento | satélite | comissao-de-corretor-de-imoveis | P3 | CC arts. 722–729 (conferido). `avisoJuridico` |
| 92 | Comissão em lançamentos imobiliários: quem paga e como informar o comprador · **publicado** em /blog/comissao-em-lancamentos/ | comissao-em-lancamentos | desenvolvimento | satélite | comissao-de-corretor-de-imoveis | P2 | STJ, Tema 938 (verificar antes de publicar). `avisoJuridico` |

### 5.9 Rotina e gestão (pilar: /blog/rotina-de-trabalho-do-corretor-de-imoveis/)

| nº | Título | Slug sugerido | Persona | Tipo | Pilar que reforça | Prior. | Fontes primárias |
|---|---|---|---|---|---|---|---|
| 93 | CRM para corretor de imóveis: o que registrar e como escolher (inclui planilha × CRM) · **publicado** em /blog/crm-para-corretor/ | crm-para-corretor | iniciante, desenvolvimento | satélite | rotina-de-trabalho-do-corretor-de-imoveis | P1 | LGPD (conferido) |
| 94 | Indicadores comerciais do corretor: quais acompanhar e como calcular a taxa de conversão · **publicado** em /blog/indicadores-comerciais-do-corretor/ | indicadores-comerciais-do-corretor | desenvolvimento | satélite | rotina-de-trabalho-do-corretor-de-imoveis | P1 | — |
| 95 | Controle de follow-up: organização e frequência dos retornos · **publicado** em /blog/controle-de-follow-up/ | controle-de-follow-up | iniciante | satélite | rotina-de-trabalho-do-corretor-de-imoveis | P1 | — |
| 96 | Controle de propostas e negócios em andamento · **publicado** em /blog/controle-de-negocios-em-andamento/ | controle-de-negocios-em-andamento | desenvolvimento | satélite | rotina-de-trabalho-do-corretor-de-imoveis | P2 | — |
| 97 | Organização documental da intermediação · **publicado** em /blog/organizacao-documental/ | organizacao-documental | iniciante | satélite | rotina-de-trabalho-do-corretor-de-imoveis | P2 | LGPD (conferido) |
| 98 | Agenda do corretor: compromissos, visitas e retornos (inclui agenda digital) · **publicado** em /blog/agenda-do-corretor/ | agenda-do-corretor | iniciante | satélite | rotina-de-trabalho-do-corretor-de-imoveis | P3 | — |
| 99 | Origem dos clientes: como medir de onde vêm os contatos · **publicado** em /blog/origem-dos-clientes/ | origem-dos-clientes | desenvolvimento | satélite | rotina-de-trabalho-do-corretor-de-imoveis | P2 | — |

### 5.10 Marketing e posicionamento (pilar: /blog/marketing-para-corretor-de-imoveis/)

| nº | Título | Slug sugerido | Persona | Tipo | Pilar que reforça | Prior. | Fontes primárias |
|---|---|---|---|---|---|---|---|
| 100 | Regras de publicidade do corretor de imóveis · **publicado** em /blog/regras-de-publicidade-do-corretor/ | regras-de-publicidade-do-corretor | iniciante, desenvolvimento | satélite | marketing-para-corretor-de-imoveis | P1 | Decreto 81.871/1978, arts. 4º e 5º; Lei 6.530/1978, art. 20, III, IV e V (conferidos); normas COFECI de publicidade (verificar antes de publicar) |
| 101 | Fotografia de imóveis com celular: orientações práticas · **publicado** em /blog/fotografia-de-imoveis/ | fotografia-de-imoveis | iniciante | satélite | marketing-para-corretor-de-imoveis | P1 | — |
| 102 | Descrição de imóveis em anúncios: como escrever com clareza e correção · **publicado** em /blog/descricao-de-imoveis/ | descricao-de-imoveis | iniciante | satélite | marketing-para-corretor-de-imoveis | P1 | Lei 6.530/1978, art. 20, V (conferido) |
| 103 | Perfil da Empresa no Google para corretores de imóveis · **publicado** em /blog/perfil-da-empresa-no-google/ | perfil-da-empresa-no-google | desenvolvimento | satélite | marketing-para-corretor-de-imoveis | P2 | Diretrizes do Google (verificar antes de publicar) |
| 104 | Site próprio para corretor de imóveis: quando faz sentido e o que deve conter · **publicado** em /blog/site-proprio-para-corretor/ | site-proprio-para-corretor | desenvolvimento | satélite | marketing-para-corretor-de-imoveis | P2 | LGPD (conferido) |
| 105 | Produção de conteúdo para corretores: temas úteis e regularidade · **publicado** em /blog/producao-de-conteudo/ | producao-de-conteudo | desenvolvimento | satélite | marketing-para-corretor-de-imoveis | P2 | — |
| 106 | Vídeos de imóveis: gravação, edição e cuidados · **publicado** em /blog/videos-de-imoveis/ | videos-de-imoveis | iniciante | satélite | marketing-para-corretor-de-imoveis | P3 | — |
| 107 | Avaliações de clientes e reputação digital · **publicado** em /blog/avaliacoes-de-clientes/ | avaliacoes-de-clientes | desenvolvimento | satélite | marketing-para-corretor-de-imoveis | P3 | — |
| 108 | Portais imobiliários: como anunciar com informações corretas · **publicado** em /blog/portais-imobiliarios/ | portais-imobiliarios | iniciante | satélite | marketing-para-corretor-de-imoveis | P2 | Decreto 81.871/1978, arts. 4º e 5º (conferido) |
| 109 | Redes sociais do corretor: uso profissional e cuidados · **publicado** em /blog/redes-sociais-do-corretor/ | redes-sociais-do-corretor | iniciante | satélite | marketing-para-corretor-de-imoveis | P2 | Decreto 81.871/1978, art. 4º (conferido) |

### 5.11 Tecnologia (pilar a criar: pauta 110)

Regra: a IA é apresentada como ferramenta de apoio, nunca como substituta do trabalho do corretor.

| nº | Título | Slug sugerido | Persona | Tipo | Pilar que reforça | Prior. | Fontes primárias |
|---|---|---|---|---|---|---|---|
| 110 | Ferramentas digitais do corretor: organização, comunicação e documentos · **publicado** em /blog/ferramentas-digitais-do-corretor/ | ferramentas-digitais-do-corretor | iniciante | **pilar** | — | P1 | — |
| 111 | LGPD na rotina do corretor: dados de clientes e proprietários · **publicado** em /blog/lgpd-na-rotina-do-corretor/ | lgpd-na-rotina-do-corretor | iniciante, desenvolvimento | satélite | ferramentas-digitais-do-corretor | P1 | Lei 13.709/2018 (conferido); orientações da ANPD (verificar antes de publicar). `avisoJuridico` |
| 112 | Assinatura eletrônica em documentos imobiliários: usos e limites · **publicado** em /blog/assinatura-eletronica/ | assinatura-eletronica | desenvolvimento | satélite | ferramentas-digitais-do-corretor | P2 | Lei 14.063/2020; MP 2.200-2/2001 (verificar antes de publicar). `avisoJuridico` |
| 113 | Inteligência artificial como apoio ao trabalho do corretor · **publicado** em /blog/inteligencia-artificial-na-corretagem/ | inteligencia-artificial-na-corretagem | desenvolvimento | satélite | ferramentas-digitais-do-corretor | P2 | LGPD (conferido) |
| 114 | Backup e segurança da informação para corretores · **publicado** em /blog/backup-e-seguranca-da-informacao/ | backup-e-seguranca-da-informacao | desenvolvimento | satélite | ferramentas-digitais-do-corretor | P2 | LGPD, art. 46 (verificar antes de publicar) |
| 115 | Automação na corretagem: o que automatizar e o que deve continuar pessoal · **publicado** em /blog/automacao-na-corretagem/ | automacao-na-corretagem | desenvolvimento | satélite | ferramentas-digitais-do-corretor | P3 | — |
| 116 | Certidões online: onde emitir e como conferir · **publicado** em /blog/certidoes-online/ | certidoes-online | iniciante | satélite | ferramentas-digitais-do-corretor | P2 | Órgãos emissores: tribunais, Receita, prefeituras (verificar antes de publicar) |
| 117 | Matrícula online e serviços eletrônicos de registro de imóveis · **publicado** em /blog/servicos-eletronicos-de-registro/ | servicos-eletronicos-de-registro | iniciante | satélite | ferramentas-digitais-do-corretor | P2 | Lei 14.382/2022; ONR/SAEC (verificar antes de publicar) |

### 5.12 Resumo

| Editoria | Pautas | P1 | P2 | P3 |
|---|---|---|---|---|
| Começando na profissão | 15 | 8 | 7 | 0 |
| Carreira | 13 | 3 | 7 | 3 |
| Captação | 13 | 5 | 6 | 2 |
| Preço e mercado | 9 | 4 | 4 | 1 |
| Atendimento | 13 | 4 | 6 | 3 |
| Visitas | 9 | 3 | 3 | 3 |
| Negociação | 12 | 5 | 4 | 3 |
| Corretagem e comissão | 8 | 2 | 5 | 1 |
| Rotina e gestão | 7 | 3 | 3 | 1 |
| Marketing | 10 | 3 | 5 | 2 |
| Tecnologia | 8 | 2 | 5 | 1 |
| **Total** | **117** | **42** | **55** | **20** |

Pilares a criar: 16 (carreira), 42 (preço e mercado), 64 (visitas), 73 (negociação) e 110 (tecnologia).

Pautas descartadas ou fundidas na consolidação, por canibalização: "Corretor pode trabalhar sozinho?" (→ 7); "Ferramentas necessárias no início" (→ 110); "Como é o início da carreira" (→ 2 e 11); "Apresentar a pesquisa de mercado" (→ 46); "Feedback ao proprietário após a visita" (→ 37); "Identificação dos decisores" (→ 70); "Planilha ou CRM" (→ 93); "Gestão do tempo" e "revisão mensal" (→ pilar de rotina); "Relacionamento com proprietários" (→ 37); "Controle financeiro" (→ 22); "Autoridade local" (→ 18); "Organização de arquivos digitais" (→ 97); "Deveres do corretor" (→ 85); "Desistência e comissão" (→ 86); "Divisão de comissão em parceria" (→ 87).

---

## 6. Expansões de escala (fase 2)

O proprietário aceita um site com centenas de páginas. As séries abaixo crescem sem conteúdo raso, desde que cada página responda a uma dúvida real e traga conteúdo próprio. Elas só começam depois do primeiro e do segundo ciclo das pautas da seção 5.

Cada série terá prefixo de URL e template próprios. Isso exige implementação no `build.mjs` antes da primeira publicação.

### 6.1 Glossário imobiliário (`/glossario/<termo>/`)

**Critério de qualidade:** um verbete por termo real usado na prática. Cada verbete tem:
- definição em linguagem clara;
- onde o termo aparece na rotina do corretor;
- o que verificar;
- base legal, quando houver, com fonte primária;
- links para o artigo do blog relacionado.

Verbete sem pelo menos ~250 palavras de conteúdo útil não é publicado. Sinônimos viram redirecionamento ou menção, nunca páginas separadas.

Exemplos de verbetes (20):
- matrícula do imóvel
- averbação
- certidão de ônus reais
- ITBI
- laudêmio
- foro e enfiteuse
- habite-se
- escritura pública
- registro de imóveis
- promessa de compra e venda
- arras (sinal)
- alienação fiduciária
- usucapião
- desmembramento e unificação
- incorporação imobiliária
- memorial descritivo
- IPTU
- CCIR
- georreferenciamento
- distrato

### 6.2 Documentos explicados (`/documentos/<documento>/`)

**Critério:** para que serve o documento, quem emite, como solicitar, prazo de validade usual (com fonte), o que conferir e erros comuns. Exemplos: certidão de matrícula atualizada, certidão negativa de débitos de IPTU, declaração de quitação condominial, certidões de distribuição cível, certidão de casamento atualizada, procuração pública para venda.

### 6.3 Legislação comentada (`/legislacao/<norma>/`)

**Critério:** um comentário por dispositivo ou grupo de dispositivos relevantes para a corretagem. Cada página tem link para o texto oficial, explicação prática, limites e aviso informativo. Nunca reproduzir o texto integral da norma.

Prioridade:
1. Lei 6.530/1978
2. Decreto 81.871/1978
3. Código Civil, arts. 722–729
4. Pontos da Lei 8.245/1991 relevantes à intermediação
5. LGPD aplicada ao corretor

### 6.4 Perguntas de quem quer ser corretor (`/blog/` com a persona `futuro`)

**Critério:** uma pergunta real e objetiva por página, com resposta direta no primeiro parágrafo e aprofundamento a seguir. Exemplos: "Corretor precisa ter faculdade?", "Quanto tempo dura o curso TTI?", "Posso trabalhar em outro estado com o meu CRECI?", "Corretor pode ter outro emprego?". Antes de criar, verificar se a resposta cabe em um artigo existente da seção 5.1. Se couber, a pergunta vira H2 lá.

---

## 7. Ordem de produção

### Primeiro ciclo (15 artigos P1, começando pelos pilares que faltam): concluído e publicado em 2026-10-01

| Ordem | Pauta |
|---|---|
| 1 | 42: Preço de mercado (pilar) |
| 2 | 64: Visitas a imóveis (pilar) |
| 3 | 73: Proposta de compra de imóvel (pilar) |
| 4 | 16: Desenvolvimento profissional do corretor (pilar) |
| 5 | 110: Ferramentas digitais do corretor (pilar) |
| 6 | 1: O que faz um corretor de imóveis |
| 7 | 4: Inscrição no CRECI |
| 8 | 11: Primeiros passos depois de obter o CRECI |
| 9 | 31: Autorização de venda |
| 10 | 29: Entrevista inicial com o proprietário |
| 11 | 52: Qualificação do comprador |
| 12 | 87: Parcerias entre corretores |
| 13 | 100: Regras de publicidade do corretor |
| 14 | 95: Controle de follow-up |
| 15 | 111: LGPD na rotina do corretor |

### Segundo ciclo (27 P1 restantes): concluído e publicado em 2026-10-01

Pautas: 2, 3, 6, 7, 15, 17, 22, 30, 32, 33, 43, 46, 48, 51, 53, 58, 65, 68, 74, 77, 78, 84, 85, 93, 94, 101, 102.

### Terceiro ciclo (55 P2): concluído e publicado em 2026-10-01

Ordem: primeiro as editorias com pilar recém-criado (preço, visitas, negociação, carreira, tecnologia), depois as demais.

### Quarto ciclo (20 P3): concluído e publicado em 2026-10-01

Depois disso, começam as expansões da seção 6.

**Regra de manutenção:** a cada artigo publicado, atualize o pilar correspondente com um link contextual para ele, e o campo `atualizado` do pilar, se o texto mudar de fato.

---

## 8. Padrão de artigo e checklist de publicação

### 8.1 Campos do objeto em `_fonte/artigos.mjs`

| Campo | Obrigatório | Regra |
|---|---|---|
| `slug` | sim | Minúsculas, hífens, sem acentos; estável depois de publicado (mudança só com 301 em `redirecionamentosBlog`) |
| `titulo` | sim | Até ~55 caracteres; o build acrescenta " \| Corretor 1%" |
| `h1` | sim | Pode ser mais longo e descritivo que o título; único na página |
| `descricao` | sim | 120 a 160 caracteres; sem promessa |
| `editoria` | sim | id da seção 3 |
| `personas` | sim | `['futuro' \| 'iniciante' \| 'desenvolvimento']` |
| `pilar` | sim | `true` se for o pilar da editoria; senão, o slug do pilar que reforça |
| `autor` | sim | `'daniel-ferreira'` |
| `data` | sim | Publicação original, AAAA-MM-DD |
| `atualizado` | não | Só em revisão real de conteúdo; aparece se for diferente de `data` |
| `avisoJuridico` | não | `true` em conteúdo com base legal |
| `fontes` | quando houver base legal | `[{ titulo, url }]` de fonte primária |
| `relacionados` | não | Slugs; sem eles, o build escolhe pilar → mesma editoria → próxima etapa da trilha |
| `corpo` | sim | HTML com H2/H3, sem H1; links internos contextuais para o pilar e para os satélites |

### 8.2 Checklist editorial (antes de escrever)

- [ ] Passou nas quatro perguntas (1.4)
- [ ] Não há artigo com a mesma intenção (seções 2 e 4)
- [ ] Título sem termos proibidos (1.3)
- [ ] Fontes primárias conferidas no texto vigente; nada de "verificar antes de publicar" pendente
- [ ] Sem cifras de renda; remuneração tratada pelas variáveis (1.5)
- [ ] Link para o pilar e, quando couber, para satélites
- [ ] CTA discreto ou nenhum

### 8.3 Checklist técnico (publicação)

1. Adicionar o objeto em `_fonte/artigos.mjs`.
2. `node _fonte/build.mjs`
3. `node _fonte/verificar.mjs`, que precisa terminar com "Tudo certo." (links, title, description, H1, canonical, JSON-LD, sitemap).
4. Conferir localmente: byline com autor, datas, bloco de fontes, relacionados, versão mobile.
5. `git add` + `git commit` (mensagem descritiva) + `git push`.
6. Publicar por FTP para `/www`, conforme `DEPLOY.md`: enviar só os arquivos do site, `.htaccess` por último, host FTP alternativo (IPv4).
7. Testar no ar: a URL nova responde 200, aparece no `sitemap.xml` e o canonical aponta para https://www.
8. Atualizar o pilar com o link para o novo artigo; registrar em `CHANGELOG.md`.
9. Marcar a pauta como publicada neste arquivo (acrescentar "✔ publicado AAAA-MM-DD" no título da linha).

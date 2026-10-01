export default {
  slug: 'lgpd-na-rotina-do-corretor',
  titulo: 'LGPD na rotina do corretor de imóveis',
  h1: 'LGPD na rotina do corretor: dados de clientes e proprietários',
  descricao:
    'Como a LGPD se aplica ao corretor de imóveis: dados de clientes e proprietários, bases legais, segurança, compartilhamento, descarte e direitos do titular.',
  editoria: 'tecnologia',
  personas: ['iniciante', 'desenvolvimento'],
  pilar: 'ferramentas-digitais-do-corretor',
  autor: 'daniel-ferreira',
  data: '2026-10-01',
  avisoJuridico: true,
  fontes: [
    {
      titulo: 'Lei nº 13.709/2018: Lei Geral de Proteção de Dados Pessoais (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm',
    },
    {
      titulo: 'Resolução CD/ANPD nº 2/2022: regulamento para agentes de tratamento de pequeno porte (Diário Oficial da União)',
      url: 'https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-2-de-27-de-janeiro-de-2022-376562019',
    },
    {
      titulo: 'ANPD: guia orientativo sobre segurança da informação para agentes de tratamento de pequeno porte',
      url: 'https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-sobre-seguranca-da-informacao-para-agentes-de-tratamento-de-pequeno-porte',
    },
    {
      titulo: 'ANPD: comunicação de incidente de segurança',
      url: 'https://www.gov.br/anpd/pt-br/assuntos/comunicacao-de-incidentes-de-seguranca-cis',
    },
  ],
  corpo: `
<p>O corretor de imóveis lida com dados pessoais o tempo todo. Nome, telefone e CPF do proprietário, estado civil e dados do cônjuge, renda e uso de FGTS do comprador, cópias de documentos de identidade, comprovantes de residência, matrículas em que constam os titulares do imóvel. A Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018, a LGPD) estabelece regras para esse tratamento, e elas se aplicam à atividade de intermediação imobiliária.</p>
<p>Na rotina, a lei se traduz em cuidados práticos: o que coletar, como guardar, com quem compartilhar, quando eliminar e como responder a pedidos dos titulares. O comentário dos dispositivos está em <a href="/legislacao/lgpd-conceitos-e-bases-legais/">LGPD: conceitos e bases legais</a> e <a href="/legislacao/lgpd-direitos-e-seguranca/">LGPD: direitos e segurança</a>.</p>

<h2>A LGPD se aplica ao corretor?</h2>
<p>Sim. O art. 4º da lei exclui de sua aplicação o tratamento feito por pessoa natural para fins exclusivamente particulares e não econômicos. A intermediação imobiliária é atividade profissional e econômica, e por isso não se enquadra nessa exceção, seja o corretor autônomo, associado a uma imobiliária ou integrante de uma empresa.</p>
<p>A lei distingue dois papéis principais (art. 5º):</p>
<ul>
  <li><strong>Controlador:</strong> pessoa natural ou jurídica a quem competem as decisões referentes ao tratamento de dados pessoais.</li>
  <li><strong>Operador:</strong> pessoa natural ou jurídica que realiza o tratamento em nome do controlador.</li>
</ul>
<p>Quem exerce cada papel depende de como o trabalho está organizado. O corretor autônomo que decide quais dados coletar e como usá-los tende a atuar como controlador. Quando o corretor trabalha associado a uma imobiliária, os papéis dependem da relação entre as partes e do que estiver definido entre elas. Vale esclarecer esse ponto com a imobiliária, porque ele define quem responde por cada obrigação.</p>

<h2>Conceitos que o corretor precisa conhecer</h2>
<p>O art. 5º da LGPD define, entre outros:</p>
<ul>
  <li><strong>Dado pessoal:</strong> informação relacionada a pessoa natural identificada ou identificável. Nome, CPF, telefone, e-mail, endereço e renda são dados pessoais.</li>
  <li><strong>Dado pessoal sensível:</strong> dado sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural.</li>
  <li><strong>Titular:</strong> a pessoa natural a quem os dados se referem.</li>
  <li><strong>Tratamento:</strong> toda operação realizada com dados pessoais, como coleta, recepção, utilização, acesso, reprodução, transmissão, armazenamento, arquivamento, eliminação, comunicação e transferência.</li>
</ul>
<p>Pela amplitude do conceito de tratamento, receber um documento por mensagem, salvar uma planilha de clientes ou encaminhar uma cópia ao cartório já são operações de tratamento.</p>

<h2>Quais dados aparecem na rotina</h2>
<div class="tabela"><table>
  <thead><tr><th>Etapa</th><th>Dados mais comuns</th><th>Cuidado principal</th></tr></thead>
  <tbody>
    <tr><td>Captação</td><td>Nome, contato, CPF e estado civil dos proprietários; matrícula; dados do cônjuge</td><td>Coletar o necessário para a autorização e a análise documental</td></tr>
    <tr><td>Atendimento ao comprador</td><td>Contato, preferências, faixa de valor, renda, uso de FGTS, financiamento</td><td>Registrar só o que orienta a busca e a negociação</td></tr>
    <tr><td>Visitas</td><td>Agenda, nomes de acompanhantes, contato de quem guarda as chaves</td><td>Não divulgar a terceiros horários e endereços associados a pessoas</td></tr>
    <tr><td>Proposta e fechamento</td><td>Documentos pessoais das partes, comprovantes, dados bancários para pagamento</td><td>Canais seguros e compartilhamento restrito</td></tr>
    <tr><td>Pós-venda</td><td>Contato para relacionamento futuro</td><td>Finalidade informada e respeito a pedidos de não contato</td></tr>
  </tbody>
</table></div>
<p>Dados sensíveis não costumam ser necessários na intermediação, mas podem aparecer sem que o corretor peça. <em>Exemplo hipotético:</em> um comprador explica que precisa de um imóvel sem escadas por causa de uma condição de saúde. Para a busca, basta registrar a necessidade objetiva ("imóvel térreo ou com elevador, sem degraus na entrada"), sem anotar o diagnóstico. O art. 11 da LGPD restringe as hipóteses em que dados sensíveis podem ser tratados.</p>

<h2>Princípios que orientam o tratamento</h2>
<p>O art. 6º lista os princípios que o tratamento deve observar. Na prática da corretagem, alguns pesam mais:</p>
<ul>
  <li><strong>Finalidade:</strong> tratar dados para propósitos legítimos, específicos, explícitos e informados ao titular.</li>
  <li><strong>Adequação:</strong> o tratamento deve ser compatível com a finalidade informada.</li>
  <li><strong>Necessidade:</strong> limitar o tratamento ao mínimo necessário, com dados pertinentes, proporcionais e não excessivos.</li>
  <li><strong>Transparência:</strong> informações claras e acessíveis ao titular sobre o tratamento.</li>
  <li><strong>Segurança:</strong> medidas técnicas e administrativas para proteger os dados de acessos não autorizados e de situações acidentais ou ilícitas.</li>
</ul>
<p>O princípio da necessidade é o mais útil no dia a dia. Antes de pedir um documento, pergunte: para que ele serve nesta etapa? Se a resposta não for clara, provavelmente ainda não é o momento de pedi-lo.</p>

<h2>Bases legais: com que fundamento os dados são tratados</h2>
<p>O art. 7º estabelece as hipóteses em que o tratamento de dados pessoais pode ser realizado. Entre elas, as que mais se relacionam com a intermediação imobiliária são:</p>
<ul>
  <li><strong>consentimento do titular</strong> (inciso I);</li>
  <li><strong>cumprimento de obrigação legal ou regulatória</strong> pelo controlador (inciso II);</li>
  <li><strong>execução de contrato ou de procedimentos preliminares relacionados a contrato</strong> do qual seja parte o titular, a pedido do titular (inciso V);</li>
  <li><strong>exercício regular de direitos</strong> em processo judicial, administrativo ou arbitral (inciso VI);</li>
  <li><strong>legítimo interesse</strong> do controlador ou de terceiro, exceto quando prevalecerem direitos e liberdades fundamentais do titular (inciso IX).</li>
</ul>
<p>A escolha da base legal depende de cada situação e não deve ser feita de forma automática. Alguns pontos da lei ajudam a orientar:</p>
<ul>
  <li>o consentimento deve ser fornecido por escrito ou por outro meio que demonstre a manifestação de vontade do titular, referir-se a finalidades determinadas e pode ser revogado a qualquer momento (art. 8º). Autorizações genéricas são nulas (art. 8º, § 4º);</li>
  <li>quando o tratamento se baseia no legítimo interesse, somente os dados estritamente necessários para a finalidade podem ser tratados (art. 10, § 1º);</li>
  <li>o controlador que obteve consentimento e precisa compartilhar os dados com outros controladores deve obter consentimento específico para isso (art. 7º, § 5º).</li>
</ul>

<h2>Coleta: o que pedir e o que informar</h2>
<p>O art. 9º assegura ao titular acesso facilitado a informações sobre o tratamento, como a finalidade específica, a forma e a duração, a identificação e o contato do controlador e o uso compartilhado dos dados. Na prática, isso significa explicar ao cliente, de forma simples, por que cada informação é pedida e com quem ela poderá ser compartilhada.</p>
<p>Cuidados úteis na coleta:</p>
<ul>
  <li>peça documentos na etapa em que eles serão usados, e não "por precaução" no primeiro contato;</li>
  <li>em formulários de site ou de anúncios, peça apenas os campos necessários para o retorno e informe a finalidade;</li>
  <li>não colete dados de terceiros que não participam do negócio;</li>
  <li>registre a origem do contato (indicação, anúncio, site), o que também ajuda a responder se o titular perguntar como seus dados foram obtidos.</li>
</ul>

<h2>Armazenamento: onde os dados ficam</h2>
<p>Os dados de clientes costumam se espalhar por vários lugares: conversas de mensagem, galeria do celular, e-mail, planilhas, CRM, pastas em nuvem, papéis no carro ou na pasta de visitas. Cada um desses lugares precisa de cuidado.</p>
<ul>
  <li><strong>Aplicativos de mensagem:</strong> transfira os documentos recebidos para uma pasta organizada e protegida, e evite mantê-los indefinidamente na galeria do celular.</li>
  <li><strong>CRM e planilhas:</strong> acesso com senha forte e autenticação em dois fatores; permissões apenas para quem precisa.</li>
  <li><strong>Nuvem:</strong> evite links de compartilhamento abertos a qualquer pessoa; revise periodicamente com quem as pastas estão compartilhadas.</li>
  <li><strong>Papel:</strong> cópias impressas de documentos não devem circular sem necessidade nem ficar expostas.</li>
</ul>
<p>As ferramentas e seus riscos estão descritos em <a href="/blog/ferramentas-digitais-do-corretor/">ferramentas digitais do corretor</a>.</p>

<h2>Compartilhamento com as partes e com terceiros</h2>
<p>A intermediação envolve compartilhar dados com várias pessoas: o proprietário recebe dados do comprador na proposta, o comprador recebe dados do proprietário para a análise documental, parceiros de negócio, cartórios e instituições financeiras também recebem informações. O compartilhamento deve se limitar ao necessário para cada finalidade.</p>
<ul>
  <li>envie a cada parte apenas os documentos que ela precisa analisar;</li>
  <li>em parcerias com outros corretores, combine como os dados serão tratados e não repasse a base de contatos inteira; o artigo sobre <a href="/blog/parcerias-entre-corretores/">parcerias entre corretores</a> trata da formalização desses acordos;</li>
  <li>prefira canais que permitam controlar o acesso, em vez de reenviar documentos em grupos de mensagem;</li>
  <li>registre o que foi enviado, para quem e quando.</li>
</ul>

<h2>Segurança da informação</h2>
<p>O art. 46 determina que os agentes de tratamento adotem medidas de segurança, técnicas e administrativas, aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito.</p>
<p>Para profissionais que trabalham sozinhos ou em estruturas pequenas, a ANPD editou a Resolução CD/ANPD nº 2/2022, que regulamenta a aplicação da LGPD para agentes de tratamento de pequeno porte. O regulamento inclui, entre esses agentes, pessoas naturais que realizam tratamento de dados assumindo obrigações típicas de controlador ou de operador (art. 2º, I). Alguns pontos:</p>
<ul>
  <li>o tratamento diferenciado não se aplica a quem realiza tratamento de alto risco para os titulares ou ultrapassa os limites de receita definidos no regulamento (art. 3º);</li>
  <li>o registro das operações de tratamento pode ser feito de forma simplificada (art. 9º), e a ANPD disponibiliza um modelo;</li>
  <li>o agente de pequeno porte não é obrigado a indicar encarregado, mas deve disponibilizar um canal de comunicação com o titular (art. 11);</li>
  <li>deve adotar medidas administrativas e técnicas essenciais de segurança, considerando o nível de risco e a realidade do agente (art. 12), e pode estabelecer política simplificada de segurança da informação (art. 13).</li>
</ul>
<p>O guia orientativo da ANPD sobre segurança da informação para agentes de pequeno porte traz recomendações práticas e um checklist de medidas. Entre os cuidados básicos que podem ser adotados imediatamente estão senhas fortes e diferentes para cada serviço, autenticação em dois fatores, bloqueio de tela no celular, cópias de segurança e atualização dos dispositivos.</p>

<h2>Incidentes de segurança</h2>
<p>Perda de um celular sem bloqueio, envio de documentos para a pessoa errada e acesso indevido a uma conta são exemplos de situações que podem configurar incidente de segurança. O art. 48 determina que o controlador comunique à ANPD e ao titular a ocorrência de incidente que possa acarretar risco ou dano relevante aos titulares, em prazo razoável conforme definido pela autoridade. A ANPD mantém uma página com orientações e o formulário para essa comunicação.</p>
<p>Diante de um incidente, registre o que aconteceu, quais dados foram afetados e quais medidas foram tomadas, e verifique as orientações da ANPD sobre a necessidade de comunicação.</p>

<h2>Término do tratamento e descarte</h2>
<p>O art. 15 prevê o término do tratamento, entre outras hipóteses, quando a finalidade é alcançada ou os dados deixam de ser necessários, ao fim do período de tratamento ou por comunicação do titular. O art. 16 determina que os dados sejam eliminados após o término do tratamento, autorizada a conservação, por exemplo, para cumprimento de obrigação legal ou regulatória.</p>
<p>Na prática:</p>
<ul>
  <li>defina por quanto tempo vai manter documentos de negócios não concluídos e de clientes que deixaram de buscar imóvel;</li>
  <li>separe o que precisa ser guardado por razões legais, fiscais ou de prova do que pode ser eliminado;</li>
  <li>ao eliminar, apague também as cópias em celular, e-mail e pastas compartilhadas;</li>
  <li>destrua documentos em papel de forma que não possam ser reconstituídos.</li>
</ul>
<p>Os prazos de guarda variam conforme o tipo de documento e a finalidade. Se houver dúvida, busque orientação profissional antes de definir sua política.</p>

<h2>Direitos do titular</h2>
<p>O art. 18 garante ao titular o direito de obter do controlador, mediante requisição, entre outros: confirmação da existência de tratamento; acesso aos dados; correção de dados incompletos, inexatos ou desatualizados; anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei; eliminação dos dados tratados com consentimento, ressalvadas as hipóteses do art. 16; informação sobre as entidades com as quais os dados foram compartilhados; e revogação do consentimento.</p>
<p>Para atender a esses pedidos, é preciso saber onde estão os dados de cada pessoa. Esse é mais um motivo para manter um registro organizado de clientes, em vez de informações espalhadas em vários aplicativos. Quando um cliente pedir para não receber mais contatos, registre o pedido e respeite-o; o artigo sobre <a href="/blog/controle-de-follow-up/">controle de follow-up</a> trata do encerramento de atendimentos.</p>

<h2>Checklist prático</h2>
<ol>
  <li>Saiba quais dados você coleta em cada etapa e para quê.</li>
  <li>Peça documentos apenas quando forem necessários.</li>
  <li>Informe ao cliente a finalidade e com quem os dados poderão ser compartilhados.</li>
  <li>Mantenha os dados em locais protegidos, com senhas fortes e autenticação em dois fatores.</li>
  <li>Compartilhe com cada parte só o que ela precisa.</li>
  <li>Revise periodicamente acessos a pastas e planilhas.</li>
  <li>Defina prazos de guarda e elimine o que não precisa mais ser mantido.</li>
  <li>Tenha um canal para receber pedidos dos titulares e responda a eles.</li>
  <li>Saiba como agir em caso de incidente de segurança.</li>
</ol>
<p>A proteção de dados também aparece na divulgação de imóveis e no relacionamento com clientes; veja <a href="/blog/marketing-para-corretor-de-imoveis/">marketing para corretor de imóveis</a> e <a href="/blog/qualificacao-do-comprador/">qualificação do comprador</a>.</p>
`,
};

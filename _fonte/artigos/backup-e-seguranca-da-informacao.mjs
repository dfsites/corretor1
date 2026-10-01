export default {
  slug: 'backup-e-seguranca-da-informacao',
  titulo: 'Backup e segurança da informação para corretores',
  h1: 'Backup e segurança da informação para corretores',
  descricao:
    'Como o corretor de imóveis pode proteger contatos, documentos e fotos: cópias de segurança, senhas, verificação em duas etapas, celular e incidentes.',
  editoria: 'tecnologia',
  personas: ['desenvolvimento'],
  pilar: 'ferramentas-digitais-do-corretor',
  autor: 'daniel-ferreira',
  data: '2026-10-01',
  fontes: [
    {
      titulo: 'Lei nº 13.709/2018 (LGPD), arts. 46 e 48: segurança e incidentes (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm',
    },
  ],
  corpo: `
<p>O trabalho do corretor depende de informações que ficam espalhadas entre celular, computador, nuvem e aplicativos de mensagem: contatos de clientes, histórico de negociações, documentos de imóveis, fotos, contratos assinados. A perda de um celular ou o acesso indevido a uma conta pode significar semanas de trabalho perdido e a exposição de dados de terceiros. Os demais tipos de aplicativo e sistema aparecem em <a href="/blog/ferramentas-digitais-do-corretor/">ferramentas digitais do corretor</a>.</p>

<h2>O que precisa ser protegido</h2>
<div class="tabela"><table>
<thead><tr><th>Informação</th><th>Onde costuma ficar</th><th>Risco principal</th></tr></thead>
<tbody>
<tr><td>Contatos e histórico de clientes</td><td>CRM, planilha, celular</td><td>Perda do aparelho ou da conta</td></tr>
<tr><td>Documentos de imóveis e das partes</td><td>Nuvem, e-mail, mensagens</td><td>Acesso indevido e vazamento</td></tr>
<tr><td>Contratos e autorizações assinados</td><td>Plataforma de assinatura, nuvem</td><td>Perda do arquivo final</td></tr>
<tr><td>Fotos e vídeos de imóveis</td><td>Galeria do celular</td><td>Perda do aparelho</td></tr>
<tr><td>Conversas com clientes</td><td>Aplicativo de mensagens</td><td>Troca de aparelho sem cópia</td></tr>
</tbody>
</table></div>

<h2>Cópias de segurança</h2>
<p>Uma prática conhecida em segurança da informação é manter três cópias dos dados, em dois tipos de armazenamento diferentes, com uma delas fora do local principal. Para o corretor, isso pode significar: os arquivos no computador ou no celular, uma cópia automática em serviço de nuvem e uma cópia periódica em disco externo guardado em outro lugar.</p>
<ul>
  <li><strong>Automatize.</strong> Cópia que depende de lembrar de fazer acaba não sendo feita.</li>
  <li><strong>Inclua o celular.</strong> Ative a cópia da galeria e dos contatos, e a cópia das conversas do aplicativo de mensagens.</li>
  <li><strong>Exporte os dados do CRM ou da planilha</strong> periodicamente para um formato que você consiga abrir sem o sistema (veja <a href="/blog/crm-para-corretor/">CRM para corretor de imóveis</a>).</li>
  <li><strong>Teste a restauração.</strong> De tempos em tempos, tente recuperar um arquivo da cópia. Uma cópia que não restaura não protege.</li>
</ul>
<p>A forma de organizar pastas e nomes de arquivos, que facilita a cópia e a busca, está em <a href="/blog/organizacao-documental/">organização documental da intermediação</a>.</p>

<h2>Senhas</h2>
<ul>
  <li>Use uma senha diferente para cada serviço. Quando uma senha vaza, as demais contas continuam protegidas.</li>
  <li>Prefira senhas longas, como frases, em vez de combinações curtas difíceis de lembrar.</li>
  <li>Use um gerenciador de senhas para guardá-las, em vez de anotar em papel ou em arquivo sem proteção.</li>
  <li>Não compartilhe senhas por mensagem. Se outra pessoa precisa de acesso, crie um usuário próprio para ela.</li>
</ul>

<h2>Verificação em duas etapas</h2>
<p>Ative a verificação em duas etapas no e-mail, na nuvem, no aplicativo de mensagens, no CRM e nas redes sociais. Com ela, quem descobrir a sua senha ainda precisa de um segundo fator (um código ou uma confirmação no seu aparelho). Nunca informe esse código a ninguém: pedidos de código por telefone ou mensagem são uma forma comum de tomar contas, inclusive de aplicativos de mensagem.</p>

<h2>Celular e computador</h2>
<ul>
  <li>Bloqueio de tela com senha ou biometria.</li>
  <li>Sistema e aplicativos atualizados.</li>
  <li>Recurso de localização e apagamento remoto ativado.</li>
  <li>Cuidado com redes Wi-Fi públicas para acessar sistemas com dados de clientes.</li>
  <li>Instalação de aplicativos apenas de lojas oficiais.</li>
</ul>

<h2>Compartilhamento de arquivos</h2>
<p>Ao enviar documentos para a outra parte, para o cartório ou para a instituição financeira, prefira links com acesso restrito e prazo, em vez de pastas abertas a qualquer pessoa com o endereço. Revise periodicamente quem tem acesso às suas pastas e retire acessos de negociações encerradas. Envie apenas os documentos necessários para cada etapa.</p>

<h2>Golpes que atingem corretores</h2>
<p>Algumas situações exigem atenção redobrada: mensagens que se passam por bancos, cartórios ou plataformas pedindo dados ou códigos; pedidos de alteração de conta bancária para pagamento de sinal ou comissão; links recebidos de contatos desconhecidos. Confirme qualquer pedido incomum por outro canal, ligando para um número que você já conhece.</p>

<h2>A LGPD e a segurança</h2>
<p>Quando trata dados pessoais de clientes e proprietários, o corretor deve adotar medidas de segurança, técnicas e administrativas, aptas a proteger os dados de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração ou comunicação (LGPD, art. 46). Cópias de segurança, senhas fortes e controle de acesso são exemplos desse tipo de medida.</p>
<p>Se ocorrer um incidente de segurança que possa acarretar risco ou dano relevante aos titulares, o controlador deve comunicá-lo à autoridade nacional (ANPD) e aos titulares, em prazo razoável, conforme definido pela ANPD, informando, entre outros pontos, a natureza dos dados afetados, os titulares envolvidos, os riscos e as medidas adotadas (LGPD, art. 48). O assunto está detalhado em <a href="/blog/lgpd-na-rotina-do-corretor/">LGPD na rotina do corretor</a>.</p>

<h2>Se o celular for perdido ou roubado</h2>
<ol>
  <li>Bloqueie o aparelho e, se necessário, apague os dados remotamente.</li>
  <li>Troque as senhas do e-mail, da nuvem e dos sistemas usados no trabalho.</li>
  <li>Peça à operadora o bloqueio da linha, para evitar que o número seja usado para receber códigos.</li>
  <li>Avise clientes e parceiros, por outro canal, para desconsiderarem pedidos feitos pelo número.</li>
  <li>Avalie se houve exposição de dados de terceiros e as providências da LGPD.</li>
  <li>Restaure os dados a partir da cópia de segurança em um novo aparelho.</li>
</ol>

<h2>Checklist</h2>
<ul>
  <li>Cópia automática do celular e do computador ativada.</li>
  <li>Exportação periódica dos dados de clientes.</li>
  <li>Restauração testada nos últimos meses.</li>
  <li>Senhas diferentes e guardadas em gerenciador.</li>
  <li>Verificação em duas etapas nas contas principais.</li>
  <li>Bloqueio de tela e apagamento remoto ativados.</li>
  <li>Acessos a pastas compartilhadas revisados.</li>
</ul>
`,
};

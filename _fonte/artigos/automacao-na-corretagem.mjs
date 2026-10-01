export default {
  slug: 'automacao-na-corretagem',
  titulo: 'Automação na corretagem: o que automatizar',
  h1: 'Automação na corretagem: o que automatizar e o que deve continuar pessoal',
  descricao:
    'Quais tarefas do corretor podem ser automatizadas com segurança, quais devem continuar pessoais, cuidados com mensagens automáticas e com dados de clientes.',
  editoria: 'tecnologia',
  personas: ['desenvolvimento'],
  pilar: 'ferramentas-digitais-do-corretor',
  autor: 'daniel-ferreira',
  data: '2026-10-01',
  fontes: [
    {
      titulo: 'Lei nº 13.709/2018: Lei Geral de Proteção de Dados Pessoais, arts. 6º, 20 e 46 (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm',
    },
    {
      titulo: 'Código Civil (Lei nº 10.406/2002), art. 723 (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm',
    },
  ],
  corpo: `
<p>Automatizar é fazer com que uma ferramenta execute sozinha uma tarefa repetitiva: enviar um lembrete, gerar um relatório, copiar dados de um formulário para o registro de clientes. Bem usada, a automação libera tempo para o que exige atenção profissional. Mal usada, produz mensagens genéricas, informações desatualizadas e exposição de dados. O panorama das categorias de ferramentas está em <a href="/blog/ferramentas-digitais-do-corretor/">ferramentas digitais do corretor</a>; aqui não se indicam produtos específicos.</p>

<h2>O critério: repetitivo, previsível e sem decisão</h2>
<p>Uma tarefa é boa candidata à automação quando reúne três características:</p>
<ul>
  <li><strong>É repetitiva</strong>: acontece muitas vezes da mesma forma.</li>
  <li><strong>É previsível</strong>: o resultado esperado é sempre o mesmo para a mesma entrada.</li>
  <li><strong>Não envolve decisão sobre o negócio</strong>: não muda preço, condição, prazo nem orientação ao cliente.</li>
</ul>
<p>Quando falta qualquer uma dessas características, a tarefa deve continuar com o corretor, ainda que a ferramenta ajude a prepará-la.</p>

<h2>O que pode ser automatizado</h2>
<div class="tabela"><table>
<thead><tr><th>Tarefa</th><th>Automação possível</th><th>Cuidado</th></tr></thead>
<tbody>
<tr><td>Lembretes de agenda</td><td>Aviso antes de visitas e prazos</td><td>Configurar antecedência que inclua deslocamento</td></tr>
<tr><td>Confirmação de recebimento</td><td>Resposta fora do horário informando quando haverá retorno</td><td>Não responder perguntas sobre o imóvel</td></tr>
<tr><td>Cadastro de contatos</td><td>Levar dados de um formulário do site para o registro de clientes</td><td>Coletar só o necessário; informar a finalidade</td></tr>
<tr><td>Lembretes de retorno</td><td>Tarefa criada na data combinada com o cliente</td><td>O contato em si continua pessoal</td></tr>
<tr><td>Relatórios internos</td><td>Contagem de contatos, visitas e propostas por período</td><td>Conferir a qualidade dos dados de origem</td></tr>
<tr><td>Prazos documentais</td><td>Alerta de validade de certidões e datas de assinatura</td><td>Manter o documento atualizado no registro</td></tr>
</tbody>
</table></div>
<p>Os relatórios ficam mais úteis quando os registros seguem um padrão, como explicado em <a href="/blog/crm-para-corretor/">CRM para corretor</a> e <a href="/blog/indicadores-comerciais-do-corretor/">indicadores comerciais</a>. A agenda e os lembretes estão em <a href="/blog/agenda-do-corretor/">agenda do corretor</a>.</p>

<h2>O que deve continuar pessoal</h2>
<ul>
  <li><strong>Respostas sobre preço, disponibilidade e condições.</strong> A informação muda, e um erro automatizado se repete para todos os contatos.</li>
  <li><strong>Qualificação do comprador.</strong> Perguntas sobre capacidade de pagamento e motivação exigem conversa e interpretação. Veja <a href="/blog/qualificacao-do-comprador/">qualificação do comprador</a>.</li>
  <li><strong>Negociação</strong>: propostas, contrapropostas e condições.</li>
  <li><strong>Retorno ao proprietário</strong> sobre visitas e interessados, que depende de leitura do andamento. Veja <a href="/blog/retorno-ao-proprietario/">retorno ao proprietário</a>.</li>
  <li><strong>Orientações sobre documentação e riscos</strong>, que fazem parte do dever de informação.</li>
</ul>
<p>O art. 723 do Código Civil obriga o corretor a executar a mediação com diligência e prudência e a prestar esclarecimentos sobre segurança, risco e alterações de valores. Esse dever é do profissional e não se transfere para uma ferramenta.</p>

<h2>Mensagens automáticas sem virar insistência</h2>
<p>Sequências automáticas de mensagens são a forma de automação que mais facilmente prejudica a relação com o cliente. Algumas regras práticas:</p>
<ul>
  <li>Envie mensagens automáticas apenas para quem pediu contato e no contexto desse pedido.</li>
  <li>Não dispare mensagens em massa para listas de contatos obtidas sem relação com o seu atendimento.</li>
  <li>Ofereça sempre uma forma simples de o cliente pedir para não receber mais mensagens, e respeite o pedido.</li>
  <li>Prefira mensagens que tragam algo útil (confirmação, lembrete combinado) a mensagens de cobrança de resposta.</li>
  <li>Revise periodicamente o texto das mensagens automáticas: imóveis e condições mudam.</li>
</ul>
<p>Os limites do acompanhamento estão em <a href="/blog/controle-de-follow-up/">controle de follow-up</a>, e o atendimento por mensagem em <a href="/blog/atendimento-por-whatsapp/">atendimento por WhatsApp</a>.</p>

<h2>Dados pessoais e automação</h2>
<p>Toda automação que move dados de clientes é tratamento de dados pessoais e segue a Lei Geral de Proteção de Dados. Três pontos merecem atenção:</p>
<ul>
  <li><strong>Princípios do art. 6º</strong>: o tratamento deve ter finalidade legítima, específica e informada ao titular, ser compatível com essa finalidade e limitado ao mínimo necessário. Um formulário que alimenta o registro de clientes não deve coletar mais do que o atendimento exige.</li>
  <li><strong>Segurança (art. 46)</strong>: os agentes de tratamento devem adotar medidas técnicas e administrativas para proteger os dados contra acessos não autorizados e situações acidentais ou ilícitas. Cada integração entre ferramentas é um ponto a mais de acesso; mantenha só as necessárias e revise permissões.</li>
  <li><strong>Decisões automatizadas (art. 20)</strong>: o titular tem direito de solicitar a revisão de decisões tomadas unicamente com base em tratamento automatizado de dados pessoais que afetem seus interesses, incluídas as que definem perfil de crédito ou de consumo. Na prática, evite que uma ferramenta descarte ou classifique clientes sozinha sem que alguém revise o critério.</li>
</ul>
<p>Os cuidados gerais estão em <a href="/blog/lgpd-na-rotina-do-corretor/">LGPD na rotina do corretor</a>.</p>

<h2>Automação e inteligência artificial</h2>
<p>Ferramentas de inteligência artificial podem ser combinadas com automações, por exemplo para redigir rascunhos de respostas. Nesse caso, valem as mesmas regras: o texto é revisado antes de sair, e informações sobre imóveis, preços e condições são conferidas na fonte. O tema está em <a href="/blog/inteligencia-artificial-na-corretagem/">inteligência artificial como apoio ao trabalho do corretor</a>.</p>

<h2>Como começar</h2>
<ol>
  <li>Liste as tarefas repetitivas da semana e quanto tempo cada uma consome.</li>
  <li>Aplique o critério: repetitiva, previsível e sem decisão.</li>
  <li>Automatize uma tarefa por vez e acompanhe o resultado por algumas semanas.</li>
  <li>Documente cada automação: o que faz, quais dados usa e quem pode alterá-la.</li>
  <li>Revise as automações sempre que mudar de ferramenta, de processo ou de equipe.</li>
</ol>

<h2>Erros comuns</h2>
<ul>
  <li>Deixar respostas automáticas informarem preço ou disponibilidade.</li>
  <li>Criar sequências de mensagens que o cliente não pediu.</li>
  <li>Integrar ferramentas sem saber quais dados passam entre elas.</li>
  <li>Esquecer automações antigas que continuam enviando informações desatualizadas.</li>
</ul>
`,
};

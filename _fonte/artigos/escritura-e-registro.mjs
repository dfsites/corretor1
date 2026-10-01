const CODIGO_CIVIL = {
  titulo: 'Código Civil (Lei nº 10.406/2002), arts. 108, 723, 1.227, 1.245 e 1.246 (Planalto)',
  url: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm',
};
const LEI_6015 = {
  titulo: 'Lei nº 6.015/1973: Registros Públicos, arts. 167, 172, 182, 186, 188, 195 e 237 (Planalto)',
  url: 'https://www.planalto.gov.br/ccivil_03/leis/l6015compilada.htm',
};
const LEI_9514 = {
  titulo: 'Lei nº 9.514/1997: Sistema de Financiamento Imobiliário, art. 38 (Planalto)',
  url: 'https://www.planalto.gov.br/ccivil_03/leis/l9514.htm',
};
const CONSTITUICAO = {
  titulo: 'Constituição Federal, art. 156, II: competência municipal para o ITBI (Planalto)',
  url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicaocompilado.htm',
};

export default {
  slug: 'escritura-e-registro',
  titulo: 'Escritura e registro do imóvel: o papel do corretor',
  h1: 'Escritura e registro: o que o corretor acompanha até a conclusão',
  descricao:
    'Escritura pública, ITBI e registro no Cartório de Registro de Imóveis: como a propriedade é transferida e o que o corretor acompanha até a conclusão.',
  editoria: 'negociacao',
  personas: ['iniciante'],
  pilar: 'proposta-de-compra-de-imovel',
  autor: 'daniel-ferreira',
  data: '2026-10-01',
  avisoJuridico: true,
  fontes: [CODIGO_CIVIL, LEI_6015, LEI_9514, CONSTITUICAO],
  corpo: `
<p>Para muitos compradores, o negócio termina na assinatura da escritura. Juridicamente, não é assim: no Brasil, a propriedade de um imóvel só se transfere com o registro do título no Cartório de Registro de Imóveis. O corretor que entende essa sequência consegue orientar as partes, acompanhar prazos e evitar que um negócio fique "pela metade", com escritura assinada e sem registro.</p>
<p>A fase final começa quando o contrato preliminar já está assinado e as condições estão cumpridas; o caminho até ali está em <a href="/blog/do-aceite-ao-contrato/">do aceite da proposta ao contrato</a>.</p>

<h2>Escritura e registro não são a mesma coisa</h2>
<ul>
  <li><strong>Escritura pública</strong> é o documento lavrado pelo tabelião de notas que formaliza a compra e venda. O art. 108 do Código Civil exige escritura pública para negócios que transfiram direitos reais sobre imóveis de valor superior a trinta vezes o maior salário mínimo vigente no país, salvo disposição legal em contrário.</li>
  <li><strong>Registro</strong> é o ato do Cartório de Registro de Imóveis que inscreve esse título na matrícula do imóvel. Pelo art. 1.245 do Código Civil, a propriedade se transfere entre vivos mediante o registro do título translativo, e, enquanto o título não for registrado, o alienante continua a ser havido como dono do imóvel (§ 1º).</li>
</ul>
<p>O art. 1.227 reforça a regra: os direitos reais sobre imóveis transmitidos por atos entre vivos só se adquirem com o registro no Cartório de Registro de Imóveis. Assim, um comprador com escritura assinada e não registrada ainda não é proprietário: o vendedor continua a figurar como dono na matrícula, e é a ela que terceiros recorrem.</p>

<h2>Quando o contrato do banco substitui a escritura</h2>
<p>Nas compras com financiamento e alienação fiduciária, a Lei nº 9.514/1997 (art. 38) permite que o contrato seja celebrado por instrumento particular, com caráter de escritura pública. Nesses casos, quem conduz a formalização é a instituição financeira, e o contrato segue para registro da mesma forma. Confirme com o banco qual instrumento será usado e quais documentos ele exige.</p>

<h2>O ITBI</h2>
<p>O Imposto sobre Transmissão de Bens Imóveis é de competência dos municípios (Constituição Federal, art. 156, II). Alíquota, base de cálculo, forma de emissão da guia e momento do pagamento são definidos pela legislação de cada município. Em geral, o cartório exige a comprovação do recolhimento antes de lavrar a escritura ou de registrar o título, mas o procedimento local precisa ser confirmado com a prefeitura e com o cartório.</p>
<p>O corretor não calcula nem emite o imposto. O que ele faz é avisar o comprador, com antecedência, que esse custo existe e que deve ser considerado no planejamento da compra, junto com emolumentos de tabelionato e de registro.</p>

<h2>A sequência até a conclusão</h2>
<ol>
  <li><strong>Certidões atualizadas</strong> e documentos das partes, conforme exigência do tabelião ou da instituição financeira.</li>
  <li><strong>Recolhimento do ITBI</strong>, conforme as regras do município.</li>
  <li><strong>Lavratura e assinatura da escritura</strong> no tabelionato, ou assinatura do contrato com a instituição financeira.</li>
  <li><strong>Pagamento</strong> do saldo do preço, conforme o combinado (no ato, por transferência ou pela liberação do financiamento).</li>
  <li><strong>Protocolo do título</strong> no Cartório de Registro de Imóveis da circunscrição do imóvel.</li>
  <li><strong>Registro na matrícula</strong> ou, se houver pendências, emissão de nota devolutiva com as exigências.</li>
  <li><strong>Entrega das chaves</strong>, na data combinada.</li>
</ol>
<p>A ordem entre pagamento, assinatura e entrega das chaves varia conforme o contrato. O que importa é que esteja escrita e que as duas partes saibam o que acontece em cada etapa.</p>

<h2>Como funciona o registro</h2>
<p>Alguns pontos da Lei de Registros Públicos (Lei nº 6.015/1973) ajudam a entender o que o comprador espera nessa fase:</p>
<ul>
  <li>a compra e venda está entre os atos sujeitos a registro (art. 167, I, item 29), e o registro serve à constituição, transferência e extinção de direitos reais e à sua validade em relação a terceiros (art. 172);</li>
  <li>todos os títulos recebem, no protocolo, número de ordem pela sequência rigorosa de apresentação (art. 182), e esse número determina a prioridade do título (art. 186). Pelo Código Civil, o registro é eficaz desde a prenotação do título no protocolo (art. 1.246);</li>
  <li>protocolizado o título, o cartório deve registrá-lo ou emitir nota devolutiva no prazo de 10 dias; escrituras de compra e venda sem cláusulas especiais devem ser registradas em 5 dias, se não houver exigências nem falta de pagamento de custas e emolumentos (art. 188 e § 1º, I);</li>
  <li>o cartório exige que o imóvel esteja matriculado ou registrado em nome de quem vende, para manter a continuidade do registro (arts. 195 e 237).</li>
</ul>
<p>Esse último ponto explica por que problemas antigos aparecem no fim do negócio: uma venda anterior não registrada, um inventário não concluído ou uma construção não averbada podem impedir o registro. Por isso a documentação deve ser verificada desde a captação (veja <a href="/blog/documentacao-na-captacao/">documentação na captação</a>).</p>
<p>Por causa da prioridade pelo protocolo, é recomendável que o título seja apresentado ao registro logo após a assinatura.</p>

<h2>Nota devolutiva: o que fazer</h2>
<p>Se o cartório encontrar pendência, emite nota devolutiva com as exigências. Pode ser um documento faltante, uma divergência de dados ou um ato anterior que precisa ser regularizado. Quem resolve, em regra, é a parte responsável pela pendência, com orientação do tabelião, do registrador ou do advogado. O corretor acompanha, repassa as informações e mantém comprador e vendedor cientes do andamento.</p>

<h2>O que cabe ao corretor e o que não cabe</h2>
<div class="tabela"><table>
  <thead><tr><th>Cabe ao corretor</th><th>Não cabe ao corretor</th></tr></thead>
  <tbody>
    <tr><td>Informar as partes sobre as etapas, os custos e os prazos</td><td>Lavrar ou redigir a escritura</td></tr>
    <tr><td>Acompanhar a emissão de certidões e a validade delas</td><td>Emitir parecer jurídico sobre a documentação</td></tr>
    <tr><td>Conferir se as condições negociadas estão no documento final</td><td>Calcular ou recolher o ITBI no lugar do comprador</td></tr>
    <tr><td>Lembrar o comprador de levar o título a registro</td><td>Garantir prazos que dependem do cartório ou do banco</td></tr>
  </tbody>
</table></div>
<p>O art. 723 do Código Civil determina que o corretor preste ao cliente as informações sobre o andamento do negócio e esclarecimentos sobre a segurança ou o risco envolvidos. Até o registro, o negócio ainda está em andamento.</p>

<h2>Checklist da fase final</h2>
<ul>
  <li>certidões dentro do prazo de validade exigido;</li>
  <li>guia do ITBI emitida e paga, conforme o município;</li>
  <li>data, horário e tabelionato da assinatura confirmados com as partes;</li>
  <li>forma de pagamento do saldo confirmada, com comprovantes;</li>
  <li>comprador orientado a protocolar o título no Registro de Imóveis;</li>
  <li>acompanhamento até a matrícula atualizada em nome do comprador;</li>
  <li>entrega das chaves registrada, com a data e as condições do imóvel.</li>
</ul>
<p>Os conceitos de matrícula, certidões e escritura estão em <a href="/blog/documentos-imobiliarios-basicos/">documentos imobiliários que o corretor precisa conhecer</a>.</p>
`,
};

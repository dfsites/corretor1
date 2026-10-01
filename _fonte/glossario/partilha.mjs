const CC = {
  titulo: 'Código Civil (Lei nº 10.406/2002), arts. 1.791 e 2.013 a 2.017 (Planalto)',
  url: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm',
};
const CPC = {
  titulo: 'Código de Processo Civil (Lei nº 13.105/2015), arts. 610 e 647 (Planalto)',
  url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm',
};

export default {
  slug: 'partilha',
  termo: 'Partilha',
  titulo: 'Partilha de bens: o que é e como afeta a venda',
  h1: 'Partilha',
  descricao:
    'O que é a partilha de bens na herança, quando pode ser amigável ou precisa ser judicial e por que ela define quem pode vender o imóvel e em que condições.',
  autor: 'daniel-ferreira',
  data: '2026-10-01',
  avisoJuridico: true,
  fontes: [CC, CPC],
  relacionados: ['/glossario/inventario/', '/glossario/espolio/', '/blog/imovel-em-inventario/'],
  corpo: `
<h2>O que é</h2>
<p>Partilha é a divisão dos bens entre as pessoas que têm direito a eles. Na herança, ela encerra o estado de indivisão: pelo art. 1.791 do Código Civil, até a partilha o direito dos coerdeiros sobre a herança é indivisível. Depois dela, cada herdeiro passa a ter o seu quinhão definido, que pode ser um imóvel inteiro, uma fração de um imóvel ou outros bens.</p>
<p>O termo também aparece na dissolução de casamento e de união estável, quando o patrimônio comum é dividido entre os ex-cônjuges ou ex-companheiros.</p>

<h2>Amigável ou judicial</h2>
<p>O art. 2.013 do Código Civil permite ao herdeiro requerer a partilha a qualquer tempo, mesmo que o testador a proíba. Pelo art. 2.015, se os herdeiros forem capazes, a partilha pode ser amigável, feita por escritura pública, por termo nos autos do inventário ou por escrito particular homologado pelo juiz. O art. 2.016 determina que ela será sempre judicial se os herdeiros divergirem ou se algum deles for incapaz. O art. 2.017 orienta que, na divisão, se busque a maior igualdade possível quanto ao valor, à natureza e à qualidade dos bens.</p>
<p>No inventário judicial, o art. 647 do Código de Processo Civil prevê a decisão de deliberação da partilha, que designa os bens que compõem o quinhão de cada herdeiro. No inventário em cartório, a partilha consta da própria escritura (art. 610, § 1º).</p>

<h2>Onde aparece na rotina do corretor</h2>
<ul>
  <li>Imóvel herdado que será vendido depois do inventário: quem vende é quem recebeu o imóvel na partilha.</li>
  <li>Imóvel que coube a vários herdeiros em partes ideais: todos precisam participar da venda.</li>
  <li>Imóvel de casal separado ainda sem partilha registrada.</li>
</ul>

<h2>O que verificar</h2>
<ul>
  <li>Se a partilha já foi feita e se o formal de partilha ou a escritura foi registrado na matrícula.</li>
  <li>Quem ficou com o imóvel e em que proporção.</li>
  <li>Se há pendências de impostos ou de registro que impeçam a transferência.</li>
</ul>

<h2>Base legal</h2>
<p>Código Civil, arts. 1.791, 2.013, 2.015, 2.016 e 2.017; Código de Processo Civil, arts. 610 e 647.</p>
`,
};

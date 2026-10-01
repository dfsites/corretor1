const CC = {
  titulo: 'Código Civil (Lei nº 10.406/2002), arts. 1.784, 1.791 e 1.991 (Planalto)',
  url: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm',
};
const CPC = {
  titulo: 'Código de Processo Civil (Lei nº 13.105/2015), arts. 610, 611, 617 e 619 (Planalto)',
  url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm',
};

export default {
  slug: 'inventario',
  termo: 'Inventário',
  titulo: 'Inventário: o que o corretor precisa saber',
  h1: 'Inventário',
  descricao:
    'O que é o inventário, quando pode ser feito em cartório, quem administra a herança até a partilha e como isso afeta a venda de imóvel deixado por falecido.',
  autor: 'daniel-ferreira',
  data: '2026-10-01',
  avisoJuridico: true,
  fontes: [CC, CPC],
  relacionados: ['/blog/imovel-em-inventario/', '/glossario/espolio/', '/glossario/partilha/'],
  corpo: `
<h2>O que é</h2>
<p>Inventário é o procedimento que levanta os bens, direitos e dívidas deixados por uma pessoa falecida e prepara a divisão entre os herdeiros. Pelo art. 1.784 do Código Civil, aberta a sucessão, a herança se transmite desde logo aos herdeiros legítimos e testamentários. O art. 1.791 acrescenta que, até a partilha, o direito dos coerdeiros sobre a herança é indivisível e segue as regras do condomínio.</p>

<h2>Judicial ou em cartório</h2>
<p>O art. 610 do Código de Processo Civil determina o inventário judicial quando houver testamento ou interessado incapaz. Se todos forem capazes e concordes, inventário e partilha podem ser feitos por escritura pública, que serve para atos de registro. Nesse caso, o tabelião só lavra a escritura se todas as partes estiverem assistidas por advogado ou defensor público. O art. 611 prevê que o processo seja instaurado em até dois meses da abertura da sucessão e concluído nos doze meses seguintes, prazos que o juiz pode prorrogar.</p>

<h2>Quem administra os bens</h2>
<p>Até a homologação da partilha, a administração da herança fica com o inventariante (Código Civil, art. 1.991). O art. 617 do CPC lista a ordem de nomeação, começando pelo cônjuge ou companheiro sobrevivente. O art. 619 prevê que cabe ao inventariante, ouvidos os interessados e com autorização do juiz, alienar bens do espólio.</p>

<h2>Onde aparece na rotina do corretor</h2>
<ul>
  <li>Captação de imóvel cujo proprietário registrado faleceu.</li>
  <li>Herdeiros que querem vender antes de concluir o inventário.</li>
  <li>Comprador que precisa entender por que a escritura depende de etapas que não estão nas mãos do vendedor.</li>
</ul>

<h2>O que verificar</h2>
<ul>
  <li>Se o inventário já foi aberto, onde (vara judicial ou tabelionato) e em que fase está.</li>
  <li>Quem é o inventariante e se todos os herdeiros concordam com a venda.</li>
  <li>Se a venda exige autorização judicial (alvará) ou se será feita depois da partilha.</li>
  <li>Quem é o advogado responsável, que deve conduzir os atos jurídicos.</li>
</ul>
<p>Os cuidados na intermediação estão em <a href="/blog/imovel-em-inventario/">venda de imóvel em inventário</a>.</p>

<h2>Base legal</h2>
<p>Código Civil, arts. 1.784, 1.791 e 1.991; Código de Processo Civil, arts. 610, 611, 617 e 619.</p>
`,
};

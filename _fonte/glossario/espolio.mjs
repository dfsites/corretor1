const CC = {
  titulo: 'Código Civil (Lei nº 10.406/2002), arts. 1.784, 1.791 e 1.793 (Planalto)',
  url: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm',
};
const CPC = {
  titulo: 'Código de Processo Civil (Lei nº 13.105/2015), arts. 75 e 619 (Planalto)',
  url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm',
};

export default {
  slug: 'espolio',
  termo: 'Espólio',
  titulo: 'Espólio: o que é e quem representa',
  h1: 'Espólio',
  descricao:
    'O que é o espólio, quem o representa até a partilha e por que um imóvel em nome de pessoa falecida exige cuidados especiais na captação e na venda.',
  autor: 'daniel-ferreira',
  data: '2026-10-01',
  avisoJuridico: true,
  fontes: [CC, CPC],
  relacionados: ['/glossario/inventario/', '/glossario/partilha/', '/blog/imovel-em-inventario/'],
  corpo: `
<h2>O que é</h2>
<p>Espólio é o nome dado ao conjunto de bens, direitos e obrigações deixados por uma pessoa falecida enquanto a herança ainda não foi dividida. Pelo art. 1.784 do Código Civil, a herança se transmite aos herdeiros no momento da abertura da sucessão; o art. 1.791 estabelece que, até a partilha, esse conjunto é indivisível e segue as regras do condomínio. Na prática, é comum ver anúncios e documentos que mencionam "espólio de" seguido do nome do falecido.</p>

<h2>Quem representa o espólio</h2>
<p>O espólio não é uma pessoa, mas pode ser parte em processos e negócios por meio de um representante. O art. 75, VII, do Código de Processo Civil determina que ele seja representado em juízo pelo inventariante. Para alienar bens do espólio, o art. 619 do mesmo código exige que o inventariante ouça os interessados e tenha autorização do juiz.</p>
<p>O art. 1.793, § 3º, do Código Civil reforça o cuidado: é ineficaz a disposição, sem prévia autorização do juiz da sucessão, por qualquer herdeiro, de bem que compõe o acervo hereditário enquanto durar a indivisibilidade.</p>

<h2>Onde aparece na rotina do corretor</h2>
<ul>
  <li>Proprietário que aparece na matrícula já faleceu.</li>
  <li>Imóvel ocupado por um dos herdeiros enquanto o inventário não termina.</li>
  <li>Proposta de compra feita a herdeiros que ainda não concluíram a partilha.</li>
</ul>

<h2>O que verificar</h2>
<ul>
  <li>Certidão de óbito e situação do inventário: aberto, em andamento ou concluído.</li>
  <li>Nome do inventariante e se há autorização judicial para a venda.</li>
  <li>Concordância de todos os herdeiros, quando a venda depender deles.</li>
  <li>Quem é o advogado do inventário, que deve orientar os atos jurídicos.</li>
</ul>
<p>Sem essa conferência, o corretor corre o risco de divulgar um imóvel que não pode ser vendido nas condições anunciadas. O passo a passo está em <a href="/blog/imovel-em-inventario/">venda de imóvel em inventário</a>.</p>

<h2>Base legal</h2>
<p>Código Civil, arts. 1.784, 1.791 e 1.793, § 3º; Código de Processo Civil, arts. 75, VII, e 619.</p>
`,
};

export default {
  slug: 'assinatura-eletronica',
  titulo: 'Assinatura eletrônica em documentos imobiliários',
  h1: 'Assinatura eletrônica em documentos imobiliários: usos e limites',
  descricao:
    'Tipos de assinatura eletrônica, o que a lei prevê, em quais documentos da intermediação ela é usada e onde estão os limites: escritura pública e registro.',
  editoria: 'tecnologia',
  personas: ['desenvolvimento'],
  pilar: 'ferramentas-digitais-do-corretor',
  autor: 'daniel-ferreira',
  data: '2026-10-01',
  avisoJuridico: true,
  fontes: [
    {
      titulo: 'Lei nº 14.063/2020: assinaturas eletrônicas, arts. 2º a 5º (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l14063.htm',
    },
    {
      titulo: 'Medida Provisória nº 2.200-2/2001: ICP-Brasil, art. 10 (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/mpv/antigas_2001/2200-2.htm',
    },
    {
      titulo: 'Código Civil, art. 108: escritura pública (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm',
    },
    {
      titulo: 'Lei nº 6.015/1973, art. 17, §§ 1º e 2º, incluídos pela Lei nº 14.382/2022 (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/l6015compilada.htm',
    },
  ],
  corpo: `
<p>Autorização de venda, proposta, contrato de corretagem, contrato de locação, recibos: boa parte dos documentos da intermediação pode ser assinada eletronicamente, o que reduz deslocamentos e acelera a formalização. Isso não significa que qualquer documento possa ser assinado de qualquer forma, nem que a assinatura eletrônica substitua a escritura pública ou o registro. A visão geral de ferramentas está em <a href="/blog/ferramentas-digitais-do-corretor/">ferramentas digitais do corretor</a>.</p>

<h2>O que é assinatura eletrônica</h2>
<p>A Lei nº 14.063/2020 (art. 3º, II) define assinatura eletrônica como os dados em formato eletrônico que se ligam ou estão logicamente associados a outros dados em formato eletrônico e que são utilizados pelo signatário para assinar. O conceito é amplo: inclui desde uma confirmação por e-mail ou código até a assinatura com certificado digital.</p>

<h2>Os três tipos previstos em lei</h2>
<div class="tabela"><table>
<thead><tr><th>Tipo</th><th>Como a Lei nº 14.063/2020 descreve (art. 4º)</th></tr></thead>
<tbody>
<tr><td>Simples</td><td>A que permite identificar o signatário ou que anexa ou associa dados a outros dados em formato eletrônico do signatário.</td></tr>
<tr><td>Avançada</td><td>A que utiliza certificados não emitidos pela ICP-Brasil ou outro meio de comprovação da autoria e da integridade, desde que admitido pelas partes como válido ou aceito por quem recebe o documento; deve estar associada ao signatário de maneira unívoca, usar dados sob seu controle exclusivo e permitir detectar qualquer modificação posterior.</td></tr>
<tr><td>Qualificada</td><td>A que utiliza certificado digital emitido no âmbito da ICP-Brasil, nos termos do art. 10, § 1º, da Medida Provisória nº 2.200-2/2001.</td></tr>
</tbody>
</table></div>
<p>A mesma lei (art. 4º, § 1º) explica que os três tipos correspondem a níveis crescentes de confiança sobre a identidade e a manifestação de vontade do signatário, sendo a qualificada a de nível mais elevado.</p>

<h2>Documentos entre particulares</h2>
<p>Um ponto importante: o capítulo da Lei nº 14.063/2020 que regula o uso das assinaturas trata da interação com entes públicos e, segundo o art. 2º, parágrafo único, II, "a", não se aplica à interação entre pessoas naturais ou entre pessoas jurídicas de direito privado. Os documentos da intermediação entre proprietário, comprador, locatário e corretor são, em regra, entre particulares.</p>
<p>Para esses documentos, a referência é a Medida Provisória nº 2.200-2/2001 (art. 10):</p>
<ul>
  <li>documentos eletrônicos são considerados documentos públicos ou particulares para todos os fins legais;</li>
  <li>as declarações em documentos assinados com certificado da ICP-Brasil presumem-se verdadeiras em relação aos signatários (§ 1º);</li>
  <li>outros meios de comprovação de autoria e integridade, inclusive certificados não emitidos pela ICP-Brasil, podem ser usados desde que admitidos pelas partes como válidos ou aceitos pela pessoa a quem o documento for oposto (§ 2º).</li>
</ul>
<p>Na prática, isso significa que as partes podem combinar o uso de uma plataforma de assinatura eletrônica para os documentos da negociação. Quanto maior a importância do documento, mais vale usar uma modalidade com comprovação robusta de identidade e integridade.</p>

<h2>Usos comuns na intermediação</h2>
<ul>
  <li><a href="/blog/autorizacao-de-venda/">Autorização de venda</a> e contrato de corretagem.</li>
  <li><a href="/blog/proposta-de-compra-de-imovel/">Proposta de compra</a> e contraproposta.</li>
  <li>Instrumento particular de compromisso de compra e venda (veja <a href="/blog/do-aceite-ao-contrato/">do aceite da proposta ao contrato</a>).</li>
  <li>Contratos de locação, vistorias e termos de entrega de chaves.</li>
  <li>Recibos e termos de parceria entre corretores.</li>
</ul>

<h2>Os limites: escritura e registro</h2>
<p>O Código Civil (art. 108) estabelece que, não dispondo a lei em contrário, a escritura pública é essencial à validade dos negócios que visem à constituição, transferência, modificação ou renúncia de direitos reais sobre imóveis de valor superior a trinta vezes o maior salário mínimo vigente no País. Assinar eletronicamente um contrato particular não substitui a escritura nesses casos. A escritura é lavrada por tabelião, que segue regras próprias, inclusive quanto aos meios eletrônicos que pode utilizar.</p>
<p>No registro de imóveis, a Lei nº 6.015/1973 (art. 17, § 1º, incluído pela Lei nº 14.382/2022) prevê que o acesso ou o envio de informações aos registros públicos pela internet deve ser assinado com assinatura avançada ou qualificada, nos termos estabelecidos pela Corregedoria Nacional de Justiça. O § 2º do mesmo artigo permite que ato da Corregedoria estabeleça hipóteses de uso de assinatura avançada em atos que envolvam imóveis. Ou seja, nem toda assinatura eletrônica é aceita pelo cartório: a exigência depende da regulamentação aplicável ao ato. As etapas finais estão em <a href="/blog/escritura-e-registro/">escritura e registro</a>.</p>
<p>Existe ainda uma regra específica para o financiamento: o art. 17-A da Lei nº 14.063/2020, incluído pela Lei nº 14.620/2023, permite que as instituições financeiras que atuam com crédito imobiliário e estão autorizadas a celebrar instrumentos particulares com caráter de escritura pública, e as partes desses contratos, usem assinaturas eletrônicas nas modalidades avançada e qualificada. Nesses casos, quem define o procedimento é a instituição; o corretor acompanha e orienta o cliente a seguir as instruções do banco.</p>

<h2>Boas práticas na rotina</h2>
<ol>
  <li><strong>Combine com as partes antes</strong> o uso da assinatura eletrônica e a plataforma.</li>
  <li><strong>Confirme a identidade dos signatários</strong> e os dados de contato usados para envio (e-mail e telefone corretos).</li>
  <li><strong>Inclua todos os que precisam assinar</strong>: todos os titulares do imóvel e, quando necessário, o cônjuge.</li>
  <li><strong>Prefira plataformas que gerem registro do processo</strong> (data, hora, meio de autenticação de cada signatário) e permitam verificar a integridade do arquivo.</li>
  <li><strong>Não altere o documento depois de assinado.</strong> Mudanças exigem nova versão e nova assinatura.</li>
  <li><strong>Guarde o arquivo final e o comprovante</strong> e envie cópia a todas as partes. Veja <a href="/blog/organizacao-documental/">organização documental da intermediação</a>.</li>
  <li><strong>Cuide dos dados pessoais</strong> enviados à plataforma, como explicado em <a href="/blog/lgpd-na-rotina-do-corretor/">LGPD na rotina do corretor</a>.</li>
</ol>

<h2>Quando buscar orientação</h2>
<p>Contratos com cláusulas complexas, negócios de valor elevado, partes no exterior ou dúvidas sobre a modalidade de assinatura aceita por um cartório ou banco devem ser verificados com o advogado das partes, o tabelião ou a instituição envolvida antes da assinatura.</p>
`,
};

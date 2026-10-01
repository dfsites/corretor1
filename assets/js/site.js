// Abre e fecha o menu no celular.
(function () {
  var botao = document.querySelector('.menu-botao');
  var menu = document.getElementById('menu');
  if (!botao || !menu) return;
  botao.addEventListener('click', function () {
    var aberto = menu.classList.toggle('aberto');
    botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
  });
})();

// Aviso de cookies: aparece até o visitante clicar em "Concordo, continuar" ou no X.
(function () {
  var CHAVE = 'corretor1-aviso-cookies';
  try {
    if (localStorage.getItem(CHAVE)) return;
  } catch (e) {}
  var aviso = document.createElement('div');
  aviso.className = 'aviso-cookies';
  aviso.setAttribute('role', 'region');
  aviso.setAttribute('aria-label', 'Aviso de cookies');
  aviso.innerHTML =
    '<p>Esse site utiliza cookies, que possibilitam uma melhor experiência de navegação.<br>' +
    'Ao continuar, você concorda com o uso de cookies.</p>' +
    '<button type="button" class="aviso-cookies-ok">Concordo, continuar</button>' +
    '<button type="button" class="aviso-cookies-fechar" aria-label="Fechar aviso de cookies">&times;</button>';
  function fechar() {
    try {
      localStorage.setItem(CHAVE, '1');
    } catch (e) {}
    aviso.remove();
  }
  aviso.querySelector('.aviso-cookies-ok').addEventListener('click', fechar);
  aviso.querySelector('.aviso-cookies-fechar').addEventListener('click', fechar);
  document.body.appendChild(aviso);
})();

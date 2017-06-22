'use strict'

const Screen1 = (update) =>{
  const contentScreen = $('<div class="container"></div>');
  const owlCarousels = $('<div class="owl-carousel owl-theme owl-loaded owl-drag"></div>');
  const item1 = $('<div class="item"><img src="assets/img/icons/icon-people.png" alt="people">' +
      '<h1>Paga a tus amigos</h1><h3 class="text">Paga a quien quiere desde donde quieras, sin usar efectivo.</h3></div>');
  const item2 = $('<div class="item"><img src="assets/img/icons/happy-person.png" alt="happy person">' +
      '<h1>Sin número de cuenta</h1><h3 class="text">Elige a quién pagar desde tus lista de contactos.</h3></div>');
  const item3 = $('<div class="item"><img src="assets/img/icons/group-people.png" alt="group people"><h1>Gratis y Seguro</h1>' +
      '<h3 class="text">La transferencia es inmediata y gratuita de una cuenta a otra.</h3></div>');
  const btnRegistrame = $('<button class="btn-registrarme">REGISTRARME</button>');

  owlCarousels.append(item1);
  owlCarousels.append(item2);
  owlCarousels.append(item3);
  contentScreen.append(owlCarousels);
  owlCarousels.owlCarousel({loop:true, margin:10, nav:true, responsive: {0: {items:1}, 600: {items:1}}});

  btnRegistrame.on('click', _=>{
    status.screen = 2;
    update();
  });

  contentScreen.append(btnRegistrame);
  return contentScreen;
};
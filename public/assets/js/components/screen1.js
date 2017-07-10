'use strict';

const Screen1 = (update) =>{
  const contentScreen = $('<div class="container"></div>');
  const contentCarousel = $('<div class="carousel"></div>');
  const owlCarousels = $('<div class="owl-carousel owl-theme owl-loaded owl-drag"></div>');
  const item1 = $('<div class="item"><img src="assets/img/icons/icon-people.png" alt="people">' +
      '<h3>Paga a tus amigos</h3><p class="text-screen1">Paga a quien quiere desde donde quieras, sin usar efectivo.</p></div>');
  const item2 = $('<div class="item"><img src="assets/img/icons/happy-person.png" alt="happy person">' +
      '<h3>Sin número de cuenta</h3><p class="text-screen1">Elige a quién pagar desde tus lista de contactos.</p></div>');
  const item3 = $('<div class="item"><img src="assets/img/icons/group-people.png" alt="group people"><h3>Gratis y Seguro</h3>' +
      '<p class="text-screen1">La transferencia es inmediata y gratuita de una cuenta a otra.</p></div>');
  const btnRegistrame = $('<button class="btn-registrarme">REGISTRARME</button>');

  owlCarousels.append(item1);
  owlCarousels.append(item2);
  owlCarousels.append(item3);
  contentCarousel.append(owlCarousels);
  contentScreen.append(contentCarousel);
  owlCarousels.owlCarousel({loop:true, margin:10, nav:true, responsive: {0: {items:1}, 600: {items:1}}});

  btnRegistrame.on('click', _=>{
    status.screen = 2;
    update();
  });

  contentScreen.append(btnRegistrame);
  return contentScreen;
};
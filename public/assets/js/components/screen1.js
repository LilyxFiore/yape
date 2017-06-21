'use strict'

const Screen1 = (update) =>{
  const contentScreen = $('<div class="container"></div>');
  const owlCarousel = $('<div class="owl-carousel owl-theme"></div>');
  const item1 = $('<div class="item"><img src="assets/img/icons/icon-people.png" alt="people">' +
      '<h1>Paga a tus amigos</h1><h2 class="text">Paga a quien quiere desde donde quieras, sin usar efectivo.</h2></div>');
  const item2 = $('<div class="item"><img src="assets/img/icons/happy-person.png" alt="happy person">' +
      '<h1>Sin número de cuenta</h1><h2 class="text">Elige a quién pagar desde tus lista de contactos.</h2></div>');
  const item3 = $('<div class="item"><img src="assets/img/icons/group-people.png" alt="group people"><h1>Gratis y Seguro</h1>' +
      '<h2 class="text">La transferencia es inmediata y gratuita de una cuenta a otra.</h2></div>');
  const btnRegistrame = $('<button class="btn-registrarme">REGISTRARME</button>');

  owlCarousel.append(item1);
  owlCarousel.append(item2);
  owlCarousel.append(item3);

  owlCarousel.owlCarousel({loop:true, margin:10, nav:true, responsive: {0: {items:1}, 600: {items:1}}});

  btnRegistrame.on('click', _=>{
    status.screen = 2;
    update();
  });


  contentScreen.append(owlCarousel);
  contentScreen.append(btnRegistrame);
  return contentScreen;
};
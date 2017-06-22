'use strict';

const Screen8 = (update)=> {
  const content = $('<div class="wrapper"></div>');
  const divTop = $('<div class="top bg-purple-light"><img src="assets/img/icons/engine.png" alt="" class="icon-engine">' +
      '<img src="assets/img/icons/happy-face.png" alt="" class="img-happy">' +
      '<p class="text-white">Hola</p><div class="container-card no-margin">' +
      '<img src="assets/img/icons/eye.png" alt="eye"><span class="text-green"> Mostrar saldo </span></div>');

  const divMiddle = $('<div class="middle bg-purple-dark"><span class="text-white align-left">ÚLTIMOS MOVIMIENTOS</span>' +
      '<img src="assets/img/icons/right-arrow-circular-button.png" alt="right arrow circular" class="rigth-arrow"></div>');

  const divBottom = $('<div class="bottom bg-purple-dark"></div>');
  const divInfo = $('<div class="div-info"><img src="assets/img/icons/icon.png" alt="icon">' +
      '<div><p>Aún no realizas tu primer pago</p><p>Es rápido y sencillo</p></div></div>');
  const divButtons = $('<div class="button-img"><div><img src="assets/img/icons/send.png" alt="send"><p>ENVIAR PAGO</p></div>' +
      '<div><img src="assets/img/icons/code-qr.png" alt="code qr"><p>RECIBIR PAGO</p></div></div>');

  content.append(divTop);
  content.append(divMiddle);
  content.append(divBottom);
  divBottom.append(divInfo);
  divBottom.append(divButtons);

  return content;
};
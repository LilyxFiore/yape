'use strict';
const Screen3 = (update)=>{
  const container = $('<div class="container-medium"></div>');
  const title = $('<img src="assets/img/icons/message.png" alt="phone" class="img-center"><h1>Ahora ingresa tu código</h1>' +
      '<h2>Enviáremos un SMS con el código de validación al número <span>' + status.user.data.phone +'</span></h2>');
  const contentInput = $('<div class="content-input"><img src="assets/img/icons/lock.png" alt="lock" class="img-lock"></div>');
  const inputPass = $('<input type="password" maxlength="6" class="input-pass" placeholder="-  -  -  -  -  - ">');
  const clock = $('<div class="container-clock"><span>Reintentar en </span><img src="assets/img/icons/clock.png" alt="clock" class="img-clock"><span id="counter"></span></div>');
  const message = $('<p class="message"> Código: ' + status.user.data.code +'</p>');

  container.append(title);
  container.append(contentInput);
  contentInput.append(inputPass);
  container.append(clock);
  container.append(message);

  inputPass.on("keyup", function(){
    if(status.user.data.code == $(this).val())
    {
      stopInterval(status.interval);
      status.screen = 4;
      update();
    }
  });
  return container;
};
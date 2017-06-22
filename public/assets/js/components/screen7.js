'use strict';

const Screen7 = (update)=>{
  const container = $('<div class="container-medium"></div>');
  const title = $('<img src="assets/img/icons/bcp-logo.png" alt="card" class="img-center"><h2>Registra tu tarjeta de débito BCP</h2>' +
      '<h3>Ingresa la clave de tu tarjeta **** ' + status.user.card.substr(-3) + '</h3>');
  const form = $('<form></form>');
  const contentInput = $('<div class="content-input"><img src="assets/img/icons/lock.png" alt="lock" class="img-lock"></div>');
  const inputPassCard = $('<input type="password" maxlength="5" class="input-pass" placeholder=". . . . . ">');
  const message = $('<p class="message"></p>');
  const btnRegistrar = $('<button class="btn-medium" disabled>REGISTRAR</button>');

  container.append(title);
  container.append(form);
  form.append(contentInput);
  contentInput.append(inputPassCard);
  container.append(message);
  container.append(btnRegistrar);

  /** validando Credit card **/
  inputPassCard.keyup( function () {
    if(inputPassCard.val().length == 5){
      message.text('');
    }
    else{
      message.text('La tarjeta debe tener 5 dígitos');
    }
  });


  /** validando formulario **/
  form.on("change keyup", function () {
    if(inputPassCard.val().length == 5) {
      btnRegistrar.removeAttr("disabled");
    }
    else {
      btnRegistrar.attr("disabled", "false");
    }
  });

  btnRegistrar.click(function (e) {
    e.preventDefault();
    status.user.passCard = inputPassCard.val();
    registerCard(update);
  });
  return container;
};

const registerCard = (update) =>{
  $.post("api/registerCard", {
    phone: status.user.phone,
    cardNumber: status.user.card,
    cardMonth: status.user.month,
    cardYear: status.user.year,
    cardPassword: status.user.passCard
  }, function(result) {
    console.log(result);

    if(result.data == null){
      message.text(result.message);
    }
    else{
      status.screen = 8;
      update();
    }
  });
};
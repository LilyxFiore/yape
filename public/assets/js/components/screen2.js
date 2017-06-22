'use strict';

const Screen2 = (update)=>{
  const container = $('<div class="container-medium"></div>');
  const title = $('<img src="assets/img/icons/phone.png" alt="phone" class="img-center"><h2>Para comenzar validemos tu número</h2><h3>Recibirás un sms con un código de validación</h3>');
  const contentInput = $('<div class="content-input"><img src="assets/img/icons/phoneandnumber.png" alt="number phone" class="img-input"></div>');
  const inputPhone = $('<input type="text" maxlength="9" class="input-phone">');
  const contentCheckbox = $('<div class="content-checkbox"></div>');
  const inputCheck = $('<input type="checkbox">Acepto los <a href="#">Términos y condiciones</a>');
  const message = $('<p class="message"></p>');
  const message2 = $('<p class="message"></p>');
  const message3 = $('<p class="message"></p>');
  const btnContinuar = $('<button class="btn-medium" disabled>Continuar</button>');

  container.append(title);
  container.append(contentInput);
  contentInput.append(inputPhone);
  contentCheckbox.append(inputCheck);
  container.append(contentCheckbox);
  container.append(message);
  container.append(message2);
  container.append(message3);
  container.append(btnContinuar);

  inputCheck.on( 'change keypress', function() {
    if( $(this).is(':checked') && inputPhone.val().length == 9 ) {
      btnContinuar.removeAttr("disabled");
    } else {
      btnContinuar.attr("disabled", "false");
    }
  });

  inputPhone.on({
    keyup: function () {
      if(inputPhone.val().charAt(0) == 9){
        message3.text('');
      }
      else{
        message3.text('El número debe empezar con 9');
      }
      if(inputPhone.val().length == 9 &&  $(inputCheck).is(':checked') ){
        btnContinuar.removeAttr("disabled");
      }
      else{
        btnContinuar.attr("disabled", "false");
      }
      if(inputPhone.val().length == 9){;
        message.text('');
      }
      else{
        message.text('Debe tener 9 números');
      }
    },
    keydown: function (e) {
      if( e.keyCode >= 48 && e.keyCode <= 57 ||  e.keyCode === 8){
        message2.text('');      }
      else{message2.text('Sólo números'); return false;
      }
    }
  });

  btnContinuar.click(function () {
    if(inputPhone.val().length == 9){
      checkUser(inputPhone.val(), true, message, update);
      message.text('');
    }
    else{
      message.text('Número no válido: Son 9 números');
    }
  });

  return container;
};

const checkUser = (num,check, message, update) =>{
  $.post("api/RegisterNumber", {phone: num, terms: check}, function(result) {
    if(result.data == null){
      message.text(result.message);
    }
    else{
      status.user = {
        code: result.data.code,
        phone: result.data.phone,
        terms: result.data.terms
      }
      status.screen = 3;
      update();
    }
  });
};


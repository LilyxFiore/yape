'use strict';

const Screen2 = (update)=>{
  const container = $('<div class="container-medium"></div>');
  const title = $('<img src="assets/img/icons/phone.png" alt="phone" class="img-center"><h2>Para comenzar validemos tu número</h2><h3>Recibirás un sms con un código de validación</h3>');
  const contentInput = $('<div class="content-input"><img src="assets/img/icons/phoneandnumber.png" alt="number phone" class="img-input"></div>');
  const inputPhone = $('<input type="text" maxlength="9" class="input-phone">');
  const contentCheckbox = $('<div class="content-checkbox"></div>');
  const form = $('<form></form>');
  const inputCheck = $('<input type="checkbox">Acepto los <a href="#">Términos y condiciones</a>');
  const message = $('<p class="message"></p>');
  const message2 = $('<p class="message"></p>');
  const btnContinuar = $('<button class="btn-medium" disabled>Continuar</button>');

  container.append(title);
  form.append(contentInput);
  contentInput.append(inputPhone);
  contentCheckbox.append(inputCheck);
  form.append(contentCheckbox);
  container.append(form);
  container.append(message);
  container.append(message2);
  container.append(btnContinuar);

  inputPhone.on('keydown', function (e){
    if( e.keyCode >= 48 && e.keyCode <= 57 ||  e.keyCode === 8 ||  e.keyCode === 37 || e.keyCode === 39){
      message2.text('');
    }
    else {
      message2.text('Sólo números');
      return false;
    }
  });

  /** validando formulario **/
  form.on("change keyup", function () {
    if(inputPhone.val().charAt(0) != 9){
      message2.text('');
      message.text('Debe empezar con 9');
    }
    if(inputPhone.val().trim().length != 9){
      message.text('');
      message2.text('Deben ser 9 números');
    }
    if(inputPhone.val().trim().length == 9 && inputPhone.val().charAt(0) == 9 && inputCheck.is(':checked')){
      message.text('');
      message2.text('');
      btnContinuar.removeAttr("disabled");
    }
    else {
      btnContinuar.attr("disabled", "disabled");
    }
  });

  btnContinuar.click(function () {
    checkUser(inputPhone.val(), true, message, update);
    message.text('');
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


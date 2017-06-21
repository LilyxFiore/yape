const Screen2 = (update)=>{
  const container = $('<div class="container-medium"></div>');
  const title = $('<img src="assets/img/icons/phone.png" alt="phone" class="img-center"><h1>Para comenzar validemos tu número</h1><h2>Recibirás un sms con un código de validación</h2>');
  const contentInput = $('<div class="content-input"><img src="assets/img/icons/phoneandnumber.png" alt="number phone" class="img-input"></div>');
  const inputPhone = $('<input type="text" id="phone" class="input-phone" title="Número celular no válido" maxlength="9">');
  const contentCheckbox = $('<div class="content-checkbox"></div>');
  const inputCheck = $('<input type="checkbox" id="check">Acepto los <a href="#">Términos y condiciones</a>');
  const message = $('<p class="message"></p>');
  const btnContinuar = $('<button id="btn-continuar" class="btn-medium" disabled>Continuar</button>');

  container.append(title);
  container.append(contentInput);
  contentInput.append(inputPhone);
  contentCheckbox.append(inputCheck);
  container.append(contentCheckbox);
  container.append(message);
  container.append(btnContinuar);

  inputCheck.on( 'change', function() {
    if( $(this).is(':checked') ) {
      btnContinuar.removeAttr("disabled");
    } else {
      btnContinuar.attr("disabled", "false");
    }
  });

  inputPhone.keyup( _=> {
    if(inputPhone.val().charAt(0) == 9){
      message.text('');
    }
    else{
      message.text('El número debe empezar con 9');
    }
  });

  inputPhone.keydown((e) => {
    if( e.key >= 0 && e.key <= 9 ||  e.keyCode === 8){
      message.text('');
    }
    else{
      message.text('Sólo números');
      return false;
    }
  });

  btnContinuar.click(function () {
    if(inputPhone.val().length == 9){
      checkUser(inputPhone.val(), true, message, update);
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
      status.user = result;   // result.data.code
      status.screen = 3;
      update();
    }
  });
};


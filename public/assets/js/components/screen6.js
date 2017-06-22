'use strict';

const Screen6 = (update)=>{
  const container = $('<div class="container-medium m-top"></div>');
  const title = $('<img src="assets/img/icons/bcp-logo.png" alt="card" class="img-center"><h2>Registra tu tarjeta de débito BCP</h2>' +
      '<h3>Por ahora aceptamos cuentas de ahorro y/o corriente en soles</h3>');
  const form = $('<form></form>');
  const contentInput = $('<div class="content-input"><img src="assets/img/icons/card.png" alt="card" class="img-lock"></div>');
  const inputCard = $('<input type="text" maxlength="16" class="input-pass">');
  const card = $('<div class="container-card"><img src="assets/img/icons/scan.png" alt="scan"><span class="text-green"> Escanear tarjeta</span></div>');
  const contentInputDate = $('<div class="m-top-20"><span>Fecha de vencimiento</span></div>');
  const inputMonth = $('<input type="text" maxlength="2" class="input-date" placeholder="Mes"><span> / </span>');
  const inputYear = $('<input type="text" maxlength="2" class="input-date" placeholder="Año">');
  const message1 = $('<p class="message"></p>');
  const message2 = $('<p class="message"></p>');
  const message3 = $('<p class="message"></p>');
  const btnContinuar = $('<button class="btn-medium" disabled>Continuar</button>');

  container.append(title);
  container.append(form);
  form.append(contentInput);
  contentInput.append(inputCard);
  form.append(contentInputDate);
  contentInputDate.append(inputMonth);
  contentInputDate.append(inputYear);
  container.append(card);
  container.append(message1);
  container.append(message2);
  container.append(message3);
  container.append(btnContinuar);

  /** validando los inputs que sean números **/
  validate(inputCard, message1);
  validate(inputMonth, message2);
  validate(inputYear, message3);

  /** validando Credit card **/
  inputCard.keyup( function () {
    if(inputCard.val().length == 16){
      message1.text('');
    }
    else{
      message1.text('La tarjeta debe tener 16 números');
    }
  });

  /** validando mes **/
  let countValidM = false;
  inputMonth.keyup( function () {
    if($(this).val() != ""){
      if($(this).val() >= 1 && $(this).val() <= 12){
        countValidM = true;
        message2.text('');
      }
      else{
        countValidM = false;
        message2.text('Mes no válido');
      }
    }
  });

  /** validando año **/
  let countValidY = false;
  inputYear.keyup( function () {
    if($(this).val() != ""){
      if($(this).val() >= 17 && $(this).val() <= 24){
        countValidY = true;
        message3.text('');
      }
      else{
        countValidY = false;
        message3.text('Año no válido');
      }
    }
  });

  /** validando formulario **/
  form.on("change keyup", function () {
    if(inputCard.val().length == 16 && countValidM && countValidY) {
      btnContinuar.removeAttr("disabled");
    }
    else {
      btnContinuar.attr("disabled", "false");
    }
  });

  btnContinuar.click(function (e) {
    e.preventDefault();
    status.user.card = inputCard.val();
    status.user.month = inputMonth.val();
    status.user.year = inputYear.val();
    status.screen = 7;
    update();
  });

  return container;
};

const validate = (e, message)=>{
  e.on({
    keydown: function (e) {
      if( e.keyCode >= 48 && e.keyCode <= 57 ||  e.keyCode === 8 ||  e.keyCode === 9){
        message.text('');      }
      else{message.text('Sólo números'); return false;
      }
    }
  });
};
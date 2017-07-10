'use strict';

const Screen4 = (update)=>{
  const container = $('<div class="container-medium"></div>');
  const title = $('<img src="assets/img/icons/lockone.png" alt="phone" class="img-center"><h2>Crea tu usuario Yape</h2>' +
      '<h3>Ingresa un nombre, email y clave de usuario<span></h3>');
  const form = $('<form></form>');
  const contentInputName = $('<div class="content-input"><img src="assets/img/icons/user.png" alt="user" class="img-lock"></div>');
  const inputName = $('<input type="text" placeholder="Nombre" class="input-form name">');
  const contentInputEmail = $('<div class="content-input"><img src="assets/img/icons/message-gray.png" alt="user" class="img-lock"></div>');
  const inputEmail = $('<input type="text" placeholder="correo@ejemplo.com" class="input-form email">');
  const contentInputPass = $('<div class="content-input"><img src="assets/img/icons/lock.png" alt="lock" class="img-lock"></div>');
  const inputPass = $('<input type="password" maxlength="6" placeholder="Ingresa clave de 6 dígitos">');
  const info = $('<span>Cuida esta clave como oro, es tu acceso a Yape</span>');
  const message1 = $('<p class="message"></p>');
  const message2 = $('<p class="message"></p>');
  const message3 = $('<p class="message"></p>');
  const btnCrear = $('<button class="btn-medium" disabled>CREAR CUENTA</button>');

  container.append(title);
  container.append(form);
  form.append(contentInputName);
  contentInputName.append(inputName);
  form.append(contentInputEmail);
  contentInputEmail.append(inputEmail);
  form.append(contentInputPass);
  contentInputPass.append(inputPass);
  container.append(info);
  container.append(message1);
  container.append(message2);
  container.append(message3);
  container.append(btnCrear);

  /** validando nombre **/
  inputName.on({
    keydown: function(e){
      if( e.keyCode >= 48 && e.keyCode <= 57){
        message1.text('Solo letras');
        return false;
      }
      else{ message1.text(''); }
    },
    blur: function(){
      if($(this).val().trim().length == 0){
        message1.text('Ingresar nombre');
      }
      else{ message1.text(''); }
    }
  });

  /** validando email **/
  let emailValid = 0;
  inputEmail.keyup(function() {
    if($(this).val().trim().length == 0){
      message2.text("Debe ingresar su correo electrónico");
    }
    else if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+(\w{2,4})+$/.test($(this).val()))) {
      emailValid = 0;
      message2.text("Correo no válido");
    }
    else{ message2.text('');
      emailValid = 1;
    }
  });

  /** validando password **/
  inputPass.on({
    keydown: function (e) {
      if(e.keyCode >=0 && e.keyCode <=32 && e.keyCode != 8){
        return false;
      }
    },
    blur: function () {
      if($(this).val().trim().length != 6){message3.text("Ingrese su password"); }
      else{ message3.text(""); }
    }
  });

  /** validando formulario **/
  form.on("change keyup", function () {
    if(inputName.val().trim().length > 1 && emailValid == 1 && inputPass.val().length == 6) {
      btnCrear.removeAttr("disabled");
    }
    else {
      btnCrear.attr("disabled", "false");
    }
  });

  btnCrear.click(function () {
    createUser(inputName.val(), inputEmail.val(), inputPass.val(), update);
  });

  return container;
};

const createUser = (name, email, password, update) =>{
  $.post("api/createUser", {
    phone: status.user.phone,
    name: name,
    email: email,
    password: password
  }, function(result) {
    console.log(result);

    if(result.data == null){
      message.text(result.message);
    }
    else{
      status.user.name = result.data.name;
      status.user.email = result.data.email;
      status.user.password = result.data.password;
      status.screen = 5;
      update();
    }
  });
};
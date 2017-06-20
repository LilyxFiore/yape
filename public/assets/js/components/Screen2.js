const Screen2 = ()=>{
  const container = $('<div class="container-medium"></div>');
  const title = $('<img src="assets/img/icons/phone.png" alt="phone" class="img-center"><h1>Para comenzar validemos tu número</h1><h2>Recibirás un sms con un código de validación</h2>');
  const contentInput = $('<div class="content-input"><img src="assets/img/icons/phoneandnumber.png" alt="number phone" class="img-input"></div>');
  const inputPhone = $('<input type="text" id="phone" class="input-phone">');
  const contentCheckbox = $('<div class="content-checkbox"></div>');
  const inputCheck = $('<input type="checkbox" id="check">Acepto los <a href="#">Términos y condiciones</a>');
  const btnContinuar = $('<button id="btn-continuar" class="btn-medium">Continuar</button>');

  container.append(title);
  container.append(contentInput);
  contentInput.append(inputPhone);
  contentCheckbox.append(inputCheck);
  container.append(contentCheckbox);
  container.append(btnContinuar);

  btnContinuar.click(() =>{
    const numPhone = inputPhone.val();
    const check = $("#check").attr('checked');
    checkUser(numPhone, check);
  });

  return container;
};

const checkUser = (num,check) =>{
  $.post("api/RegisterNumber", {phone: num, terms: check}, function(result) {
    console.log(result);
    status.user = result;
  });
}



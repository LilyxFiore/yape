'use strict';

const Screen5 = () =>{
  const content = $('<div class="bg-yellow"></div>');
  const imgCheck = $('<img src="assets/img/icons/check.png" alt="check">');
  const text = $('<p class="text-purple">¡Bien!</p><p class="text-purple">Ahora puedes usar Yape</p>');

  content.append(imgCheck);
  content.append(text);

  return content;
};

const changeScreen = (update)=> {
  status.screen = 6;
  setTimeout(function () {
    console.log("Pasaron 3 segundos");
    update();
  }, 3000);
};



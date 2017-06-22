'use strict';

const counterSeg = () =>{
  let cont = 21;
  const Interval = setInterval(counter, 1000);
  status.interval = Interval;
  function counter(){
    if(cont >= 0){
      $('#counter').text(cont);
      cont--;
    }
    else{
      $('.message').text("Generando nuevo code");
      stopInterval(Interval);
      reCode();
    }
  }
};

function stopInterval(Interval){
  clearInterval(Interval);
}

const reCode = ()=>{
  $.post("api/resendCode", {phone: status.user.phone}, function(result) {
    console.log(result);
    status.user.code = result.data;
    $('.message').text("Nuevo Code: " + status.user.code);
    counterSeg();
  });
};


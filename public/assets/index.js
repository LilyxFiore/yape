'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  if(status.screen == 0){
    wrapper.html(Screen1(_=>render(root)));
    root.append(wrapper);
  }
  if(status.screen == 1){
    wrapper.append(Screen2());
  }

  root.append(wrapper);

};

const status = {
  screen: 1,
  user: null
};

$(_ => {
 // $.post("api/RegisterNumber", {phone: "9183456l36", terms: true}, function(result){
 //   console.log(result);    // result.data.code
 //   status.user = result;
    const root = $('.root');
    render(root);
 // });
});

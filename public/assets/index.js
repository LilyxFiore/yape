'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  if(status.screen == 0){
    wrapper.append(Screen1( _=>render(root) ));
    root.append(wrapper);
  }
  if(status.screen == 1){
    wrapper.append(Screen2( _=>render(root) ));
  }
  root.append(wrapper);
};

const status = {
  screen: 1,
  user: null
};

$(_ => {
  const root = $('.root');
  render(root);
});

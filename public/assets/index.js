'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  switch (status.screen){
    case 1: wrapper.append(Screen1( _=>render(root) )); break;

    case 2: wrapper.append(Screen2( _=>render(root) )); break;

    case 3: wrapper.append(Screen3( _=>render(root) )); counterSeg(); break;

    case 4: wrapper.append(Screen4( _=>render(root) )); break;

    case 5: wrapper.append(Screen5()); changeScreen( _=> render(root)); break;

    case 6: wrapper.append(Screen6()); break;
  }
  root.append(wrapper);
};

const status = {
  screen: 5,
  user: null,
  timer: null
};

$(_ => {
  const root = $('.root');
  render(root);
});

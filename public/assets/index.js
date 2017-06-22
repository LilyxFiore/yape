'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  switch (status.screen){
    case 1: wrapper.html(Screen1( _=>render(root) )); break;

    case 2: wrapper.append(Screen2( _=>render(root) )); break;

    case 3: wrapper.append(Screen3( _=>render(root) )); counterSeg(); break;

    case 4: wrapper.append(Screen4( _=>render(root) )); break;

    case 5: wrapper.append(Screen5());
            changeScreen( _=> render(root));
            wrapper.addClass("bg-yellow");
            break;

    case 6: wrapper.append(Screen6(_=> render(root))); break;

    case 7: wrapper.append(Screen7(_=> render(root))); break;

    case 8: wrapper.removeClass("wrapper"); wrapper.html(Screen8(_=> render(root))); break;
  }
  root.html(wrapper);
};

const status = {
  screen: 1,
  user: null,
  cardUser: null
};

$(_ => {
  const root = $('.root');
  render(root);
});

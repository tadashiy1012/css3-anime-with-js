window.addEventListener('load', () => {
  function listener(e) {
    const l = document.createElement('li');
    switch (e.type) {
      case 'animationiteration':
        l.innerHTML = e.elapsedTime;
        break;
    }
    document.getElementById('output').appendChild(l);
  }
  const elm = document.getElementById('tgt');
  elm.addEventListener('animationiteration', listener, false);
  const btn = document.getElementById('animeToggle');
  let toggle = false;
  btn.addEventListener('click', () => {
    if (toggle) {
      elm.className = '';
    } else {
      elm.className = 'animeActive';
    }
    toggle = !toggle;
  });
});
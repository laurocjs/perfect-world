let toggleMenu = document.querySelector("#menu .item#menu-toggle");

let giraToggleMenu = toggleMenu.animate(
  [{
    transform: 'rotate(0)'
  }, {
    transform: 'rotate(180deg)'
  }], {
    duration: 3000,
    iterations: 1,
    fill: 'both',
    easing: 'linear'
  });

let moveToggleMenu =
  document.querySelector("#menu-toggle-area").animate(
    [{
      transform: 'translateX(0vw)'
    }, {
      transform: 'translateX(30vw)'
    }], {
      duration: 3000,
      iterations: 1,
      fill: 'both',
      easing: 'linear'
    });

let changeOpacity = (elemento, valor, atraso) => {
  setTimeout(() => { if (elemento && elemento.style) elemento.style.opacity = valor.toString(); }, atraso);
}

abrirMenu = () => {
  giraToggleMenu.playbackRate = 1;
  moveToggleMenu.playbackRate = 1;
  giraToggleMenu.play();
  moveToggleMenu.play();
  let items = document.querySelectorAll("#menu .item");
  for (let index=1; index < items.length; index++) {
    changeOpacity(items[index], 1, index * 500)
  }
  items[0].removeEventListener('click', abrirMenu);
  toggleMenu.addEventListener('click', fecharMenu);
};

fecharMenu = () => {
  giraToggleMenu.playbackRate = -1;
  moveToggleMenu.playbackRate = -1;
  giraToggleMenu.play();
  moveToggleMenu.play();
  let items = document.querySelectorAll("#menu .item");
  for (let index=items.length; index > 0; index--) {
    changeOpacity(items[index], 0, (items.length-index-1) * 500)
  }
  items[0].removeEventListener('click', fecharMenu);
  toggleMenu.addEventListener('click', abrirMenu);
};

toggleMenu.addEventListener('click', abrirMenu);
giraToggleMenu.pause();
moveToggleMenu.pause();
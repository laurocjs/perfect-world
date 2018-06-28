let toggleMenu = document.querySelector("#menu .item#menu-toggle");
let animationDelay = 400;

let giraToggleMenu = toggleMenu.animate(
  [{
    transform: 'rotate(0)'
  }, {
    transform: 'rotate(180deg)'
  }], {
    duration: animationDelay*8,
    iterations: 1,
    fill: 'both',
    easing: 'linear'
  });

let moveToggleMenu =
  document.querySelector("#menu-toggle-area").animate(
    [{
      transform: 'translateX(0px)'
    }, {
      transform: `translateX(${64*9}px)`
    }], {
      duration: animationDelay*8,
      iterations: 1,
      fill: 'both',
      easing: 'linear'
    });

let changeOpacity = (elemento, valor, atraso) => {
  setTimeout(() => {
    elemento.style.opacity = valor.toString();
    setTimeout(() => {
      if (valor === 0) {
        elemento.style.display = 'none';
      }
    }, 1000);
  }, atraso);
}

abrirMenu = () => {
  giraToggleMenu.playbackRate = 1;
  moveToggleMenu.playbackRate = 1;
  giraToggleMenu.play();
  moveToggleMenu.play();
  let items = document.querySelectorAll("#menu .item");
  for (let index = 1; index < items.length; index++) {
    if (items[index] && items[index].style) {
      items[index].style.display = 'block';
      changeOpacity(items[index], 1, index * animationDelay);
    }
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
  for (let index = items.length; index > 0; index--) {
    if (items[index] && items[index].style) {
      changeOpacity(items[index], 0, (items.length - index - 1) * animationDelay)
    }
  }
  items[0].removeEventListener('click', fecharMenu);
  toggleMenu.addEventListener('click', abrirMenu);
};

toggleMenu.addEventListener('click', abrirMenu);
giraToggleMenu.pause();
moveToggleMenu.pause();
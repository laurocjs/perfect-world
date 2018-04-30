document.querySelector("#menu-toggle").addEventListener('click', (event => {
  let menu = document.querySelector("#menu-itens");
  menu.classList.toggle('aberto');
}));
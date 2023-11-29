const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const close = document.querySelector('.menu__close');
const body = document.querySelector('body');

menu.addEventListener('click', () => {
  nav.classList.add('nav--visible');
  menu.classList.add('menu--hide');
  close.classList.add('menu__close-show');
  body.classList.add('body--no-scroll');
});

close.addEventListener('click', () => {
  nav.classList.remove('nav--visible');
  menu.classList.remove('menu--hide');
  close.classList.remove('menu__close-show');
  body.classList.remove('body--no-scroll');
});
const burger = document.querySelector('.burger');
const burgerClose = document.querySelector('.menu__button-close')
const menu = document.querySelector('.menu');

function toggleBurgerMenu() {
    menu.classList.toggle('open');
    console.log('dsfsdf')
}

burger.addEventListener('click', toggleBurgerMenu);
burgerClose.addEventListener('click', toggleBurgerMenu);

console.log(burger)


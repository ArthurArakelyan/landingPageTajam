const burgerMenu = document.querySelector('.header__burgerMenu');
const burgerMenuBtn = document.querySelector('.header__burgerMenu_btn');
const nav = document.querySelector('.nav');

burgerMenu.addEventListener('click', () => {
    burgerMenuBtn.classList.toggle('is-active');
    nav.classList.toggle('navIsOpen');
});
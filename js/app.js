document.addEventListener('DOMContentLoaded', () => {

    let HEADER_BURGER = document.querySelector('.header__menu-burger');
    let HEADER_NAV = document.querySelector('.header__nav');

    HEADER_BURGER.onclick = () => {

        HEADER_BURGER.classList.toggle('header__menu-burger--active')
        HEADER_NAV.classList.toggle('header__nav--active')

    }

});
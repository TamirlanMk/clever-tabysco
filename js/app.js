document.addEventListener('DOMContentLoaded', () => {

    let headerBurger = document.querySelector('.header__menu-burger');
    let headerNav = document.querySelector('.header__nav');
    let menuLinks = document.querySelectorAll('.header__menu-list__link');

    headerBurger.onclick = () => {
        headerBurger.classList.toggle('header__menu-burger--active')
        headerNav.classList.toggle('header__nav--active')
        document.body.classList.toggle('overflow-hidden--menu')
    }

    menuLinks.forEach((link) => {

        link.onclick = (e) => {
            headerBurger.classList.remove('header__menu-burger--active');
            headerNav.classList.remove('header__nav--active');
            document.body.classList.remove('overflow-hidden--menu')

            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault()

                let sectionID = link.getAttribute('href');
                let section = document.querySelector(sectionID);

                window.scrollTo({
                    behavior: 'smooth',
                    top: section.offsetTop
                })
            }
        }
    })

    let btnTop = document.querySelector('.btn__top');

    btnTop.onclick = (e) => {
        e.preventDefault();

        window.scrollTo({
            behavior: 'smooth',
            top: 0
        })
    }

    window.onscroll = () => {
        btnTop.classList.toggle('btn__top--active', window.scrollY > 100)
    }
});
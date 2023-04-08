const menuBtn = document.querySelector('.navbar-open-btn');
const menu = document.querySelector('.menu');

let isMenuOpened = false;

const switchMenuHandler = () => {
    menuBtn.innerHTML = isMenuOpened ? 'Menu' : 'Close';
    if(!isMenuOpened) {
        menu.classList.add('menu__open');
        menuBtn.classList.add('navbar-open-btn__open');
    } else {
        menu.classList.remove('menu__open');
        menuBtn.classList.remove('navbar-open-btn__open');
    }
    isMenuOpened = !isMenuOpened;
}

menuBtn.addEventListener('click', switchMenuHandler)
const cardback = document.querySelector('.flip-card-back');
const info = document.querySelector('.info');

cardback.addEventListener('click', () => {
    info.classList.toggle('display');
});
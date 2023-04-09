const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");

const johnDoeCardBack = document.querySelector('.flip-card-back')

const hoverHandler = () => {
    box3.classList.add('display');
}

const johnHandler = () => {
    console.log('lol')
    box3.classList.toggle('display');
}

box1.addEventListener("click", () => {
    box1.classList.toggle('flip');
    box2.classList.toggle('flip');
    setTimeout(() => {
        box2.addEventListener('mouseover', hoverHandler)
    }, 2100);
});

box2.addEventListener("click", () => {
    box1.classList.toggle('flip');
    box2.classList.toggle('flip');
    box2.removeEventListener('mouseover', hoverHandler);
    box3.classList.remove('display');
});


johnDoeCardBack.addEventListener('click', johnHandler);
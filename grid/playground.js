const card = document.querySelector(".card");

card.addEventListener("mouseover", function () {
  card.classList.add("is-flipped");
});

card.addEventListener("mouseleave", function () {
  card.classList.remove("is-flipped");
  card.classList.remove("big");
});

card.addEventListener('click', () => {
    card.classList.toggle('big');
})

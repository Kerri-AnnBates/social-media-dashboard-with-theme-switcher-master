const toggleBtn = document.querySelector("#toggle");
const body = document.querySelector("body");
const topBar = document.querySelector(".dash__header");
const cards = document.querySelectorAll(".card");
const toggleSlider = document.querySelector(".toggle__slider");

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light");
    topBar.classList.toggle("light");
    toggleSlider.classList.toggle("light");

    cards.forEach(card => {
        card.classList.toggle("light");
    });
});
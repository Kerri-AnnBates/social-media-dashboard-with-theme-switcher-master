const toggleBtn = document.querySelector("#toggle");
const body = document.querySelector("body");
const topBar = document.querySelector(".dash__header");
const cards = document.querySelectorAll(".card");
const toggleSlider = document.querySelector(".toggle__slider");

// Get theme status
const isLight = JSON.parse(localStorage.getItem('isLightMode'));

const toggleMode = () => {
    body.classList.toggle("light");
    topBar.classList.toggle("light");
    toggleSlider.classList.toggle("light");

    cards.forEach(card => {
        card.classList.toggle("light");
    });

    // Set isLight t0 true or false depending on checked status.
    localStorage.setItem("isLightMode", toggleBtn.checked);
}

if (isLight) {
    toggleBtn.checked = true;
    toggleMode();
}

toggleBtn.addEventListener("click", toggleMode);
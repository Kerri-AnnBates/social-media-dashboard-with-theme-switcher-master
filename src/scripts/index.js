const toggleBtn = document.querySelector("#toggle");
const body = document.querySelector("body");
const topBar = document.querySelector(".dash__header");
const cards = document.querySelectorAll(".card");

// toggleBtn.addEventListener("click", () => {
//     if (toggleBtn.checked) {
//         body.classList.add("light");
//         topBar.classList.add("light");

//         cards.forEach(card => {
//             card.classList.add("light");
//         });
//     } else {
//         body.classList.remove("light");
//         topBar.classList.remove("light");

//         cards.forEach(card => {
//             card.classList.remove("light");
//         });
//     }
// });

toggleBtn.addEventListener("click", () => {

    body.classList.toggle("light");
    topBar.classList.toggle("light");

    cards.forEach(card => {
        card.classList.toggle("light");
    });

});
const openBtn = document.getElementById("openBtn");
const letter = document.getElementById("letter");

let opened = false;

openBtn.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    letter.classList.add("show");

    openBtn.textContent = "Opened";

    openBtn.disabled = true;

});

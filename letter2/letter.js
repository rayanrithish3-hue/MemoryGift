const envelope = document.getElementById("envelope");
const continueBtn = document.getElementById("continueBtn");

let opened = false;

envelope.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    envelope.classList.add("open");

});

continueBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    window.location.href = "../feedback.html";

});

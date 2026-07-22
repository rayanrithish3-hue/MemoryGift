const envelope = document.getElementById("envelopeContainer");
const flap = document.getElementById("flap");
const letter = document.getElementById("letter");
const continueBtn = document.getElementById("continueBtn");

let opened = false;

envelope.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    // Open the top flap
    flap.classList.add("open");

    // Wait for flap animation
    setTimeout(() => {
        letter.classList.add("open");
    }, 450);

    // Show continue button
    setTimeout(() => {
        continueBtn.classList.add("show");
    }, 1200);

});

continueBtn.addEventListener("click", () => {

    // Change this to your next page
    window.location.href = "feedback.html";

});

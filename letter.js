// ===========================
// ELEMENTS
// ===========================

const envelope = document.getElementById("envelope");
const continueBtn = document.getElementById("continueBtn");
const message = document.getElementById("message");

let opened = false;

// ===========================
// OPEN ENVELOPE
// ===========================

envelope.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    // Open animation
    envelope.classList.add("open");

    // Show message after letter comes up
    setTimeout(() => {

        message.innerHTML = `
        Every memory with you<br>
        means more than words can say.<br>
        ❤️
        `;

    }, 600);

    // Show continue button
    setTimeout(() => {

        continueBtn.classList.add("show");

    }, 1000);

});

// ===========================
// CONTINUE
// ===========================

continueBtn.addEventListener("click", () => {

    // Change this if your next page name is different
    window.location.href = "feedback.html";

});

const openBtn = document.getElementById("openBtn");
const flap = document.getElementById("flap");
const letter = document.getElementById("letter");
const continueBtn = document.getElementById("continueBtn");

let opened = false;

openBtn.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    // Open flap
    flap.classList.add("open");

    // Letter comes out after flap starts opening
    setTimeout(() => {
        letter.classList.add("show");
    }, 350);

    // Hide open button
    openBtn.style.display = "none";

    // Show continue button
    setTimeout(() => {
        continueBtn.classList.add("show");
    }, 1200);

});

continueBtn.addEventListener("click", () => {

    // Change this later to your next page
    // Example:
    // window.location.href = "../nextpage/index.html";

    alert("Continue button is working! We'll connect it to the next page later.");

});

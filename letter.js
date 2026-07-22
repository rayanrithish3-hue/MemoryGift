const envelope = document.getElementById("envelope");
const continueBtn = document.getElementById("continueBtn");

let opened = false;

envelope.addEventListener("click", function () {

    if (opened) return;

    opened = true;

    // Open animation
    envelope.classList.add("open");

    // Show continue button after animation
    setTimeout(() => {
        continueBtn.classList.add("show");
    }, 1000);

});

continueBtn.addEventListener("click", function (e) {

    e.stopPropagation();

    // Change if your next page name is different
    window.location.href = "feedback.html";

});

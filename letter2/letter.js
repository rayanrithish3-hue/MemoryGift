const animation = lottie.loadAnimation({
    container: document.getElementById("lottie"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "../assets/envelope.json"
});

const openBtn = document.getElementById("openBtn");
const lottieBox = document.getElementById("lottie");
const letter = document.getElementById("letter");
const continueBtn = document.getElementById("continueBtn");

openBtn.addEventListener("click", () => {
    openBtn.style.display = "none";
    animation.goToAndPlay(0, true);
});

animation.addEventListener("complete", () => {
    lottieBox.style.display = "none";
    letter.classList.remove("hidden");
});

continueBtn.addEventListener("click", () => {
    window.location.href = "../hidden.html";
});

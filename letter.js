const envelope = document.getElementById("envelope");
const message = document.getElementById("message");
const continueBtn = document.getElementById("continueBtn");
const tapText = document.querySelector(".tapText");

const text = `Your hidden message will appear here...

(We'll replace this later with your final message ❤️)`;

let index = 0;
let opened = false;

envelope.addEventListener("click", () => {

    if (opened) return;
    opened = true;

    tapText.style.display = "none";

    envelope.classList.add("open");

    // Letter animation complete ஆன பிறகு typewriter start
    setTimeout(() => {
        typeWriter();
    }, 1200);

});

function typeWriter() {

    if (index < text.length) {

        message.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 40);

    } else {

        continueBtn.style.display = "inline-block";

    }

}

continueBtn.addEventListener("click", () => {

    window.location.href = "feedback.html";

});

const envelope = document.getElementById("envelope");
const message = document.getElementById("message");
const continueBtn = document.getElementById("continueBtn");
const tapText = document.querySelector(".tapText");

const finalMessage = `Your hidden message will appear here...

(We'll replace this with your final message later ❤️)`;

let opened = false;
let index = 0;

envelope.addEventListener("click", () => {

    if(opened) return;

    opened = true;

    tapText.style.opacity = "0";

    envelope.classList.add("open");

    setTimeout(() => {

        typeWriter();

    },1200);

});

function typeWriter(){

    if(index < finalMessage.length){

        message.textContent += finalMessage.charAt(index);

        index++;

        setTimeout(typeWriter,35);

    }else{

        continueBtn.style.display="inline-block";

    }

}

continueBtn.addEventListener("click",()=>{

    window.location.href="feedback.html";

});

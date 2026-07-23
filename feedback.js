const btn = document.getElementById("sendBtn");
const box = document.getElementById("message");
const success = document.getElementById("success");
const quoteOverlay = document.getElementById("quoteOverlay");

btn.addEventListener("click", () => {

    const message = box.value.trim();

    if(message===""){

        alert("Please type your thoughts ❤️");

        return;

    }

    emailjs.send(

        "service_1kflh76",

        "template_ya0ui7v",

        {

            message:message

        }

    )

    .then(()=>{

       confetti({
        particleCount:250,
        spread:180,
        origin:{y:.6}
    });

    success.style.display="block";

    box.value="";

    // Success message 2.5 seconds
    setTimeout(()=>{

        success.style.display="none";

        // Show quote
        quoteOverlay.classList.add("show");

        // Hide quote after 10 seconds
        setTimeout(()=>{

            quoteOverlay.classList.remove("show");

        },10000);

    },2500);

})

    .catch((error)=>{

        console.log(error);

        alert("Message could not be sent.");

    });

});

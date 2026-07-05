const btn = document.getElementById("sendBtn");
const box = document.getElementById("message");
const success = document.getElementById("success");

btn.addEventListener("click", () => {

    const message = box.value.trim();

    if(message===""){

        alert("Please type your thoughts ❤️");

        return;

    }

    emailjs.send(

        "service_2v4q2ul",

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

        setTimeout(()=>{

            success.style.display="none";

        },3000);

    })

    .catch((error)=>{

        console.log(error);

        alert("Message could not be sent.");

    });

});

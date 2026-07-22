lottie.loadAnimation({
    container: document.getElementById("butterflyAnimation"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "assets/butterfly.json"
});

const message="You are someone who can't replace.";

const typing=document.getElementById("typing");

const sub=document.getElementById("subText");

const btn=document.getElementById("continueBtn");

let index=0;

function type(){

if(index<message.length){

typing.innerHTML+=message.charAt(index);

index++;

setTimeout(type,70);

}else{

sub.innerHTML="Every memory in this little gift will always remain special. ❤️";

btn.style.display="inline-block";

}

}

type();

btn.onclick=()=>{

window.location.href="feedback.html";

};

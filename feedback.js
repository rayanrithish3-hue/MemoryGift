const btn=document.getElementById("sendBtn");

const box=document.getElementById("message");

const success=document.getElementById("success");

btn.onclick=()=>{

if(box.value.trim()===""){

alert("Please type something ❤️");

return;

}

confetti({

particleCount:250,

spread:180,

origin:{y:.6}

});

success.style.display="block";

setTimeout(()=>{

success.style.display="none";

},3000);

};

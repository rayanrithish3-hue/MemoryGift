let startY = 0;

const intro = document.getElementById("intro");

const video1 = document.getElementById("video1");

const video2 = document.getElementById("video2");

const video1Next = document.getElementById("video1Next");

const memoryBtn = document.getElementById("memoryBtn");

document.addEventListener("touchstart",(e)=>{

startY=e.touches[0].clientY;

});

document.addEventListener("touchend",(e)=>{

let endY=e.changedTouches[0].clientY;

if(intro.classList.contains("active")){

if(startY-endY>80){

intro.classList.remove("active");

video1.classList.add("active");

}

}

});

let mouseStart=0;

document.addEventListener("mousedown",(e)=>{

mouseStart=e.clientY;

});

document.addEventListener("mouseup",(e)=>{

let mouseEnd=e.clientY;

if(intro.classList.contains("active")){

if(mouseStart-mouseEnd>80){

intro.classList.remove("active");

video1.classList.add("active");

}

}

});

video1Next.onclick=()=>{

video1.classList.remove("active");

video2.classList.add("active");

};

memoryBtn.onclick=()=>{

window.location.href="calendar.html";

};

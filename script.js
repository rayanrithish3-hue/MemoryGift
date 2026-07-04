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

if(window.location.pathname.includes("calendar")){

let current=0;

const container=document.getElementById("calendarContainer");

const next=document.getElementById("nextBtn");

const prev=document.getElementById("prevBtn");

const popup=document.getElementById("popup");

const popupDate=document.getElementById("popupDate");

const popupMemory=document.getElementById("popupMemory");

const close=document.getElementById("closePopup");

function render(){

container.innerHTML="";

let month=months[current];

let title=document.createElement("h2");

title.innerHTML=month.name;

container.appendChild(title);

let grid=document.createElement("div");

grid.className="calendar";

for(let i=1;i<=month.days;i++){

let box=document.createElement("div");

box.className="day";

box.innerHTML=i;

if(month.memories[i]){

box.classList.add("highlight");

box.onclick=()=>{

popup.style.display="flex";

popupDate.innerHTML=i+" "+month.name;

popupMemory.innerHTML=month.memories[i];

};

}

grid.appendChild(box);

}

container.appendChild(grid);

prev.style.display=current==0?"none":"inline-block";

if(current==2){

next.innerHTML="Click Me ❤️";

}else{

next.innerHTML="Next";

}

}

render();

next.onclick=()=>{

if(current<2){

current++;

render();

}else{

window.location.href="hidden.html";

}

};

prev.onclick=()=>{

current--;

render();

};

close.onclick=()=>{

popup.style.display="none";

};

}

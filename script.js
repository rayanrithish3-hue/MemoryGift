// ===========================
// ELEMENTS
// ===========================

const intro = document.getElementById("intro");
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");

const next1 = document.getElementById("video1Next");
const next2 = document.getElementById("memoryButton");

// ===========================
// SWIPE DETECTION
// ===========================

let startY = 0;
let endY = 0;

// Mobile Touch

document.addEventListener("touchstart", (e) => {
    startY = e.touches[0].clientY;
});

document.addEventListener("touchend", (e) => {

    endY = e.changedTouches[0].clientY;

    if (intro.classList.contains("active")) {

        if ((startY - endY) > 80) {

            intro.classList.remove("active");
            video1.classList.add("active");

        }

    }

});

// Desktop Mouse (Testing)

document.addEventListener("mousedown", (e) => {
    startY = e.clientY;
});

document.addEventListener("mouseup", (e) => {

    endY = e.clientY;

    if (intro.classList.contains("active")) {

        if ((startY - endY) > 80) {

            intro.classList.remove("active");
            video1.classList.add("active");

        }

    }

});

// ===========================
// VIDEO 1
// ===========================

next1.addEventListener("click", () => {

    video1.classList.remove("active");
    video2.classList.add("active");

});

// ===========================
// VIDEO 2
// ===========================

next2.addEventListener("click", () => {

    alert("Calendar Page Coming Soon ❤️");

});

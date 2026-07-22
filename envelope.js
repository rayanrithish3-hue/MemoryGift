const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {
        window.location.href = "hidden.html";
    }, 2000);

});

document.getElementById("show-email").style.display = "none";

function showEmail() {
    let email = document.getElementById("show-email");
    let btn = document.getElementById("showEmailBtn");
    if (email.style.display === "none") {
        email.style.display = "block";
    }
    btn.style.display = "none";
}

// Modal
let modal = document.getElementById("myModal");
let img = document.getElementById("resumeImg");
let modalImg = document.getElementById("modalResume");

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

// Closing modal
function closing() {
    modal.style.display = "none";
}
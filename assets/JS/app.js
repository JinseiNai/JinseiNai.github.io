document.getElementById("show-email").style.display = "none";

function showEmail() {
    let email = document.getElementById("show-email");
    let btn = document.getElementById("showEmailBtn");
    if (email.style.display === "none") {
        email.style.display = "block";
    }
    btn.style.display = "none";
}
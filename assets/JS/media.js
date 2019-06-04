let numOfProjects = document.querySelectorAll(".imgDiv").length;
let media = window.matchMedia("(max-width: 768px");
resize(media);
media.addListener(resize);

function resize(media) {
    // let myElement = document.getElementById("imgDiv");
    if (media.matches) {
        console.log("resizing");
        for (let i = 0; i < numOfProjects; i++) {
            document.getElementById(`imgDiv${[i]}`).className += " s12";
            document.getElementById(`imgDiv${[i]}`).classList.remove("s4");
        }
    } else {
        console.log("it's fine");
        for (let i = 0; i < numOfProjects; i++) {
            document.getElementById(`imgDiv${[i]}`).className += " s4";
            document.getElementById(`imgDiv${[i]}`).classList.remove("s12");
        }
    }
}
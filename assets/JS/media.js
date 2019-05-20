let media = window.matchMedia("(max-width: 768px");
resize(media);
media.addListener(resize);

function resize(media) {
    if (media.matches) {
        console.log("resizing");
    } else {
        console.log("it's fine");
    }
}
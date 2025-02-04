function onMouseOverImage(event) {

    event.target.style.opacity = 0.5;
}

function onMouseLeaveImage(event) {

    event.target.style.opacity = 1;
}


const imageElement = document.getElementById('myImage');
imageElement.addEventListener('mouseover', onMouseOverImage);
imageElement.addEventListener('mouseleave', onMouseLeaveImage);
function upDate(previewPic) {
    console.log("Event triggered");
    console.log("Alt text: ", previewPic.alt);
    console.log("Source: ", previewPic.src);

    const imageElement = document.getElementById('image');
    imageElement.textContent = previewPic.alt;
    imageElement.style.backgroundImage = `url(${previewPic.src})`;
}

function undo() {
    const imageElement = document.getElementById('image');
    imageElement.style.backgroundImage = "url('')";
    imageElement.textContent = "Hover over an image below to display here.";
}
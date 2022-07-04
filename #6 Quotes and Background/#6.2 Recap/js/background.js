const images = ["0.jpg", "1.jpg", "2.png"];

const chosenImages = images[Math.floor(Math.random() * images.length)];

// create HTML element by JS
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImages}`;
// append HTML element
document.body.appendChild(bgImage);
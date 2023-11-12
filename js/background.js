const backgroundDiv = document.querySelector(".background");

const img = ["1.Jpg","2.jpg","3.jpg"];

const randomImg = img[Math.floor(Math.random()*img.length)];

const background = document.createElement("img");
background.src = `back-img/${randomImg}`;

backgroundDiv.appendChild(background);
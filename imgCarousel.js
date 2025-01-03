const containerDiv = document.createElement("div");
containerDiv.classList.add("container-div");

const leftArrow = document.createElement("div");
leftArrow.classList.add("arrow", "left");
leftArrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-left-bold</title><path d="M20,9V15H12V19.84L4.16,12L12,4.16V9H20Z" /></svg>`;

const slide = document.createElement("div");
slide.classList.add("slide");

const rightArrow = document.createElement("div");
rightArrow.classList.add("arrow", "right");
rightArrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-right-bold</title><path d="M4,15V9H12V4.16L19.84,12L12,19.84V15H4Z" /></svg>`;


const divDots = document.createElement("div");
divDots.classList.add("div-dots");
const dot1 = document.createElement("div");
dot1.classList.add("dot");
dot1.dataset.index = 0;
const dot2 = document.createElement("div");
dot2.classList.add("dot");
dot2.dataset.index = 1;
const dot3 = document.createElement("div");
dot3.classList.add("dot");
dot3.dataset.index = 2;
const dot4 = document.createElement("div");
dot4.classList.add("dot");
dot4.dataset.index = 3;
const dot5 = document.createElement("div");
dot5.classList.add("dot");
dot5.dataset.index = 4;

divDots.appendChild(dot1);
divDots.appendChild(dot2);
divDots.appendChild(dot3);
divDots.appendChild(dot4);
divDots.appendChild(dot5);

containerDiv.appendChild(leftArrow);
containerDiv.appendChild(slide);
containerDiv.appendChild(rightArrow);
containerDiv.appendChild(divDots);
document.body.appendChild(containerDiv);

const img1 = document.createElement("img");
img1.src = "images/bird.jpg";
img1.classList.add("image");
slide.appendChild(img1);

const img2 = document.createElement("img");
img2.src = "images/chick.jpg";
img2.classList.add("image");
slide.appendChild(img2);

const img3 = document.createElement("img");
img3.src = "images/man.jpg";
img3.classList.add("image");
slide.appendChild(img3);

const img4 = document.createElement("img");
img4.src = "images/squirrel.jpg";
img4.classList.add("image");
slide.appendChild(img4);

const img5 = document.createElement("img");
img5.src = "images/tortoise.jpg";
img5.classList.add("image");
slide.appendChild(img5);


let imageIndex = -1;
const totalImages = 5;
let images = document.getElementsByTagName("img");
let dots = document.getElementsByClassName("dot");
let slideTimeout;
let initial = 0;
showNextSlide();
function showNextSlide() {
    if(initial > 0) {
        images[imageIndex].style.display = "none";
        dots[imageIndex].classList.remove("current-dot");
    }
    if(imageIndex >= (totalImages -1)) {
        imageIndex = 0;
    } else {imageIndex++;}

    if(imageIndex === -1) {imageIndex = 4;}
    if(imageIndex === -2) {imageIndex = 3;}
    images[imageIndex].style.display = "block";
    dots[imageIndex].classList.add("current-dot");

    initial++;
    slideTimeout = setTimeout(showNextSlide, 5000);
}

function showPrevSlide() {
    if(initial > 0) {
        images[imageIndex].style.display = "none";
        dots[imageIndex].classList.remove("current-dot");
    }
    
    imageIndex--;

    if(imageIndex === -1) {imageIndex = 4;}
    if(imageIndex === -2) {imageIndex = 3;}
    images[imageIndex].style.display = "block";
    dots[imageIndex].classList.add("current-dot");
    initial++;
    slideTimeout = setTimeout(showNextSlide, 5000);
}

rightArrow.addEventListener("click", () => {
    clearTimeout(slideTimeout);
    showNextSlide();
});

leftArrow.addEventListener("click", () => {
    clearTimeout(slideTimeout);
    showPrevSlide();
});

function showSlide(n) {
    images[imageIndex].style.display = "none";
    dots[imageIndex].classList.remove("current-dot");

    imageIndex = n;
    images[imageIndex].style.display = "block";
    dots[imageIndex].classList.add("current-dot");
    initial++;
    slideTimeout = setTimeout(showNextSlide, 5000);
}

divDots.addEventListener("click", (e) => {
    if(e.target.dataset.index) {
        clearTimeout(slideTimeout);
        showSlide(e.target.dataset.index);
    }
});
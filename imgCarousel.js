const containerDiv = document.createElement("div");
containerDiv.classList.add("container-div");

const leftArrow = document.createElement("div");
leftArrow.classList.add("arrow");
leftArrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-left-bold</title><path d="M20,9V15H12V19.84L4.16,12L12,4.16V9H20Z" /></svg>`;

const slide = document.createElement("div");
slide.classList.add("slide");

const rightArrow = document.createElement("div");
rightArrow.classList.add("arrow");
rightArrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-right-bold</title><path d="M4,15V9H12V4.16L19.84,12L12,19.84V15H4Z" /></svg>`;

containerDiv.appendChild(leftArrow);
containerDiv.appendChild(slide);
containerDiv.appendChild(rightArrow);
document.body.appendChild(containerDiv);

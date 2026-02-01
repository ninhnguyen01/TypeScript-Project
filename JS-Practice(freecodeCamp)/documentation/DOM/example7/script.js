const dessertsList = document.getElementById("desserts");
const listItem = document.createElement("li");

listItem.textContent = "Cookies";
dessertsList.appendChild(listItem);

const sectionEl = document.getElementById("example-section");
const lastParagraph = document.querySelector("#example-section p:last-of-type");

sectionEl.removeChild(lastParagraph);

const para = document.getElementById("para");
para.setAttribute("class", "my-class");



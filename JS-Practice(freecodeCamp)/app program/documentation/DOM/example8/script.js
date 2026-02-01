const btn = document.getElementById("btn");

btn.addEventListener("click", () => alert("You clicked the button"));

const bodyEl = document.querySelector("body");
const para = document.getElementById("para");
const btn2 = document.getElementById("btn2");

let isBgColorGrey = true;

function toggleBgColor() {
  bodyEl.style.backgroundColor = isBgColorGrey ? "blue" : "grey";
  isBgColorGrey = !isBgColorGrey;
}

btn2.addEventListener("click", toggleBgColor);

para.addEventListener("mouseover", () => {
  btn2.removeEventListener("click", toggleBgColor);
});

const paraEl = document.getElementById("para");
paraEl.style.color = "red";

// Example adding a class
const paraEl = document.getElementById("para");
paraEl.classList.add("highlight");

// Example removing a class
paraEl.classList.remove("blue-background");

// Example toggling a class
const menu = document.getElementById("menu");
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => menu.classList.toggle("show"));

setTimeout(() => {
 console.log('This runs after 3 seconds'); 
}, 3000);

setInterval(() => {
 console.log('This runs every 2 seconds');
}, 2000);

// Example using clearInterval
const intervalID = setInterval(() => {
 console.log('This will stop after 5 seconds');
}, 1000);

setTimeout(() => {
 clearInterval(intervalID);
}, 5000);

function animate() {
 // Update the animation...
 // for example, move an element, change a style, and more.
 update();
 // Request the next frame
 requestAnimationFrame(animate);
}

const square = document.querySelector('#square');

const animation = square.animate(
 [{ transform: 'translateX(0px)' }, { transform: 'translateX(100px)' }],
 {
   duration: 2000, // makes animation lasts 2 seconds
   iterations: Infinity, // loops indefinitely
   direction: 'alternate', // moves back and forth
   easing: 'ease-in-out', // smooth easing
 }
);

<canvas id="my-canvas" width="400" height="400"></canvas>

const canvas = document.getElementById('my-canvas');

// Access the drawing context of the canvas. 
// "2d" allows you to draw in two dimensions 
const ctx = canvas.getContext('2d');

// Set the background color
ctx.fillStyle = 'crimson';

// Draw a rectangle
ctx.fillRect(1, 1, 150, 100);

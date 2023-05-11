//background
// import { getDate } from './script_p1.js';
// import { likeAnimal } from './script_p3.js';
// import { likeColor } from './script_p4.js';
// import { likeFlower } from './script_p5.js';

// Use the imported variables in your script
// console.log(getDate());
// console.log(likeAnimal);
// console.log(likeColor);
// console.log(likeFlower);


function setup() {
  let c = createCanvas(windowWidth - 15, windowHeight - 20);
  c.parent('canvas-wrapper');

}

function draw() {
  background(200);



}

function showXY() {
  let clickCount = 0;
  let clickXY = true;
  clickCount += 1;
  if (clickXY) {
    console.log(`(${mouseX}, ${mouseY})`);
  }
}

function mousePressed() {
  showXY();
}

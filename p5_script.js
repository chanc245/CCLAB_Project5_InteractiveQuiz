let img;

function preload() {
  img = loadImage("duck.png");
}

function setup() {
  let c = createCanvas(windowWidth - 15, windowHeight - 20);
  c.parent('canvas-wrapper');

  imageMode(CENTER);
}

function draw() {
  background(220);



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

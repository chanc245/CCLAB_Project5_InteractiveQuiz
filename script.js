let img;

function preload() {
  img = loadImage("duck.png");
}

function setup() {
  let c = createCanvas(400, 400);
  c.parent('canvas-wrapper');

  imageMode(CENTER);
}

function draw() {
  // background(220);
  ellipse(200, 200, 50, 50);

  image(img, mouseX, mouseY, 100, 100);

}
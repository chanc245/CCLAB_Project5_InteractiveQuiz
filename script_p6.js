let flower1;
let flower2;
let flower3;
let flower4;
let flower5;

let squareSize1 = 200;
let squareSize2 = 200;
let squareSize3 = 200;
let squareSize4 = 200;
let squareSize5 = 200;

let mouseIsPressedInSquare1 = false;
let mouseIsPressedInSquare2 = false;
let mouseIsPressedInSquare3 = false;
let mouseIsPressedInSquare4 = false;
let mouseIsPressedInSquare5 = false;

let squareX1, squareY1;
let squareX2, squareY2;
let squareX3, squareY3;
let squareX4, squareY4;
let squareX5, squareY5;

function preload() {
  flower1 = loadImage("image/f1.png");
  flower2 = loadImage("image/f2.png");
  flower3 = loadImage("image/f3.png");
  flower4 = loadImage("image/f4.png");
  flower5 = loadImage("image/f5.png");
}

function setup() {
  let c = createCanvas(windowWidth - 15, windowHeight - 20);
  c.parent('canvas-wrapper');

  imageMode(CENTER);

  squareX1 = width / 2;
  squareY1 = height / 2;

  squareX2 = width / 2 + 200;
  squareY2 = height / 2;

  squareX3 = width / 2 - 200;
  squareY3 = height / 2;

  squareX4 = width / 2 + 400;
  squareY4 = height / 2;

  squareX5 = width / 2 - 400;
  squareY5 = height / 2;
}

function draw() {
  background(200);

  let isMouseInsideSquare5 =
    mouseX > squareX5 - squareSize5 / 2 &&
    mouseX < squareX5 + squareSize5 / 2 &&
    mouseY > squareY5 - squareSize5 / 2 &&
    mouseY < squareY5 + squareSize5 / 2;

  if (mouseIsPressed && isMouseInsideSquare5) {
    squareX5 = mouseX;
    squareY5 = mouseY;
  }

  image(flower5, squareX5, squareY5, squareSize5, squareSize5);


  let isMouseInsideSquare4 =
    mouseX > squareX4 - squareSize4 / 2 &&
    mouseX < squareX4 + squareSize4 / 2 &&
    mouseY > squareY4 - squareSize4 / 2 &&
    mouseY < squareY4 + squareSize4 / 2;

  if (mouseIsPressed && isMouseInsideSquare4) {
    squareX4 = mouseX;
    squareY4 = mouseY;
  }

  image(flower4, squareX4, squareY4, squareSize4, squareSize4);

  let isMouseInsideSquare3 =
    mouseX > squareX3 - squareSize3 / 2 &&
    mouseX < squareX3 + squareSize3 / 2 &&
    mouseY > squareY3 - squareSize3 / 2 &&
    mouseY < squareY3 + squareSize3 / 2;

  if (mouseIsPressed && isMouseInsideSquare3) {
    squareX3 = mouseX;
    squareY3 = mouseY;
  }

  image(flower3, squareX3, squareY3, squareSize3, squareSize3);

  let isMouseInsideSquare2 =
    mouseX > squareX2 - squareSize2 / 2 &&
    mouseX < squareX2 + squareSize2 / 2 &&
    mouseY > squareY2 - squareSize2 / 2 &&
    mouseY < squareY2 + squareSize2 / 2;

  if (mouseIsPressed && isMouseInsideSquare2) {
    squareX2 = mouseX;
    squareY2 = mouseY;
  }

  image(flower2, squareX2, squareY2, squareSize2, squareSize2);

  let isMouseInsideSquare1 =
    mouseX > squareX1 - squareSize1 / 2 &&
    mouseX < squareX1 + squareSize1 / 2 &&
    mouseY > squareY1 - squareSize1 / 2 &&
    mouseY < squareY1 + squareSize1 / 2;

  if (mouseIsPressed && isMouseInsideSquare1) {
    squareX1 = mouseX;
    squareY1 = mouseY;
  }

  image(flower1, squareX1, squareY1, squareSize1, squareSize1);
}

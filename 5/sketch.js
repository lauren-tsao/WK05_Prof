let clickCounter;
let md;

function setup() {
  createCanvas(windowWidth, windowHeight);
  clickCounter = 0;
  md = 200;
}

function draw() {
  background(20);

  ellipse(width / 2, height / 2, md);
}

function mouseReleased() {
  clickCounter += 1;
  md = map(clickCounter, 0, 10, 200, 10);
  print(clickCounter, md);
}

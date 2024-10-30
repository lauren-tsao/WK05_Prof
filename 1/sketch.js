function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(255, 20, 120);
  let mw = map(mouseX, 0, width, 300, 32);
  rect(width / 2, height / 2, mw);
}

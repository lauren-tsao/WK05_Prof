let xpos;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // initial condition
  xpos = 0;
}

function draw() {
  background(20);

  // draw stuff with variable xpos
  ellipse(xpos, height / 2, 100);

  // update xpos
  xpos += 2;

  // check if need to reset x
  if (xpos > width) {
    xpos = 0;
  }
}

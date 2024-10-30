function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20);

  // period of our drawing
  let P = 3000;
  let counter = millis() % P;

  // variables that wrap around periodically
  let md = map(counter, 0, P, 20, 500);
  let mr = map(counter, 0, P, 100, 255);
  let mx = map(counter, 0, P, 0, width);

  fill(mr, 50, 50);
  ellipse(width / 2, height / 2, md);

  fill(mr, 50, mr);
  ellipse(mx, 0.7 * height, 100);
}

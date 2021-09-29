let c;

function setup() {
  let c = createCanvas(windowWidth, windowHeight);
  background("black");
  angleMode(DEGREES);
}

function draw() {
  let xrandom = random(width);
  let yrandom = random(height);
  translate(xrandom, yrandom);
  noFill();
  stroke(
    lerpColor(color("LightSeaGreen"), color("OrangeRed"), frameCount / 1080)
  );
  scale(2.5);
  circle(0, 0, frameCount / 3);
}

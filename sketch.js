let angle = 0;
let img;
let c;

function preload() {
  img = loadImage("assets/windows.png");
}

function setup() {
  let c = createCanvas(windowWidth, windowHeight);
  background("black");
  angleMode(DEGREES);

  //savebutton = createImg("./assets/savebutton.png");
  //savebutton.style("width", "30px");

  //frameRate(12);
  //image(img, 0, 0, width, height);
}

function draw() {
  //savebutton.position(mouseX - 15, mouseY - 15);
  //savebutton.mouseclicked(saveCanvas(c, "myCanvas", "jpg"));
  let xrandom = random(width);
  let yrandom = random(height);
  translate(xrandom, yrandom);
  noFill();
  stroke(
    /*lerpColor(
      color(random(250), random(250), random(250)),
      color(random(250), random(250), random(250)),
      frameCount / 1080
    )*/
    lerpColor(color("LightSeaGreen"), color("OrangeRed"), frameCount / 1080)
  );
  scale(2.5);
  circle(0, 0, frameCount / 3);
}

//WINDOWS XP
/*
  if (frameCount <= 200) {
    noStroke();

    stroke(250, 250, 250);
    noFill();
    rect(width / 2 - 180, height / 2 + 110, 255, 18);

    push();
    let x = width / 2 - 178;
    let y = height / 2 + 112;
    fill(40, 56, 199);
    noStroke();
    translate(frameCount, 0);
    rect(x, y, 25, 14);

    pop();
  }

  if (frameCount >= 200) {
    rect(width / 2, height / 2, 250, 100);
  }
  */
/*
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(250, 250, 250);
  textFont("Helvetica");
  text("Loading...  Wait", width / 2, height / 2 - 100);
*/

/*
  //1° ANIMAZIONE
  if (frameCount <= 500) {
    stroke(
      lerpColor(color("LightSeaGreen"), color("OrangeRed"), frameCount / 1080)
    );

    push();
    noFill();

    let x = width / 2 - 1000 + frameCount * 3;
    let y = mouseY / 10;
    circle(x, height / 2 - 200, 100 + y * 5);

    pop();
  }

  if (frameCount >= 500 && frameCount <= 1000) {
    stroke(
      lerpColor(color("LightSeaGreen"), color("OrangeRed"), frameCount / 1080)
    );

    push();
    noFill();

    let x = width / 2 - 1500 + frameCount * 2;
    let y = mouseY / 10;
    circle(x, height / 2 - 100, 100 + y * 5);

    pop();
  }

  if (frameCount >= 1000 && frameCount <= 1500) {
    stroke(lerpColor(color("LightSeaGreen"), color("OrangeRed"), frameCount / 1080));

    push();
    noFill();

    let x = width / 2 - 1250 + frameCount;
    let y = mouseY / 10;
    circle(x, height / 2, 2 + y);

    pop();
  }

  if (frameCount >= 1500 && frameCount <= 2000) {
    stroke(lerpColor(color("white"), color("magenta"), frameCount / 1080));

    push();
    noFill();

    let x = width / 2 - 1250 + frameCount;
    let y = mouseY / 10;
    circle(x, height / 2 + 100, 2 + y);

    pop();
  }
  */

var x, y, button;

function setup() {
  createCanvas(1200, 1000);
  // Starts in the middle
  x = 0;//width / 2;
  y = height;
  colorMode(RGB);

  button = createButton('reset');
  button.class("reset");
  button.position(150, 65);
  button.mousePressed(reset);
}

function draw() {
 

  // Draw a circle
  noStroke();
  fill(0,0,300);
  ellipse(x, y, 10, 10);


  // Jiggling randomly on the horizontal axis
  x = x + random(-8, 8.25);
  // Moving up at a constant speed
  y = y - 8;


  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
}

function reset() {
  background(255);
  x=0;
  y=height;
}
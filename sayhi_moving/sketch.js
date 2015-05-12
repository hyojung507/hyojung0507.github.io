var input, button, greeting;
var particles = [];
var Particle = function(name) {
  this.x = random(width);
  this.y = random(height);
  this.r = random(2*PI);
  this.tolerance = 100;
  this.word = name;
};

//----------name---------/
/*
function setup() {

  // create canvas
  createCanvas(1230, 900);
  background(220);

  input = createInput();
  input.position(20, 65);

  button = createButton('say hi');
  button.position(150, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'What is your name?');
  greeting.position(20, 5);
  greeting.class("greeting");

  textAlign(CENTER)
  textSize(80);
  textFont("FaktPro-Blond");
}*/
/*
function greet() {
  var name = input.value();
  greeting.html('Nice to meet you '+name+'!');
  input.value('');



  for (var i=0; i<200; i++) {
    push();
    fill(random(255),0, 255);
    translate(random(width), random(height));
    rotate(random(2*PI));
    text(name, 0, 0);
    pop();
  }
}*/


//------original------------/

Particle.prototype.draw = function() {
  push();
  translate(this.x, this.y);
  rotate(this.r);
  text(this.word, 0, 0);
  pop();
};

Particle.prototype.update = function(mx, my) {
  var v = createVector(this.x - mx, this.y - my);
  var d = v.mag();
  if(d < this.tolerance) {
    // move
    var m = v.setMag(this.tolerance - d);
    this.x += m.x;
    this.y += m.y;
  }
};

var makeParticles = function(n, name) {
  for(var i = 0; i < n; i++) {
    particles.push(new Particle(name));
  }
};

var randomizeParticlePosition = function() {
  for(var i = 0; i < particles.length; i++) {
    particles[i].x = random(width);
    particles[i].y = random(height);
  }
};

var setup = function() {
  createCanvas(1200, 900);
  background(255);

  input = createInput();
  input.position(20, 65);
  input.class("box")

  button = createButton('say hi');
  button.position(150, 65);
  button.mousePressed(greet);
  button.class("sayhi");

  greeting = createElement('h2', 'What is your name?');
  greeting.position(20, 5);
  greeting.class("greeting");
  
  textAlign(CENTER);
  textSize(64);
  
  //makeParticles(100);
};

function greet() {
  var name = input.value();
  greeting.html('Nice to meet you '+name+'!');
  input.value('');

  particles = [];
  makeParticles(150, name);
}

var draw = function() {
  background(255);
  for(var i = 0; i < particles.length; i++) {
    particles[i].draw();
    fill(random(255),0, 255);
  }

};

var mouseMoved = function() {
  var mx = mouseX;
  var my = mouseY;
  for(var i = 0; i < particles.length; i++) {
    particles[i].update(mx, my);
  }
};

var mouseClicked = function() {
  randomizeParticlePosition();
};
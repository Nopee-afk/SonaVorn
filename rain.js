let drops = [];
const numberOfDrops = 120;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.class("rain-canvas");

  for (let i = 0; i < numberOfDrops; i++) {
    drops.push(new RainDrop());
  }
}

function draw() {
  clear();

  for (let drop of drops) {
    drop.fall();
    drop.show();
  }
}

class RainDrop {
  constructor() {
    this.reset();
    this.y = random(-windowHeight, windowHeight);
  }

  reset() {
    this.x = random(windowWidth);
    this.y = random(-200, -20);
    this.length = random(8, 20);
    this.speed = random(4, 10);
    this.opacity = random(35, 105);
  }

  fall() {
    this.y += this.speed;

    if (this.y > windowHeight) {
      this.reset();
    }
  }

  show() {
    stroke(78, 177, 160, this.opacity);
    strokeWeight(1);

    line(
      this.x,
      this.y,
      this.x - 2,
      this.y + this.length
    );
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

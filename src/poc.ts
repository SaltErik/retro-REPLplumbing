var canvas = document.querySelector("canvas");
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = 500;

class Hero {
  constructor(x, y, w, h, color, speed = 5) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.speed = speed;
  }
}

var hero = new Hero(100, (canvas.height - 50), 50, 50, "blue", 8);
var hero2 = new Hero(200, 300, 60, 60, "green");

function draw() {
  drawRect(0, 0, canvas.width, canvas.height, "gold");
  drawRect(hero.x, hero.y, hero.w, hero.h, hero.color);
  drawRect(hero2.x, hero2.y, hero2.w, hero2.h, hero2.color);
}

function movements() {
  hero.x += hero.speed;
}

function collisions() {
  if (hero.x + hero.w > canvas.width || hero.x < 0) { hero.speed = -hero.speed; }

  if (hero2.x >= hero.x && hero2.x <= hero.x + hero.w ||
    hero2.x + hero2.w >= hero.x &&
    hero2.x + hero2.w <= hero.x + hero.w) {
    if (hero2.y >= hero.y && hero2.y <= hero.y + hero.h ||
      hero2.y + hero2.h > hero.y && hero2.y + hero2.h < hero.y + hero.h) {
      alert("Yes!")
    }
  }

}

function render() {
  draw();
  movements();
  collisions();
}

function drawRect(x, y, w, h, color) {
  c.fillStyle = color;
  c.fillRect(x, y, w, h);
}

window.addEventListener("keydown", function (e) {
  if (e.keyCode == 37) {
    hero2.x -= hero2.speed;
  }
  if (e.keyCode == 38) {
    hero2.y -= hero2.speed;
  }
  if (e.keyCode == 39) {
    hero2.x += hero2.speed;
  }
  if (e.keyCode == 40) {
    hero2.y += hero2.speed;
  }

});

setInterval(render, 1000 / 60);
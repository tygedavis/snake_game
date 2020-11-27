const canvas = document.getElementById('snakeGame');
const ctx = canvas.getContext('2d');

ctx.canvas.height = 800;
ctx.canvas.width = 800;
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, 800, 800);

let snake = [
  { x: 200, y: 200 },
  { x: 190, y: 200 },
  { x: 180, y: 200 }
];

let gameSpeed = 1900;

let ateFruit = false;

function getRandom10(min, max) {
  return getRandomInt(min / 10, max / 10) * 10;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let fruit = {
  x: getRandom10(0, 790),
  y: getRandom10(0, 790)
}


let dx = 10;
let dy = 0;

//Game
update();

function update() {
  clearCanvas();
  drawFruit();
  drawSnake();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//Snake
function drawSnakeBody(body) {
  ctx.fillStyle = 'black';
  ctx.fillRect(body.x, body.y, 10, 10);
}

function drawSnake() {
  snake.forEach(drawSnakeBody);
}

function moveSnake() {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);
  if(!ateFruit){
    snake.pop();
  }
  ateFruit = false;
}

setInterval(function onMoveSnake() {
  clearCanvas();
  eatFruit();
  drawFruit();
  moveSnake();
  drawSnake();
}, gameSpeed);

function keyDown(e) {
  if (e.key === 'a' || e.key === 'A') {
    dy = 0;
    dx = -10;
  } else if (e.key === 'd' || e.key === 'D') {
    dy = 0;
    dx = 10;
  } else if (e.key === 'w' || e.key === 'W') {
    dy = -10;
    dx = 0;
  } else if (e.key === 's' || e.key === 'S') {
    dy = 10;
    dx = 0;
  }
}

window.addEventListener('keydown', keyDown);

//Fruit
function drawFruit() {
  ctx.fillStyle = 'red';
  ctx.fillRect(fruit.x, fruit.y, 10, 10);
}

function eatFruit() {
  if (snake[0].x === fruit.x && snake[0].y === fruit.y) {
    fruit.x = getRandom10(0, 790)
    fruit.y = getRandom10(0, 790)
    ateFruit = true;
  }
}

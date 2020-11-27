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

let fruit = {
  x: 50,
  y: 50
}

let gameSpeed = 10

let dx = gameSpeed;
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
  snake.pop();
}


setInterval(function onMoveSnake() {
  clearCanvas();
  drawFruit();
  moveSnake();
  drawSnake();
}, 1500);

function keyDown(e) {
  if (e.key === 'a') {
    dy = 0;
    dx = -gameSpeed;
  } else if (e.key === 'd') {
    dy = 0;
    dx = gameSpeed;
  } else if (e.key === 'w') {
    dy = -gameSpeed;
    dx = 0;
  } else if (e.key === 's') {
    dy = gameSpeed;
    dx = 0;
  }
}

window.addEventListener('keydown', keyDown);

//Fruit
function drawFruit() {
  ctx.fillStyle = 'red';
  ctx.fillRect(fruit.x, fruit.y, 10, 10);
}

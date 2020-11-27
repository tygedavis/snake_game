const canvas = document.getElementById('snakeGame');
const ctx = canvas.getContext('2d');

ctx.canvas.height = 800;
ctx.canvas.width = 800;
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, 800, 800);

let snake = [
  {x:200, y: 200},
  {x:190, y: 200},
  {x:180, y: 200}
];

startGame();

function startGame() {
  clearCanvas();
  drawSnake();
};

function clearCanvas() {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, 800, 800);
}

function drawSnakeBody(body) {
  ctx.fillStyle = 'black';
  ctx.fillRect(body.x, body.y, 10, 10);
}

function drawSnake() {
  snake.forEach(drawSnakeBody);
};

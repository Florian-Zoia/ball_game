document.addEventListener('DOMContentLoaded', function () {

  const container = document.getElementById("container");
  console.log(container);
  makeRows(5, 5);

  // Create ball element
  const ball = document.getElementById('div');
  
  // Initial position of the ball
  let positionX = 0;
  let positionY = 0;
  
  // Movement direction of the ball
  let directionX = 1;
  let directionY = 1;
  
  moveBall(positionX, positionY, directionX, directionY); 
  
})


function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  console.log("help i just cried");
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

function moveBall(positionX, positionY, directionX, directionY) {
  console.log(ball);
  // Update ball position
  positionX += directionX;
  positionY += directionY;

  // Check boundaries
  if (positionX <= 0 || positionX >= container.offsetWidth - ball.offsetWidth) {
      directionX *= -1;
  }
  if (positionY <= 0 || positionY >= container.offsetHeight - ball.offsetHeight) {
      directionY *= -1;
  }

  // Update ball's CSS position
  ball.style.top = positionY + 'px';
  ball.style.left = positionX + 'px';

  // Call moveBall function recursively for animation
  requestAnimationFrame(moveBall(positionX, positionY, directionX, directionY));
}

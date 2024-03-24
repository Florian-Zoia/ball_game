function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  // let ball = document.createElement("div");
  // ball.id = "ball"; 
  console.log("help i just cried");
  for (c = 0; c < (rows * cols); c++) {
    // if (c == (Math.floor((Math.random() * 10)))) {
    //   container.appendChild(ball)
    // }
    let cell = document.createElement("div");
    cell.innerText = (c);
    cell.id = c.toString();
    if (c > 14) {
      container.appendChild(cell).className = "grid-item-black";
    } else {
      container.appendChild(cell).className = "grid-item";
    }
  };
};

const rows = 5;
const cols = 5;
const container = document.getElementById("container");
makeRows(rows, cols);

//white tile ball 
const ball_white = document.getElementById("ball-white");
let x_white_speed = Math.random() * 5;
let y_white_speed = Math.random() * 5;
let x_white = Math.floor(container.clientWidth / 2);
let y_white = Math.floor(Math.random() * (container.clientHeight / 3));

//black tile
const ball_black = document.getElementById("ball-black");
let x_black_speed = -x_white_speed;
let y_black_speed = -y_white_speed;
let x_black = Math.floor(container.clientWidth / 2);
let y_black = Math.floor((Math.random() * (container.clientHeight / 3)) + ((container.clientHeight / 3) * 2));

function animate() {
//Position ball and start animation
x_white += x_white_speed;
y_white += y_white_speed;

x_black += x_black_speed;
y_black += y_black_speed;

//Collision Walls 
if (x_white + 20 > container.clientWidth || x_white < 0) {
   x_white_speed = -x_white_speed;
}
if (y_white + 20 > container.clientHeight || y_white < 0) {
   y_white_speed = -y_white_speed;
}

if (x_black + 20 > container.clientWidth || x_black < 0) {
  x_black_speed = -x_black_speed;
}
if (y_black + 20 > container.clientHeight || y_black < 0) {
  y_black_speed = -y_black_speed;
}

//Collision on black blocks and change to white 
for (i = 1 ; i < (rows * cols) ; i++) {
  if ((y_white + 25 > document.getElementById(i).offsetTop && x_white + 25 > document.getElementById(i).offsetLeft && x_white + 25 < (document.getElementById(i).offsetLeft + document.getElementById(i).clientWidth) && y_white + 25 < (document.getElementById(i).offsetTop + document.getElementById(i).clientHeight)) && document.getElementById(i).className == "grid-item-black") {
    if (y_white >= document.getElementById(i).offsetTop || y_white + 25 < (document.getElementById(i).offsetTop + document.getElementById(i).clientHeight)) {
      y_white_speed = -y_white_speed; 
    } else {
      x_white_speed = -x_white_speed; 
      console.log("i am an asshole");
    }
    document.getElementById(i).className = "grid-item";
  }
}

//Collision on black white and change to black 
for (i = 1 ; i < (rows * cols) ; i++) {

  if ((y_black  > document.getElementById(i).offsetTop &&
        x_black  > document.getElementById(i).offsetLeft && 
        x_black  < (document.getElementById(i).offsetLeft + document.getElementById(i).clientWidth) &&
        y_black  < (document.getElementById(i).offsetTop + document.getElementById(i).offsetHeight)) &&
        document.getElementById(i).className == "grid-item") {

    x_black_speed = -x_black_speed; 
    y_black_speed = -y_black_speed; 
    document.getElementById(i).className = "grid-item-black";

  }

}

ball_white.style.left = x_white + "px";
ball_white.style.top = y_white + "px";

ball_black.style.left = x_black + "px";
ball_black.style.top = y_black + "px";
requestAnimationFrame(animate);
};

animate();

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  console.log("help i just cried");
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c);
    cell.id = c.toString();
    container.appendChild(cell).className = "grid-item";
  };
  const log = document.getElementById("24");
  console.log("height " + log.offsetHeight);
  console.log("left " + log.offsetLeft);
  console.log("parent " + log.offsetParent);
  console.log("top " + log.offsetTop);
  console.log("width " + log.offsetWidth);
  console.log(log.clientWidth);
  console.log(log.clientHeight);
  console.log(document.getElementById("12").offsetLeft + document.getElementById("12").offsetWidth)
};


const container = document.getElementById("container");
makeRows(5, 5);
const ball = document.getElementById("ball");
let x = 0;
let y = 0;
let xSpeed = Math.random() * 5;
let ySpeed = Math.random() * 5;

function animate() {
x += xSpeed;
y += ySpeed
//Collision Walls 
if (x + 20 > container.clientWidth || x < 0) {
   xSpeed = -xSpeed;
}
if (y + 20 > container.clientHeight || y < 0) {
   ySpeed = -ySpeed;
}

//Collision for the center block 
if (y + 25 > document.getElementById("12").offsetTop && x + 25 > document.getElementById("12").offsetLeft && x + 25 < (document.getElementById("12").offsetLeft + document.getElementById("12").clientWidth) && y + 25 < (document.getElementById("12").offsetTop + document.getElementById("12").clientHeight)) {
  xSpeed = -xSpeed;
  ySpeed = -ySpeed;
  if (document.getElementById("12").className == "grid-item-black") {
    document.getElementById("12").className = "grid-item";
  } else {
    document.getElementById("12").className = "grid-item-black";
  }
}

if (y + 25 > document.getElementById("12").offsetTop && x + 25 > document.getElementById("12").offsetLeft && x + 25 < (document.getElementById("12").offsetLeft + document.getElementById("12").clientWidth) && y + 25 < (document.getElementById("12").offsetTop + document.getElementById("12").clientHeight)) {
  xSpeed = -xSpeed;
  ySpeed = -ySpeed;
  if (document.getElementById("12").className == "grid-item-black") {
    document.getElementById("12").className = "grid-item";
  } else {
    document.getElementById("12").className = "grid-item-black";
  }
}

ball.style.left = x + "px";
ball.style.top = y + "px";
requestAnimationFrame(animate);
};

animate();

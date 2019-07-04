let canvas = document.getElementById("splash");
let c = canvas.getContext("2d");

//Functions
function screenResize() {
  x = window.innerWidth - 10;
  y = window.innerHeight;
  canvas.width = x;
  canvas.height = y;
  c.fillStyle = "#252934";
  c.fillRect(0, 0, canvas.width, canvas.height);
}

//Listeners

window.addEventListener("resize", screenResize);

// Main program starts here
screenResize();

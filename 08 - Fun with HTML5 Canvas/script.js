const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

// ctx.strokeStyle = "#1abc9c";
ctx.lineJoin = "round";
ctx.lineCap = "round";
// ctx.lineWidth = 5;
// ctx.globalCompositeOperation = "multiply";

function draw(e) {
  if (!isDrawing) return;

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY); // start from
  ctx.lineTo(e.offsetX, e.offsetY); // go to
  ctx.stroke();
  //   lastX = e.offsetX;
  //   lastY = e.offsetY;
  [lastX, lastY] = [e.offsetX, e.offsetY]; // es6 notation, just for flexing 😅
  hue++;
  if (hue >= 360) hue = 0;

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) direction = !direction;
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

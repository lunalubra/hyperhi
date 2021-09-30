const cursor = document.querySelector("div.cursor");
const canvasTag = document.querySelector("canvas.in");

const growCursor = function () {
  cursor.classList.add("is-down");
};

const shrinkCursor = function () {
  cursor.classList.remove("is-down");
};

const moveCursor = function (x, y) {
  cursor.style.top = `${y}px`;
  cursor.style.left = `${x}px`;
};

const setupCanvas = function (canvas) {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const dpi = window.devicePixelRatio;

  canvas.width = w * dpi;
  canvas.height = h * dpi;
  canvas.style.width = `${w}px`;
  canvas.style.height = `${h}px`;

  const context = canvas.getContext("2d");
  context.scale(dpi, dpi);

  context.fillStyle = "red";
};

const startDraw = function (canvas) {
  const context = canvas.getContext("2d");
  context.fillStyle = "yellow";
};

const moveDraw = function (canvas, x, y) {
  const context = canvas.getContext("2d");
  context.lineTo(x, y);
  context.stroke();
};

setupCanvas(canvasTag);

document.addEventListener("mousedown", function (_) {
  growCursor();
  startDraw(canvasTag);
});

document.addEventListener("mouseup", function (_) {
  shrinkCursor();
});

document.addEventListener("mousemove", function (event) {
  moveCursor(event.pageX, event.pageY);
  moveDraw(canvasTag, event.pageX, event.pageY);
});

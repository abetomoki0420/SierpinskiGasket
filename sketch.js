var slider;

function setup() {
  createCanvas(600, 600);

  slider = createSlider(1, 10, 1);
}

function drawTriangle(point1, point2, point3, count) {
  if (count === 0) {
    return;
  }
  let x1 = point1.x;
  let y1 = point1.y;
  let x2 = point2.x;
  let y2 = point2.y;
  let x3 = point3.x;
  let y3 = point3.y;

  //Drawing Triangle
  line((x1 + x2) / 2, (y1 + y2) / 2, (x2 + x3) / 2, (y2 + y3) / 2);
  line((x2 + x3) / 2, (y2 + y3) / 2, (x3 + x1) / 2, (y3 + y1) / 2);
  line((x3 + x1) / 2, (y3 + y1) / 2, (x1 + x2) / 2, (y1 + y2) / 2);

  count--;

  point1 = {
    x: x1,
    y: y1
  };
  point2 = {
    x: (x1 + x2) / 2,
    y: (y1 + y2) / 2
  };
  point3 = {
    x: (x3 + x1) / 2,
    y: (y3 + y1) / 2
  };
  drawTriangle(point1, point2, point3, count);
  point1 = {
    x: (x1 + x2) / 2,
    y: (y1 + y2) / 2
  };
  point2 = {
    x: x2,
    y: y2
  };
  point3 = {
    x: (x2 + x3) / 2,
    y: (y2 + y3) / 2
  };
  drawTriangle(point1, point2, point3, count);
  point1 = {
    x: (x1 + x3) / 2,
    y: (y1 + y3) / 2
  };
  point2 = {
    x: (x2 + x3) / 2,
    y: (y2 + y3) / 2
  };
  point3 = {
    x: x3,
    y: y3
  };
  drawTriangle(point1, point2, point3, count);
}

function draw() {
  background(230, 200, 200);
  translate(width / 2, height / 2 + 20);

  const r = width / 2;
  noFill();

  let x1 = cos(PI / 2) * r;
  let y1 = -1 * sin(PI / 2) * r;

  let x2 = -1 * cos(PI / 6) * r;
  let y2 = sin(PI / 6) * r;

  let x3 = cos(PI / 6) * r;
  let y3 = sin(PI / 6) * r;

  //First Triangle
  line(x1, y1, x2, y2);
  line(x2, y2, x3, y3);
  line(x3, y3, x1, y1);

  let point1 = {
    x: x1,
    y: y1
  };
  let point2 = {
    x: x2,
    y: y2
  };
  let point3 = {
    x: x3,
    y: y3
  };
  drawTriangle(point1, point2, point3, slider.value());
}

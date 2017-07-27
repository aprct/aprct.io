var vertices = [];
var line_posY = 5;

function setup() {
  var d = 240;
  var canvas = createCanvas(d, d);
  canvas.parent("Tilt")
  init();
  noLoop();
}

function mousePressed() {
  init();
  draw();
}

function init() {
  blendMode(BLEND);
  background(255);
  noFill();
  stroke(0, 150);
  strokeWeight(1);
  resetSpline();

  vertices = [];

  for (var i = 0; i <= width; i += random(25, 35)) {
    vertices.push({ x: i, y: 20 });
  }
}

function vmin(viewport_percent) {
  var canvas_size = windowWidth > windowHeight ? windowHeight : windowWidth;
  canvas_size -= canvas_size * ((100 - viewport_percent) / 100);
  return canvas_size;
}

function resetSpline() {
  vertices.forEach(function(vertex) {
    vertex.y += line_posY;
  });
}

function draw() {
  var loop_index = 0;

  while (vertices[0].y <= height - 20) {
    beginShape();
    for (var i = 0; i < vertices.length; i++) {
      var rangeX = i * 0.1 + loop_index * 0.0001;
      var rangeY = i * 0.1 + loop_index * 0.0001;
      var offsetX = map(random([-1, 1]), -1, 1, -rangeX, rangeX);
      var offsetY = map(random([-1, 1]), -1, 1, -rangeY, rangeY);

      vertices[i].x += offsetX;
      vertices[i].y += offsetY;

      curveVertex(vertices[i].x, vertices[i].y);
    }
    endShape();

    loop_index++;
    resetSpline();
  }
}

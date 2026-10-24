const r = require("raylib");

function createCoOrdinates(angle, center, radius) {
  const xCos = Math.cos(angle);
  const ySin = Math.sin(angle);

  const x = center.x + radius * xCos;
  const y = center.y + radius * ySin;
  return { x, y };
}

function getVertices(center, radius, numberOfSides) {
  const points = [];
  const angularSpace = (2 * Math.PI) / numberOfSides;

  for (let i = 0; i < numberOfSides; i++) {
    const angle = angularSpace * i;
    const point = createCoOrdinates(angle, center, radius);
    points.push(point);
  }
  return points;
}

function setup() {
  const screenWidth = 400;
  const screenHeight = 400;
  const title = "Polygon";
  const FPS = 60;

  const center = { x: 200, y: 200 };
  const radius = 150;
  const numberOfSides = 7;
  const points = getVertices(center, radius, numberOfSides);

  r.InitWindow(screenWidth, screenHeight, title);
  r.SetTargetFPS(FPS);

  return {
    center,
    radius,
    numberOfSides,
    points,
  };
}

function drawVertex(points) {
  for (let i = 0; i < points.length - 1; i++) {
    r.DrawLineEx(points[i], points[i + 1], 3, r.LIME);
  }
  r.DrawLineEx(points[points.length - 1], points[0], 3, r.LIME);
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  drawVertex(world.points);

  r.EndDrawing();
}

function loop(world) {
  while (!r.WindowShouldClose()) {
    // no update!
    draw(world);
  }
}

function teardown() {
  r.CloseWindow();
}
function main() {
  const world = setup();
  loop(world);
  teardown();
}

main();

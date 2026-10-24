const r = require("raylib");

function getCoOrdinate(angle, center, radius) {
  const xCos = Math.cos(angle);
  const ySin = Math.sin(angle);

  const x = center.x + radius * xCos;
  const y = center.y + radius * ySin;
  return { x, y };
}

function getPoints(center, radius, numberOfPoints) {
  const points = [];
  const angularSpace = (2 * Math.PI) / numberOfPoints;

  for (let i = 0; i < numberOfPoints; i++) {
    const currentAngle = angularSpace * i;
    const point = getCoOrdinate(currentAngle, center, radius);
    points.push(point);
  }
  return points;
}

function setup() {
  const screenWidth = 400;
  const screenHeight = 400;
  const title = "Circle Points";
  const FPS = 60;

  const center = { x: 200, y: 200 };
  const radius = 150;
  const numberOfPoints = 12;
  const points = getPoints(center, radius, numberOfPoints);

  r.InitWindow(screenWidth, screenHeight, title);
  r.SetTargetFPS(FPS);

  return {
    center,
    radius,
    numberOfPoints,
    points,
  };
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  r.DrawCircleLines(world.center.x, world.center.y, 150, r.RED);
  for (const point of world.points) {
    r.DrawCircleV(point, 3, r.YELLOW);
  }

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

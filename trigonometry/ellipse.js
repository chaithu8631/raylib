const r = require("raylib");

function createCoOrdinates(angle, center, radius) {
  const xCos = Math.cos(angle);
  const ySin = Math.sin(angle);

  const x = center.x + radius.x * xCos;
  const y = center.y + radius.y * ySin;
  return { x, y };
}

function getEllipsePoints(center, radius, steps) {
  const points = [];
  const angularSpace = (2 * Math.PI) / steps;

  for (let i = 0; i < steps; i++) {
    const currentAngle = angularSpace * i;

    const point = createCoOrdinates(currentAngle, center, radius);
    points.push(point);
  }
  return points;
}

function setup() {
  // width: 800
  // height: 600
  const screenWidth = 800;
  const screenHeight = 600;
  const title = "Ellipse without ellipse function";
  const FPS = 60;

  const center = { x: 300, y: 200 };
  const radius = { x: 200, y: 100 };

  const steps = 360;
  const points = getEllipsePoints(center, radius, steps);

  r.InitWindow(screenWidth, screenHeight, title);
  r.SetTargetFPS(FPS);

  return {
    center,
    radius,
    points,
    steps,
  };
}

function drawEllipse(points) {
  for (let i = 0; i < points.length - 1; i++) {
    r.DrawLineEx(points[i], points[i + 1], 3, r.LIME);
  }
  r.DrawLineEx(points[points.length - 1], points[0], 3, r.LIME);
}
function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  r.DrawLine(
    world.center.x - world.radius.x,
    world.center.y,
    world.center.x + world.radius.x,
    world.center.y,
    r.LIGHTGRAY,
  );
  r.DrawLine(
    world.center.x,
    world.center.y - world.radius.y,
    world.center.x,
    world.center.y + world.radius.y,
    r.LIGHTGRAY,
  );

  drawEllipse(world.points);

  r.EndDrawing();
}

function loop(world) {
  while (!r.WindowShouldClose()) {
    // no update!
    draw(world);
  }
}

function main() {
  const world = setup();
  loop(world);
}

main();

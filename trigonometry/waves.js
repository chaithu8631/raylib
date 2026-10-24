const r = require("raylib");

function getCoOrdinate(world, angle, value) {
  const xScale = (world.screen.width - world.origin.x - 200) / (2 * Math.PI);
  const yScale = 150;
  return {
    x: world.origin.x + angle * xScale,
    y: world.origin.y - value * yScale,
  };
}

function drawSine(world, smoothness, maxAngle) {
  let prevPoint = getCoOrdinate(world, 0, Math.sin(0));

  for (let i = 0; i < smoothness; i++) {
    let angle = (i / smoothness) * maxAngle;
    let value = Math.sin(angle);
    let currentPoint = getCoOrdinate(world, angle, value);
    r.DrawLineEx(
      { x: prevPoint.x, y: prevPoint.y },
      { x: currentPoint.x, y: currentPoint.y },
      3.0,
      r.BLUE,
    );

    prevPoint = currentPoint;
  }
}

function setup() {
  const screenWidth = 600;
  const screenHeight = 400;
  const title = "Sin & Cos Waves";
  const FPS = 60;

  const origin = { x: 50, y: 200 };
  const waveLength = 150;
  const smoothness = 360;

  r.InitWindow(screenWidth, screenHeight, title);
  r.SetTargetFPS(FPS);

  return {
    origin,
    waveLength,
    sinePoints,
    cosinePoints,
  };
}


function drawCosine(world, smoothness, maxAngle) {
  let prevPoint = getCoOrdinate(world, 0, Math.sin(0));

  for (let i = 0; i < smoothness; i++) {
    let angle = (i / smoothness) * maxAngle;
    let value = Math.cos(angle);
    let currentPoint = getCoOrdinate(world, angle, value);
    r.DrawLineEx(
      { x: prevPoint.x, y: prevPoint.y },
      { x: currentPoint.x, y: currentPoint.y },
      3.0,
      r.BLUE,
    );

    prevPoint = currentPoint;
  }
}
function drawWaves(world) {
  const smoothness = 360;
  const maxAngle = 2 * Math.PI;

  drawSine(world, smoothness, maxAngle);
  drawCosine(world, smoothness, maxAngle);
}

function drawAxis(origin, screen) {
  r.DrawLine(origin.x, 0, origin.x, screen.height, r.YELLOW);
  r.DrawLine(0, origin.y, screen.width, origin.y, r.YELLOW);
}
function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  drawAxis(world.origin, world.screen);

  drawWaves(world);

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

const r = require("raylib");

function getCoOrdinate(origin, waveLength, waveHeight, angle, value) {
  const xScale = waveLength / (2 * Math.PI);
  const yScale = waveHeight;
  return {
    x: origin.x + angle * xScale,
    y: origin.y + value * yScale,
  };
}

function getTrigonometricPoints(
  origin,
  waveLength,
  waveHeight,
  smoothness,
  trigonometry,
) {
  const points = [];

  for (let i = 0; i < smoothness; i++) {
    let angle = (i / smoothness) * (2 * Math.PI);
    let value = trigonometry(angle);
    let point = getCoOrdinate(origin, waveLength, waveHeight, angle, value);
    points.push(point);
  }
  return points;
}

function setup() {
  const screenWidth = 600;
  const screenHeight = 400;
  const title = "Sin & Cos Waves";
  const FPS = 60;

  const origin = { x: 50, y: 200 };
  const waveLength = 360;
  const waveHeight = 150;
  const smoothness = 360;
  const sinePoints = getTrigonometricPoints(
    origin,
    waveLength,
    waveHeight,
    smoothness,
    Math.sin,
  );
  const cosinePoints = getTrigonometricPoints(
    origin,
    waveLength,
    waveHeight,
    smoothness,
    Math.cos,
  );

  r.InitWindow(screenWidth, screenHeight, title);
  r.SetTargetFPS(FPS);

  return {
    origin,
    sinePoints,
    cosinePoints,
  };
}

function drawAxis(origin, color) {
  r.DrawLine(origin.x, 0, origin.x, r.GetScreenHeight(), color);
  r.DrawLine(0, origin.y, r.GetScreenWidth(), origin.y, color);
}

function drawPoints(points, color) {
  for (let i = 0; i < points.length - 1; i++) {
    r.DrawLineEx(points[i], points[i + 1], 3, color);
  }
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  drawAxis(world.origin, r.LIME);
  drawPoints(world.sinePoints, r.YELLOW);
  drawPoints(world.cosinePoints, r.RED);

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

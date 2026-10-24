const r = require("raylib");

function setup() {
  const screenWidth = 800;
  const screenHeight = 500;

  r.InitWindow(screenWidth, screenHeight, "Random points in Parallelogram");
  r.SetTargetFPS(60);

  const color = { r: 245, g: 245, b: 245, a: 100 };
  const parallelogram = [
    { x: 40, y: 200 }, //Left Bottom
    { x: 80, y: 50 }, //Left Top
    { x: 460, y: 50 }, //Right Top
    { x: 420, y: 200 }, //Right Bottom
  ];
  const points = getRandomPoints(parallelogram);

  return {
    parallelogram,
    points,
    color,
  };
}
function getRandomPoints(parallelogram) {
  const points = [];

  const edgeDistance = distance(parallelogram[1], parallelogram[0]);
  const xDiff = (parallelogram[1].x - parallelogram[0].x) / edgeDistance;
  const yDiff = (parallelogram[1].y - parallelogram[0].y) / edgeDistance;
  const width = parallelogram[2].x - parallelogram[1].x;

  for (let i = 0; i < 100; i++) {
    const slope = Math.random() * edgeDistance;
    const x = parallelogram[1].x - slope * xDiff + Math.random() * width;
    const y = parallelogram[1].y - slope * yDiff;
    points.push({ x, y });
  }
  return points;
}

function distance(point1, point2) {
  return (point2.x - point1.x) ** 2 + ((point2.y - point1.y) ** 2) ** 0.5;
}
// function update(world) {}

function drawParallelogram(world) {
  r.DrawLineEx(world.parallelogram[0], world.parallelogram[1], 3, r.GREEN);
  r.DrawLineEx(world.parallelogram[0], world.parallelogram[3], 3, r.YELLOW);
  r.DrawLineEx(world.parallelogram[2], world.parallelogram[1], 3, r.RED);
  r.DrawLineEx(world.parallelogram[2], world.parallelogram[3], 3, r.BLUE);
}
function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  drawParallelogram(world);

  for (const point of world.points) {
    r.DrawCircleV(point, 10, world.color);
  }
  r.EndDrawing();
}

function loop(world) {
  while (!r.WindowShouldClose()) {
    draw(world);
    // update(world);
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

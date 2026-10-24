const r = require("raylib");

function setup() {
  const screenWidth = 800;
  const screenHeight = 800;
  r.InitWindow(screenWidth, screenHeight, "The Chaos Game");
  r.SetTargetFPS(100);

  const vertices = [
    { x: screenWidth / 2, y: 50 },
    { x: 50, y: screenHeight - 50 },
    { x: screenWidth - 50, y: screenHeight - 50 },
  ];

  let currentPoint = {
    x: Math.random() * screenWidth,
    y: Math.random() * screenHeight,
  };
  const color = r.LIME;
  const points = getRandomPoints(currentPoint,vertices);

  return {
    vertices,
    points,
    color,
  };
}
function getRandomPoints(currentPoint,vertices) {
const points = [];
  for (let i = 0; i < 2000; i++) {
    const targetCorner = vertices[Math.floor(Math.random() * 3)];

    currentPoint.x = (currentPoint.x + targetCorner.x) / 2;
    currentPoint.y = (currentPoint.y + targetCorner.y) / 2;

    points.push({ x:currentPoint.x, y:currentPoint.y });
  }
  return points;
}

// function update(world) {}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  r.DrawTriangleLines(world.vertices[0],world.vertices[1],world.vertices[2],r.YELLOW)
  for (const point of world.points) {
    r.DrawCircleV(point, 2, world.color);
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
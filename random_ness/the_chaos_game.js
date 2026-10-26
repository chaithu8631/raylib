const r = require("raylib");

function getmiddlePoint(point, targetCorner) {
  return {
    x: (point.x + targetCorner.x) / 2,
    y: (point.y + targetCorner.y) / 2,
  };
}

function getRandomPoints(vertices, numberOfPoints) {
  let point = vertices[1];
  const points = [];
  for (let currentPoint = 0; currentPoint < numberOfPoints; currentPoint++) {
    const targetCorner = vertices[Math.floor(Math.random() * vertices.length)];
    point = getmiddlePoint(point, targetCorner);
    points.push(point);
  }
  console.log(points);

  return points;
}

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
  const numberOfPoints = 5000;
  const points = getRandomPoints(vertices, numberOfPoints);

  return {
    vertices,
    points,
  };
}

// function update(world) {}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  r.DrawTriangleLines(
    world.vertices[0],
    world.vertices[1],
    world.vertices[2],
    r.YELLOW,
  );
  for (const point of world.points) {
    r.DrawCircleV(point, 1, r.LIME);
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

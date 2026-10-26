const r = require("raylib");

function getAngle(B, A) {
  const dx = B.x - A.x;
  const dy = -(B.y - A.y);

  const angleRadians = Math.atan2(dy, dx);

  let angleDegrees = angleRadians * (180 / Math.PI);

  // const x = center.x + radius * xCos;
  const angle = (B.x-A.x)/dx;
  console.log(dx);
  
  console.log(Math.acosh(dx)* (180 / Math.PI));
  console.log(Math.asinh(dy)* (180 / Math.PI));
  
  

  if (angleDegrees < 0) {
    angleDegrees += 360;
  }
  return angleDegrees;
}

function setup() {
  const screenWidth = 500;
  const screenHeight = 450;
  const title = "Geometry - Angle and Components";
  const FPS = 60;

  const A = { x: 100, y: 300 };
  const B = { x: 350, y: 150 };

  let angleDegrees = getAngle(B, A);

  const angleText = `Angle with horizontal: ${angleDegrees.toFixed(2)} deg`;

  r.InitWindow(screenWidth, screenHeight, title);
  r.SetTargetFPS(FPS);

  return {
    A,
    B,
    angleText,
  };
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  r.DrawLine(world.A.x, world.A.y, world.B.x, world.A.y, r.GRAY);
  r.DrawLine(world.B.x, world.A.y, world.B.x, world.B.y, r.GRAY);
  r.DrawLineEx({ x: world.A.x, y: world.A.y }, { x: world.B.x, y: world.B.y }, 3.0, r.RED);
  r.DrawCircle(world.A.x, world.A.y, 6, r.BLUE);
  r.DrawCircle(world.B.x, world.B.y, 6, r.BLUE);
  r.DrawText(world.angleText, 20, 75, 20, r.MAROON);

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

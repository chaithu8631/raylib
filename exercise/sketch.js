const r = require("raylib");

const screenWidth = 800;
const screenHeight = 800;
const FPS = 60;

let rectWidth = 200;
let rectHeight = 200;

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  r.InitWindow(screenWidth, screenHeight, "Rectangle");
  r.SetTargetFPS(FPS);
}

function update() {
  rectWidth++;
  rectHeight--;
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  r.DrawRectangle(5, 200, rectWidth, rectHeight, r.WHITE);

  r.EndDrawing();
}

function teardown() {
  r.CloseWindow();
}

module.exports = {
  running,
  setup,
  update,
  draw,
  teardown,
};
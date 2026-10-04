const r = require("raylib");
const g = require("./geometry");

const window = {
    screenWidth: 600,
    screenHeight: 400,
    title: "particles detector",
    FPS: 60,
};
window.halfScreen = window.screenWidth / 2;

const detector1 = g.createDetector(0, 80, 2, 0, window.halfScreen, false);
const detector2 = g.createDetector(window.halfScreen, 20, 2, window.halfScreen, window.screenWidth, false);
const detector3 = g.createDetector(0, 20, 1, 0, window.screenHeight, false);

const particle1 = g.createParticle(140, 1);
const particle2 = g.createParticle(440, 20);
const particle3 = g.createParticle(190, 20);

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(window.screenWidth, window.screenHeight, window.title);
    r.SetTargetFPS(window.FPS);
}

function running() {
    return !r.WindowShouldClose();
}

function update() {
    g.updateHorizontalDetector(detector1,particle1,particle2);
    g.updateHorizontalDetector(detector2,particle1,particle2);
    g.updateVerticalDetector(detector3,particle3);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    g.drawHorizontally(particle1.position, particle1.width, r.BLUE);
    g.drawHorizontally(particle2.position, particle2.width, r.BLUE);
    g.drawVertically(particle3.position, particle3.width, r.BLUE);

    g.drawHorizontally(detector1.position, detector1.width, g.selectColor(detector1.hasDetected));
    g.drawHorizontally(detector2.position, detector2.width, g.selectColor(detector2.hasDetected));
    g.drawVertically(detector3.position, detector3.width, g.selectColor(detector3.hasDetected));
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

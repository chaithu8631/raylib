const r = require("raylib");
const g = require("./geometry");
const c = require("./color");


function setup(global) {

    global.window = {
              screenWidth: 600,
              screenHeight: 400,
              title: "particles detector",
              FPS: 60,
          };
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(global.window.screenWidth, global.window.screenHeight, global.window.title);
    r.SetTargetFPS(global.window.FPS);

    global.window.halfScreen = global.window.screenWidth / 2;

    global.detector1 = g.createDetector(0, 80, 2, 0, global.window.halfScreen, false);
    global.detector2 = g.createDetector(global.window.halfScreen, 20, 2, global.window.halfScreen, global.window.screenWidth, false);
    global.detector3 = g.createDetector(0, 20, 1, 0, global.window.screenHeight, false);
    
    global.particle1 = g.createParticle(140, 1);
    global.particle2 = g.createParticle(440, 20);
    global.particle3 = g.createParticle(190, 20);

    return global;
}

function running() {
    return !r.WindowShouldClose();
}

function update(global) {
    g.updateHorizontalDetector(global.detector1,global.particle1,global.particle2);
    g.updateHorizontalDetector(global.detector2,global.particle1,global.particle2);
    g.updateVerticalDetector(global.detector3,global.particle3);
    return global;
}

function draw(global) {
    r.BeginDrawing();
    r.ClearBackground(c.bgColor);
    
    g.drawHorizontally(global.particle1.position, global.particle1.width, c.particleColor);
    g.drawHorizontally(global.particle2.position, global.particle2.width, c.particleColor);
    g.drawVertically(global.particle3.position, global.particle3.width, c.particleColor);

    g.drawHorizontally(global.detector1.position, global.detector1.width, g.selectColor(global.detector1.hasDetected));
    g.drawHorizontally(global.detector2.position, global.detector2.width, g.selectColor(global.detector2.hasDetected));
    g.drawVertically(global.detector3.position, global.detector3.width, g.selectColor(global.detector3.hasDetected));
    r.EndDrawing();
    return global;
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

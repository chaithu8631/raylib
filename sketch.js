const r = require("raylib");
const g = require("./geometry");


function setup() {

    window = {
              screenWidth: 600,
              screenHeight: 400,
              title: "particles detector",
              FPS: 60,
          };
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(window.screenWidth, window.screenHeight, window.title);
    r.SetTargetFPS(window.FPS);

    window.halfScreen = window.screenWidth / 2;

    const detector1 = g.createDetector(0, 80, 2, 0, window.halfScreen, false);
    const detector2 = g.createDetector(window.halfScreen, 20, 2, window.halfScreen, window.screenWidth, false);
    const detector3 = g.createDetector(0, 20, 1, 0, window.screenHeight, false);
    
    const particle1 = g.createParticle(140, 1);
    const particle2 = g.createParticle(440, 20);
    const particle3 = g.createParticle(190, 20);

    return {
        window,
        detector1,
        detector2,
        detector3,
        particle1,
        particle2,
        particle3,
    };
}

function running() {
    return !r.WindowShouldClose();
}

function update(global) {
    g.updateHorizontalDetector(global.detector1,global.particle1,global.particle2);
    g.updateHorizontalDetector(global.detector2,global.particle1,global.particle2);
    g.updateVerticalDetector(global.detector3,global.particle3);
}

function draw(global) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    
    g.drawHorizontally(global.particle1.position, global.particle1.width, r.BLUE);
    g.drawHorizontally(global.particle2.position, global.particle2.width, r.BLUE);
    g.drawVertically(global.particle3.position, global.particle3.width, r.BLUE);

    g.drawHorizontally(global.detector1.position, global.detector1.width, g.selectColor(global.detector1.hasDetected));
    g.drawHorizontally(global.detector2.position, global.detector2.width, g.selectColor(global.detector2.hasDetected));
    g.drawVertically(global.detector3.position, global.detector3.width, g.selectColor(global.detector3.hasDetected));
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

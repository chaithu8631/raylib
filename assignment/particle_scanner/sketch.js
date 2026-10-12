const r = require("raylib");
const g = require("./geometry");
const c = require("./color");
const du = require("./draw_update");


function setup() {

    const screenWidth= 600;
    const screenHeight= 400;
    const title= "particles detector";
    const FPS= 60;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screenWidth, screenHeight, title);
    r.SetTargetFPS(FPS);

    const halfScreen = screenWidth / 2;

    const detector1 = g.createDetector(0, 80, 2, 0, halfScreen, false);
    const detector2 = g.createDetector(halfScreen, 20, 2, halfScreen, screenWidth, false);
    const detector3 = g.createDetector(0, 20, 1, 0, screenHeight, false);
    
    const particle1 = g.createParticle(140, 1);
    const particle2 = g.createParticle(440, 20);
    const particle3 = g.createParticle(190, 20);

    return {
        screenWidth,
        screenHeight,
        halfScreen,
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

function update(world) {
    du.updateHorizontalDetector(world.detector1,world.particle1,world.particle2);
    du.updateHorizontalDetector(world.detector2,world.particle1,world.particle2);
    du.updateVerticalDetector(world.detector3,world.particle3);
    return world;
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(c.bgColor);
    
    du.drawHorizontally(world.particle1.position, world.particle1.width, c.particleColor);
    du.drawHorizontally(world.particle2.position, world.particle2.width, c.particleColor);
    du.drawVertically(world.particle3.position, world.particle3.width, c.particleColor);

    du.drawHorizontally(world.detector1.position, world.detector1.width, c.selectColor(world.detector1.hasDetected));
    du.drawHorizontally(world.detector2.position, world.detector2.width, c.selectColor(world.detector2.hasDetected));
    du.drawVertically(world.detector3.position, world.detector3.width, c.selectColor(world.detector3.hasDetected));
    r.EndDrawing();
    return world;
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

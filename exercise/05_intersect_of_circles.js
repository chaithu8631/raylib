const r = require("raylib");
const g = require("./geometry");

function setUp() {
    const window = {
        width: 1000,
        height: 800,
    };

    const circleOne = {
        x: 300,
        y: 300,
        radius: 150,
    };
    const circleTwo = {
        x: 600,
        y: 600,
        radius: 150,
    };
    const distance = g.distanceCalculate(circleOne, circleTwo);
    const idealDistance = circleOne.radius + circleTwo.radius;

    const color = distance < idealDistance ? r.RED : r.BLACK;

    r.InitWindow(window.width, window.height, "Intertsecting of circles");
    r.SetTargetFPS(60);

    return {
        window,
        circleOne,
        circleTwo,
        color,
    };
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    r.DrawCircleV(world.circleOne, world.circleOne.radius, world.color);
    r.DrawCircleV(world.circleTwo, world.circleTwo.radius, world.color);

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        //update();
        draw(world);
    }
}

function main() {
    const world = setUp();
    loop(world);
    r.CloseWindow();
}

main();

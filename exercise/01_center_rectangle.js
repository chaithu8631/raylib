const r = require("raylib");
const g = require("./geometry");

function setUp() {
    const window = {
        width: 800,
        height: 400,
    };
    const rectangle = {
        width: 400,
        height: 200,
    };
    r.InitWindow(window.width, window.height, "Vectors");
    r.SetTargetFPS(60);
    return {
        window,
        rectangle,
    };
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    const start = 0;
    const x = g.computeCoOrdinate(start, world.window.width, world.rectangle.width);
    const y = g.computeCoOrdinate(start, world.window.height, world.rectangle.height);

    r.DrawRectangle(x, y, world.rectangle.width, world.rectangle.height, r.WHITE);

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        draw(world);
        //update();
    }
}

function main() {
    const world = setUp();
    loop(world);
    r.CloseWindow();
}

main();

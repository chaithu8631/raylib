const r = require("raylib");
const g = require("./geometry");

function setUp() {
    const window = {
        width: 800,
        height: 400,
    };
    const outerRectangle = {
        x: 200,
        y: 100,
        width: 400,
        height: 200,
    };
    const innerRectangle = {
        width: 100,
        height: 50,
    };

    r.InitWindow(window.width, window.height, "Rectangle inside rectangle");
    r.SetTargetFPS(60);

    
    innerRectangle.x = g.computeCoOrdinate(
        outerRectangle.x,
        outerRectangle.width,
        innerRectangle.width,
    );
    innerRectangle.y = g.computeCoOrdinate(
        outerRectangle.y,
        outerRectangle.height,
        innerRectangle.height,
    );
    return {
        window,
        outerRectangle,
        innerRectangle,
    };
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    r.DrawRectangleRec(world.outerRectangle, r.WHITE);
    r.DrawRectangleRec(world.innerRectangle, r.BLUE);

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

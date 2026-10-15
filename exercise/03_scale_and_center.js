const r = require("raylib");
const g = require("./geometry");

function setUp() {
    const window = {
        width: 1600,
        height: 1200,
    };
    const outerRectangle = {
        x: 150,
        y: 50,
        width: 1000,
        height: 500,
    };
    const ratio = {
        width: 0.5,
        height: 0.5,
    };
    const innerRectangle={};
    innerRectangle.x = g.computeCoOrdinateR(outerRectangle.x, outerRectangle.width, ratio.width);
    innerRectangle.y = g.computeCoOrdinateR(outerRectangle.y, outerRectangle.height, ratio.height);
    innerRectangle.width = g.computeSize(outerRectangle.width, ratio.width);
    innerRectangle.height = g.computeSize(outerRectangle.height, ratio.height);

    r.InitWindow(window.width, window.height, "scale and center");
    r.SetTargetFPS(60);
    return {
        window,
        outerRectangle,
        innerRectangle,
        ratio,
    };
}





function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    r.DrawRectangleRec(world.outerRectangle, r.WHITE);
    r.DrawRectangleRec(world.innerRectangle, r.RED);

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

const r = require("raylib");
const g = require("./geometry");

function setUp() {
    const window = {
        width: 1000,
        height: 1000,
    };
    const source = {
        x: 100,
        y: 400,
        radius: 50,
    };
    const circleOne = {
        x: 400,
        y: 200,
        radius: 50,
    };
    const circleTwo = {
        x: 400,
        y: 600,
        radius: 50,
    };
    const distance1 = g.distanceCalculate(source, circleOne);
    const distance2 = g.distanceCalculate(source, circleTwo);
    
    r.InitWindow(window.width, window.height, "Closer target");
    r.SetTargetFPS(60);

    return {
        window,
        source,
        circleOne,
        circleTwo,
        distance1,
        distance2,
    };
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

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawCircleV(world.source, world.source.radius, r.BLUE);
    r.DrawCircleV(world.circleOne, world.circleOne.radius, r.GREEN);
    r.DrawCircleV(world.circleTwo, world.circleTwo.radius, r.RED);

    if (world.distance1 === world.distance2) {
        r.DrawLineV(world.source, world.circleOne, r.YELLOW);
        r.DrawLineV(world.source, world.circleTwo, r.YELLOW);
    } else {
        const target =
            world.distance1 < world.distance2
                ? world.circleOne
                : world.circleTwo;
        r.DrawLineV(world.source, target, r.ORANGE);
    }

    r.EndDrawing();
}

main();
//\(d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\)

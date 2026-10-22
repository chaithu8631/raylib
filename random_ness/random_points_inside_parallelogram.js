const r = require("raylib");

function setup() {
    const width = 800;
    const height = 500;

    r.InitWindow(width, height, "Random points in Parallelogram");
    r.SetTargetFPS(60);

    const parallelogram = {
        point1: { x: 200, y: 300 },
        point2: { x: 300, y: 100 },
        point3: { x: 500, y: 300 },
        point4: { x: 600, y: 100 },
    };
    return {
        parallelogram,
    };
}
// function update(world) {}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawLineV(world.parallelogram.point1,world.parallelogram.point2,r.YELLOW);
    r.DrawLineV(world.parallelogram.point1,world.parallelogram.point3,r.YELLOW);
    r.DrawLineV(world.parallelogram.point4,world.parallelogram.point2,r.YELLOW);
    r.DrawLineV(world.parallelogram.point4,world.parallelogram.point3,r.YELLOW);
    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        draw(world);
        // update(world);
    }
}
function teardown() {
    r.CloseWindow();
}
function main() {
    const world = setup();
    loop(world);
    teardown();
}

main();

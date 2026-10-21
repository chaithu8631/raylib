const r = require("raylib");

function setup() {
    const width = 500;
    const height = 500;

    r.InitWindow(width, height, "Random rectangles");
    r.SetTargetFPS(60);

    const color = { r: 245, g: 245, b: 245, a: 100 };
    const rectangle = {
        x: 50,
        y: 50,
        width: 350,
        height: 350,
    };
    const points = [];
    for (let i = 0; i < 100; i++) {
        const x = rectangle.x + Math.random() * rectangle.width;
        const y = rectangle.y + Math.random() * rectangle.height;
        points.push({ x, y });
    }
    return {
        rectangle,
        points,
        color,
    };
}
// function update(world) {}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.SKYBLUE);
    r.DrawRectangleRec(world.rectangle,r.DARKBLUE);
    for (const point of world.points) {
        r.DrawCircleV(point, 10, world.color);
    }
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

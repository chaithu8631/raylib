const r = require("raylib");
const c = require("./palette");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const width = 500;
    const height = 500;

    r.InitWindow(width, height, "Random lines between two points");
    r.SetTargetFPS(60);

    const lines = [];
    for (let i = 0; i < 100; i++) {
        const x = 250 + Math.random() * 250;
        lines.push(x);
    }
    const color = { r: 245, g: 245, b: 245, a: 100 };

    return {
        lines,
        color,
    };
}
// function update(world) {}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    for (line of world.lines) {
        const index = Math.floor(Math.random() * (c.palette.length - 1));
        r.DrawLine(line, 0, line, 500, world.color);
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

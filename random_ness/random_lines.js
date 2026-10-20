const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const width = 500;
    const height = 500;

    r.InitWindow(width, height, "Random lines");
    r.SetTargetFPS(100);

    const lines = [];

    return {
        lines,
    };
}
function update(world) {
    if (world.lines.length < 800) world.lines.push(Math.random() * 500);
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    for (const line of world.lines) {
        const red = Math.random() * 255;
        const green = Math.random() * 255;
        const blue = Math.random() * 255;
        const alpha = Math.random() * 255;
        const color = { r: red, g: green, b: blue, a: alpha };
        r.DrawLine(line, 0, line, 500, color);
    }
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

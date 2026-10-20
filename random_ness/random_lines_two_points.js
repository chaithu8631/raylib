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

    const lines = [250];

    return {
        lines,
    };
}
function update(world) {
    if (world.lines.length < 500) world.lines.push(250+Math.random() * 250);
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    for (line of world.lines) {
        const index = Math.floor(Math.random()*(c.palette.length-1));
        const color = c.palette[index];
        
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

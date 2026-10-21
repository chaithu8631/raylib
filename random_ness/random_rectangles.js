const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const width = 500;
    const height = 500;

    r.InitWindow(width, height, "Random rectangles");
    r.SetTargetFPS(60);

    const lines = [];
    for(let i=0;i<100;i++){
    // if (lines.length < 800) 
    const red = Math.random() * 255;
    const green = Math.random() * 255;
    const blue = Math.random() * 255;
    const alpha = Math.random() * 255;
    const color = { r: red, g: green, b: blue, a: alpha };

    lines.push([Math.random() * 500,color]);
    }

    return {
        lines,
    };
}
function update(world) {
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    for (const [line,color] of world.lines) {
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

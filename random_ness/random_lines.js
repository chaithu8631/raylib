const r = require("raylib");

function setup() {
    const width = 500;
    const height = 500;

    r.InitWindow(width, height, "Random lines");
    r.SetTargetFPS(100);

    const lines = [];
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * 500;
        lines.push(x);
    }

    return {
        lines,
    };
}
// function update() {}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    for (const line of world.lines) {
        r.DrawLine(line, 0, line, 500, r.BLUE);
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


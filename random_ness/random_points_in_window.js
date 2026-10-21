const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const width = 500;
    const height = 500;

    r.InitWindow(width, height, "Random rectangles");
    r.SetTargetFPS(60);

    const color = {r:245,g:245,b:245,a:100};
    const points = [];
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * 500;
        const y = Math.random() * 500;
        points.push({x,y});
    }

    return {
        points,
        color
    };
}
function update(world) {}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    for (const point of world.points) {
        r.DrawCircleV(point,10,world.color);
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

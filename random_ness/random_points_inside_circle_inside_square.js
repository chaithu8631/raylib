const r = require("raylib");

function setup() {
    const width = 500;
    const height = 500;

    r.InitWindow(width, height, "Random points in circle inside square");
    r.SetTargetFPS(60);

    const color = { r: 245, g: 245, b: 245, a: 100 };
    const circle = {
        x: 250,
        y: 250,
        radius: 100,
    };
    const square = {
        x: 150,
        y: 150,
        side: 200,
    }
    const randomPoints = randomPointsInSquare(square);
    
    return {
        circle,
        square,
        randomPoints,
        color,
    };
}
function randomPointsInSquare(square) {
    const points = [];
    for (let i = 0; i < 50; i++) {
        const x = square.x + (square.side * Math.random());
        const y = square.y + (square.side * Math.random());
        points.push({ x, y });
    }
    return points;
}

// function update(world) {}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.SKYBLUE);
    r.DrawRectangle(world.square.x, world.square.y, world.square.side, world.square.side, r.DARKBLUE);
    r.DrawCircleV(world.circle, world.circle.radius, r.BLUE);

    for (const point of world.randomPoints) {
        r.DrawCircleV(point, 5, world.color);
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

const r = require("raylib");

function setup() {
    const width = 500;
    const height = 500;

    r.InitWindow(width, height, "Random rectangles");
    r.SetTargetFPS(60);

    const color = { r: 245, g: 245, b: 245, a: 100 };
    const circle = {
        x: 250,
        y: 250,
        radius: 100,
    };
    const randomPoints = randomPointsInCircle(circle);
    
    return {
        circle,
        randomPoints,
        color,
    };
}
function randomPointsInCircle(circle) {
    const points = [];
    for (let i = 0; i < 50; i++) {
        // • (x = h + r * cos(theta))
        // • (y = k + r * sin(theta))
        const radius = Math.random() * circle.radius;
        const angle = Math.random() * (2 * Math.PI);

        const x = circle.x + radius * Math.sin(angle);
        const y = circle.y + radius * Math.cos(angle);
        points.push({ x, y });
    }
    return points;
}

// function update(world) {}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.SKYBLUE);
    r.DrawCircleV(world.circle, world.circle.radius, r.DARKBLUE);
    for (const point of world.randomPoints) {
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

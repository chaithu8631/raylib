const r = require("raylib");

function setup() {
    const screenWidth = 400;
    const screenHeight = 400;
    const title = "Averages";
    const FPS = 60;

    const data = [12, 45, 78, 23, 91, 56, 34, 67, 89, 40];
    const width = 30;
    const radius = 5;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screenWidth, screenHeight, title);
    r.SetTargetFPS(FPS);

    return {
        screenWidth,
        screenHeight,
        data,
        width,
        radius,
    };
}
function scaleHeight(height, factor) {
    return factor * (height / 100);
}
function isPeak(data, current) {
    return (
        data[current] > data[current - 1] && data[current] > data[current + 1]
    );
}
function findLargest(data) {
    let largest = 0;
    for (const value of data) {
        if (largest < value) largest = value;
    }
    return largest;
}
function createPoint(world, currentPoint, unitValue) {
    const x = currentPoint * world.width;
    const y = world.screenHeight - world.data[currentPoint] * unitValue;

    return { x, y };
}
function drawLines(world, unitValue) {
    for (let i = 1; i < world.data.length; i++) {
        const previousPoint = createPoint(world, i - 1, unitValue);
        const currentPoint = createPoint(world, i, unitValue);
        r.DrawLineV(previousPoint, currentPoint, r.DARKBLUE);
    }
}
function drawPeaks(world, unitValue) {
    for (let i = 1; i < world.data.length - 1; i++) {
        if (isPeak(world.data, i)) {
            const currentPoint = createPoint(world, i, unitValue);
            r.DrawCircleV(currentPoint, world.radius, r.RED);
        }
    }
}
function draw(world) {
    const maxHeight = scaleHeight(world.screenHeight, 90);
    const unitValue = maxHeight / findLargest(world.data);

    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    drawLines(world, unitValue);
    drawPeaks(world, unitValue);

    r.EndDrawing();
}
function loop(world) {
    while (!r.WindowShouldClose()) {
        draw(world);
        // no update!
    }
}
function main() {
    const world = setup();
    loop(world);
}
main();
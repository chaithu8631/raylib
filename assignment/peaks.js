const r = require("raylib");

function setup() {
    const screenWidth = 400;
    const screenHeight = 400;
    const title = "Averages";
    const FPS = 60;

    const data = [12, 45, 78, 23, 91, 56, 34, 67, 89, 40];
    const gap = 30;
    const radius = 5;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screenWidth, screenHeight, title);
    r.SetTargetFPS(FPS);

    return {
        screenWidth,
        screenHeight,
        data,
        gap,
        radius,
    };
}

function findLargest(data) {
    let largest = 0;
    for (const value of data) {
        if (largest < value) largest = value;
    }
    return largest;
}

function drawLines(world, unitValue) {

    for (let i = 1; i < world.data.length; i++) {
        const previousPoint = createPoint(world, i-1, unitValue);
        const currentPoint = createPoint(world, i, unitValue);
        r.DrawLineV(previousPoint, currentPoint, r.DARKBLUE);
    }
}

function createPoint(world, currentPoint, unitValue) {
    const x = currentPoint * world.gap;
    const y = world.screenHeight - world.data[currentPoint] * unitValue;

    return { x, y };
}

function drawPeaks(world, unitValue) {

    for (let i = 0; i < world.data.length - 1; i++) {

        if (isPeak(world, i, unitValue)) {
            const currentPoint = createPoint(world, i, unitValue);
            r.DrawCircleV(currentPoint, world.radius, r.RED);
        }
    }
}

function isPeak(world, i, unitValue) {
    const previousPoint = createPoint(world, i-1, unitValue);
    const currentPoint = createPoint(world, i, unitValue);
    const nextPoint = createPoint(world, i + 1, unitValue);
    return currentPoint.y < previousPoint.y && currentPoint.y < nextPoint.y;
}

function draw(world) {
    const maxHeight = 90 * (world.screenHeight / 100);
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

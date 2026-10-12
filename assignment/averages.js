const r = require("raylib");

function setup() {
    const screenWidth = 400;
    const screenHeight = 400;
    const title = "Averages";
    const FPS = 60;

    const data = [12, 45, 78, 23, 91, 56, 34, 67, 89, 40];
    const barWidth = 35;
    const barGap = 5;

    r.InitWindow(screenWidth, screenHeight, title);
    r.SetTargetFPS(FPS);
    
    return {
        screenWidth,
        screenHeight,
        data,
        barWidth,
        barGap,
    };
}

function sum(data) {
    let sum = 0;
    for (const value of data) {
        sum += value;
    }
    return sum;
}

function findLargest(data) {
    let largest = 0;
    for (const value of data) {
        if (largest < value) largest = value;
    }
    return largest;
}

function findAverage(data) {
    const average = sum(data) / data.length;
    return average;
}

function drawAverage(world, unitValue) {
    const average = findAverage(world.data);
    const y = world.screenHeight - average * unitValue;
    r.DrawLine(0, y, world.screenWidth, y, r.RED);
}

function drawBars(world, unitValue) {
    for (let i = 0; i < world.data.length; i++) {
        const bar = createBar(world, i, unitValue);
        r.DrawRectangleRec(bar, r.DARKBLUE);
    }
}

function createBar(world, currentBar, unitValue) {
    const width = world.barWidth;
    const height = world.data[currentBar] * unitValue;

    const x = (world.barWidth + world.barGap) * currentBar;
    const y = world.screenHeight - height;

    return { x, y, width, height };
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    const maxHeight = 90 * (world.screenHeight / 100);
    const unitValue = maxHeight / findLargest(world.data);

    drawBars(world, unitValue);
    drawAverage(world, unitValue);

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

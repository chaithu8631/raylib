const r = require("raylib");

function setup() {
    const screenWidth = 400;
    const screenHeight = 400;
    const title = "Averages";
    const FPS = 60;

    const data = [50, 50, 0, 50, 50, 50, 5, 50, 50, 0, 0];
    const barWidth = 20;
    const barGap = 2;

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

function findLargest(data) {
    let largest = 0;
    for (bar of data) {
        if (largest < bar) largest = bar;
    }
    return largest;
}

function findAverage(data) {
    let sum = 0;
    for (bar of data) {
        sum += bar;
    }
    const average = sum / data.length;
    // console.log(average);

    return average;
}

function drawBars(world, unitValue) {
    for (let i = 0; i < world.data.length; i++) {
        const bar = createBar(world, i, unitValue);

        r.DrawRectangleRec(bar, r.DARKBLUE);
    }
}

function drawAverage(world, unitValue) {
    const average = findAverage(world.data);
    const y = world.screenHeight - average * unitValue;
    // console.log(y);

    r.DrawLine(0, y, world.screenWidth, y, r.RED);
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
    // console.log(maxHeight);

    const unitValue = maxHeight / findLargest(world.data);
    // console.log(unitValue);

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

const r = require("raylib");

function setup() {
    // width: 600
    // height: 400
    // Put the origin of your graph at approximately:
    const screenWidth = 600;
    const screenHeight = 400;
    const title = "Circle Points";
    const FPS = 60;

    // origin: (50, 200)
    // radius: 150
    // number of sides: 7

    const origin = { x: 50, y: 200 };
    const radius = 150;
    
    r.InitWindow(screenWidth, screenHeight, title);
    r.SetTargetFPS(FPS);

    return {
        screenWidth,
        screenHeight,
        center,
        radius,
        numberOfSides,
    };
}

function drawVertex(world) {
    const angularSpace = (2 * Math.PI) / world.numberOfSides;

    for (let i = 0; i < world.numberOfSides; i++) {
        const previousAngle = angularSpace * (i - 1);
        const currentAngle = angularSpace * i;

        const currentStart = createCoOrdinates(
            previousAngle,
            world.center,
            world.radius,
        );

        const currentEnd = createCoOrdinates(
            currentAngle,
            world.center,
            world.radius,
        );

        r.DrawLineV(currentStart, currentEnd, r.BLACK);
    }
}
function createCoOrdinates(angle, center, radius) {
    const xCos = Math.cos(angle);
    const ySin = Math.sin(angle);

    const x = center.x + radius * xCos;
    const y = center.y + radius * ySin;
    return { x, y };
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    drawVertex(world);

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        // no update!
        draw(world);
    }
}

function main() {
    const world = setup();
    loop(world);
}

main();

// Draw a graph showing one complete cycle of both the sine and cosine functions.

// Use a window of:

// width: 600
// height: 400
// Put the origin of your graph at approximately:

// Copy
// (50, 200)
// Use the horizontal direction for the angle and the vertical direction for the function value.

// Your graph should show:

// the sine curve
// the cosine curve
// the horizontal axis
// the vertical axis
// You should draw the curves yourself by calculating a sequence of points.

// Requirements#
// For each curve:

// Start at an angle of 0.
// Increase the angle in small steps.
// Calculate the function value at each angle.
// Convert that value into a screen coordinate.
// Connect consecutive points with lines.
// Draw enough points that the curves appear smooth.

// You should show exactly one complete revolution along the horizontal axis.

// Scale the vertical values so that:

// 1 is visibly above the horizontal axis.
// -1 is visibly below the horizontal axis.
// 0 lies on the horizontal axis.
// Mark these points#
// Somewhere on the graph, clearly mark the important values:

// where the sine curve is 0
// where the sine curve reaches 1
// where the sine curve reaches -1
// where the cosine curve reaches 1
// where the cosine curve reaches -1
// You do not need to make a sophisticated graphing system. The goal is to make the relationship visible.

// Think about the primer#
// You have already seen a point moving around a circle and its vertical projection creating a wave.

// This is that idea again.

// Ask yourself:

// Why does a point moving at a constant angular speed produce a wave when we look at one of its coordinates?

// And:

// Why are the sine and cosine curves the same shape, but shifted relative to one another?

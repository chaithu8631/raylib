const r = require("raylib");

function setup() {
    // width: 600
    // height: 400
    // Put the origin of your graph at approximately:
    const screen = {
        width: 600,
        height: 400,
    };
    const title = "Circle Points";
    const FPS = 60;

    const origin = { x: 50, y: 200 };
    const radius = 5;

    r.InitWindow(screen.width, screen.height, title);
    r.SetTargetFPS(FPS);

    return {
        screen,
        origin,
        radius,
    };
}

function getScreenPos(world, angle, value) {
    const X_SCALE = (world.screen.width - world.origin.x - 200) / (2 * Math.PI); // Scale 2π to fit the window width
    const Y_SCALE = 150; // Visibility scaling for amplitude
    return {
        x: world.origin.x + angle * X_SCALE,
        y: world.origin.y - value * Y_SCALE, // Invert Y for screen space
    };
}
function drawSine(world, smoothness, maxAngle) {
    let prevPoint = getScreenPos(world, 0, Math.sin(0));

    for (let i = 0; i < smoothness; i++) {
        let angle = (i / smoothness) * maxAngle;
        let value = Math.sin(angle);
        let currentPoint = getScreenPos(world, angle, value);
        r.DrawLineEx(
            { x: prevPoint.x, y: prevPoint.y },
            { x: currentPoint.x, y: currentPoint.y },
            3.0,
            r.BLUE,
        );

        prevPoint = currentPoint;
    }
}
function drawCosine(world, smoothness, maxAngle) {
    let prevPoint = getScreenPos(world, 0, Math.sin(0));

    for (let i = 0; i < smoothness; i++) {
        let angle = (i / smoothness) * maxAngle;
        let value = Math.cos(angle);
        let currentPoint = getScreenPos(world, angle, value);
        r.DrawLineEx(
            { x: prevPoint.x, y: prevPoint.y },
            { x: currentPoint.x, y: currentPoint.y },
            3.0,
            r.BLUE,
        );

        prevPoint = currentPoint;
    }
}
function drawWaves(world) {
    const smoothness = 360;
    const maxAngle = 2 * Math.PI;

    drawSine(world, smoothness, maxAngle);
    drawCosine(world, smoothness, maxAngle);
}

function drawAxis(origin, screen) {
    r.DrawLine(origin.x, 0, origin.x, screen.height, r.YELLOW);
    r.DrawLine(0, origin.y, screen.width, origin.y, r.YELLOW);
}
function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    drawAxis(world.origin, world.screen);

    drawWaves(world);

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

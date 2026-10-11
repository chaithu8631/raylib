const r = require("raylib");

function setup() {
    // width: 400
    // height: 400
    const screenWidth = 400;
    const screenHeight = 400;
    const title = "Circle Points";
    const FPS = 60;

    // center: (200, 200)
    // radius: 150
    const center = { x: 200, y: 200 };
    const radius = 150;

    // The points should correspond to the 12 equally spaced positions around one complete revolution.
    const numberOfPoints = 12;

    r.InitWindow(screenWidth, screenHeight, title);
    r.SetTargetFPS(FPS);

    return {
        screenWidth,
        screenHeight,
        center,
        radius,
        numberOfPoints,
    };
}

function drawPoints(world) {
    const angularSpace = (2 * Math.PI) / world.numberOfPoints;

    for (let i = 0; i < world.numberOfPoints; i++) {

        const currentAngle = angularSpace * i;

        const center = createCoOrdinates(
            currentAngle,
            world.center,
            world.radius,
        );

        r.DrawCircleV(center, 5, r.BLACK);
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

    drawPoints(world);
    r.DrawCircleV(world.center, 150, r.SKYBLUE);

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

// Your program should create a window of:

// width: 400
// height: 400
// Draw a circle with:

// center: (200, 200)
// radius: 150
// Now place 12 points evenly around the circumference of the circle.

// The points should correspond to the 12 equally spaced positions around one complete revolution.

// For example, one point should be at the top of the circle, one at the right, one at the bottom, and one at the left.

// Draw each point as a small circle.

// Requirements#
// Store the number of points in a constant.
// Calculate the position of every point.
// Do not hard-code the coordinates of the 12 points.
// Do not write 12 separate drawing statements.
// Use a loop.
// Every point should lie on the circumference.
// The angular spacing between consecutive points should be equal.
// Think carefully about the following:

// What is one complete revolution in radians?
// If there are 12 points, how much should the angle change from one point to the next?
// Once you know an angle and a radius, how do you find the point on the circle?
// If your points are not evenly spaced, do not try to fix the coordinates individually. Something is wrong with your understanding of the angle.

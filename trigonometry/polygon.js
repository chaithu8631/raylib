const r = require("raylib");

function setup() {
    const screenWidth = 400;
    const screenHeight = 400;
    const title = "Circle Points";
    const FPS = 60;

    // center: (200, 200)
    // radius: 150
    // number of sides: 7
    const center = { x: 200, y: 200 };
    const radius = 150;
    const numberOfSides = 7;

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

        r.DrawLineV(currentStart,currentEnd,r.BLACK);
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

// Draw a regular polygon with:

// center: (200, 200)
// radius: 150
// number of sides: 7
// In other words, draw a regular heptagon.

// The polygon should be drawn by calculating the positions of its vertices and then drawing lines between consecutive vertices.

// Requirements#
// Store the number of sides in a constant.
// Store the center and radius in constants.
// Calculate all seven vertices.
// Do not hard-code any vertex coordinates.
// Use a loop.
// Every vertex must lie on the same circle.
// The vertices must be equally spaced around the circle.
// Connect the last vertex back to the first vertex.
// You are not being asked to use a polygon-drawing function.

// Instead, think back to the previous challenge.

// You already know how to find points at equally spaced angles around a circle.

// What changes when there are seven points instead of twelve?

// One detail#
// The polygon does not have to have one particular orientation. It is perfectly fine if one vertex is at the top, or if one of the edges is horizontal.

// What matters is that it is actually a regular polygon.

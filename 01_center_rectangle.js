const r = require("raylib");

const windowWidth = 800;
const windowHeight = 400;

const rectangleWidth = 500;
const rectangleHeight = 100;

function setUp() {
    r.InitWindow(windowWidth, windowHeight, "Vectors");
    r.SetTargetFPS(60);
}

function computeCoOrdinate(windowSize, rectangleSize){
    return ( windowSize - rectangleSize ) / 2;
}

function draw() {

    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    r.DrawRectangle(computeCoOrdinate(windowWidth, rectangleWidth), computeCoOrdinate(windowHeight, rectangleHeight), rectangleWidth, rectangleHeight, r.WHITE);

    r.EndDrawing();
}


function loop() {
    while(!r.WindowShouldClose()) {
        draw();
        //update();
    }
}

function main() {
    setUp();
    loop();
    r.CloseWindow();
}

main();

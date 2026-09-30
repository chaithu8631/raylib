const r = require("raylib");

const windowWidth = 1600;
const windowHeight = 1200;

const outRectangleX = 150;
const outRectangleY = 50;

const outRectangleWidth = 1000;
const outRectangleHeight = 500;

const widthRatio = 0.9;
const heightRatio = 0.9;


function setUp() {
    r.InitWindow(windowWidth, windowHeight, "scale and center");
    r.SetTargetFPS(60);
}

function computeCoOrdinate(coOrdinateOfouterRectangle, outerRectangleSize, innerRectangleRatio) {
    return coOrdinateOfouterRectangle + (outerRectangleSize * (1 - innerRectangleRatio)) / 2;
}

function computeSize(outerRectangleSize, innerRectangleRatio) {
    return outerRectangleSize * innerRectangleRatio;
}

function draw() {

    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    r.DrawRectangle(outRectangleX, outRectangleY, outRectangleWidth, outRectangleHeight, r.WHITE);
    r.DrawRectangle(computeCoOrdinate(outRectangleX, outRectangleWidth, widthRatio), computeCoOrdinate(outRectangleY, outRectangleHeight, heightRatio), computeSize(outRectangleWidth, widthRatio), computeSize(outRectangleHeight, heightRatio), r.RED);

    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        //update();
        draw();
    }
}

function main() {
    setUp();
    loop();
    r.CloseWindow();
}

main();
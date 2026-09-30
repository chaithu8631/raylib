const r = require("raylib");

const windowWidth = 1000;
const windowHeight = 400;


const outerRectangleX = 500;
const outerRectangleY = 100;

const outerRectangleWidth = 300;
const outerRectangleHeight = 150;

const innerRectangleWidth = 50;
const innerRectangleHeight = 25;

function setUp() {
    r.InitWindow(windowWidth, windowHeight, "Rectangle inside rectangle");
    r.SetTargetFPS(60);
}

function computeCoOrdinate(coOrdinateOfouterRectangle, outerRectangleSize, innerRectangleSize) {
    return coOrdinateOfouterRectangle+(outerRectangleSize-innerRectangleSize)/2;
}
function draw() {

    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    r.DrawRectangle(outerRectangleX, outerRectangleY, outerRectangleWidth, outerRectangleHeight, r.WHITE);
    r.DrawRectangle(computeCoOrdinate(outerRectangleX, outerRectangleWidth, innerRectangleWidth),computeCoOrdinate(outerRectangleY, outerRectangleHeight, innerRectangleHeight), innerRectangleWidth, innerRectangleHeight, r.BLACK);

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

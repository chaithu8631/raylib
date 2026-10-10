const r = require("raylib");

const windowWidth = 1000;
const windowHeight = 800;
const title = "Intertsecting of circles";


const circle1X = 300;
const circle1Y = 300;
const circle1Radius = 150;

const circle2X = 600;
const circle2Y = 600;
const circle2Radius = 300;

const circleColorUnIntersect = r.BLACK;
const circleColorIntersect = r.RED;

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    r.DrawCircle(circle1X, circle1Y, circle1Radius, circleColorUnIntersect);
    r.DrawCircle(circle2X, circle2Y, circle2Radius, circleColorUnIntersect);
    
    r.EndDrawing();
}

function calcDistance(X1,Y1,X2,Y2) {
    return (( ( X2 - X1 ) ** 2 ) + ( (Y2 - Y1) ** 2 ) ) ** 0.5;
}

function setUp() {
    r.InitWindow(windowWidth, windowHeight, title);
    r.SetTargetFPS(60);
}

function loop() {
    while (!r.WindowShouldClose()) {
        draw();
        update();
    }
}

function update() {
    const distance = calcDistance(circle1X, circle1Y, circle2X, circle2Y);
    const limit = circle1Radius + circle2Radius;
    r.BeginDrawing();

    if( distance < limit){
        r.DrawCircle(circle1X, circle1Y, circle1Radius, circleColorIntersect);
        r.DrawCircle(circle2X, circle2Y, circle2Radius, circleColorIntersect);
    }
    r.EndDrawing();
}
function main() {
    setUp();
    loop();
    r.CloseWindow();
}

main();
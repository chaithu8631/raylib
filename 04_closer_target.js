const r = require("raylib");


const sourceX = 100;
const sourceY = 400;

const radius = 50;

const targetCircleOneX = 400;
const targetCircleOneY = 200;

const targetCircleTwoX = 400;
const targetCircleTwoY = 600;


function setUp() {

    const windowWidth = 1000;
    const windowHeight = 1000;

    r.InitWindow(windowWidth, windowHeight, "Closer target");
    r.SetTargetFPS(60);
}

function loop(){
    while(!r.WindowShouldClose()) {
        //update();
        draw();
    }
}

function main() {
    setUp();
    loop();
    r.CloseWindow();
}

function distanceCalculate(X1,Y1,X2,Y2) {
    return (( ( X2 - X1 ) ** 2 ) + ( (Y2 - Y1) ** 2 ) ) ** 0.5;
}

const targetCircleOneDistance = distanceCalculate(sourceX, sourceY, targetCircleOneX,targetCircleOneY);
const targetCircleTwoDistance = distanceCalculate(sourceX, sourceY, targetCircleTwoX,targetCircleTwoY);


function decideTargetCircle(targetCircleOneDistance, targetCircleTwoDistance, targetCircleOneCoOrdinate, targetCircleTwoCoOrdinate ) {
    return targetCircleOneDistance < targetCircleTwoDistance ? targetCircleOneCoOrdinate : targetCircleTwoCoOrdinate ;
}

function draw() {
        r.BeginDrawing();
        r.ClearBackground(r.BLACK);

        r.DrawCircle(sourceX, sourceY, radius, r.BLUE);

        r.DrawCircle(targetCircleOneX, targetCircleOneY, radius, r.GREEN);
        r.DrawCircle(targetCircleTwoX, targetCircleTwoY, radius, r.RED);

        r.DrawLine(sourceX, sourceY, decideTargetCircle(targetCircleOneDistance, targetCircleTwoDistance, targetCircleOneX, targetCircleTwoX), decideTargetCircle(targetCircleOneDistance, targetCircleTwoDistance, targetCircleOneY, targetCircleTwoY), r.YELLOW);
        if (targetCircleOneDistance === targetCircleTwoDistance)
            r.DrawLine(sourceX, sourceY, decideTargetCircle(targetCircleOneDistance, targetCircleTwoDistance, targetCircleTwoX, targetCircleOneX), decideTargetCircle(targetCircleOneDistance, targetCircleTwoDistance, targetCircleTwoY, targetCircleOneY), r.YELLOW);

        r.EndDrawing();

}

main();
//\(d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\)
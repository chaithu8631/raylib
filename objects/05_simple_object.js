const r = require("raylib");
const window = {
    width : 500,
    height : 500,
    title : "car",
    FPS : 60,
};
const carData = {
    x : 250,
    y : 250,
}
const carColor = {
    r : 106,
    g : 13,
    b : 131,
    a : 100,
};
const outline = {
    r : 114,
    g : 47,
    b : 55,
    a : 255,
};
//sunlight color
const borderColor = {
    r : 0,
    g : 0,
    b : 0,
    a : 100,
};
//aqua blue color
const bgColor = {
    r : 100,
    g : 100,
    b : 100,
    a : 100,
};

r.InitWindow(window.width,window.height,window.title);
r.SetTargetFPS(window.FPS);
r.SetTraceLogLevel(r.LOG_NONE);
while(!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(bgColor);

    r.DrawCircleSector(carData, 100, 90, 270, 3, carColor);
    r.DrawCircleSectorLines(carData, 100, 90, 270, 3, outline);
    r.DrawCircle(carData.x - 50 , carData.y, 20, borderColor);
    r.DrawCircle(carData.x + 50 , carData.y, 20, borderColor);
    // r.DrawRectangleRounded(recData, 0.8, 3, carColor)
    //r.DrawCircleLines()

    r.EndDrawing();
}
r.CloseWindow();
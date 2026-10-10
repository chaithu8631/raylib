const r = require("raylib");

const window = {
    width : 500,
    height : 500,
    title : "two points",
    FPS : 60,
};
const leftPoint = {
    x : 150,
    y : 100,
}
const rightPoint = {
    x : 250,
    y : 200,
}
//sun set
const leftColor = {
    r : 250,
    g : 214,
    b : 165,
    a : 255,
};
//sky blue
const rightColor = {
    r : 255,
    g : 94,
    b : 19,
    a : 255,
};
//wine red
const lineColor = {
    r : 114,
    g : 47,
    b : 55,
    a : 255,
};
//aqua blue
const bgColor = {
    r : 30,
    g : 30,
    b : 30,
    a : 10,
};

r.InitWindow(window.width,window.height,window.title);
r.SetTargetFPS(window.FPS);
r.SetTraceLogLevel(r.LOG_NONE);
while(!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(bgColor);

    r.DrawCircleV(leftPoint, 50, leftColor);
    r.DrawCircleV(rightPoint, 50, rightColor);
    r.DrawLineV(leftPoint, rightPoint, lineColor);

    r.EndDrawing();
}
r.CloseWindow();
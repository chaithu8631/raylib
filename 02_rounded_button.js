const r = require("raylib");
const window = {
    width : 500,
    height : 500,
    title : "rounded button",
    FPS : 60,
};

const buttonData = {
    x : 50,
    y : 50,
    width : 200,
    height : 100,
}

const buttonColor = {
    r : 14,
    g : 47,
    b : 55,
    a : 255,
};

const borderColor = {
    r : 20,
    g : 255,
    b : 20,
    a : 200,
};

const bgColor = {
    r : 200,
    g : 200,
    b : 200,
    a : 100,
};

r.InitWindow(window.width,window.height,window.title);
r.SetTargetFPS(window.FPS);
r.SetTraceLogLevel(r.LOG_NONE);
while(!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(bgColor);

    r.DrawRectangleRounded(buttonData, 0.3, 10, buttonColor);
    r.DrawRectangleRoundedLines(buttonData, 0.3, 10, 5,borderColor);

    r.EndDrawing();
}
r.CloseWindow();
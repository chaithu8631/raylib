const r = require("raylib");

const window = {
    width : 500,
    height : 500,
    title : "simple target",
    FPS : 60,
};

const target = {
    x : 250,
    y : 250,
}

const yellow = {
    r : 255,
    g : 232,
    b : 92,
    a : 100,
};
const orange = {
    r : 254,
    g : 159,
    b : 54,
    a : 100,
};
const red = {
    r : 206,
    g : 77,
    b : 42,
    a : 100,
};
const magenta = {
    r : 238,
    g : 93,
    b : 108,
    a : 100,
};
const purple = {
    r : 106,
    g : 13,
    b : 131,
    a : 100,
};


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

    r.DrawCircleV(target, 150, purple);
    r.DrawCircleV(target, 125, magenta);
    r.DrawCircleV(target, 100, red);
    r.DrawCircleV(target, 75, orange);
    r.DrawCircleV(target, 50, yellow);

    r.EndDrawing();
}
r.CloseWindow();
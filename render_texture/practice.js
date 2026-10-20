const r = require("raylib");

function setUp() {
    const window = {
        width: 800,
        height: 800,
    };
    r.InitWindow(window.width, window.height, "experiments");
    r.SetTargetFPS(50);
    const target = r.LoadRenderTexture(200, 200);
    const frames = designTexture(target);
    const currentFrame = 0;

    return {
        window,
        target,
        frames,
        currentFrame,
    };
}

function designTexture(target) {
    r.BeginTextureMode(target);

    r.ClearBackground(r.BLACK);
    r.DrawCircle(100, 100, 60, r.RED);
    r.DrawCircle(80, 80, 15, r.WHITE);

    r.EndTextureMode();
    const source = {
        x: 0,
        y: 0,
        width: 200,
        height: 200,
    };
    const source1 = {
        x: 0,
        y: 0,
        width: -200,
        height: 200,
    };
    const source2 = {
        x: 0,
        y: 0,
        width: 200,
        height: -200,
    };
    const source3 = {
        x: 0,
        y: 0,
        width: -200,
        height: -200,
    };
    return [source,source1,source2,source3];
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    const frame = world.frames[Math.floor(Math.random()*4)];

    r.DrawTextureRec(world.target.texture, frame, { x: 25, y: 25 }, r.WHITE);

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        world.currentFrame++;
        draw(world);
        //update();
    }
}

function main() {
    const world = setUp();
    loop(world);
    r.CloseWindow();
}

main();

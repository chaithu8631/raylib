const r = require("raylib");

function setUp() {
    const window = {
        width: 800,
        height: 400,
    };
    r.InitWindow(window.width, window.height, "texture reuse");
    r.SetTargetFPS(60);
    const target = r.LoadRenderTexture(200, 200);
    designTexture(target);

    return {
        window,
        target,
    };
}

function designTexture(target) {
    r.BeginTextureMode(target);

    r.ClearBackground(r.BLACK);
    r.DrawCircle(100, 100, 60, r.RED);
    r.DrawCircle(80, 80, 15, r.WHITE);

    r.EndTextureMode();
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    const source = {
        x: 0,
        y: 0,
        width: 200,
        height: 200,
    };

    r.DrawTextureRec(world.target.texture, source, { x: 50, y: 100 }, r.WHITE);
    r.DrawTextureRec(world.target.texture, source, { x: 300, y: 100 }, r.WHITE);
    r.DrawTextureRec(world.target.texture, source, { x: 550, y: 100 }, r.WHITE);

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        draw(world);
        //update();
    }
}
function teardown() {
    r.CloseWindow();
}
function main() {
    const world = setUp();
    loop(world);
    teardown();
}

main();

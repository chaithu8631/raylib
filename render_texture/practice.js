const r = require("raylib");

function setUp() {
    const window = {
        width: 800,
        height: 600,
    };
    r.InitWindow(window.width, window.height, "texture reuse");
    r.SetTargetFPS(60);
    const target = r.LoadRenderTexture(200, 200);
    designTexture(target);

    const sourceRec = {
        x: 0,
        y: 0,
        width: target.texture.width,
        height: -target.texture.height,
    };

    return {
        window,
        target,
        sourceRec,
    };
}

function designTexture(target) {
    r.BeginTextureMode(target);
    r.ClearBackground(r.RAYWHITE);

    r.DrawRectangle(40, 80, 120, 80, r.BLUE);
    r.DrawTriangle(
        { x: 100, y: 20 },
        { x: 40, y: 80 },
        { x: 160, y: 80 },
        r.RED,
    );

    r.EndTextureMode();
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.DARKGRAY);
    
    const pos1 = { x: 60, y: 200 };
    r.DrawTextureRec(world.target.texture, world.sourceRec, pos1, r.WHITE);
    
    const pos2 = { x: 300, y: 200 };
    r.DrawTextureRec(world.target.texture, world.sourceRec, pos2, r.MAROON);
    
    const pos3 = { x: 540, y: 200 };
    r.DrawTextureRec(world.target.texture, world.sourceRec, pos3, r.YELLOW);
    
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
const r = require("raylib");

function setUp() {
    const window = {
        width: 800,
        height: 400,
    };
    r.InitWindow(window.width, window.height, "texture reuse");
    r.SetTargetFPS(60);
    const target = r.LoadRenderTexture(800, 200);
    const circle = { x: 10, y: 100, radius: 5, angle: 0 };
    return {
        window,
        target,
        circle,
    };
}

function designTexture(target, circle) {
    r.BeginTextureMode(target);

    r.DrawCircleV(circle, circle.radius, r.BLUE);

    r.EndTextureMode();
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.RED);

    r.DrawTexture(world.target.texture, 50, 100, r.YELLOW);

    r.EndDrawing();
}

function update(world) {
    console.log(world.target.width);

    designTexture(world.target, world.circle);
    world.circle.angle += 10;
    world.circle.x += 10;
    world.circle.y = 100 + 50 * Math.sin((world.circle.angle * Math.PI) / 180);
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        draw(world);
        update(world);
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

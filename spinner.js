const r = require("raylib");

function setup() {
    const world = {
        screenWidth: 600,
        screenHeight: 600,
        title: "Pattern",
        FPS: 60,
        currentFrame: 0,
    };
    r.InitWindow(world.screenWidth, world.screenHeight, world.title);
    r.SetTargetFPS(world.FPS);

    return world;
}
function chooseColor(sector,frame) {
    return (sector+frame)%2?r.RED:r.GOLD;
}
function drawSectors(center, maxSectors,angle,frame) {
    for (let currentSector = 1; currentSector <= maxSectors; currentSector++) {
        const color = chooseColor(currentSector,frame);
        r.DrawCircleSector(center, 100, currentSector*angle,currentSector*angle+angle, 1, color);
    }
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    const center = {x:300,y:300};
    const spinnerOptions = 12;
    const angle = 360/spinnerOptions;
    drawSectors(center,spinnerOptions,angle,world.currentFrame);

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        world.currentFrame++;
        // no update!
        draw(world);
    }
}

function main() {
    const world = setup();
    loop(world);
}

main();

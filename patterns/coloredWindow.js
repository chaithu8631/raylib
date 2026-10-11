const r = require("raylib");

function setup() {
    const world = {
        screenWidth: 600,
        screenHeight: 600,
        title: "Colour Window",
        FPS: 60,
    };

    r.InitWindow(world.screenWidth, world.screenHeight, world.title);
    r.SetTargetFPS(world.FPS);

    return world;
}

function chooseColor(color, x, y, window) {
    const part = window.screenWidth / 3;
    if (x < part) {
        if (y < window.screenHeight / 3) {
            color.a = x % part;
            color.r++;
            color.b--;
            return color;
        }
        if (y < window.screenHeight / 3) {
            color.g++;
            color.r--;
            return color;
        }
        color.b++;
        color.g--;
        color.a = x % part;
        return color;
    }
    if (part < x && x < 2 * part) {
        if (y < window.screenHeight / 3) {
            color.g++;
            color.r--;
            color.a = x % part;
            return color;
        }
        if (y < window.screenHeight / 3) {
            color.b++;
            color.g--;
            color.a = x % part;
            return color;
        }
        color.r++;
        color.b--;
        color.a = x % part;
        return color;
    }
    if (y < window.screenHeight / 3) {
        color.b++;
        color.g--;
        color.a = x % part;
        return color;
    }
    if (y < window.screenHeight / 3) {
        color.r++;
        color.b--;

        return color;
    }
    color.g++;
    color.r--;
    color.a = x % part;
    return color;
}

function drawCells(world) {
    let color = {
        r: 0,
        g: 255,
        b: 255,
        a: 255,
    };
    for (let x = 0; x < world.screenWidth; x++) {
        // if (x % 3 === 0) color.r = 0;
        // if (x % 3 === 1) color.g = 0;
        // if (x % 3 === 2) color.b = 0;

        for (let y = 0; y < world.screenHeight; y++) {
            color = chooseColor(color, x, y, world);

            r.DrawPixelV({ x, y }, color);
        }
    }
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    drawCells(world);

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        // no update!
        draw(world);
    }
}

function main() {
    const world = setup();
    loop(world);
}

main();

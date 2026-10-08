const r = require("raylib");

function setup() {
    const world = {
        screenWidth: 600,
        screenHeight: 600,
        title: "Pattern",
        FPS: 60,
    };
    world.gridProperties = {
        gridCount: 81,
    };
    world.gridProperties.gridRows = world.gridProperties.gridCount ** 0.5;
    world.gridProperties.gridColumns = world.gridProperties.gridCount ** 0.5;
    console.log(world.gridProperties);
    world.gridProperties.x = world.screenWidth / world.gridProperties.gridRows;
    world.gridProperties.y =
        world.screenHeight / world.gridProperties.gridColumns;
    r.InitWindow(world.screenWidth, world.screenHeight, world.title);
    r.SetTargetFPS(world.FPS);

    return world;
}

function chooseColor(currentRow, currentColumn) {
    return (currentColumn * currentRow)%2 === 0 ? r.RED : r.GOLD;
}

function drawCells(gridProperties) {
    const position = { x: 0, y: 0 };

    for (
        let currentRow = 0;
        currentRow < gridProperties.gridRows;
        currentRow++
    ) {
        position.y = 0;
        for (
            let currentColumn = 0;
            currentColumn < gridProperties.gridColumns;
            currentColumn++
        ) {
            const color = chooseColor(currentRow, currentColumn);
            r.DrawRectangleV(position, gridProperties, color);
            position.y = updatePosition(position.y, gridProperties.y);
        }
        position.x = updatePosition(position.x, gridProperties.x);
    }
}

function updatePosition(position, size) {
    return position + size;
}
function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    drawCells(world.gridProperties);

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

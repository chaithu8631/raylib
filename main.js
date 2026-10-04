const sketch = require("./sketch");

function loop(global) {
  while (sketch.running()) {
    sketch.update(global);
    sketch.draw(global);
  }
}

function main() {
  const global = sketch.setup();
  loop(global);
  sketch.teardown();
}

main();
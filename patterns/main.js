const sketch = require("./01_pattern");

function loop() {
  while (sketch.running()) {
    sketch.update();
    sketch.draw();
  }
}

function main() {
  sketch.setup();
  loop();
  sketch.teardown();
}

main();
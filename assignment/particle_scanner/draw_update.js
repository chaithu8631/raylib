const r = require("raylib");
const g = require("./geometry");

function drawHorizontally(startPosition, width, color) {
    r.DrawRectangle(startPosition, 0, width, r.GetScreenHeight(), color);
}

function drawVertically(startPosition, height, color) {
    r.DrawRectangle(0, startPosition, r.GetScreenWidth(), height, color);
}

function updateHorizontalDetector(detector, particle1, particle2) {
    g.updatePosition(detector);
    g.deriveVelocity(detector);
    detector.hasDetected = g.scanTwoParticles(detector, particle1, particle2);
    return detector;
}
function updateVerticalDetector(detector, particle) {
    g.updatePosition(detector);
    g.deriveVelocity(detector);
    const detectorEnd = detector.position + detector.width;
    const particleEnd = particle.position + particle.width;
    detector.hasDetected = g.isOverlap(
        detector.position,
        detectorEnd,
        particle.position,
        particleEnd,
    );
    return detector;
}

module.exports = {
    drawHorizontally,
    drawVertically,
    updateHorizontalDetector,
    updateVerticalDetector,
};

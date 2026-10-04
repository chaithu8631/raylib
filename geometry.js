const r = require("raylib");

function updatePosition(detector) {
    const updatePosition = detector.position + detector.velocity + detector.width;
    if (detector.velocity > 0) {
        detector.position = updatePosition > detector.upperBoundary ? detector.upperBoundary - detector.width : updatePosition - detector.width;
    }else {
        detector.position = detector.lowerBoundary > updatePosition ? detector.lowerBoundary : updatePosition - detector.width;
    }
    return detector;
}

function detectParticle(
    detectorPosition,
    detectorWidth,
    particlePosition,
    particleWidth,
) {
    const particleEnd = particlePosition + particleWidth;
    const detectorEnd = detectorPosition + detectorWidth;

    return detectorPosition <= particleEnd && detectorEnd > particlePosition;
}

function deriveVelocity(
    detector
) {
    const detectorEnd = detector.position + detector.width;
    detector.velocity = detector.position === detector.lowerBoundary || detectorEnd === detector.upperBoundary
        ? -detector.velocity
        : detector.velocity;
    return detector;
}

function drawHorizontally(startPosition, width, color) {
    r.DrawRectangle(startPosition, 0, width, r.GetScreenHeight(), color);
}

function drawVertically(startPosition, height, color) {
    r.DrawRectangle(0, startPosition, r.GetScreenWidth(), height, color);
}

function selectColor(hasDetected) {
    return hasDetected
        ? {
              r: 255,
              g: 0,
              b: 0,
              a: 255,
          }
        : {
              r: 255,
              g: 255,
              b: 255,
              a: 255,
          };
}

function updateDetector(detector) {
    updatePosition(detector);
    deriveVelocity(detector);
}

function updateHorizontalDetector(detector, particle1, particle2) {
    updateDetector(detector);
    detector.hasDetected = scanHorizontally(detector,particle1,particle2);
}
function updateVerticalDetector(detector, particle) {
    updateDetector(detector);
    detector.hasDetected = scanVertically(detector,particle);
}

function scanVertically(detector, particle3) {
    return detectParticle(
        detector.position,
        detector.width,
        particle3.position,
        particle3.width,
    )
}

function scanHorizontally(detector, particle1, particle2) {
    const scanParticle1 = detectParticle(
        detector.position,
        detector.width,
        particle1.position,
        particle1.width,
    );
    const scanParticle2 = detectParticle(
        detector.position,
        detector.width,
        particle2.position,
        particle2.width,
    );
    return scanParticle1 || scanParticle2;
}

function createDetector(position,width,velocity,lowerBoundary,upperBoundary,hasDetected) {
    return {
        position,
        width,
        velocity,
        lowerBoundary,
        upperBoundary,
        hasDetected,
    }
}
function createParticle(position, width) {
    return {
        position,
        width,
    };
}
module.exports = {
    updatePosition,
    detectParticle,
    deriveVelocity,
    drawHorizontally,
    drawVertically,
    selectColor,
    updateDetector,
    updateHorizontalDetector,
    updateVerticalDetector,
    scanHorizontally,
    scanVertically,
    createDetector,
    createParticle,
};

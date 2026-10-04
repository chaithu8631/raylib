const r = require("raylib");

function updatePosition(detector) {
    detector.position = detector.position + detector.velocity;
    // const positionToBeUpdated = detector.position + detector.velocity + detector.width;
    // if (detector.velocity > 0) {
    //     detector.position = positionToBeUpdated > detector.upperBoundary ? detector.upperBoundary - detector.width : positionToBeUpdated - detector.width;
    // }else {
    //     detector.position = detector.lowerBoundary > positionToBeUpdated ? detector.lowerBoundary : positionToBeUpdated - detector.width;
    // }
    return detector;
}

function isOverlap(start1, end1, end2, start2) {
    return end1 > end2 && start1 < start2;
}

function deriveVelocity(detector) {
    const detectorEnd = detector.position + detector.width;
    detector.velocity = isOverlap(
        detector.lowerBoundary,
        detector.upperBoundary,
        detectorEnd,
        detector.position,
    )
        ? detector.velocity
        : -detector.velocity;
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

function updateHorizontalDetector(detector, particle1, particle2) {
    updatePosition(detector);
    deriveVelocity(detector);
    detector.hasDetected = scanHorizontally(detector, particle1, particle2);
    return detector;
}
function updateVerticalDetector(detector, particle) {
    updatePosition(detector);
    deriveVelocity(detector);
    const detectorEnd = detector.position + detector.width;
    const particleEnd = particle.position + particle.width;
    detector.hasDetected = isOverlap(
        detector.position,
        detectorEnd,
        particle.position,
        particleEnd,
    );
    return detector;
}

function scanHorizontally(detector, particle1, particle2) {
    const detectorEnd = detector.position + detector.width;
    const particle1End = particle1.position + particle1.width;
    const particle2End = particle2.position + particle2.width;

    const scanParticle1 = isOverlap(
        detector.position,
        detectorEnd,
        particle1.position,
        particle1End,
    );
    const scanParticle2 = isOverlap(
        detector.position,
        detectorEnd,
        particle2.position,
        particle2End,
    );
    return scanParticle1 || scanParticle2;
}

function createDetector(
    position,
    width,
    velocity,
    lowerBoundary,
    upperBoundary,
    hasDetected,
) {
    return {
        position,
        width,
        velocity,
        lowerBoundary,
        upperBoundary,
        hasDetected,
    };
}

function createParticle(position, width) {
    return {
        position,
        width,
    };
}

module.exports = {
    drawHorizontally,
    drawVertically,
    selectColor,
    updateHorizontalDetector,
    updateVerticalDetector,
    createDetector,
    createParticle,
};

const r = require("raylib");
const c = require("./color");
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

function updatePosition(detector) {
    detector.position = detector.position + detector.velocity;
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

function scanTwoParticles(detector, particle1, particle2) {
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

module.exports = {
    createDetector,
    createParticle,
    updatePosition,
    deriveVelocity,
    isOverlap,
    scanTwoParticles,
};

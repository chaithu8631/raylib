const detectedColor = {
    r: 255,
    g: 0,
    b: 0,
    a: 255,
};
const undetectedColor = {
    r: 255,
    g: 255,
    b: 255,
    a: 255,
};
const bgColor = {
    r: 0,
    g: 0,
    b: 0,
    a: 255,
};
const particleColor = {
    r: 0,
    g: 121,
    b: 241,
    a: 255,
};

function selectColor(hasDetected) {
    return hasDetected ? detectedColor : undetectedColor;
}
module.exports = {
    undetectedColor,
    detectedColor,
    bgColor,
    particleColor,
    selectColor,
};
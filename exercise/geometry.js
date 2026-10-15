function computeCoOrdinate(position, outerSize, innerSize) {
    return position + (outerSize - innerSize) / 2;
}
function computeCoOrdinateR(position, outerSize, innerRatio) {
    return position + (outerSize * (1 - innerRatio)) / 2;
}
function computeSize(outerSize, innerRatio) {
    return outerSize * innerRatio;
}
function distanceCalculate(start,end) {
    return ((end.x - start.x) ** 2 + (end.y - start.y) ** 2) ** 0.5;
}
module.exports = {
    computeCoOrdinate,
    computeCoOrdinateR,
    computeSize,
    distanceCalculate,
};

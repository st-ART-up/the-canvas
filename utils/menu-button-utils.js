const blessed = require('blessed');
const { screen, canvas } = require('../canvas');

function clearCanvas(paint) {
    paint.destroy();
    screen.render();
}

module.exports = {
    clearCanvas
}
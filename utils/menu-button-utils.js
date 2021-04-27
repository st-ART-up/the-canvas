const blessed = require('blessed');
const { screen, canvas } = require('../interface/startup-screen');

function clearCanvas(paint) {
    paint.destroy();
    screen.render();
}

module.exports = {
    clearCanvas
}
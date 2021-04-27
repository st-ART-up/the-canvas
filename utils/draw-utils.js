const blessed = require('blessed');
const { screen, canvas } = require('../interface/startup-screen');
const { clearButton } = require('../interface/menu-bar-children');
const { clearCanvas } = require('./menu-button-utils');

function newBrushStroke(mouse, color, brush) {
    const newPaintSplash = blessed.box({
        parent: canvas,
        top: mouse.y - 11,
        left: mouse.x - 20,
        width: brush.width,
        height: brush.height,
        type: 'overlay',
        style: {
            bg: color,
            transparent: brush.transparent,
        }
    });

    clearButton.on('click', function (mouse) {
        clearCanvas(newPaintSplash)
    })
    screen.render();
}

module.exports = {
    newBrushStroke
}
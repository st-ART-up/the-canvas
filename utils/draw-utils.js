const blessed = require('blessed');
const { screen, canvas } = require('../interface/startup-screen');
const { clearButton } = require('../interface/menu-bar-children');
const { clearCanvas } = require('./menu-button-utils');

function newBrushStroke(mouse, color, brush, offset) {
    const newPaintSplash = blessed.box({
        parent: canvas,
        top: mouse.y - offset.y,
        left: mouse.x - offset.x,
        width: brush.width,
        height: brush.height,
        type: 'overlay',
        style: {
            bg: color,
            transparent: brush.transparent,
        }
    });

    clearButton.on('click', function (mouse) {
        clearCanvas(newPaintSplash);
    })
    screen.render();
}

function randomBrushStroke(mouse) {
    newBrushStroke(mouse, 216, { width: 2, height: 1, transparent: true }, { y: 11, x: 20 });
    newBrushStroke(mouse, 'cyan', { width: 2, height: 1, transparent: true }, { y: 12, x: 22 });
    newBrushStroke(mouse, 'magenta', { width: 2, height: 1, transparent: true }, { y: 13, x: 24 });
    screen.render();
}

module.exports = {
    newBrushStroke,
    randomBrushStroke
}
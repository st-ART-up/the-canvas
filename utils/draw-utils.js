const blessed = require('blessed');
const { screen, canvas } = require('../canvas.js');

function newBrushStroke(mouse, color, brush) {
    const newBrushStroke = blessed.box({
        parent: canvas,
        top: mouse.y - 11,
        left: mouse.x - 20,
        width: brush.width,
        height: brush.height,
        type: 'overlay',
        style: {
            bg: color,
            transparent: true,
        }
    });

    screen.render();
}

module.exports = {
    newBrushStroke
}
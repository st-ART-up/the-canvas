const blessed = require('blessed');
const { screen, canvas } = require('../interface/startup-screen');
const { clearButton } = require('../interface/menu-bar-children');
const { clearCanvas } = require('./menu-button-utils');
const { cyan } = require('colors');

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

function randomBrushStroke(mouse) {
    const onePaintSplash = blessed.box({
        parent: canvas,
        top: mouse.y - 11,
        left: mouse.x - 20,
        width: 2,
        height: 1,
        type: 'overlay',
        // content: '|',
        // text: {
                    // align: 'center'
                // },
        style: {
            bg:  216,
            // fg: 57,
            transparent: true
        }
    })
    const twoPaintSplash = blessed.box({
        parent: canvas,
        top: mouse.y - 12,
        left: mouse.x - 22,
        width: 2,
        height: 1,
        type: 'overlay',
        // content: '_',
        // text: {
                    // align: 'center'
                // },
        style: {
            // fg:  57,
            bg: 'cyan',
            transparent: true
        }
    })
    const threePaintSplash = blessed.box({
        parent: canvas,
        top: mouse.y - 13,
        left: mouse.x - 24,
        width: 2,
        height: 1,
        type: 'overlay',
        // content: '|',
        // text: {
                    // align: 'center'
                // },
            style: {
            bg:  'magenta',
            // fg: 57,
            transparent: true
        }
    })

    const megaPaintSplash = {
        onePaintSplash,
        twoPaintSplash,
        threePaintSplash
    }

    clearButton.on('click', function (mouse) {
        clearCanvas(megaPaintSplash)
    })
    screen.render();
}

module.exports = {
    newBrushStroke,
    randomBrushStroke
}
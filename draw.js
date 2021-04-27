const blessed = require('blessed');
const { screen, canvas, clearButton } = require('./canvas');
const { newBrushStroke } = require('./utils/draw-utils');


//figure out how to run execSync on screen.render
// const execSync = require('child_process').execSync;
// execSync(`printf '\e[8;50;150t'`, { encoding: 'utf-8' });

canvas.on('click', function (mouse) {
    newBrushStroke(mouse, 115, {width: 2, height: 1, transparent: false});
});

screen.key(['escape', 'q', 'C-c'], function (ch, key) {
    return process.exit(0);
});

screen.render();
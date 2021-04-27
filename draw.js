const blessed = require('blessed');
const { screen, canvas, colorPalette } = require('./interface/startup-screen');
const {
    brushColorButton,
    canvasColorButton,
    richerRedPaintBox,
    coralReefPaintBox,
    oranginaPaintBox,
    mellowApricotPaintBox,
    goldenRodYellowPaintBox,
    smintyMintPaintBox,
    forestedMintPaintBox,
    sighAnneCyanPaintBox,
    cloudsBluePaintBox,
    turquoiseBluePaintBox,
    violetBluePaintBox,
    lovenderPaintBox,
    madMagentaPaintBox,
    randoPaintBox
} = require('./interface/color-palette-children');
const { newBrushStroke } = require('./utils/draw-utils');
const { randomColor } = require('./utils');

let drawColor = randomColor();
let bgColor = randomColor();
let bgSelect = false;
//figure out how to run execSync on screen.render
// const execSync = require('child_process').execSync;
// execSync(`printf '\e[8;50;150t'`, { encoding: 'utf-8' });

canvas.on('click', function (mouse) {
    newBrushStroke(mouse, 115, {width: 2, height: 1, transparent: false});
});

brushColorButton.on('click', function (mouse) {
    bgSelect = false;
    brushColorButton.focus();
    screen.render();
});

canvasColorButton.on('click', function (mouse) {
bgSelect = true;
canvasColorButton.focus();
screen.render();
});

richerRedPaintBox.on('click', function (mouse) {
    if (bgSelect) {
      canvas.style.bg = 160;
      screen.render();
    }
    else {
      colorPalette.style.bg = 160;
      screen.render();
    }
  });

coralReefPaintBox.on('click', function (mouse) {
    if (bgSelect) {
      canvas.style.bg = 210;
      screen.render();
    }
    else {
      colorPalette.style.bg = 210;
      screen.render();
    }
  });

  oranginaPaintBox.on('click', function (mouse) {
    if (bgSelect) {
      canvas.style.bg = 216;
      screen.render();
    }
    else {
      colorPalette.style.bg = 216;
      screen.render();
    }
  });

  mellowApricotPaintBox.on('click', function (mouse) {
    if (bgSelect) {
      canvas.style.bg = '#FFC476';
      screen.render();
    }
    else {
      colorPalette.style.bg = '#FFC476';
      screen.render();
    }
  });
  
  goldenRodYellowPaintBox.on('click', function (mouse) {
    if (bgSelect) {
      canvas.style.bg = 227;
      screen.render();
    }
    else {
      colorPalette.style.bg = 227;
      screen.render();
    }
  });
  
  smintyMintPaintBox.on('click', function (mouse) {
    if (bgSelect) {
      canvas.style.bg = 194;
      screen.render();
    }
    else {
      colorPalette.style.bg = 194;
      screen.render();
    }
  });

  forestedMintPaintBox.on('click', function (mouse) {
    if (bgSelect) {
      canvas.style.bg = 115;
      screen.render();
    }
    else {
      colorPalette.style.bg = 115;
      screen.render();
    }
  });
  
  sighAnneCyanPaintBox.on('click', function (mouse) {
    if (bgSelect) {
      canvas.style.bg = 'cyan';
      screen.render();
    }
    else {
      colorPalette.style.bg = 'cyan';
      screen.render();
    }
  });
  
  cloudsBluePaintBox.on('click', function (mouse) {
    if (bgSelect) {
      canvas.style.bg = 117;
      screen.render();
    }
    else {
      colorPalette.style.bg = 117;
      screen.render();
    }
  });

  turquoiseBluePaintBox.on('click', function (mouse) {
    if (bgSelect) {
      canvas.style.bg = 'light cyan';
      screen.render();
    }
    else {
      colorPalette.style.bg = 'light cyan';
      screen.render();
    }
  });

  violetBluePaintBox.on('click', function (mouse) {
    if (bgSelect) {
      canvas.style.bg = 57;
      screen.render();
    }
    else {
      colorPalette.style.bg = 57;
      screen.render();
    }
  });
  
  lovenderPaintBox.on('click', function (mouse) {
    if (bgSelect) {
      canvas.style.bg = 183;
      screen.render();
    }
    else {
      colorPalette.style.bg = 183;
      screen.render();
    }
  });
  
  madMagentaPaintBox.on('click', function (mouse) {
    if (bgSelect) {
      canvas.style.bg = 'magenta';
      screen.render();
    }
    else {
      colorPalette.style.bg = 'magenta';
      screen.render();
    }
  });
  
  randoPaintBox.on('click', function (mouse) {
    if (bgSelect) {
      canvas.style.bg = randomColor();
      screen.render();
    }
    else {
      colorPalette.style.bg = randomColor();
      screen.render();
    }
  });
  
screen.key(['escape', 'q', 'C-c'], function (ch, key) {
    return process.exit(0);
});

screen.render();
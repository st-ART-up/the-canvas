#!/usr/bin/env node

const blessed = require('blessed');
const execSync = require('child_process').execSync;

// blessed element imports
const {
  screen,
  canvas,
} = require('./interface/startup-screen');
const { saveButton, uploadButton } = require('./interface/menu-bar-children');
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
  randoPaintBox,
} = require('./interface/color-palette-children');
const {
  brushSizeLabel,
  smallBrushButton,
  mediumBrushButton,
  largeBrushButton,
  randomBrushButton,
  largeEraseButton,
  mediumEraseButton,
  smallEraseButton,
  eraseLabel
} = require('./interface/tool-bar-children');

// utils imports
const { newBrushStroke } = require('./utils/draw-utils');
const { randomColor } = require('./utils');
const { uploadPng } = require('./utils/menu-button-utils');

let drawColor = randomColor();
let bgColor = 231;
let bgSelect = false;
let brush = {
  width: 2,
  height: 1,
  transparent: true
};
//figure out how to run execSync on screen.render
// execSync(`printf '\e[8;50;150t'`, { encoding: 'utf-8' });

canvas.on('click', function (mouse) {
  newBrushStroke(mouse, drawColor, brush);
});

saveButton.on('click', function (mouse) {
  // the default is 'buffer'
  const output = execSync('screencapture -i ./photos/yourawesomeart.png', {
    encoding: 'utf-8',
  });
  // screen.render();
});

// screen.key(['u'], function (ch, key){
//   undoButton.deleteLine(i);
//   screen.render();
// });

uploadButton.on('click', function (mouse) {
  uploadPng();
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
  } else {
    drawColor = 160;
    screen.render();
  }
});

coralReefPaintBox.on('click', function (mouse) {
  if (bgSelect) {
    canvas.style.bg = 210;
    screen.render();
  } else {
    drawColor = 210;
    screen.render();
  }
});

oranginaPaintBox.on('click', function (mouse) {
  if (bgSelect) {
    canvas.style.bg = 216;
    screen.render();
  } else {
    drawColor = 216;
    screen.render();
  }
});

mellowApricotPaintBox.on('click', function (mouse) {
  if (bgSelect) {
    canvas.style.bg = '#FFC476';
    screen.render();
  } else {
    drawColor = '#FFC476';
    screen.render();
  }
});

goldenRodYellowPaintBox.on('click', function (mouse) {
  if (bgSelect) {
    canvas.style.bg = 227;
    screen.render();
  } else {
    drawColor = 227;
    screen.render();
  }
});

smintyMintPaintBox.on('click', function (mouse) {
  if (bgSelect) {
    canvas.style.bg = 194;
    screen.render();
  } else {
    drawColor = 194;
    screen.render();
  }
});

forestedMintPaintBox.on('click', function (mouse) {
  if (bgSelect) {
    canvas.style.bg = 115;
    screen.render();
  } else {
    drawColor = 115;
    screen.render();
  }
});

sighAnneCyanPaintBox.on('click', function (mouse) {
  if (bgSelect) {
    canvas.style.bg = 'cyan';
    screen.render();
  } else {
    drawColor = 'cyan';
    screen.render();
  }
});

cloudsBluePaintBox.on('click', function (mouse) {
  if (bgSelect) {
    canvas.style.bg = 117;
    screen.render();
  } else {
    drawColor = 117;
    screen.render();
  }
});

turquoiseBluePaintBox.on('click', function (mouse) {
  if (bgSelect) {
    canvas.style.bg = 'light cyan';
    screen.render();
  } else {
    drawColor = 'light cyan';
    screen.render();
  }
});

violetBluePaintBox.on('click', function (mouse) {
  if (bgSelect) {
    canvas.style.bg = 57;
    screen.render();
  } else {
    drawColor = 57;
    screen.render();
  }
});

lovenderPaintBox.on('click', function (mouse) {
  if (bgSelect) {
    canvas.style.bg = 183;
    screen.render();
  } else {
    drawColor = 183;
    screen.render();
  }
});

madMagentaPaintBox.on('click', function (mouse) {
  if (bgSelect) {
    canvas.style.bg = 'magenta';
    screen.render();
  } else {
    drawColor = 'magenta';
    screen.render();
  }
});

randoPaintBox.on('click', function (mouse) {
  if (bgSelect) {
    canvas.style.bg = randomColor();
    screen.render();
  } else {
    drawColor = randomColor();
    screen.render();
  }
});

smallBrushButton.on('click', function (mouse) {
  brush = {
    width: 2,
    height: 1,
    transparent: true
  }
});

mediumBrushButton.on('click', function (mouse) {
  brush = {
    width: 6,
    height: 3,
    transparent: true
  }
});

largeBrushButton.on('click', function (mouse) {
  brush = {
    width: 9,
    height: 4,
    transparent: true
  }
});

//fix random brush width/size/paint multiple boxes at once
randomBrushButton.on('click', function (mouse) {
  brush = {
    width: 1,
    height: 1,
    transparent: true
  }
})

largeEraseButton.on('click', function (mouse) {
  brush = {
    width: 9,
    height: 4,
    transparent: false
  }
  drawColor = canvas.style.bg;
});

mediumEraseButton.on('click', function (mouse) {
  brush = {
    width: 6,
    height: 3,
    transparent: false
  }
  drawColor = canvas.style.bg;
});

smallEraseButton.on('click', function (mouse) {
  brush = {
    width: 2,
    height: 1,
    transparent: false,
  }
  drawColor = canvas.style.bg;
});

screen.key(['escape'], function (ch, key) {
  screen.destroy();
  resolve();
});

screen.render();

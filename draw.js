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

const setcolor = (x) => {
  if (bgSelect) {
    canvas.style.bg = x;
    screen.render();
  } else {
    drawColor = x;
    screen.render();
  }
}

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
  setcolor(160);
});

coralReefPaintBox.on('click', function (mouse) {
  setcolor(210);
});

oranginaPaintBox.on('click', function (mouse) {
  setcolor(216);
});

mellowApricotPaintBox.on('click', function (mouse) {
  setcolor('#FFC476');
});

goldenRodYellowPaintBox.on('click', function (mouse) {
  setcolor(227);
});

smintyMintPaintBox.on('click', function (mouse) {
  setcolor(194);
});

forestedMintPaintBox.on('click', function (mouse) {
  setcolor(115);
});

sighAnneCyanPaintBox.on('click', function (mouse) {
  setcolor('cyan');
});

cloudsBluePaintBox.on('click', function (mouse) {
  setcolor(117);
});

turquoiseBluePaintBox.on('click', function (mouse) {
  setcolor('light cyan');
});

violetBluePaintBox.on('click', function (mouse) {
  setcolor(57);
});

lovenderPaintBox.on('click', function (mouse) {
  setcolor(183);
});

madMagentaPaintBox.on('click', function (mouse) {
  setcolor('magenta');
});

randoPaintBox.on('click', function (mouse) {
  setcolor(randomColor());
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

// input click handlers go here when complete

screen.key(['escape'], function (ch, key) {
  screen.destroy();
  resolve();
});

screen.render();

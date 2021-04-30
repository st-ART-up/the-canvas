#!/usr/bin/env node
const blessed = require('blessed');
const execSync = require('child_process').execSync;

// blessed element imports
const {
  screen,
  canvas,
  resizeButton,
  resizeBox,
} = require('./interface/startup-screen');
const {
  saveButton,
  uploadButton,
  loginButton,
  logoutButton,
} = require('./interface/menu-bar-children');
const {
  brushColorButton,
  canvasColorButton,
  richerRedPaintBox,
  coralReefPaintBox,
  oranginaPaintBox,
  mellowApricotPaintBox,
  goldenRodYellowPaintBox,
  whiteStallionPaintBox,
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
  smallBrushButton,
  mediumBrushButton,
  largeBrushButton,
  randomBrushButton,
  largeEraseButton,
  mediumEraseButton,
  smallEraseButton,
} = require('./interface/tool-bar-children');
const { form } = require('./interface/upload-form');
const {
  inputDirectionButton,
  inputDirectionBox,
  inputBar,
} = require('./interface/input-bar-children');

// utils imports
const { newBrushStroke } = require('./utils/draw-utils');
const { randomColor } = require('./utils');
const imgur = require('./utils/imgur-utils');
const auth = require('./utils/auth-utils');
const saveToDb = require('./utils/api-utils');

let token = '';
let drawColor = randomColor();
let bgSelect = false;
let brush = {
  width: 2,
  height: 1,
  transparent: true,
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
};

resizeButton.on('click', function (mouse) {
  execSync(`printf '\e[8;50;150t'`, { encoding: 'utf-8' });
  resizeBox.hide();
  screen.render();
});

// canvas clickhandler
canvas.on('click', function (mouse) {
  newBrushStroke(mouse, drawColor, brush);
});

// menu bar clickhandlers
saveButton.on('click', function (mouse) {
  // the default is 'buffer'
  const output = execSync('screencapture -i ./photos/yourawesomeart.png', {
    encoding: 'utf-8',
  });
  // screen.render();
});

uploadButton.on('click', function (mouse) {
  if (token) {
    form.show();
    screen.render();
  } else {
    const loginWarning = blessed.box({
      parent: screen,
      top: 'center',
      left: 'center',
      bg: 'red',
      content: 'Please login to upload your art.',
    });
    loginWarning.on('click', function (mouse) {
      loginWarning.hide();
      screen.render();
    });
    screen.render();
  }
});

form.on('submit', async function (data) {
  const drawingUrl = await imgur();
  const png = {
    drawingUrl: drawingUrl,
    token: token,
    title: data.title,
    caption: data.caption,
  };
  saveToDb(png);
  form.hide();
  screen.render();
});

loginButton.on('click', function (mouse) {
  auth().then((userToken) => token = userToken);
});

logoutButton.on('click', function (mouse) {
  token = '';
});

// color palette clickhandlers
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

whiteStallionPaintBox.on('click', function (mouse) {
  setcolor(231);
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

// toolbar clickhandlers
smallBrushButton.on('click', function (mouse) {
  brush = {
    width: 2,
    height: 1,
    transparent: true,
  };
});

mediumBrushButton.on('click', function (mouse) {
  brush = {
    width: 6,
    height: 3,
    transparent: true,
  };
});

largeBrushButton.on('click', function (mouse) {
  brush = {
    width: 9,
    height: 4,
    transparent: true,
  };
});

//fix random brush width/size/paint multiple boxes at once
randomBrushButton.on('click', function (mouse) {
  brush = {
    width: 1,
    height: 1,
    transparent: true,
  };
});

largeEraseButton.on('click', function (mouse) {
  brush = {
    width: 9,
    height: 4,
    transparent: false,
  };
  drawColor = canvas.style.bg;
});

mediumEraseButton.on('click', function (mouse) {
  brush = {
    width: 6,
    height: 3,
    transparent: false,
  };
  drawColor = canvas.style.bg;
});

smallEraseButton.on('click', function (mouse) {
  brush = {
    width: 2,
    height: 1,
    transparent: false,
  };
  drawColor = canvas.style.bg;
});

// input clickhandlers and eventhandler
inputBar.on('submit', (text) => {
  log(text);
  inputBar.clearValue();
});

const log = (text) => {
  canvas.pushLine(text);
  screen.render();
};

inputDirectionButton.on('click', function (mouse) {
  inputDirectionBox.toggle();
  inputBar.toggle();
  screen.render();
});

// screen.key(['u'], function (ch, key){
//   undoButton.deleteLine(i);
//   screen.render();
// });

screen.key(['escape'], function (ch, key) {
  screen.destroy();
  resolve();
});

screen.render();

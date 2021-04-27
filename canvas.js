const blessed = require('blessed');
const { randomColor } = require('./utils');
const execSync = require('child_process').execSync;
// printf '\e[8;50;150t'

const screen = blessed.screen({
  smartCSR: true
});

//WHITE BACKGROUND BOX - PARENT IS SCREEN
////////////////////////////////////////////////////////////////////////////////////////
const backgroundBox = blessed.box({
  parent: screen,
  width: '100%',
  height: '100%',
  tags: true,
  style: {
    fg: 231,
    bg: 231,
  },
});

//MENU BAR - PARENT
////////////////////////////////////////////////////////////////////////////////////////
const menuBar = blessed.box({
  parent: backgroundBox,
  top: 0,
  left: '12%',
  width: '88%',
  height: '7%',
  tags: true,
  style: {
    bg: 216,
  },
});

//MENU BAR - CHILDREN
////////////////////////////////////////////////////////////////////////////////////////
const saveButton = blessed.box({
  parent: menuBar,
  top: 'center',
  left: '5%',
  width: '10%',
  height: '60%',
  tags: true,
  content: '{center}save{/center}',
  style: {
    fg: 'black',
    bg: 227,
    hover: {
      bg: 194
    }
  },
});

const clearButton = blessed.box({
  parent: menuBar,
  top: 'center',
  left: '20%',
  width: '10%',
  height: '60%',
  tags: true,
  content: '{center}clear{/center}',
  style: {
    fg: 'black',
    bg: 227,
    hover: {
      bg: 194
    }
  },
});

const galleryButton = blessed.box({
  parent: menuBar,
  top: 'center',
  left: '72%',
  width: '10%',
  height: '60%',
  tags: true,
  content: '{center} gallery{/center}',
  style: {
    fg: 'black',
    bg: 227,
    hover: {
      bg: 194
    }
  },
});

const studioButton = blessed.box({
  parent: menuBar,
  top: 'center',
  left: '87%',
  width: '10%',
  height: '60%',
  tags: true,
  content: '{center}studio{/center}',
  style: {
    fg: 'black',
    bg: 227,
    hover: {
      bg: 194
    }
  },
});

//COLOR VAIRABLES 
////////////////////////////////////////////////////////////////////////////////////////
let drawColor = randomColor();
let bgColor = randomColor();
let bgSelect = false;

// module.exports = { drawColor, bgColor, bgSelect };

//COLOR PALETTE BOX - PARENT
////////////////////////////////////////////////////////////////////////////////////////
const colorPalette = blessed.box({
  parent: backgroundBox,
  top: '7%',
  left: '12%',
  width: '88%',
  height: '14%',
  style: {
    bg: 231
  },
});

//COLOR PALETTE - CHILDREN
////////////////////////////////////////////////////////////////////////////////////////
const brushColorButton = blessed.box({
  parent: colorPalette,
  top: 2,
  left: '3%',
  width: 15,
  height: 1,
  tags: true,
  valign: 'middle',
  content: '{center}Brush Color{/center}',
  style: {
    fg: 'black',
    bg: 216,
    focus: {
      bg: 183
    },
    hover: {
      bg: 183
    }
  },
});

brushColorButton.on('click', function (mouse) {
  bgSelect = false;
  brushColorButton.focus();
  screen.render();
});

const canvasColorButton = blessed.box({
  parent: colorPalette,
  top: 4,
  bottom: 1,
  left: '3%',
  width: 15,
  height: 1,
  tags: true,
  valign: 'middle',
  content: '{center}Canvas Color{/center}',
  style: {
    fg: 'black',
    bg: 216,
    focus: {
      bg: 183
    },
    hover: {
      bg: 183
    }
  },
});

canvasColorButton.on('click', function (mouse) {
  bgSelect = true;
  canvasColorButton.focus();
  screen.render();
});

// Paint Boxes

const richerRedPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 20,
  width: 7,
  height: 3,
  style: {
    bg: 160,
  },
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

const coralReefPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 28,
  width: 7,
  height: 3,
  style: {
    bg: 210,
  },
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

const oranginaPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 36,
  width: 7,
  height: 3,
  style: {
    bg: 216,
  },
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

const mellowApricotPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 44,
  width: 7,
  height: 3,
  style: {
    bg: '#FFC476',
  },
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

const goldenRodYellowPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 52,
  width: 7,
  height: 3,
  style: {
    bg: 227,
  },
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

const smintyMintPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 60,
  width: 7,
  height: 3,
  style: {
    bg: 194,
  },
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

const forestedMintPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 68,
  width: 7,
  height: 3,
  style: {
    bg: 115,
  },
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

const sighAnneCyanPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 76,
  width: 7,
  height: 3,
  style: {
    bg: 'cyan',
  },
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

const cloudsBluePaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 84,
  width: 7,
  height: 3,
  style: {
    bg: 117,
  },
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

const turquoiseBluePaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 92,
  width: 7,
  height: 3,
  style: {
    bg: 'light cyan',
  },
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

const violetBluePaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 100,
  width: 7,
  height: 3,
  style: {
    bg: 57,
  },
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

const lovenderPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 108,
  width: 7,
  height: 3,
  style: {
    bg: 183,
  },
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

const madMagentaPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 116,
  width: 7,
  height: 3,
  style: {
    bg: 'magenta',
  },
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

const randoPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 124,
  width: 7,
  height: 3,
  tags: true,
  content: '{center}??{/center}',
  valign: 'middle',
  style: {
    fg: 'black',
    bold: true,
    bg: 194,
  },
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

// LOGO BOX -PARENT
const logoContainer = blessed.box({
  parent: screen,
  left: 0,
  top: 0,
  width: '12%',
  height: '20%',
  tags: true,
  valign: 'middle',
  content: '{center}Logo Placeholder{/center}',
  style: {
    fg: 'black',
    bg: 231,
    bold: true,
  },
});

//TOOL BAR - PARENT
////////////////////////////////////////////////////////////////////////////////////////
const toolBar = blessed.box({
  parent: backgroundBox,
  top: '20%',
  width: '12%',
  height: '74%',
  style: {
    bg: 231,
  },
});

//TOOL BAR - CHILDREN
////////////////////////////////////////////////////////////////////////////////////////
const brushSizeLabel = blessed.box({
  parent: toolBar,
  top: '3%',
  left: 'center',
  width: 15,
  height: 1,
  tags: true,
  content: '{center}Brush Size{/center}',
  style: {
    fg: 'black',
    bold: true,
    bg: 231,
  },
});

const smallBrushButton = blessed.box({
  parent: toolBar,
  top: '12%',
  right: 2,
  width: 2,
  height: 1,
  style: {
    bg: '#393B42',
  },
});

const mediumBrushButton = blessed.box({
  parent: toolBar,
  top: '18%',
  right: 2,
  width: 6,
  height: 3,
  style: {
    bg: '#393B42',
  },
});

const largeBrushButton = blessed.box({
  parent: toolBar,
  top: '29%',
  right: 2,
  width: 9,
  height: 4,
  style: {
    bg: '#393B42',
  },
});

// Random brush
const randomBrushButton = blessed.box({
  parent: toolBar,
  top: '45%',
  right: 2,
  width: 12,
  height: 5,
  valign: 'middle',
  tags: true,
  content: '{center}Random Brush{/center}',
  style: {
    fg: 'black',
    bg: 194,
    bold: true,
    hover: {
      bg: 183
    }
  },
});

const largeEraseButton = blessed.box({
  parent: toolBar,
  top: '63%',
  right: 2,
  width: 9,
  height: 4,
  style: {
    bg: '#A7B3CA',
  },
});

const mediumEraseButton = blessed.box({
  parent: toolBar,
  top: '77%',
  right: 2,
  width: 6,
  height: 3,
  style: {
    bg: '#A7B3CA',
  },
});

const smallEraseButton = blessed.box({
  parent: toolBar,
  top: '88%',
  right: 2,
  width: 2,
  height: 1,
  style: {
    bg: '#A7B3CA',
  },
});

const eraseLabel = blessed.box({
  parent: toolBar,
  top: '97%',
  left: 'center',
  width: 15,
  height: 1,
  tags: true,
  content: '{center}Eraser Size{/center}',
  style: {
    fg: 'black',
    bold: true,
    bg: 231,
  },
});

//CANVAS - PARENT
////////////////////////////////////////////////////////////////////////////////////////
const canvas = blessed.box({
  parent: backgroundBox,
  top: '20%',
  left: '12%',
  width: '88%',
  height: '74%',
  border: {
    type: 'bg',
    ch: ' ',
  },
  style: {
    border: {
      bg: '#A7B3CA',
    },
    bg: 231,
  },
});

const inputContainer = blessed.box({
  parent: backgroundBox,
  top: '94%',
  width: '100%',
  height: '7%',
  tags: true,
  valign: 'middle',
  content: 'input text **********************************',
  style: {
    fg: 227,
    bg: 216
  },
});

screen.key(['escape', 'q', 'C-c'], function (ch, key) {
  return process.exit(0);
});

screen.render();

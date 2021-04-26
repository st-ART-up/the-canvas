const blessed = require('blessed');
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
    fg: 'white',
    bg: 'red',
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
    bg: 231,
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
    bg: 231,
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
    bg: 231,
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
    bg: 231,
  },
});

//COLOR PALETTE BOX - PARENT
////////////////////////////////////////////////////////////////////////////////////////
const colorPalette = blessed.box({
  parent: backgroundBox,
  top: '7%',
  left: '12%',
  width: '88%',
  height: '14%',
  tags: true,
  style: {
    fg: 'white',
    bg: 'blue',
  },
});

//COLOR PALETTE - CHILDREN
////////////////////////////////////////////////////////////////////////////////////////
const brushColorButton = blessed.box({
  parent: colorPalette,
  top: 2,
  left: '5%',
  width: 15,
  height: 1,
  tags: true,
  valign: 'middle',
  content: '{center}Brush Color{/center}',
  style: {
    fg: 'white',
    bg: 'red',
  },
});

const canvasColorButton = blessed.box({
  parent: colorPalette,
  top: 4,
  bottom: 1,
  left: '5%',
  width: 15,
  height: 1,
  tags: true,
  valign: 'middle',
  content: '{center}Canvas Color{/center}',
  style: {
    fg: 'white',
    bg: 'cyan',
  },
});

// Paint Boxes

const whiteStallionPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 25,
  width: 7,
  height: 3,
  tags: true,
  style: {
    fg: 'white',
    bg: 'cyan',
  },
});

const yellowSunPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 33,
  width: 7,
  height: 3,
  tags: true,
  style: {
    fg: 'white',
    bg: 'cyan',
  },
});

const greenPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 41,
  width: 7,
  height: 3,
  tags: true,
  style: {
    fg: 'white',
    bg: 'cyan',
  },
});

const blackPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 49,
  width: 7,
  height: 3,
  tags: true,
  style: {
    fg: 'white',
    bg: 'cyan',
  },
});

const bluePaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 57,
  width: 7,
  height: 3,
  tags: true,
  style: {
    fg: 'white',
    bg: 'cyan',
  },
});

const redPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 65,
  width: 7,
  height: 3,
  tags: true,
  style: {
    fg: 'white',
    bg: 'cyan',
  },
});

const purplePaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 73,
  width: 7,
  height: 3,
  tags: true,
  style: {
    fg: 'white',
    bg: 'cyan',
  },
});

const orangePaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 81,
  width: 7,
  height: 3,
  tags: true,
  style: {
    fg: 'white',
    bg: 'cyan',
  },
});

const pinkPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 89,
  width: 7,
  height: 3,
  tags: true,
  style: {
    fg: 'white',
    bg: 'cyan',
  },
});

const randomPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 97,
  width: 7,
  height: 3,
  tags: true,
  style: {
    fg: 'white',
    bg: 'cyan',
  },
});

const greyPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 105,
  width: 7,
  height: 3,
  tags: true,
  style: {
    fg: 'white',
    bg: 'cyan',
  },
});

const anotherPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 113,
  width: 7,
  height: 3,
  tags: true,
  style: {
    fg: 'white',
    bg: 'cyan',
  },
});

const andMorePaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 121,
  width: 7,
  height: 3,
  tags: true,
  style: {
    fg: 'white',
    bg: 'cyan',
  },
});
// LOGO BOX -PARENT
const logoContainer = blessed.box({
  parent: screen,
  left: 0,
  top: 0,
  width: '12%',
  height: '20%',
  tags: true,
  style: {
    fg: 'white',
    bg: 'light cyan',
  },
});

//TOOL BAR - PARENT
////////////////////////////////////////////////////////////////////////////////////////
const toolBar = blessed.box({
  parent: backgroundBox,
  top: '20%',
  width: '12%',
  height: '74%',
  tags: true,
  style: {
    fg: 'white',
    bg: '#ffc476',
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
    bg: '#ffc476',
  },
});

const smallBrushButton = blessed.box({
  parent: toolBar,
  top: '12%',
  right: 2,
  width: 2,
  height: 1,
  tags: true,
  style: {
    fg: 'white',
    bg: 'cyan',
  },
});

const mediumBrushButton = blessed.box({
  parent: toolBar,
  top: '18%',
  right: 2,
  width: 6,
  height: 3,
  tags: true,
  style: {
    fg: 'white',
    bg: 'cyan',
  },
});

const largeBrushButton = blessed.box({
  parent: toolBar,
  top: '29%',
  right: 2,
  width: 9,
  height: 4,
  tags: true,
  style: {
    fg: 'white',
    bg: 'cyan',
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
    fg: 'white',
    bg: 'magenta',
  },
});

const largeEraseButton = blessed.box({
  parent: toolBar,
  top: '63%',
  right: 2,
  width: 9,
  height: 4,
  tags: true,
  style: {
    fg: 'white',
    bg: 'cyan',
  },
});

const mediumEraseButton = blessed.box({
  parent: toolBar,
  top: '77%',
  right: 2,
  width: 6,
  height: 3,
  tags: true,
  style: {
    fg: 'white',
    bg: 'cyan',
  },
});

const smallEraseButton = blessed.box({
  parent: toolBar,
  top: '88%',
  right: 2,
  width: 2,
  height: 1,
  tags: true,
  style: {
    fg: 'white',
    bg: 'cyan',
  },
});

const eraseLabel = blessed.box({
  parent: toolBar,
  top: '97%',
  left: 'center',
  width: 15,
  height: 1,
  tags: true,
  content: '{center}Eraser{/center}',
  style: {
    fg: 'black',
    bg: '#ffc476',
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
  tags: true,
  border: {
    type: 'bg',
    ch: ' ',
  },
  style: {
    border: {
      bg: 'magenta',
    },
    fg: 'white',
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
    fg: 'white',
    bg: '#c3f0c4'
  },
});

screen.key(['escape', 'q', 'C-c'], function (ch, key) {
  return process.exit(0);
});

screen.render();

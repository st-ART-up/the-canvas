const blessed = require('blessed');

const screen = blessed.screen({
  smartCSR: true,
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

const resizeBox = blessed.box({
  parent: screen,
  top: 'center',
  left: 'center',
  width: '60%',
  height: '60%',
  content: 'click ok to resize your terminal window for optimal view',
  style: {
    bg: 183,
    fg: '#393B42',
  },
});

const resizeButton = blessed.box({
  parent: resizeBox,
  bottom: 2,
  left: 'center',
  width: 7,
  height: 3,
  content: 'OK!',
  style: {
    bg: 194,
    fg: '#393B42',
  },
});

//MENU BAR - PARENT
////////////////////////////////////////////////////////////////////////////////////////
const menuBar = blessed.box({
  parent: backgroundBox,
  top: 0,
  left: 0,
  width: '100%',
  height: '7%',
  tags: true,
  style: {
    bg: 216,
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
  style: {
    bg: 255,
  },
});

// LOGO BOX -PARENT
const logoContainer = blessed.box({
  parent: screen,
  left: 0,
  top: '7%',
  width: '12%',
  height: '13%',
  tags: true,
  valign: 'middle',
  content: '{center}Logo Placeholder{/center}',
  style: {
    fg: '#393B42',
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
  // added for text input ability and scrollbar in small screen
  keys: true,
  mouse: true,
  alwaysScroll: true,
  scrollable: true,
  scrollbar: {
    ch: 'o',
    bg: 117,
  },
});

//INPUT BAR - PARENT
////////////////////////////////////////////////////////////////////////////////////////
const inputContainer = blessed.box({
  parent: backgroundBox,
  top: '94%',
  width: '100%',
  height: 3,
  tags: true,
  valign: 'middle',
  style: {
    fg: 227,
    bg: 216,
  },
});

screen.render();

module.exports = {
  screen,
  menuBar,
  colorPalette,
  toolBar,
  canvas,
  inputContainer,
  resizeButton,
  resizeBox,
};

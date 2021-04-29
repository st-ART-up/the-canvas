const blessed = require('blessed');
const { randomColor } = require('../utils');
const execSync = require('child_process').execSync;
// printf '\e[8;50;150t'


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
    bg: 231,
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
    bg: 183
  }
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
//INPUT BAR - CHILDREN
////////////////////////////////////////////////////////////////////////////////////////
const inputDirectionButton = blessed.button({
  parent: inputContainer,
  name: 'text directions',
  content: '{center}how to\nadd text\n   ---->>{/center}',
  top: 0,
  left: 0,
  width: '12%',
  height: 3,
  shrink: true,
  padding: {
    // top: 1,
    right: 2,
    botton: 1,
    left: 1
  },
  style: {
    bold: true,
    fg: '#393B42',
    bg: 194,
    hover: {
      bg: 183
    }
  },
  tags: true,
  text: {
    align: 'center',
    valign: 'center'
  },
});

// const textDirectionBox = blessed.

const inputBar = blessed.textbox({
  parent: inputContainer,
  // bottom: 1,
  top: 'center',
  left: '13%',
  right: '96%',
  height: 1,
  width: '86%',
  keys: true,
  mouse: true,
  inputOnFocus: true,
  style: {
    fg: 57,
    bg: '#ffef72'
  }
});

inputBar.on('submit', (text) => {
  log(text);
  inputBar.clearValue();
});

const log = (text) => {
  canvas.pushLine(text);
  screen.render();
}

screen.render();

module.exports = {
  screen,
  menuBar,
  colorPalette,
  toolBar,
  canvas
}

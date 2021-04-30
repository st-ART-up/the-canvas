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

const welcomeBox = blessed.box({
  parent: screen,
  top: 13,
  left: 'center',
  width: '60%',
  height: '62%',
  tags: true,
  padding: {
    // top: 1,
    right: 2,
    bottom: 1,
    left: 1,
  },
  content:
    '{center}welcome to {bold}Pixel Pusher{/bold}, where all your pixel art dreams come true...{/center}\n\n\nsome tips:\n\nthe optimal terminal size is {bold}150x50{/bold}\n\nchoose your favorite colors and click on the canvas with your mouse to draw\n\nbrush sizes and erasers are on the left\n\nto start over click the clear button\n\nadd some fun text (a poem, perhaps?) on the canvas using the bottom yellow input bar\n\n\n{bold}Mac Users:{/bold} to save, first click the {bold}login button{/bold} to use your github account then click {bold}save button{/bold} to take a screenshot. next click the {bold}upload button{/bold} to send your art to the gallery.\n\n{bold}Windows Users:{/bold} sad story...you can draw in...{bold}Ubuntu{/bold}, but the upload is not ready for version 1.0, please screenshot your art with the PrtScn key to save forever.\n\nto exit the program, hit escape.\n\nhave a rad time in the terminal like its 1995. party on!!\n\n-the st-ART-up team',
  style: {
    bg: 183,
    fg: '#393B42',
  },
});



const welcomeButton = blessed.box({
  parent: welcomeBox,
  left: 'center',
  top: 29,
  width: 9,
  height: 1,
  tags: true,
  content: '{center}OK!{/center}',
  style: {
    bg: 194,
    fg: '#393B42',
    hover: {
      bg: 216,
    },
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
    fg: 57,
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
  welcomeButton,
  welcomeBox,
};

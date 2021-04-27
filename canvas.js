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
  left: '5%',
  width: 15,
  height: 1,
  tags: true,
  valign: 'middle',
  content: '{center}Brush Color{/center}',
  style: {
    fg: 'black',
    bg: 216,
    hover: {
      bg: 183
    }
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
    fg: 'black',
    bg: 216,
    hover: {
      bg: 183
    }
  }
});

// Paint Boxes

const richerRedPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 25,
  width: 7,
  height: 3,
  style: {
    bg: 160,
  },
});

const coralReefPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 33,
  width: 7,
  height: 3,
  style: {
    bg: 210,
  },
});

const oranginaPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 41,
  width: 7,
  height: 3,
  style: {
    bg: 216,
  },
});

const mellowApricotPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 49,
  width: 7,
  height: 3,
  style: {
    bg: '#FFC476',
  },
});

const goldenRodYellowPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 57,
  width: 7,
  height: 3,
  style: {
    bg: 227,
  },
});

const smintyMintPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 65,
  width: 7,
  height: 3,
  style: {
    bg: 194,
  },
});

const forestedMintPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 73,
  width: 7,
  height: 3,
  style: {
    bg: 115,
  },
});

const sighAnneCyanPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 81,
  width: 7,
  height: 3,
  style: {
    bg: 'cyan',
  },
});

const cloudsBluePaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 89,
  width: 7,
  height: 3,
  style: {
    bg: 117,
  },
});

const turquoiseBluePaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 97,
  width: 7,
  height: 3,
  style: {
    bg: 'light cyan',
  },
});

const violetBluePaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 105,
  width: 7,
  height: 3,
  style: {
    bg: 57,
  },
});

const lovenderPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 113,
  width: 7,
  height: 3,
  style: {
    bg: 183,
  },
});

const madMagentaPaintBox = blessed.box({
  parent: colorPalette,
  top: 2,
  left: 121,
  width: 7,
  height: 3,
  style: {
    bg: 'magenta',
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

module.exports = {
  screen,
  clearButton,
  canvas
}

const blessed = require('blessed');
const { colorPalette, canvas } = require('./startup-screen');

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
      fg: '#393B42',
      bg: 194,
      hover: {
        bg: 183
      },
      focus: {
        bg: 183
      },
    },
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
      fg: '#393B42',
      bg: 194,
      hover: {
        bg: 183
      },
      focus: {
        bg: 183
      },
    },
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
      fg: '#393B42',
      bold: true,
      bg: 194,
    },
  });
  
  
  module.exports = {
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
  }
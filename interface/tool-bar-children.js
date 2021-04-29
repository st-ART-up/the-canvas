const blessed = require('blessed');
const { toolBar } = require('./startup-screen');

const brushSizeLabel = blessed.box({
    parent: toolBar,
    top: '3%',
    left: 'center',
    width: 15,
    height: 1,
    tags: true,
    content: '{center}Brush Size{/center}',
    style: {
      fg: '#393B42',
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
      hover: {
        bg: 7,
      },
      focus: {
        bg: 7,
      },
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
      hover: {
        bg: 7,
      },
      focus: {
        bg: 7,
      },
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
      hover: {
        bg: 7,
      },
      focus: {
        bg: 7,
      },
    },
  });

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
      fg: '#393B42',
      bg: 194,
      bold: true,
      hover: {
        bg: 183,
      },
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
      hover: {
        bg: 117,
      },
      focus: {
        bg: 117,
      },
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
      hover: {
        bg: 117,
      },
      focus: {
        bg: 117,
      },
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
      hover: {
        bg: 117,
      },
      focus: {
        bg: 117,
      },
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
      fg: '#393B42',
      bold: true,
      bg: 231,
    },
  });
  
  module.exports = {
      brushSizeLabel,
      smallBrushButton,
      mediumBrushButton,
      largeBrushButton,
      randomBrushButton,
      largeEraseButton,
      mediumEraseButton,
      smallEraseButton,
      eraseLabel
  }
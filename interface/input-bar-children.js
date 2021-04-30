const blessed = require('blessed');
const { inputContainer } = require('./startup-screen');

const inputDirectionButton = blessed.button({
  parent: inputContainer,
  name: 'input directions',
  content: '{center}how to\nadd text\n   ---->>{/center}',
  top: 0,
  left: 0,
  width: '12%',
  height: 3,
  shrink: true,
  padding: {
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

const inputDirectionBox = blessed.box({
  parent: inputContainer,
  name: 'input directions explained',
  content: '{center}use the mouse to click on the yellow input bar, use your keyboard to type! press ENTER to send your text to the canvas... rinse + repeat. {/center}',
  top: 0,
  left: 0,
  width: '100%',
  height: 3,
  shrink: true,
  padding: {
    // top: 1,
    right: 2,
    bottom: 1,
    left: 8
  },
  style: {
    bold: true,
    fg: '#393B42',
    bg: 194,
  },
  tags: true,
  valign: 'middle'
});

inputDirectionBox.hide();

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
    bg: '#FFEF72'
  }
});

  module.exports = {
      inputDirectionButton,
      inputDirectionBox,
      inputBar
  }
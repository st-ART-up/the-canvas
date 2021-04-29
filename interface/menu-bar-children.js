const blessed = require('blessed');
const { menuBar } = require('./startup-screen');

const saveButton = blessed.box({
    parent: menuBar,
    top: 'center',
    left: '2%',
    width: '10%',
    height: '60%',
    tags: true,
    content: '{center}save{/center}',
    style: {
      fg: 'black',
      bg: 227,
      hover: {
        bg: 194,
      },
    },
  });
  
  const uploadButton = blessed.box({
    parent: menuBar,
    top: 'center',
    left: '14%',
    width: '10%',
    height: '60%',
    tags: true,
    content: '{center}upload{/center}',
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
    left: '26%',
    width: '10%',
    height: '60%',
    tags: true,
    content: '{center}clear{/center}',
    style: {
      fg: 'black',
      bg: 227,
      hover: {
        bg: 194,
      },
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
        bg: 194,
      },
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
        bg: 194,
      },
    },
  });
  
  module.exports = {
      saveButton,
      uploadButton,
      clearButton,
      galleryButton,
      studioButton
  }
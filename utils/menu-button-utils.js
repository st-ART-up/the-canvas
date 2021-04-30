const blessed = require('blessed');
const { screen, canvas } = require('../interface/startup-screen');
const imgur = require('./imgur-utils');
const saveToDb = require('./api-utils');

function clearCanvas(paint) {
  paint.destroy();
  canvas.setContent('');
  //CLEAR RANDOM BRUSH ALSO
  screen.render();
}

module.exports = {
  clearCanvas,
};

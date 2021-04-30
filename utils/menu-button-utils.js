const { screen, canvas } = require('../interface/startup-screen');

function clearCanvas(paint) {
  paint.destroy();
  canvas.setContent('');
  screen.render();
}

module.exports = {
  clearCanvas,
};

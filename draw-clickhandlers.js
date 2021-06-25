const blessed = require('blessed');
const execSync = require('child_process').execSync;

module.exports = () => {
  // blessed element imports
  const {
    screen,
    canvas,
    welcomeButton,
    welcomeBox,
  } = require('./interface/startup-screen');
  const {
    saveButton,
    uploadButton,
    loginButton,
    logoutButton,
  } = require('./interface/menu-bar-children');
  const {
    brushColorButton,
    canvasColorButton,
    richerRedPaintBox,
    coralReefPaintBox,
    oranginaPaintBox,
    mellowApricotPaintBox,
    goldenRodYellowPaintBox,
    whiteStallionPaintBox,
    forestedMintPaintBox,
    sighAnneCyanPaintBox,
    cloudsBluePaintBox,
    turquoiseBluePaintBox,
    violetBluePaintBox,
    lovenderPaintBox,
    madMagentaPaintBox,
    randoPaintBox,
  } = require('./interface/color-palette-children');
  const {
    smallBrushButton,
    mediumBrushButton,
    largeBrushButton,
    randomBrushButton,
    largeEraseButton,
    mediumEraseButton,
    smallEraseButton,
  } = require('./interface/tool-bar-children');
  const { form } = require('./interface/upload-form');
  const {
    inputDirectionButton,
    inputDirectionBox,
    inputBar,
  } = require('./interface/input-bar-children');

  // utils imports
  const { newBrushStroke, randomBrushStroke } = require('./utils/draw-utils');
  const { randomColor } = require('./utils/color-utils');
  const { saveToDb } = require('./utils/api-utils');
  const imgur = require('./utils/imgur-utils');
  const auth = require('./utils/auth-utils');

  let token = '';
  let drawColor = randomColor();
  let bgSelect = false;
  let brush = {
    width: 2,
    height: 1,
    transparent: true,
  };
  let randomBrush = false;
  let offset = {
    y: 11,
    x: 20,
  };

  const setcolor = (x) => {
    if (bgSelect) {
      canvas.style.bg = x;
      screen.render();
    } else {
      drawColor = x;
      screen.render();
    }
  };

  welcomeButton.on('click', function (mouse) {
    welcomeBox.hide();
    screen.render();
  });

  // canvas clickhandler
  canvas.on('click', function (mouse) {
    if (randomBrush === false) {
      newBrushStroke(mouse, drawColor, brush, offset);
    } else {
      randomBrushStroke(mouse);
    }
  });

  // menu bar clickhandlers
  saveButton.on('click', function (mouse) {
    const output = execSync(
      `screencapture -i ${__dirname}/photos/yourawesomeart.png`,
      {
        encoding: 'utf-8',
      }
    );
  });

  uploadButton.on('click', function (mouse) {
    if (token) {
      form.show();
      screen.render();
    } else {
      const loginWarning = blessed.box({
        parent: screen,
        left: 'center',
        top: 'center',
        width: '25%',
        height: '15%',
        style: {
          bg: 210,
        },
        tags: true,
        content:
          '{center}\nplease login to upload\n\n\nclick here to close{/center}',
      });
      loginWarning.on('click', function (mouse) {
        loginWarning.hide();
        screen.render();
      });
      screen.render();
    }
  });

  form.on('submit', async function (data) {
    const drawingUrl = await imgur();
    // append box with form
    const png = {
      drawingUrl: drawingUrl,
      token: token,
      title: data.title,
      caption: data.caption,
    };
    // form sent to db /POST
    saveToDb(png);
    form.hide();
    screen.render();
  });

  loginButton.on('click', async function (mouse) {
    token = await auth();
    loginButton.hide();
    logoutButton.show();
    screen.render();
  });

  logoutButton.on('click', function (mouse) {
    token = '';
    loginButton.show();
    logoutButton.hide();
    screen.render();
  });

  // color palette clickhandlers
  brushColorButton.on('click', function (mouse) {
    bgSelect = false;
    brushColorButton.focus();
    screen.render();
  });

  canvasColorButton.on('click', function (mouse) {
    bgSelect = true;
    canvasColorButton.focus();
    screen.render();
  });

  richerRedPaintBox.on('click', function (mouse) {
    setcolor(160);
  });

  coralReefPaintBox.on('click', function (mouse) {
    setcolor(210);
  });

  oranginaPaintBox.on('click', function (mouse) {
    setcolor(216);
  });

  mellowApricotPaintBox.on('click', function (mouse) {
    setcolor('#FFC476');
  });

  goldenRodYellowPaintBox.on('click', function (mouse) {
    setcolor(227);
  });

  whiteStallionPaintBox.on('click', function (mouse) {
    setcolor(231);
  });

  forestedMintPaintBox.on('click', function (mouse) {
    setcolor(115);
  });

  sighAnneCyanPaintBox.on('click', function (mouse) {
    setcolor('cyan');
  });

  cloudsBluePaintBox.on('click', function (mouse) {
    setcolor(117);
  });

  turquoiseBluePaintBox.on('click', function (mouse) {
    setcolor('light cyan');
  });

  violetBluePaintBox.on('click', function (mouse) {
    setcolor(57);
  });

  lovenderPaintBox.on('click', function (mouse) {
    setcolor(183);
  });

  madMagentaPaintBox.on('click', function (mouse) {
    setcolor('magenta');
  });

  randoPaintBox.on('click', function (mouse) {
    setcolor(randomColor());
  });

  // toolbar clickhandlers
  smallBrushButton.on('click', function (mouse) {
    brush = {
      width: 2,
      height: 1,
      transparent: true,
    };
    randomBrush = false;
  });

  mediumBrushButton.on('click', function (mouse) {
    brush = {
      width: 6,
      height: 3,
      transparent: true,
    };
    randomBrush = false;
  });

  largeBrushButton.on('click', function (mouse) {
    brush = {
      width: 9,
      height: 4,
      transparent: true,
    };
    randomBrush = false;
  });

  //fix random brush width/size/paint multiple boxes at once
  randomBrushButton.on('click', function (mouse) {
    randomBrush = true;
  });

  largeEraseButton.on('click', function (mouse) {
    brush = {
      width: 9,
      height: 4,
      transparent: false,
    };
    randomBrush = false;
    drawColor = canvas.style.bg;
  });

  mediumEraseButton.on('click', function (mouse) {
    brush = {
      width: 6,
      height: 3,
      transparent: false,
    };
    randomBrush = false;
    drawColor = canvas.style.bg;
  });

  smallEraseButton.on('click', function (mouse) {
    brush = {
      width: 2,
      height: 1,
      transparent: false,
    };
    randomBrush = false;
    drawColor = canvas.style.bg;
  });

  smallEraseButton.on('click', function (mouse) {
    brush = {
      width: 2,
      height: 1,
      transparent: false,
    };
    drawColor = canvas.style.bg;
  });

  // input clickhandlers and eventhandler
  inputBar.on('submit', (text) => {
    log(text);
    inputBar.clearValue();
  });

  const log = (text) => {
    canvas.pushLine(text);
    screen.render();
  };

  inputDirectionButton.on('click', function (mouse) {
    inputDirectionBox.toggle();
    inputBar.toggle();
    screen.render();
  });

  // screen.key(['u'], function (ch, key){
  //   undoButton.deleteLine(i);
  //   screen.render();
  // });

  screen.key(['escape'], function (ch, key) {
    screen.destroy();
  });

  screen.render();
};


// let { drawColor, bgColor, bgSelect } = require('./interface/startup-screen');

function randomColor() {
    return [Math.random() * 255, Math.random() * 255, Math.random() * 255]
};

// function colorSelect(x) {
//     if (bgSelect === true) {
//         bgColor = x;
//         screen.render();
//     } else {
//         drawColor = x;
//         screen.render();
//     }
// };

module.exports = { randomColor };
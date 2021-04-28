const blessed = require('blessed');
const { screen, canvas } = require('../interface/startup-screen');
const imgur = require('./imgur-utils');
const saveToDb = require('./api-utils');


function clearCanvas(paint) {
    paint.destroy();
    screen.render();
}

async function uploadPng() {
// get file path from save function
const drawingUrl = await imgur();
console.log(drawingUrl, 'url');
// append box with form
const png = {
    drawingUrl,
    artist: 'Basquiat', 
    title: 'bacon and eggs, make it vegan', 
    caption: 'not much to eat, but it looks ok'
}
// form sent to db /POST 
saveToDb(png);

// console.log('success is ours to keep');
}


module.exports = {
    clearCanvas,
    uploadPng
}
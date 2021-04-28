const blessed = require('blessed');
const { screen, canvas } = require('../interface/startup-screen');
const imgur = require('./imgur-utils');
const saveToDb = require('./api-utils');


function clearCanvas(paint) {
    paint.destroy();
    screen.render();
}

function uploadPng(png) {
// get file path from save function
const imgurl = imgur();
// append box with form
const title = 'this is my fav title';
const caption = 'my art rules buy my nft';
const artist = 'Basquiat';
// form sent to db /POST 
saveToDb({ imgurl, artist, title, caption });

module.exports = {
    clearCanvas
}
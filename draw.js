#!/usr/bin/env node
const draw = require('./draw-clickhandlers');
const { titleScreen } = require('./title-screen');

function start(callback) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve();
    }, 5000);  
  })
}

start(titleScreen).then(draw);
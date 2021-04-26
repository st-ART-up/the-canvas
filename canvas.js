const blessed = require('blessed');
const execSync = require('child_process').execSync;

const screen = blessed.screen({
    smartCSR: true
});

//MENU BAR - PARENT 
////////////////////////////////////////////////////////////////////////////////////////
const menuBar = blessed.box({
    parent: screen,
    top: 0,
    left: '20%',
    width: '80%',
    height: '10%',
    tags: true,
    style: {
        fg: 'white',
        bg: 'red'
    }
})

//MENU BAR - CHILDREN 
////////////////////////////////////////////////////////////////////////////////////////
const saveButton = blessed.box({
    parent: menuBar,
    top: 'center',
    left: '5%',
    width: '10%',
    height: '60%',
    tags: true,
    content: '{center}save{/center}',
    style: {
        fg: 'black',
        bg: 'snow'
    }
})

const clearButton = blessed.box({
    parent: menuBar,
    top: 'center',
    left: '20%',
    width: '10%',
    height: '60%',
    tags: true,
    content: '{center}clear{/center}',
    style: {
        fg: 'black',
        bg: 'snow'
    }
})

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
        bg: 'snow'
    }
})

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
        bg: 'snow'
    }
})


const colorPalette = blessed.box({
    parent: screen,
    top: '10%',
    left: '20%',
    width: '80%',
    height: '10%',
    tags: true,
    style: {
        fg: 'white',
        bg: 'blue'
    }
})

const canvas = blessed.box({
    parent: screen,
    top: '20%',
    left: '20%',
    width: '80%',
    height: '70%',
    tags: true,
    border: {
        type: 'bg',
        ch: ' '
    },
    style: {
        border: {
            bg: 'magenta',
        },
        fg: 'white',
        bg: 'snow'
    }
})

const inputContainer = blessed.box({
    parent: screen,
    top: '90%',
    width: '100%',
    height: '10%',
    tags: true,
    style: {
        fg: 'white',
        bg: '#c3f0c4',
        transparent: true,
    }
})

const toolBar = blessed.box({
    parent: screen,
    width: '20%',
    height: '90%',
    tags: true,
    style: {
        fg: 'white',
        bg: '#ffc476'
    }
})

screen.key(['escape', 'q', 'C-c'], function (ch, key) {
    return process.exit(0);
});

screen.render();

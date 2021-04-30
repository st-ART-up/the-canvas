const blessed = require('blessed');
const { screen } = require('./startup-screen');

const form = blessed.form({
  parent: screen,
  keys: true,
  left: 'center',
  top: 'center',
  width: '25%',
  height: '45%',
  bg: '#ffc476',
  autoNext: true,
  tags: true,
  content: '{center}Upload Art{/center}',
});

form.hide();

const titleLabel = blessed.text({
  parent: form,
  top: 5,
  left: 2,
  bg: '#ffc476',
  content: 'Title:',
});

const title = blessed.Textbox({
  parent: form,
  name: 'title',
  top: 6,
  height: 1,
  left: 2,
  right: 2,
  bg: 231,
  fg: 'black',
  keys: true,
  mouse: true,
  inputOnFocus: true,
  content: 'Title:',
});

const captionLabel = blessed.text({
  parent: form,
  top: 8,
  left: 2,
  bg: '#ffc476',
  content: 'Caption:',
});

const caption = blessed.Textbox({
  parent: form,
  name: 'caption',
  top: 9,
  height: 1,
  left: 2,
  right: 2,
  bg: 231,
  fg: 'black',
  keys: true,
  mouse: true,
  inputOnFocus: true,
});

const infoLabel = blessed.text({
  parent: form,
  top: 11,
  left: 2,
  bg: '#ffc476',
  content:
    'Use arrow keys to move between input fields.\n\nEnter your information then click submit to upload your rad artwork.',
});

const submit = blessed.button({
  parent: form,
  mouse: true,
  keys: true,
  shrink: true,
  padding: {
    left: 1,
    right: 1,
  },
  left: 10,
  bottom: 2,
  name: 'submit',
  content: 'submit',
  style: {
    bg: 194,
    focus: {
      bg: 194,
    },
    hover: {
      bg: 227,
    },
  },
});

const cancel = blessed.button({
  parent: form,
  mouse: true,
  keys: true,
  shrink: true,
  padding: {
    left: 1,
    right: 1,
  },
  left: 20,
  bottom: 2,
  name: 'cancel',
  content: 'cancel',
  style: {
    bg: 183,
    focus: {
      bg: 183,
    },
    hover: {
      bg: 227,
    },
  },
});

submit.on('press', function () {
  form.submit();
});

cancel.on('press', function () {
  form.hide();
  screen.render();
});

title.focus();

module.exports = {
  form
}
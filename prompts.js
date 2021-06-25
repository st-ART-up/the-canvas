const welcomePrompt = {
  type: 'list',
  message: 'Welcome to the Gallery!!!!!!!',
  name: 'option',
  choices: ['Show me the art!', 'Log in to edit my drawings', 'Exit'],
};

const userPrompt = {
  type: 'list',
  message: 'Welcome to the Studio!!!!!!',
  name: 'option',
  choices: [
    'View my drawings',
    'Delete a drawing by its ID',
    'Go back to main menu',
  ],
};

const galleryPrompt = {
  type: 'list',
  message: 'View finder',
  name: 'option',
  choices: ['View all drawings', 'View image carousel', 'Go back to main menu'],
};

const deletePrompt = {
  type: 'input',
  message: 'Enter the ID of the piece you would like to delete.',
  name: 'deleteIt',
};

const loginPrompt = {
  type: 'confirm',
  message: 'Log in with your Github account?',
  name: 'githubAuth',
};

const exitPrompt = {
  type: 'confirm',
  message: 'Take another spin on the carousel?',
  name: 'exit',
};

module.exports = {
  welcomePrompt,
  galleryPrompt,
  deletePrompt,
  loginPrompt,
  userPrompt,
  exitPrompt,
};

const welcomePrompt = {
  type: 'list',
  message: 'Welcome to the gallery.',
  name: 'option',
  choices: ['show me the art!', 'log in to edit my drawings', 'Exit'],
};

const userPrompt = {
  type: 'list',
  message: 'Artist page',
  name: 'option',
  choices: [
    'view my drawings',
    'delete a drawing by its ID',
    'Go back to main menu \n',
  ],
};

const galleryPrompt = {
  type: 'list',
  message: 'Welcome to the Gallery!',
  name: 'option',
  choices: [
    'View all drawings',
    'View random drawings',
    'View image carousel',
    'Go back to main menu',
  ],
};

const deletePrompt = {
  type: 'input',
  message: 'Enter the ID of the piece you would like to delete.',
  name: 'deleteIt',
};

const loginPrompt = {
  type: 'confirm',
  message: 'log in with your github account?',
  name: 'githubAuth',
};

module.exports = {
  welcomePrompt,
  galleryPrompt,
  deletePrompt,
  loginPrompt,
  userPrompt,
};

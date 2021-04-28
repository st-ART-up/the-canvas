const inquirer = require('inquirer');
const { saveNewImagePrompt } = require('./prompts');
const auth = require('./utils/auth-utils');
const draw = require('./draw');
const {
  anonymousGalleryPrompt,
  canvasPrompt,
  canvasStudioGalleryPrompt,
  welcomePrompt,
  studioPrompt,
  deletePrompt,
  loginPrompt,
} = require('./prompts');
const {
  getAllImages,
  getRandomImage,
  getUserDrawings,
  logUserIn,
} = require('./utils/gallery-utils');

const stARTupSkeleton = (newPrompt) => {
  inquirer
    .prompt({
      type: newPrompt.type,
      message: newPrompt.message,
      name: newPrompt.name,
      choices: newPrompt.choices,
    })
    .then((response) => {
      switch (response.option) {
        case 'log me in!':
          logInSkeleton();
          break;
        case 'Take me to the gallery anonymously':
          stARTupSkeleton(anonymousGalleryPrompt);
          break;
        case 'Exit':
          console.log('See you later!');
          break;
        case 'Visit the canvas':
          draw();
          break;
        case 'Visit your studio':
          stARTupSkeleton(studioPrompt);
          break;
        case 'Visit the gallery':
          stARTupSkeleton(anonymousGalleryPrompt);
          break;
        case 'Create a new drawing':
          console.log('Goes to a new drawing');
          break;
        case 'Continue work on existing drawing':
          console.log('Goes to a existing drawing to change it');
          break;
        case 'View your drawings':
          getUserDrawings().then(stARTupSkeleton(studioPrompt));
          break;
        case 'Delete a drawing':
          console.log('Goes to delete a drawing');
          break;
        case 'View all drawings':
          getAllImages().then(stARTupSkeleton(anonymousGalleryPrompt));
          break;
        case 'View random drawings':
          getRandomImage().then(stARTupSkeleton(anonymousGalleryPrompt));
          break;
      }
    });
};

let startupUser;

const logInSkeleton = () => {
  inquirer.prompt(loginPrompt).then((response) => {
    if (response.githubAuth === true) {
      auth()
        .then((token) => logUserIn(token))
        .then(stARTupSkeleton(canvasStudioGalleryPrompt));
    } else {
      console.log('Please create a github account to log in to stARTup');
    }
  });
};

const deleteSkeleton = () => {
  inquirer.prompt(deletePrompt).then((response) => {
    response.deleteIt;
  });
};

const saveSkeleton = () => {
  inquirer
    .prompt(saveNewImagePrompt)
    .then((res) => console.log(res.fileUrl, res.title, res.description));
};

stARTupSkeleton(welcomePrompt);
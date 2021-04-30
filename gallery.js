const inquirer = require('inquirer');
const auth = require('./utils/auth-utils');
const {
  galleryPrompt,
  welcomePrompt,
  deletePrompt,
  loginPrompt,
  userPrompt,
  exitPrompt,
} = require('./prompts');
const {
  deleteADrawing,
  getAllImages,
  getRandomImage,
  getUserDrawings,
  logUserIn,
} = require('./utils/gallery-utils');

module.exports = () => {
  const stARTupSkeleton = (newPrompt) => {
    return inquirer
      .prompt({
        type: newPrompt.type,
        message: newPrompt.message,
        name: newPrompt.name,
        choices: newPrompt.choices,
      })
      .then((response) => {
        switch (response.option) {
          case 'Log in to edit my drawings':
            logInSkeleton();
            break;
          case 'Show me the art!':
            stARTupSkeleton(galleryPrompt);
            break;
          case 'Exit':
            console.log('See you later!');
            break;
          case 'View your drawings':
            getUserDrawings().then(() => stARTupSkeleton(galleryPrompt));
            break;
          case 'View all drawings':
            getAllImages().then(() => stARTupSkeleton(galleryPrompt));
            break;
          case 'View image carousel':
            getRandomImage().then(() => exitSkeleton());
            break;
          case 'View my drawings':
            getUserDrawings(userToken).then(() => stARTupSkeleton(userPrompt));
            break;
          case 'Delete a drawing by its ID':
            deleteSkeleton(userToken);
            break;
          case 'Go back to main menu':
            stARTupSkeleton(welcomePrompt);
        }
      });
  };
  let userToken;
  const logInSkeleton = () => {
    inquirer.prompt(loginPrompt).then((response) => {
      if (response.githubAuth === true) {
        auth().then((token) => {
          logUserIn(token), stARTupSkeleton(userPrompt), (userToken = token);
        });
      } else {
        console.log('Please create a github account to log in to stARTup');
      }
    });
  };

  const deleteSkeleton = (userToken) => {
    inquirer.prompt(deletePrompt).then((response) => {
      deleteADrawing(response.deleteIt, userToken),
        console.log('DELETED FOREVER'),
        stARTupSkeleton(userPrompt);
    });
  };
  const exitSkeleton = () => {
    inquirer.prompt(exitPrompt).then((response) => {
      if (response.exit === true) {
        getRandomImage().then(() => exitSkeleton());
      } else {
        stARTupSkeleton(galleryPrompt);
      }
    });
  };

  stARTupSkeleton(welcomePrompt);
};

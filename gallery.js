#!/usr/bin/env node

const inquirer = require('inquirer');
const auth = require('./utils/auth-utils');
const {
  galleryPrompt,
  welcomePrompt,
  deletePrompt,
  loginPrompt,
  userPrompt,
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
          case 'log in to edit my drawings':
            logInSkeleton();
            break;
          case 'show me the art!':
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
          case 'View random drawings':
            getRandomImage().then(() => stARTupSkeleton(galleryPrompt));
            break;
          case 'view my drawings':
            getUserDrawings(userToken).then(() => stARTupSkeleton(userPrompt));
            //   console.log('getall', userToken);
            break;
          case 'delete a drawing by its ID':
            deleteSkeleton(userToken).then(() => {
              console.log('DELETED FOREVER'), stARTupSkeleton(userPrompt);
            });
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
          // deleteSkeleton(token),
          logUserIn(token), stARTupSkeleton(userPrompt), (userToken = token);
        });
      } else {
        console.log('Please create a github account to log in to stARTup');
      }
    });
  };

  const deleteSkeleton = (token) => {
    inquirer.prompt(deletePrompt).then((response) => {
      // deleteADrawing(response.deleteIt, token);
      console.log('userToken:', token);
    });
  };

  stARTupSkeleton(welcomePrompt);
};

const axios = require('axios');
const express = require('express');
const app = express();
const open = require('open');

const receiveCode = async () => {
  return new Promise((resolve) => {
    const PORT = process.env.PORT || 3000;
    const server = app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Started on ${PORT}`);
    });

    // GitHub OAuth endpoint for user verification, the sent to redirect URI
    open(
      `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_REDIRECT_URI}&scopes=read:user`
    );

    // redirect URI with temp code set as query param
    app.use('/api/v1/auth', (req) => {
      resolve(req.query.code);
      server.close();

      console.log('Close Browser Window to Continue'); // may not be needed depending on Inquirer flow
    });
  });
};

const exchangeCodeForToken = async (code) => {
  const { data } = await axios({
    url: 'https://github.com/login/oauth/access_token',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_SECRET,
      code,
    }),
  });
  return data.access_token;
};

module.exports = async () => {
  const code = await receiveCode();
  const token = await exchangeCodeForToken(code);
  return token;
};

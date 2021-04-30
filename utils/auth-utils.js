const axios = require('axios');
const express = require('express');
const app = express();
const open = require('open');
const URL = 'https://st-art-up.herokuapp.com/api/v1';

const receiveCode = async () => {
  return new Promise((resolve) => {
    const PORT = process.env.PORT || 3000;
    const server = app.listen(PORT, () => { });

    // GitHub OAuth endpoint for user verification, the sent to redirect URI
    open(
      `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_REDIRECT_URI}&scopes=read:user`
    );

    // redirect URI with temp code set as query param
    app.use('/api/v1/auth', (req) => {
      resolve(req.query.code);
      server.close();
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

const logUserIn = async (token) => {
  await axios({
    method: 'post',
    url: `${URL}/artists`,
    data: {
      token,
    },
  });
};

module.exports = async () => {
  const code = await receiveCode();
  const token = await exchangeCodeForToken(code);
  await logUserIn(token);
  return token;
};

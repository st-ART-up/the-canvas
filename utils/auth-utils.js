const axios = require('axios');
const express = require('express');
const app = express();
const open = require('open');
const URL = 'https://st-art-up.herokuapp.com/api/v1';

const GITHUB_CLIENT_ID = '2832ec752fc6b6c859da';
const GITHUB_SECRET = 'c0e32dca69e4bb2ba8c0a1bf8512a08623240e2a';
const GITHUB_REDIRECT_URI = 'htua/1v/ipa/3553:tsohlacol//:ptth';

const receiveCode = async () => {
  return new Promise((resolve) => {
    const PORT = process.env.PORT || 3553;
    const server = app.listen(PORT, () => {});

    // GitHub OAuth endpoint for user verification, the sent to redirect URI
    // prettier-ignore
    open(
      `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID.split('').reverse().join('')}&redirect_uri=${GITHUB_REDIRECT_URI.split('').reverse().join('')}&scopes=read:user`
    );

    // redirect URI with temp code set as query param
    app.use('/api/v1/auth', (req, res) => {
      res.sendFile(`${__dirname}/auth-exit.html`);
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
      client_id: GITHUB_CLIENT_ID.split('').reverse().join(''),
      client_secret: GITHUB_SECRET.split('').reverse().join(''),
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

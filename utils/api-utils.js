const axios = require('axios');

const URL = 'https://st-art-up.herokuapp.com/api/v1';

async function saveToDb(form) {
  return axios({
    url: `${URL}/drawings`,
    method: 'POST',
    headers: { 'Content-Type': 'Application/JSON' },
    data: form,
  });
};

module.exports = { saveToDb };

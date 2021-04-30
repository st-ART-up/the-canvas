const axios = require('axios');
const fs = require('fs').promises;

const URL = 'https://st-art-up.herokuapp.com/api/v1';
// const URL = 'http://localhost:7890/api/v1'

module.exports = async (form) => {
  return axios({
    url: `${URL}/drawings`,
    method: 'POST',
    headers: { 'Content-Type': 'Application/JSON' },
    data: form,
  });
};

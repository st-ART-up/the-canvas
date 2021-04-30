const axios = require('axios');
const fs = require('fs').promises;

const URL = 'https://st-art-up.herokuapp.com/api/v1';
// const URL = 'http://localhost:7890/api/v1'

module.exports = async (form) => {
  return axios({
    url: `${URL}/drawings`,
    method: 'POST',
<<<<<<< HEAD
    headers: {},
    data: form,
  }).then((data) => console.log(data));
=======
    headers: { "Content-Type": "Application/JSON" },
    data: form,
  });
>>>>>>> 30531dfa1f57c4c757d0858748cd64e32bceface
};

const axios = require('axios');
const fs = require('fs').promises;

module.exports = async (form) => {

    return axios({
        url: 'https://st-art-up.herokuapp.com/api/v1/drawings',
        method: 'POST',
        headers: {
        },
        data: form
    })
        .then((data) => console.log(data));
};
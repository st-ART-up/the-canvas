const axios = require('axios');
const fs = require('fs').promises;

IMGUR_CLIENT_ID = 'b081fc8322ae0ff';

module.exports = async () => {
  const data = await fs.readFile(`${__dirname}/../photos/yourawesomeart.png`);
  return axios({
    url: 'https://api.imgur.com/3/image',
    method: 'POST',
    headers: {
      Authorization: `Client-ID ${IMGUR_CLIENT_ID.split('')
        .reverse()
        .join('')}`,
    },
    data: data,
  })
    .then((data) => data.data.data)
    .then(({ link }) => link);
};

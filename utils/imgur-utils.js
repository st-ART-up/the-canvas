const axios = require('axios');
const fs = require('fs').promises;

module.exports = async () => {

    // change static file to a file path fed in through parameters once we know how we receive canvas files
    const data = await fs.readFile(`${__dirname}/photos/yourawesomeart.png`);

    return axios({
        url: 'https://api.imgur.com/3/image',
        method: 'POST',
        headers: {
            Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`,
        },
        data: data
    })
        .then((data) => data.data.data)
        .then(({ link }) => link);
};


// to test output, change module.exports to const imgurPost
// save and run below command in console after removing comments
// node -r dotenv/config ./lib/utils/imgur.js

// const testRun = async () => {
//     console.log(await imgurPost());
// }
// testRun();

// return from data.data.data above
// delete hash can be used in conjunction with endpoint to remove from imgur on gallery delete if wanted
// {
//     data: {
//  **   id: 'oHVSMC6',
//  **   title: null,
//  **   description: 'yollo',
//       datetime: 1619145419,
//       type: 'image/jpeg',
//       animated: false,
//       width: 1920,
//       height: 1080,
//       size: 386915,
//       views: 0,
//       bandwidth: 0,
//       vote: null,
//       favorite: false,
//       nsfw: null,
//       section: null,
//       account_url: null,
//       account_id: 0,
//       is_ad: false,
//       in_most_viral: false,
//       has_sound: false,
//       tags: [],
//       ad_type: 0,
//       ad_url: '',
//       edited: '0',
//       in_gallery: false,
//  **   deletehash: 'C1XbIcSvO0tE5NU',
//       name: '',
//  **   link: 'https://i.imgur.com/oHVSMC6.jpg' 
//     },
//     success: true,
//     status: 200
//   }
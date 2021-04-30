const { default: axios } = require('axios');
const displayImage = require('display-image');

// const URL = 'http://localhost:7890/api/v1';
const URL = 'https://st-art-up.herokuapp.com/api/v1';

const getAllImages = async () => {
  const allImages = await axios.get(`${URL}/drawings/all`);
  allImages.data.forEach((element) => {
    displayImage
      .fromURL(element.drawingUrl)
      .then((image) => console.log(image, 'Press arrows keys to continue'));
  });
};

const getRandomImage = async () => {
  const randomImage = await axios.get(`${URL}/1`);

  displayImage
    .fromURL(randomImage.data[0].image)
    .then((image) => console.log(image, 'Press arrows keys to continue'));
  console.log(`

  ${randomImage.data[0].character}
  ${randomImage.data[0].quote}`);
};

const getUserDrawings = async (token) => {
  const allDrawings = await axios({
    method: 'get',
    url: `${URL}/drawings/`,
    data: {
      token,
    },
  });
  allDrawings.data.forEach((element) => {
    displayImage
      .fromURL(element.drawingUrl)
      .then((image) => console.log(image, 'ID: ', element.id));
    // console.log('return info:', element.);
  });
  console.log('Press any key to continue');
};

const deleteADrawing = async (id, token) => {
  await axios({
    method: 'delete',
    url: `${URL}/drawings/${id}`,
    data: {
      token,
    },
  });
};
const logUserIn = async (token) => {
  // console.log(token);
  await axios({
    method: 'post',
    url: `${URL}/artists`,
    data: {
      token,
    },
  })
    .then((res) => displayImage.fromURL(res.data.avatar))
    .then((image) => console.log(image, 'Press arrows keys to continue'));
};

module.exports = {
  deleteADrawing,
  getAllImages,
  getRandomImage,
  getUserDrawings,
  logUserIn,
};

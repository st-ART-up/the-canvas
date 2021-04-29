const { default: axios } = require('axios');
const displayImage = require('display-image');

const URL = 'https://st-art-up.herokuapp.com/api/v1/drawings';

const getAllImages = async () => {
  const allImages = await axios.get(`${URL}/2`);
  allImages.data.forEach((element) => {
    displayImage
      .fromURL(element.image)
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

const getUserDrawings = async () => {
  const allDrawings = await axios.get();
  allDrawings.data.forEach((element) => {
    displayImage
      .fromURL(element.image)
      .then((image) => console.log(image, 'Press arrows keys to continue'));
  });
};

const deleteADrawing = async () => {
  const deletedDrawing = await axios.delete();
};
const logUserIn = async (token) => {
  // console.log(token);
  await axios({
    method: 'post',
    url: `https://st-art-up.herokuapp.com/api/v1/artists`,
    data: {
      token,
    },
  })
  // displayImage
  //   .fromURL(req.data.avatar)
  // .then((image) => console.log(image, 'Press arrows keys to continue'));
};

module.exports = {
  getAllImages,
  getRandomImage,
  getUserDrawings,
  logUserIn,
};

const axios = require('axios');

// URL de la API externa
const API_URL = 'https://random-d.uk/api/list';

// Función para obtener la lista de imágenes
async function fetchImageList() {
    try {
      const response = await axios.get(API_URL);
      return response.data.images;
    } catch (error) {
      console.error('Error fetching image list:', error);
      throw new Error('Could not fetch images from external API');
    }
  }
  

// Función para obtener una imagen aleatoria
async function getRandomImage() {
  const images = await fetchImageList();
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

async function getImagesByNumber(number) {
    const images = await fetchImageList();
    const numberString = String(number);  // Convertir el número a cadena
    return images.filter(image => image.includes(numberString));
  }
  

module.exports = {
  getRandomImage,
  getImagesByNumber,
};

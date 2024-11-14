const imageService = require('../services/imageService');

// Obtener imagen aleatoria
async function getRandomImage(req, res) {
  try {
    const image = await imageService.getRandomImage();
    res.json({ imageUrl: `https://random-d.uk/api/${image}` });
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving random image' });
  }
}

// Obtener imagen x numero enviado.
async function getImagesByNumber(req, res) {
    const { number } = req.params;
    if (isNaN(number) || number < 0) {
      return res.status(400).json({ error: 'Invalid number parameter' });
    }
    try {
      const images = await imageService.getImagesByNumber(Number(number));
      const imageUrls = images.map(image => `https://random-d.uk/api/${image}`);
      res.json({ imageUrls });
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving images by number' });
    }
  }
  

module.exports = {
  getRandomImage,
  getImagesByNumber,
};

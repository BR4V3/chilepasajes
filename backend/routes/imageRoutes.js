const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

// Endpoint para imagen aleatoria
router.get('/random', imageController.getRandomImage);

// Endpoint para imágenes filtradas por número
router.get('/filter/:number', imageController.getImagesByNumber);

module.exports = router;

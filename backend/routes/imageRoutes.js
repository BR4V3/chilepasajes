const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');



// Endpoint imagen aleatoria
router.get('/random', imageController.getRandomImage);

// Endpoint imágenes x numero
router.get('/filter/:number', imageController.getImagesByNumber);


module.exports = router;

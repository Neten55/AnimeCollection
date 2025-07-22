const express = require('express');
const router = express.Router();
const animeController = require('../controllers/animeController');

// List all anime for the logged-in user
router.get('/', animeController.showAnimeList);

// Create new anime
router.post('/', animeController.createAnime);

// Update anime (you can use a form with method override for PUT)
router.post('/update/:id', animeController.updateAnime);

// Delete anime
router.post('/delete/:id', animeController.deleteAnime);

module.exports = router;
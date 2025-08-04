const express = require('express');
const router = express.Router();
const animeController = require('../controllers/animeController');
const { ensureAuthenticated } = require('../middleware/auth');

// All routes below are protected
router.use(ensureAuthenticated);

router.get('/', animeController.list);
router.get('/new', animeController.showCreateForm);
router.post('/', animeController.create);

router.get('/:id/edit', animeController.showEditForm);
router.post('/:id/update', animeController.update);
router.post('/:id/delete', animeController.delete);

module.exports = router;

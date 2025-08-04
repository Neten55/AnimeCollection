const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { ensureAuthenticated, ensureAdmin } = require('../middleware/auth');

router.use(ensureAuthenticated, ensureAdmin);

router.get('/', adminController.dashboard);
router.post('/suspend/:id', adminController.suspendUser);
router.post('/unsuspend/:id', adminController.unsuspendUser);
router.get('/logs', adminController.viewLogs);

module.exports = router;

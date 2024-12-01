const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', userController.register);
router.put('/profile', authMiddleware, userController.updateProfile);
router.post('/promote-creator', authMiddleware, userController.promoteToCreator);

module.exports = router;
const express = require('express');
const {registerUser, loginUser, getUserProfile, updateUserProfile} = require('../controllers/authController');
const router = express.Router();

//Auth routes-----------------------------------------
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);

module.exports = router;



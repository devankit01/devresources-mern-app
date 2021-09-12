const express = require('express');
const router = express.Router();



const {registerUser, AuthUser } = require('../controllers/userControllers')


router.route('/').post(registerUser) // Register User
router.route('/login').post(AuthUser) // Login User




module.exports = router;
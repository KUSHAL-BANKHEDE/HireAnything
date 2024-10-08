const express = require('express');
const { register, login, allUser,} = require('../Controllers.js/authControllers');
const router = express.Router();

router.get('/allUser' , allUser)
router.post('/register', register);
router.post('/login', login);
// router.get('/google', googleLogin);

module.exports = router;
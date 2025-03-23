const express = require('express');
const SignupController = require('../controllers/userSignup');
const LoginController = require('../controllers/userLogin');
const userDetailsController = require('../controllers/userDetails');
const AuthToken = require('../middleware/authToken');
const newAudioController = require('../controllers/newaudio');
const allAudioController = require('../controllers/allAudio');
const subscriberController = require('../controllers/suscribers');
const LogOutController = require('../controllers/userLogout');
const router = express.Router();

router.post('/signup', SignupController);
router.post('/login', LoginController)
router.post('/subscribe', subscriberController)
router.get('/logout', LogOutController)

//user details
router.get('/userdetails', AuthToken,userDetailsController)

//Audio messages
router.post('/newAudio',AuthToken, newAudioController)
router.get('/allAudio', allAudioController)

module.exports = router
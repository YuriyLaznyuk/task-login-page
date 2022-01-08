const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
const validator = require('../middleware/userValidator');
const userToken = require('../middleware/userToken');

router
	.route('/api/user/signup')
	.post(validator.user, userControllers.createUser);

router.route('/api/user/login').post(userControllers.loginUser);

router.route('/api/user/auth').post(userToken, userControllers.authUser);
module.exports = router;

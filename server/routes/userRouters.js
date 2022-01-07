const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
const validator = require('../middleware/userValidator');

router
	.route('/api/user/signup')
	.post(validator.user, userControllers.createUser);

router.route('/api/user/login').post(userControllers.loginUser);
module.exports = router;

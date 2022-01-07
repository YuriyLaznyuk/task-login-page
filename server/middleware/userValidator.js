const {body} = require('express-validator');
module.exports = {
	user: [body('password').isLength({min: 5}), body('email').isEmail()],
};

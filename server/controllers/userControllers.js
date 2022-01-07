const User = require('../models/userModel');

exports.createUser = async (req, res) => {
	try {
		const newUser = await User.create({...req.body});
		res.send(newUser);
	} catch (e) {
		res.json({
			message: e.message,
		});
	}
};

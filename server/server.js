const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/userModel');
const app = express();
require('dotenv').config();
const userRouters = require('./routes/userRouters');

const DB = process.env.DATABASE;
const PORT = process.env.PORT || 7700;
app.use(express.json());
app.use(express.static(path.resolve('build')));

app.get('*', (req, res) => {
	res.sendFile(path.resolve('build', 'index.html'));
});

app.use(userRouters);

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Connect MD'))
	.catch((err) => console.log(err));
app.listen(PORT, () => {
	console.log('listen port: ', PORT);
});

// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const app = express();

const reg = /^(\/|\/user)$/;
const PORT = process.env.PORT || 8800;
app.use(express.json());
app.use(express.static(path.resolve('build')));

app.get(reg, (req, res) => {
	res.sendFile(path.resolve('build', 'index.html'));
});

app.listen(PORT, () => {
	console.log('listen port: ', PORT);
});

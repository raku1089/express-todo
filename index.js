const express = require('express');

const app = express();
const PORT = '5000';
app.get('/', (req, res) => {
	res.send('<h1>Hello User !</h1>');
});

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});

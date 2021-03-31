const express = require('express');
const app = express();
const path = require('path');
const api = require('./api');
const cors = require('cors');
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors({
	credentials: true,
	origin: ['http://localhost:3000']
}));

app.use('/api', api);

app.use('/', express.static(path.join(path.resolve(), './dist')));
app.get('*',  (req, res) => {
	res.sendFile(path.resolve(path.resolve(), 'dist', 'index.html'));
});

app.listen(PORT, () => {
	console.log('START EXPRESS SERVER PORT NUMBER : ' + PORT);
});
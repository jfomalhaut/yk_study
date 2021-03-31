const express = require('express');
const app = express();
const path = require('path');
const api = require('./api');
const cors = require('cors');
const PORT = process.env.POST || 4000;

// app.get('/api/getUser', (req, res) => {
//     //res.send(200);
//     const userinfo = {
//         name: '이준',
//         location: '광진구'
//     };
//     res.send({ userinfo });
// });

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}));

app.use('/api', api);

app.use(express.static(path.join(path.resolve(), './dist')));

app.get('*', (req, res) => {
     res.sendFile(path.resolve(path.resolve(), 'dist', 'index.html'));
});



app.listen(PORT, () => {
    console.log('START EXPRESS SERVER PORT NUMBER : ' + PORT);
});
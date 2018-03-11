const express = require('express');
const app = express();

app.set('view engine', 'ejs');
// To let server find css file
app.use(express.static('public'));
// To let server find images
app.use(express.static('img'));

// Use code below when image directory is not in root folder
// app.use(express.static(__dirname + '/images'));

app.get('/', (req, res) => {
    res.render('index');
})

app.listen('3000', () => {
    console.log('Server running in port: http://localhost:3000/')
});
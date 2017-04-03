var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/index', function (req, res) {
    res.send('');
});
app.listen(3000, function () {
    console.log('Yahooooooo!')
});

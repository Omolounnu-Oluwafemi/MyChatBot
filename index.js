var express = require('express');
var ejs = require('ejs');

var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});

app.get('/', function (req, res) {
    res.render('pages/index');
});

app.get('/about', function (req, res) {
    res.render('pages/about');
});

app.get('/contact', function (req, res) { 
    res.render('pages/contact');
})
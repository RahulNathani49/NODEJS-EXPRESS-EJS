var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.get('/', function(req, res) {
    res.render('index');
});

app.get('/contact', function(req, res) {
    res.render('contact', { qs: req.query });

});
app.post('/contact', urlencodedParser, function(req, res) {
    res.render('contactdis', { qs: req.body });
});

app.get('/profile/:id', function(req, res) {
    var data = { age: 29, job: 'Developer' };
    res.render('index', { person: req.params.id, data: data });
});

app.listen(5000);
console.log("APP STARTED");

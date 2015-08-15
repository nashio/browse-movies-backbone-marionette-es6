
var express = require('express');
var app = express();
var productsJSON = require('./server-data/data.json');

app.use(express.static(__dirname + '/public'));

exports.startServer = function(port, path, callback) {

    app.get('/', function(req, res) {
        return res.sendFile('./public/index.html');
    });

    app.get('/movies', function(req, res) {
        return res.json(productsJSON);
    });

    return app.listen(port, callback);
};

'use strict';
var compression = require('compression');
var express = require('express');
var app = express();
var port = 6003;

app.use(compression());
app.use(express.static(".", { maxAge: 2592000 }));
app.listen(port, function () {
	console.log('Running on port ' + port + '.');
});
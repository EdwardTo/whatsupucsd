var PORT = 3000;

// Express is a web framework for node.js
// that makes nontrivial applications easier to build
var express = require('express');
// Print logs to the console and compress pages we send
var logger = require('logger');
var compress = require('compress');
var http = require('http');
var path = require('path');

var index = require('./routes/index');

// Create the server instance
var app = express();

// Return all pages in the /static directory
// whenever they are requested at '/'
// e.g., http://localhost:3000/index.html
// maps to /static/index.html on this machine
app.use(express.static(__dirname + '/static'));
app.get('/', index.view);

// Start the server
var port = process.env.PORT || PORT; // 80 for web, 3000 for development
app.listen(port, function() {
	console.log("Node.js server running on port %s", port);
});

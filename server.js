var PORT = 5000;

// Express is a web framework for node.js
// that makes nontrivial applications easier to build
var express = require('express');
// Print logs to the console and compress pages we send
var logger = require('logger');
var compress = require('compress');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var index = require('./routes/index');
var login = require('./routes/login');
var settings = require('./routes/settings');
var subpage1 = require('./routes/subpage1');
var subpage2 = require('./routes/subpage2');

// Create the server instance
var app = express();

// Return all pages in the /static directory
// whenever they are requested at '/'
// e.g., http://localhost:3000/index.html
// maps to /static/index.html on this machine
app.use(express.static(__dirname + 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.get('/', index.view);
app.get('/index', index.view)
app.get('/login', login.view);
app.get('/settings', settings.view);
app.get('/subpage1', subpage1.view);
app.get('/subpage2', subpage2.view);



// Start the server
var port = process.env.PORT || PORT; // 80 for web, 3000 for development
http.createServer(app).listen(port, function() {
	console.log("Node.js server running on port %s", port);
});

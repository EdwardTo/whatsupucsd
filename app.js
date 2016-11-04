var PORT = 5000;

// Express is a web framework for node.js
// that makes nontrivial applications easier to build
var express = require('express');
// Print logs to the console and compress pages we send
var logger = require('logger');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var login = require('./routes/login');
var settings = require('./routes/settings');
var newtopic = require('./routes/newtopic');
var submitted = require('./routes/submitted');

// Create the server instance
var app = express();

// Return all pages in the /static directory
// whenever they are requested at '/'
// e.g., http://localhost:3000/index.html
// maps to /static/index.html on this machine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', index.view);
app.get('/index', index.view);
app.get('/login', login.view);
app.get('/settings', settings.view);
app.get('*/newtopic', newtopic.view);
app.get('/submitted', submitted.view);
app.get('/*', index.topicPath);
app.post('/newtopic', newtopic.submit);

// Start the server
var port = process.env.PORT || PORT; // 80 for web, 5000 for development
http.createServer(app).listen(port, function() {
	console.log("Node.js server running on port %s", port);
});

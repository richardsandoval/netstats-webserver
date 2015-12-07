// server.js

// modules =================================================
var express = require('express');
var app = express();
var path = require("path");
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');

var mongoose = require('mongoose');


// configuration ===========================================

// config files
var db = require('./config/config');

// set our port
var port = process.env.PORT || 8889;

// connect to our mongoDB database
// (uncomment after you enter in your own credentials in config/config.js)
mongoose.connect(db.mongoUrl);

app.use(morgan('dev'));// Logs

app.use(cors({credentials: true, origin: true}));

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));



// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

app.use('/bower_components', express.static(__dirname + '/bower_components'));

// routes ==================================================
var Routes = require('./app/routes'); // configure our routes


//app.get('/', function (req, res) {
//    res.send('<h1>Welcome to NetStats Api</h1>');
//});


new Routes(app).login('/api/account');
new Routes(app).apiRoute('/api');
new Routes(app).analysis('/api/analysis');
//new Routes(app).route();




app.get('*', function (req, res) {
    res.sendfile('./public/index.html'); // load our public/index.html file
});

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);

// expose app
exports = module.exports = app;
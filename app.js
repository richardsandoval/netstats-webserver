/**
 * Created by rsandoval on 22/10/15.
 */

var express = require('express');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var config = require('./config');
var db = mongoose.connect(config.database);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var Sniffer = require('./models/snifferModel');
var Data = require('./models/dataModel');
var Account = require('./models/loginModel');
var AnalysisRoute = require('./Routes/analysisRoute');

var snifferRoute = require('./Routes/snifferRoute')(Sniffer);
var dataRoute = require('./Routes/dataRoute')(Data);
var accountRoute = require('./Routes/accountRoute')(Account);
var apiRoute = require('./Routes/apiRoute')(express);
var analyser = new AnalysisRoute(Sniffer, Account, Data)


app.use('/api/accounts', accountRoute);
app.use('/api', apiRoute);
app.use('/api/sniffer', snifferRoute);
app.use('/api/data', dataRoute);
app.use('/api/analysis', analyser.route());


app.get('/', function (req, res) {
    res.send('<h1>Welcome to NetStats Api</h1>');
});

app.listen(port, function () {
    console.log('Gulp is running my app on PORT: ' + port);
});

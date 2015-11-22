/**
 * Created by rsandoval on 08/11/15.
 */

var Account = require('./models/account');
var Data = require('./models/data');
var Sniffer = require('./models/sniffer');


var account = new Account().model();
var data = new Data().model();
var sniffer = new Sniffer().model();

var Routes = module.exports = function (app) {
    this.app = app;

};

Routes.prototype.login = function (router) {
    var Login = require('./routes/Account');
    var self = this;
    self.app.use(router, new Login(account).login());
};

Routes.prototype.apiRoute = function (router) {
    var Api = require('./routes/Api');
    var self = this;
    self.app.use(router, new Api().route())

};

Routes.prototype.analysis = function (router) {

    var Analysis = require('./routes/Analysis');
    var self = this;
    var analysis = new Analysis(sniffer, account, data);

    self.app.use(router, analysis.rank());
    self.app.use(router, analysis.bw());
};


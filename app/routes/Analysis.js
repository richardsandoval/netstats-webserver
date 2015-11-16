/**
 * Created by rsandoval on 09/11/15.
 */

var DataAnalyser = require('../../analyzer/dataAnalyzer');
var express = require('express');

var AnalysisRoute = module.exports = function (Sniffer, Account, Data) {
    this.Sniffer = Sniffer;
    this.Account = Account;
    this.Data = Data;
    this.app = express.Router();
};

AnalysisRoute.prototype.rank = function () {
    var self = this;

    self.app.route('/rank')
        .get(function (req, res) {

            var user = {"user": req.headers['uname']};
            var qs = req.query;

            self.findAccountIds(user, function (ids) {
                self.Sniffer.find({
                    dataId: {$in: ids},
                    'timestamp.date': {$lte: new Date(qs.ends), $gte: new Date(qs.start)}
                }, function (err, data) {
                    if (err)
                        res.status(500).send(err);
                    else {
                        res.json(new DataAnalyser(data, qs.criteria).analysisByCriteria());
                    }
                });
            });

        });

    return self.app;
};

AnalysisRoute.prototype.bw = function () {

    var self = this;

    self.app.route('/bw')
        .get(function (req, res) {

            var user = {"user": req.headers['uname']};
            var qs = req.query;

            self.findAccountIds(user, function (ids) {

                self.Sniffer.find({
                    dataId: {$in: ids},
                    'timestamp.date': {$lte: new Date(qs.ends), $gte: new Date(qs.start)}
                }, function (err, data) {
                    if (err)
                        res.status(500).send(err);
                    else {
                        res.json(new DataAnalyser(data, qs.criteria).analysisByDate());
                    }
                });
            });

        });

    return self.app;
};

AnalysisRoute.prototype.findAccountIds = function (user, callback) {
    var self = this;

    self.Account.findOne(user).exec(function (err, account) {

        if (err)
            return err;
        else {

            self.Data.find({accountId: account._id}, {_id: 1}, function (err, data) {
                var list = [];

                if (err)
                    return err;

                else {
                    data.forEach(function (user) {
                        list.push(user._id);
                    });
                    if (typeof callback === "function")
                        return callback(list)
                }

            });
        }


    });

};


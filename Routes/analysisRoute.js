/**
 * Created by rsandoval on 06/11/15.
 */

var express = require('express');
var analysisRoute = express.Router();
var DataAnalyser = require('../Analyzer/dataAnalyzer');


var AnalysisRoute = module.exports = function (Sniffer, Account, Data) {
    this.Sniffer = Sniffer;
    this.Account = Account;
    this.Data = Data;
};

AnalysisRoute.prototype.route = function () {
    var self = this;

    analysisRoute.route('/rank')
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

    return analysisRoute
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


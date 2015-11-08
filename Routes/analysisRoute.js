/**
 * Created by rsandoval on 06/11/15.
 */

var express = require('express');

var routes = function (Sniffer, Account, Data) {

    var analysisRoute = express.Router();
    var DataAnalyser = require('../Analyzer/dataAnalyzer');

    analysisRoute.route('/get')
        .get(function (req, res) {

            var user = {"user": req.headers['uname']};
            var qs = req.query;


            Account.findOne(user, function (err, user) {

                if (err)
                    res.status(500).send(err);
                else {
                    Data.find({accountId: user._id}, {_id: 1}, function (err, data) {

                        var list = [];

                        if (err)
                            res.status(500).send(err);
                        else {
                            data.forEach(function (user) {
                                list.push(user._id);
                            });
                            Sniffer.find({
                                dataId: {$in: list},
                                'timestamp.date': {$lte: new Date(qs.ends), $gte: new Date(qs.start)}
                            }, function (err, data) {
                                if (err)
                                    res.status(500).send(err);
                                else {
                                    res.json(new DataAnalyser(data, qs.criteria).analysisByCriteria());
                                }
                            });
                        }
                    });
                }
            });
        });

    return analysisRoute;
};

module.exports = routes;
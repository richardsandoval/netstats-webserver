/**
 * Created by rsandoval on 22/10/15.
 */

'use strict';

var express = require('express');

var routes = function routes(Sniffer) {
    var snifferRouter = express.Router();

    snifferRouter.route('').get(function (req, res) {
        var query = req.query;

        Sniffer.find(query, function (err, sniffer) {
            if (err) res.status(500).send(err);else res.json(sniffer);
        });
    });

    snifferRouter.route('/:id').get(function (req, res) {

        Sniffer.findById(req.params.id, function (err, sniffer) {
            if (err) res.status(500).send(err);else res.json(sniffer);
        });
    });

    //TODO
    snifferRouter.route('/byDate/start=:start&ends=:ends').get(function (req, res) {

        var start = req.params.start;
        var ends = req.params.ends;

        console.log('start: ' + start + ' ends ' + ends);

        var date = {};

        date.date = {
            $lt: ends,
            $gte: start
        };

        console.log(date);

        Sniffer.find(date, function (err, sniffer) {
            if (err) res.status(500).send(err);else res.json(sniffer);
        });
    });

    //snifferRouter.route('/filter/isTCP')
    //    .get(function (req, res) {
    //        var response ;
    //        var count = 2;//Sniffer.find({isTCP: false}).count();
    //        var total = 5;//Sniffer.find({}).count();
    //        response = {
    //            upd : count,
    //            tcp : (total - count),
    //            total : total
    //        };
    //        res.json(response);
    //
    //    });
    return snifferRouter;
};

module.exports = routes;

//# sourceMappingURL=snifferRoute-compiled.js.map
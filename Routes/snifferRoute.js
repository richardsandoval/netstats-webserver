/**
 * Created by rsandoval on 22/10/15.
 */

var express = require('express');

var routes = function (Sniffer) {
    var snifferRouter = express.Router();

    snifferRouter.route('/')
        .get(function (req, res) {
            var query = req.query;

            Sniffer.find(query, function (err, sniffer) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(sniffer);
            });
        });

    snifferRouter.route('/:id')
        .get(function (req, res) {

            Sniffer.findById(req.params.id, function (err, sniffer) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(sniffer);
            });

        });

    //TODO
    snifferRouter.route('/byDate/start=:start&ends=:ends')
        .get(function (req, res) {

            var start = (req.params.start);
            var ends = (req.params.ends);

            console.log(`start: ${start} ends ${ends}`);

            var date = {};

            date.date = {
                $lt: ends,
                $gte: start
            };

            console.log(date);

            Sniffer.find(date, function (err, sniffer) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(sniffer);
            });
        });

    snifferRouter.route('/filter/isTCP')
        .get(function (req, res) {

            var counter = 0;
            var total = 0;
            Sniffer.count({isTCP: true}, function (err, count) {

                if (err)
                    res.status(500).send(err);

                else {
                    counter = count;
                    Sniffer.count({}, function (err, count) {
                        if (err)
                            res.status(500).send(err);
                        else {
                            total = count;
                            res.json({
                                tcp: counter,
                                udp: (total - counter),
                                total: total
                            });
                        }
                    });
                }
            });
        });
    return snifferRouter;
};

module.exports = routes;
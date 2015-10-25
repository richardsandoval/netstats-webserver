/**
 * Created by rsandoval on 22/10/15.
 */

var express = require('express');

var routes = function (Data) {
    var dataRouter = express.Router();

    dataRouter.route('')
        .get(function (req, res) {
            var query = req.query;

            Data.find(query, function (err, data) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(data);
            });
        });
    return dataRouter;
};


module.exports = routes;
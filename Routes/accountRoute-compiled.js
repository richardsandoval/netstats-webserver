/**
 * Created by rsandoval on 24/10/15.
 */

'use strict';

var express = require('express');

var routes = function routes(Accounts) {

    var accountRouter = express.Router();

    accountRouter.route('').get(function (req, res) {
        var query = req.query;
        Accounts.find(query, function (err, data) {
            if (err) res.status(500).send(err);else res.json(data);
        });
    });
    return accountRouter;
};

module.exports = routes;

//# sourceMappingURL=accountRoute-compiled.js.map
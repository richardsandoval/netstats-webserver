/**
 * Created by rsandoval on 24/10/15.
 */

var express = require('express')
var jwt = require('jsonwebtoken');
var config = require('../config');

var routes = function (Accounts) {

    var accountRouter = express.Router();

    accountRouter.route('/')
        .get(function (req, res) {
            var query = req.query;
            Accounts.find(query, function (err, user) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(user);
            });
        });

    accountRouter.route('/authenticate')
        .post(function (req, res) {

            var body = req.body;

            Accounts.findOne({user: body.user}, function (err, user) {

                if (err)
                    res.status(500).send(err);

                if (!user) {
                    res.json({
                        success: false,
                        message: 'Authentication failed. User not found'
                    })
                } else if (user) {

                    if (user.pwr != body.pwr) {
                        res.json({
                            success: false,
                            message: 'Authentication failed. Wrong password.'
                        });
                    } else {
                        var token = jwt.sign(user, config.secret, {
                            expiresIn: 3600
                        });

                        res.json({
                            success: true,
                            message: 'Authenticated',
                            token: token
                        });
                    }
                }
            });
        });



    return accountRouter;
};


module.exports = routes;
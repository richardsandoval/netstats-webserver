/**
 * Created by rsandoval on 09/11/15.
 */

var jwt = require('jsonwebtoken');
var express = require('express');
var config = require('../../config/config');

var Account = module.exports = function (Account) {
    this.Account = Account;
};

//Account.prototype.routes = function () {

Account.prototype.login = function () {

    var app = express.Router();
    var self = this;

    app.route('/login')
        .post(function (req, res) {
            var body = req.body;

            //res.json(self.Account)
            self.Account.findOne({user: body.user}, function (err, user) {

                if (err)
                    res.status(500).send(err);

                if (!user) {
                    res.json({
                        success: false,
                        message: 'Authentication failed. User not found'
                    })
                } else {

                    if (user.pwr === body.pwr) {
                        var token = jwt.sign(user, config.secret, {
                            expiresIn: 3600
                        });
                        res.json({
                            user : body.user,
                            success: true,
                            message: 'Authenticated',
                            token: token
                        });
                    } else {
                        res.json({
                            success: false,
                            message: 'Authentication failed. Wrong password.'
                        });
                    }


                }
            });
        });

    return app;
};
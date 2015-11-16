/**
 * Created by rsandoval on 09/11/15.
 */

var jwt = require('jsonwebtoken');
var express = require('express');
var config = require('../../config/config');

var Api = module.exports = function (express) {
};

Api.prototype.route = function () {

    var api = express.Router();

    api.route('/')
        .get(function (req, res, next) {

            var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['bearer'];

            if (token) {

                jwt.verify(token, config.secret, function (err, decoded) {
                    if (err) {
                        return res.json({
                            success: false,
                            message: 'Failed to authenticate token.'
                        });
                    } else {
                        req.decoded = decoded;
                        next();
                    }
                });

            } else {

                return res.status(403).send({
                    success: false,
                    message: 'No token provided.'
                });

            }

        });

    return api;
};
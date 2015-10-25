/**
 * Created by rsandoval on 24/10/15.
 */

var express = require('express')
var jwt = require('jsonwebtoken');
var config = require('../config');

var routes = function () {

    var api = express.Router();
    
    api.route('')
        .use(function (req, res, next) {
            //console.log(req.body);
            next();

            var token = req.body.token || req.query.token || req.headers['x-access-token'];

            // decode token
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

module.exports = routes;
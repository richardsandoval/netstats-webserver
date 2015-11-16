/**
 * Created by rsandoval on 08/11/15.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var Data = module.exports = function () {

};

Data.prototype.model = function () {
    return mongoose.model('data', new Schema({
        _id: ObjectId,
        start: {
            "date": Date
        },
        ends: {
            "date": Date
        },
        accountId: ObjectId
    }));
};
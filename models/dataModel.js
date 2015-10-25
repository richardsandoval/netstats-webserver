/**
 * Created by rsandoval on 22/10/15.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var data = mongoose.model('data', new Schema({
    _id: ObjectId,
    start: Date,
    ends: Date,
    networkData: [ObjectId]
}));

module.exports = data;
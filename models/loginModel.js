/**
 * Created by rsandoval on 24/10/15.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var account = mongoose.model('account', new Schema({
    _id: ObjectId,
    user: String,
    pwr: String,
    staffId: ObjectId
}));

module.exports = account;
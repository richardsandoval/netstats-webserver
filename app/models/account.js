/**
 * Created by rsandoval on 08/11/15.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var Account = module.exports =function(){

};

Account.prototype.model = function(){
    return mongoose.model('account', new Schema({
        _id: ObjectId,
        user: String,
        pwr: String,
        staffId: ObjectId
    }));
};
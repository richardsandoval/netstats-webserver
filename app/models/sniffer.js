/**
 * Created by rsandoval on 08/11/15.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var Sniffer = module.exports = function () {

};

Sniffer.prototype.model = function () {
    return mongoose.model('sniffer', new Schema({

        _id: ObjectId,
        dataId: ObjectId,
        timestamp: {
            date: Date
        },
        isTCP: Boolean,
        sMAC: String,
        dMAC: String,
        sIP: String,
        dIP: String,
        protocol: {
            type: Number
        },
        flags: [String],
        length: {
            type: Number, default: 64 /*
             Size of Ethernet frame - 24 Bytes
             Size of IPv4 Header (without any options) - 20 bytes
             Size of TCP Header (without any options) - 20 Bytes
             So total size of empty TCP datagram - 24 + 20 + 20 = 64 bytes
             */
        },
        sUDP: Number,
        dUDP: Number,
        sTCP: Number,
        dTCP: Number,
        payload: String

    }));
};
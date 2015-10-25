/**
 * Created by rsandoval on 22/10/15.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var sniffer = mongoose.model('sniffer', new Schema({

    _id: ObjectId,
    dataId: ObjectId,
    date: Date,
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

module.exports = sniffer;
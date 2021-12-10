const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create a schema
const StockSchema = new Schema({

    email: {
        type: String,


    },

    product: {
        type: String,
    },
    description: {
        type: String,


    },
    priceperunit: {
        type: String,

    },
    quantity: {
        type: String,


    },


    total: {
        type: String,


    },
    date: {
        type: Date,
        default: Date.now
    }
}, { strict: false });
module.exports = Stock = mongoose.model('Stock', StockSchema);
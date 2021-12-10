const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create a schema
const supplierSchema = new Schema({
    name: {
        type: String,
        required: true

    },

    email: {
        type: String,

        unique: true
    },
    password: {
        type: String,

    },
    location: {
        type: String,
    },

    date: {
        type: Date,
        default: Date.now
    }
}, { strict: false });
module.exports = Supplier = mongoose.model('supplier', supplierSchema);
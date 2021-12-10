const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create a schema
const InventorySchema = new Schema({

    email: {
        type: String,
        required: true

    },

    product: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true


    },

    quantity: {
        type: String,
        required: true

    },

    expirydate: {
        type: String,


    },

    date: {
        type: Date,
        default: Date.now
    }
}, { strict: false });
module.exports = Inventory = mongoose.model('Inventory', InventorySchema);
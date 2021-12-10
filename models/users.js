const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create a schema
const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },


    password: {
        type: String,

    },
    role: {
        type: String

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    register_date: {
        type: Date,
        default: Date.now
    }
});
module.exports = Employee = mongoose.model('employee', employeeSchema);
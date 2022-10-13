const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
    name: String,
    specialization: String,
    schedule: [[{
        start: String, 
        end: String
    }]],
    mobileNumber: Number,
    email: String,
    localTelNo: Number
});

module.exports = mongoose.model("Doctor",doctorSchema)

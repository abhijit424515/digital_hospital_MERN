const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
    name: String,
    specialization: String,
    schedule: [{
        day: String,
        start: String, 
        end: String,
        appointments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Appointment",
        }]
    }],
    mobileNumber: Number,
    email: String,
    localTelNo: Number,
});

module.exports = mongoose.model("Doctor",doctorSchema)

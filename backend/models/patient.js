const mongoose = require("mongoose");

const patientSchema = mongoose.Schema({
    name: String,
    rollNo: String,
    department: String,
    courses: [String],
    mobileNumber: Number,
    email: String,
    guardian: String,
    guardianMobileNumber: Number,
    guardianEmail: String,
    
    previousAilments: [String],
    currentStatus: String,
    doctorPrescription: String,
    medicinesPrescribed: [{
      name: String,
      id: String
    }]
});

module.exports = mongoose.model("Patient",patientSchema)

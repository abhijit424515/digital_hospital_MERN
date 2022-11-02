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
    
    healthStatus: String,
    medicalHistory: [{
      prescription: String,
      medicinesPrescribed: [{
        name: String,
        id: String,
        quantity: Number,
      }],
      timeStamp: { type : Date, default: Date.now }
    }]
});

module.exports = mongoose.model("Patient",patientSchema)

import { Schema, model } from "mongoose";
const doctorSchema = Schema({
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

export default model("Doctor",doctorSchema)

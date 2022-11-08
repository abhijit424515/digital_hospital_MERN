import { Schema, model } from "mongoose";
const doctorSchema = Schema({
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

export default model("Doctor",doctorSchema)

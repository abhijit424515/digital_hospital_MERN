import pkg from "mongoose";
const { Schema, model: _model } = pkg;
const SignUp = new Schema({
	rollno : { type: String, required: true },
	otp: { type: String, required: true }
});
const model = _model("SignUp", SignUp, "SignUp");
export default model;

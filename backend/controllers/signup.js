import SignUp from "../models/Signup.js";
import sendEmail from "./email.js"
import PATIENT from "../models/patient.js";

async function signupSendOtp(req, res, next) {
	var data = req.body ;
	var already_signed_up = await PATIENT.findOne({ rollno : data.rollno }) 
	if (already_signed_up) {
		return res.status(500).send({ err: "Already signed up . Try login" });
	}
	var random = '1234' ; 
	var otp = await sendEmail( data.rollno.toString() + "@iitb.ac.in" , "Signup Verification" , "Your Otp is :: " + random )
	if (otp) {
		await SignUp.updateOne(
			{ rollno  : data.rollno },
			{ $set: { otp: random } },
			{ upsert: true }
		);
		res.json({ status: true });
	} else {
		next(new Error("Couldnt send otp"));
	}
}

async function signupVerifyOtp(req, res, next) {
	var data = req.body;
	var otp_data = await SignUp.findOne({
		rollno : data.rollno , 
		otp: data.otp
	});
	if (otp_data) {
		await SignUp.deleteOne({ rollno : data.rollno , otp: data.otp });
		await PATIENT.create(data);
		return res.json({ msg: "user created" });
	} else {
		next(new Error("Wrong OTP"));
	}
}

export { signupSendOtp, signupVerifyOtp };


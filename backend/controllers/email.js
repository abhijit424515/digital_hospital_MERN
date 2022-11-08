import dotenv from 'dotenv';
dotenv.config();
import * as nodemailer from "nodemailer"

async function sendEmail(email,subject,body) {
	let mailTransporter =  nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'automategst@gmail.com',
			pass: 'kiglcvdfftvovjlr'
		}
	});
	let mailDetails = {
		from: 'automategst@gmail.com' ,
		to: email ,
		subject:  subject , 
		text: body 
	}
    try { 
		var mailStatus = await mailTransporter.sendMail(mailDetails);
		console.log(mailStatus)
		return true  
	} 
	catch(err) { 
        console.log("Error : ",err)
	    return false 
	}
}
export default sendEmail

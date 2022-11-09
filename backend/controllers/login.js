
import {UserLogin}  from "../user/auth.js"
import jsonwebtoken from "jsonwebtoken"
import bcryptjs from "bcryptjs"

let {sign} = jsonwebtoken 
let secret_key = process.env.SECRET_KEY
let {hash} = bcryptjs ; 
const { verify } = jsonwebtoken;


let hash_password = async (pwd) => hash(pwd,10)

async function login(req,res,next) { 
    const data = req.body ; 
	console.log("login :: ",req.headers , req.body)
    const {type , value : type_value , password } = data ; 
	if ( type_value && password ) { 
		   var user = await UserLogin(type,type_value,password)
		   console.log(user,"test")
		   if (user) {  //user exists 
			 const token = sign({ id : user._id.toString() } , secret_key )
		     const decoded = verify(token, secret_key);
			//  console.log(decoded , "asdsad" ,  user._id.toString() )
			 res.json({ token : token })
 		   }
		   else { 
		       next(new Error("Username or password is wrong"))
		   }
	}  
	else { 
		console.log( type_value , password )
		next(new Error("Format is wrong"))
	}   
}
export {login}
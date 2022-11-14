import React from 'react'
import { useState } from 'react'

import Login from './Login'
import OTP from './OTP'

export default function Log_OTP() {

    const [display, changeDisplay] = useState("Login")
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [password2, setpassword2] = useState('')
    const [username, setusername] = useState('')
    const [style, setStyle] = useState('')
    
    return (
        <div>
            {display == "Login" && <Login setdisplay = {changeDisplay} style = {style} setStyle = {setStyle} email = {email} password = {password} username = {username} setemail = {setemail} setpassword = {setpassword} setusername = {setusername} />}
            {display == "OTP" && <OTP setdisplay = {changeDisplay} style = {style} setStyle = {setStyle} email = {email} password = {password} username = {username} setemail = {setemail} setpassword = {setpassword} setusername = {setusername} />}
        </div>
    )
}

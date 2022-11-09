import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, 
    Link,
    useNavigate
   } from 'react-router-dom'
import axios from 'axios';

let domain = "";

export default function OTP(props) {
    const navigate = useNavigate();

  const [otp, setotp] = useState('')

  const Verify = (e) => {
    e.preventDefault();

    axios.post(domain + 'auth/verifyotp/', {
      username: props.username,
      email: props.email,
      password: props.password,
      otp: otp,
    })
      .then((res) => {
        console.log(res.data)
        props.setdisplay("Login")
        props.setStyle("")
      })
      .catch((err) => {
        console.log(err)
        props.setdisplay("Login")
        props.setStyle("")
    });
  }

  return (
        <div id="container" className={props.style}>
          <div class="frms-container">
            <div class="signin-signup">
                <frm action="" class="sign-in-frm">
                    <h2 class="title">Enter OTP</h2>
                    <div class="input-field">
                    <i class="fas fa-user" aria-hidden='true'></i>
                    <input id='loginemail' type="text" placeholder="OTP" value={otp} onChange={e => setotp(e.target.value)} />
                    </div>                    
                    <input type="submit" value="Submit" class="butn solid" onClick={Verify} />
                </frm>
            </div>
          </div>
    
          <div class="panels-container">
            <div class="panel right-panel">
              <div class="content">
              </div>
            </div>
          </div>
        </div>
  );
}

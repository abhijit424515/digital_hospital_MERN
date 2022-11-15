import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, 
    Link,
    useNavigate
   } from 'react-router-dom'
import axios from 'axios';

import "../../styles/Login.css";

let domain = "";

export default function Login(props) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [username, setUsername] = useState('')

  const Login = (e) => {
    e.preventDefault();

    axios.post(domain + 'auth/login/', {
      email: email,
      password: password,
    })
      .then((res) => {
        console.log(res.data)
        navigate('/medical')
      })
      .catch((err) => {
        console.log(err)
        navigate('/medical')     
      });
  }

  const Signup = (e) => {
    e.preventDefault();

    axios.post(domain + 'auth/getotp/', {
        email: email,
      })
        .then((res) => {
          console.log(res.data)
          props.setdisplay("OTP")
          props.setStyle("sign-up-mode")
        })
        .catch((err) => {
          console.log(err)
          props.setdisplay("OTP")
          props.setStyle("")
        });

  }


  return (
    <div id="container" className={props.style}>
      <div className="frms-container">
        <div className="signin-signup">
          <form action="" className="sign-in-frm">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user" aria-hidden='true'></i>
              <input id='loginemail' type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock" aria-hidden='true'></i>
              <input id='loginpwd' type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <input type="submit" value="Login" className="butn solid" onClick={Login} />
          </form>
          <form action="" className="sign-up-frm">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user" aria-hidden='true'></i>
              <input id='inputuser' type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope" aria-hidden='true'></i>
              <input id='inputemail' type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock" aria-hidden='true'></i>
              <input id='inputpassword' type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock" aria-hidden='true'></i>
              <input id='inputpassword2' type="password" placeholder="Confirm Password" value={password2} onChange={e => setPassword2(e.target.value)} />
            </div>
            <input type="submit" className="butn" value="Sign up" onClick={Signup} />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <button className="butn " id="sign-up-butn" onClick={() => {
              props.setStyle('sign-up-mode')
            }}>
              Sign up
            </button>
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <button className="butn " id="sign-in-butn" onClick={() => {
              props.setStyle('')
            }}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

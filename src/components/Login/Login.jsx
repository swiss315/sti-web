import React from "react";
import "./Login.css";
import Logo from "../../Images/LogoSTI.svg";
import Log from "../../Images/Vector1.svg";
// import { Envelope } from '@fortawesome/fontawesome-svg-core'

const Login = ({showLogIn,  setShowLogIn}) => {
  return (
    <div className="onboard">
      <div className="onboarding">
        <div className="navbar">
          <div className="logo">
            <a href="/">
              {" "}
              <img src={Logo} alt="" />
            </a>
          </div>
          <div className="menu">
            <a href="">
              {" "}
              <li>Home</li>
            </a>
            <a href="">
              <li>About us</li>
            </a>
            <a href="">
              <li>Contact Us</li>
            </a>
            <a href="" className="log">
              <img src={Log} alt="" />
              <li>Login</li>
            </a>
            <a href="" className="sig">
              {" "}
              <li>Sign Up</li>
            </a>
          </div>
        </div>
      </div>
      <div className="sides">
        <div className="sides1">
          <h2>Welcome Back Customer!</h2>
        </div>
        <div className="sides2">
          <div className="in">
            {/* <i class="fa fa-envelope icon"></i> */}
            <input type="Email" placeholder="  Email |" />
          </div>
          <div className="in">
            <input type="Password" placeholder=" Password |" />
          </div>
          <div className="forgot-password">
            <a className="forgot" href="">
              Forgot Password?
            </a>
          </div>
          <div className="button">
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

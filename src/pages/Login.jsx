import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../stylesheets/Login.css";
import { ReactComponent as Email } from "../assets/icons/emailicon.svg";
import { ReactComponent as Password } from "../assets/icons/passwordicon.svg";

import validate from "../validation/validateInfo";
import useForm from "../validation/useForm";
// import Logo from "../../Images/LogoSTI.svg";
// import Log from "../../Images/Vector1.svg";
// import { Envelope } from '@fortawesome/fontawesome-svg-core'

const Login = ({ submitForm }) => {
  const { handleChange, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <div className="onboard">
      {/* <div className="onboarding">
        <div className="navbar">
          <div className="logo">
            <a href="/">
              {" "}
              <img src={Logo} alt="" />
            </a>
          </div>
          <div className="menu">
            <a href="#">
              {" "}
              <li>Home</li>
            </a>
            <a href="#">
              <li>About us</li>
            </a>
            <a href="#">
              <li>Contact Us</li>
            </a>
            <a href="#" className="log">
              <img src={Log} alt="" />
              <li>Login</li>
            </a>
            <a href="#" className="sig">
              {" "}
              <li>Sign Up</li>
            </a>
          </div>
        </div>
      </div> */}
      <Navbar />
      <div className="sides side-edit">
        <div className="sides1">
          <h2>
            Welcome Back <span>Customer!</span>
          </h2>
        </div>
        <div className="sides2">
          <div className="input-group">
            <label>
              <Email />
              <span>Email</span>
            </label>
            <input
              name="email"
              type="email"
              className=""
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="input-group">
            <label>
              <Password />
              <span>Password</span>
            </label>
            <input
              name="password"
              type="password"
              className=""
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className="forgot-password">
            <Link className="forgot">Forgot Password?</Link>
          </div>
          <div className="button">
            <Link to="/dashboard">
              <button>Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

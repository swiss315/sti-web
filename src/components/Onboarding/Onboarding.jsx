import React from "react";
import { useState } from "react";
import "./Onboarding.css";
import Logo from "../../assets/icons/Logo.svg";
import Log from "../../assets/icons/Vector1.svg";
import Group from "../../assets/icons/Group.svg";
import Customer from "../../assets/icons/Groupcustomer.svg";
import Agent from "../../assets/icons/Groupagent.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import Login from "../Login/Login"

const Onboarding = ({showLogIn,  setShowLogIn}) => {
 
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
            <a href="" className="log" onClick={() => showLogIn(!setShowLogIn)}>
              <img src={Log} alt="" />
              <li>Login</li>
            </a>
            <a href="" className="sig" onClick="consle.log (hello)">
              {" "}
              <li>Sign Up</li>
            </a>
          </div>
        </div>
      </div>
      <div className="sides">
        <div className="side1">
          <img className="side-img" src={Group} alt="" />
          <div className="simple-insurance">
            <h2>Insurance Made Simple</h2>
            <p>
              Offers a range of life plans and policies to help you protect what
              is important to you
            </p>
          </div>
          <div className="next-button">
            <div className="next1"></div>
            <div className="next2"></div>
          </div>
        </div>
        <div className="side2">
          <h2>Choose your Account Type</h2>
          <p>
            Hi there! Select your preferred account type to create your account
            or log in
          </p>
          <div className="column1 column2">
            <div className="img-customer">
              <img src={Customer} alt="" />
            </div>
            <div className="unknown">
              <div className="column-container">
                <h6>Customer</h6>
                <p className="cust">
                  Enjoy all features available for customers
                </p>
              </div>
              <div className="arrow">
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
          <div className="column1 column3">
            <div className="img-customer">
              <img src={Agent} alt="" />
            </div>
            <div className="column-container">
              <h6>Customer</h6>
              <p className="cust">Enjoy all features available for customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;

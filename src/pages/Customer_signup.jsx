import "../stylesheets/Customer_signup.css";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsKey, BsTelephone } from "react-icons/bs";
// import  {useState} from 'react'
import { HiOutlineUser } from "react-icons/hi";
import validate from "../validation/validateInfo";
import useForm from "../validation/useForm";
import Navbar from '../components/Navbar.js'






const About = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  // const onSubmit = () => {}
  // onSubmit={handleSubmit(onSubmit)}
  
  return (
    <div className="customer_signup">
      <Navbar/>
    <div className="c_signup">
      <h2 className="h21">
        Sign Up <br />
        Below
      </h2>
      <h2 className="h2 h21">Sign Up Below</h2>

      <div className="form-h">
        <form className="customer_signup">
          <div className="input_wrap">
            <div className="input-h">
              <label htmlFor="firstName">
                <HiOutlineUser className="icon" /> 
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={values.firstName}
                onChange={handleChange}
              />
            </div>
            {errors.firstName && <p>{errors.firstName}</p>}
          </div>

          <div className="input_wrap">
            <div className="input-h">
              <label htmlFor="lastName">
                <HiOutlineUser className="icon" /> 
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={values.lastName}
                onChange={handleChange}
              />
            </div>
            {errors.lastName && <p>{errors.lastName}</p>}
          </div>

          <div className="input_wrap">
            <div className="input-h">
              <label htmlFor="Email">
                <AiOutlineMail className="icon" /> 
                Email
              </label>
              <input
                id="Email"
                name="Email"
                type="Email"
                value={values.Email}
                onChange={handleChange}
              />
            </div>
            {errors.Email && <p>{errors.Email}</p>}
          </div>

          <div className="input_wrap">
            <div className="input-h">
              <label htmlFor="password">
                <BsKey className="icon" /> 
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            {errors.password && <p>{errors.password}</p>}
          </div>

          <div className="input_wrap">
            <div className="input-h">
              <label htmlFor="confirmPassword">
                <BsKey className="icon" /> 
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
              />
            </div>
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
          </div>

          <div className="input_wrap">
            <div className="input-h">
              <label htmlFor="phone">
                <BsTelephone className="icon" />
                Phone Number
              </label>
              <input id="phone" name="phone"  />
            </div>
          </div>

          <button className="form_btn" onClick={handleSubmit} type="submit">
                Sign Up
          </button>
        </form>
      </div>
    </div>
    </div>
    
  );
};

export default About;

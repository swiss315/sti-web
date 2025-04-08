import "../../../stylesheets/Customer_signup.css";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsKey, BsTelephone } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import validate from "../../../validation/validateInfo";
import useForm from "../../../validation/useForm";
import Navbar from '../../../components/Navbar.js'
import {useSelector} from "react-redux";
import {RootState} from "../../../service/reducers/rootReducer.ts";
import CustomButton from "../../../components/form/customButton";
import {areAllKeysFilled} from "../../../utils/formValidator";

const About = ({ submitForm }) => {
  const AuthState = useSelector((state: RootState) => state.auth);
  const {loading} = AuthState;
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  console.log(errors.confirmPassword)

  const formFiled = areAllKeysFilled(values)

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
        <form className="customer_signup" onSubmit={handleSubmit}>
          <div className="input_wrap">
            <div className="input-h">
              <label htmlFor="firstname">
                <HiOutlineUser className="icon" />
                First Name
              </label>
              <input
                id="firstname"
                name="firstname"
                type="text"
                value={values.firstname}
                onChange={handleChange}
              />
            </div>
            {errors.firstname && <p>{errors.firstname}</p>}
          </div>

          <div className="input_wrap">
            <div className="input-h">
              <label htmlFor="lastname">
                <HiOutlineUser className="icon" />
                Last Name
              </label>
              <input
                id="lastname"
                name="lastname"
                type="text"
                value={values.lastname}
                onChange={handleChange}
              />
            </div>
            {errors.lasnName && <p>{errors.lastname}</p>}
          </div>

          <div className="input_wrap">
            <div className="input-h">
              <label htmlFor="lastName">
                <HiOutlineUser className="icon"/>
                Gender
              </label>
              <select className={'w-full outline-0'} id={'gender'} name={'gender'} value={values.gender} onChange={handleChange}>
                <option>Select gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              {/*<input*/}
              {/*    id="lastName"*/}
              {/*    name="lastName"*/}
              {/*    type="text"*/}
              {/*    value={values.lastName}*/}
              {/*    onChange={handleChange}*/}
              {/*/>*/}
            </div>
            {errors.lastName && <p>{errors.lastName}</p>}
          </div>

          <div className="input_wrap">
            <div className="input-h">
              <label htmlFor="email">
                <AiOutlineMail className="icon" />
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            {errors.email && <p>{errors.email}</p>}
          </div>


          <div className="input_wrap">
            <div className="input-h">
              <label htmlFor="phone">
                <BsTelephone className="icon"/>
                Phone Number
              </label>
              <input id="phone" name="phone" type="text"
                     onChange={handleChange}/>
            </div>
            {errors.phone && <p>{errors.phone}</p>}
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

          <CustomButton isLoading={loading} className="form_btn"  children={'Sign Up'} disabled={!formFiled}/>
          {/*<button className="form_btn" onClick={handleSubmit} type="submit">*/}
          {/*  Sign Up*/}
          {/*</button>*/}
        </form>
      </div>
    </div>
    </div>

  );
};

export default About;

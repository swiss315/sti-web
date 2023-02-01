import React from "react";
import "../stylesheets/Claims.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import Bell from "../assets/icons/Bell.svg";

const PinPassword = () => {
  return (
    <div className="general-claims">
      <div className="claims-header">
        <AiOutlineArrowLeft />
        <div className="sign-update">
          <FaUserAlt />
          <img className="bell" src={Bell} alt="" />
        </div>
      </div>
      <div className="myclaims">
        <h4>Change Password</h4>
      </div>
      <div className="password-form">
        <form action="">
          <div className="form-group">
            <label>Old Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label>New Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label>Confirm New Password</label>
            <input type="password" className="form-control" />
          </div>
          <button>Change Password</button>
        </form>
      </div>
    </div>
  );
};

export default PinPassword;

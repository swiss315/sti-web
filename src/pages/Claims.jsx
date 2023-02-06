import React from "react";
import "../stylesheets/Claims.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import Bell from "../assets/icons/Bell.svg";
import { Link } from "react-router-dom";

const Claims = () => {
  return (
    <div className="general-claims">
      {/* <div className="claims-header">
       <Link to='/home'> <AiOutlineArrowLeft /> </Link>
         <div className="sign-update">
          <FaUserAlt />
          <img className="bell" src={Bell} alt="" />
        </div> 
      </div> */}
      <div className="myclaims">
        <h4>My Claims</h4>
      </div>
      <div className="claim-track">
        <div className="claim-report">
          <Link to='/claim'>
          <button className="button1">Report A Claim</button> </Link>
         <Link to='/trackclaim'> <button className="button2">Track A Claim</button> </Link>
        </div>
        <form className="claim-form">
          <div className="claim-type">
            <label htmlFor="">Claim Type</label>
            <input type="text" placeholder="Select preferred type" />
          </div>
          <div className="claim-type">
            <label htmlFor="">Policy Number</label>
            <input type="number" />
          </div>
          <div className="claim-type">
            <label htmlFor="">Description of claims</label>
            <input className="describe" type="text" />
          </div>
          <div className="claim-type">
            <label htmlFor="">Date Of Loss</label>
            <input type="date" id="start" name="trip-start" />
          </div>
          <div className="claim-type">
            <label htmlFor="">Estimate Claim Loss</label>
            <input type="text" />
          </div>
          <div className="claim-type">
            <label htmlFor="">Lost Estimate</label>
            <input type="text" />
          </div>
          <div
            className="claim-type"
            placeholder="Choose File from your device here"
          >
            <label htmlFor="">Upload Estimate Of Claim Cost</label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
            />
          </div>
          <div className="claim-type">
            <label htmlFor="" placeholder="Choose File from your device here">
              Upload Damage Picture
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
            />
          </div>
          <div className="claim-type">
            <label htmlFor="">Upload Other Documents</label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
              placeholder="Choose File from your device here"
            />
          </div>
          <div className="claim-notice">
            <h5>NB:</h5>
            <p>
              Claim will be settled within 5 working days after the receipt of
              executed discharge voucher.
            </p>
          </div>
          <div className="claim-submit">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Claims;

import React from "react";
import "../stylesheets/Claims.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import Bell from "../assets/icons/Bell.svg";

const TrackClaim = () => {
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
        <h4>My Claims</h4>
      </div>
      <div className="claim-track">
      <div className="claim-report">
        <button>Report A Claim</button>
        <button>Track A Claim</button>
      </div>
      <div className="claim-form">
        <div className="claim-type">
          <label htmlFor="">Claim Type</label>
          <input type="text" placeholder="Select preferred type"/>
        </div>
        <div className="claim-submit">
          <button>Track Your Claim</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TrackClaim;

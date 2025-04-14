import React from "react";
import "../../stylesheets/Claims.css";

const TrackClaim = () => {
  return (
    <div className="general-claims">
      {/* <div className="claims-header">
        <AiOutlineArrowLeft />
        <div className="sign-update">
          <FaUserAlt />
          <img className="bell" src={Bell} alt="" />
        </div>
      </div> */}
      {/* <div className="myclaims">
        <h4>My Claims</h4>
      </div> */}
      <div className="claim-track">
      {/* <div className="claim-report">
        <button>Report A Claim</button>
        <button>Track A Claim</button>
      </div> */}
      <div className="claim-form">
        <div className="claim-type">
          <label htmlFor="">Claim Type</label>
            <select className=" use_user4" name="claim_type" >
                <option defaultValue="">
                    Select preferred type
                </option>
                <option value="marine">Marine Insurance</option>
                <option value="travel">Easy Travel Insurance</option>
                <option value="all_risk">All Risk</option>
            </select>
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

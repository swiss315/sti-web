import React from "react";
import "../stylesheets/Claims.css";

const PinTransaction = () => {
  return (
    <div className="general-claims">
      {/* <div className="claims-header">
        <AiOutlineArrowLeft />
        <div className="sign-update">
          <FaUserAlt />
          <img className="bell" src={Bell} alt="" />
        </div>
      </div> */}
      <div className="myclaims">
        <h4>Transaction History</h4>
      </div>
      <table className="transaction-table">
        <thead>
          <tr>
            <th className="ref">Reference No</th>
            <th className="ref">Policy</th>
            <th className="ref">Insurance claim</th>
            <th className="ref">Amount</th>
            <th className="ref">Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>ST273864</th>
            <th>Marine</th>
            <th>Dummy Text</th>
            <th>NGN500,000</th>
            <th>20/6/23</th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>ST273864</th>
            <th>Marine</th>
            <th>Dummy Text</th>
            <th>NGN500,000</th>
            <th>20/6/23</th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>ST273864</th>
            <th>Marine</th>
            <th>Dummy Text</th>
            <th>NGN500,000</th>
            <th>20/6/23</th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>ST273864</th>
            <th>Marine</th>
            <th>Dummy Text</th>
            <th>NGN500,000</th>
            <th>20/6/23</th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>ST273864</th>
            <th>Marine</th>
            <th>Dummy Text</th>
            <th>NGN500,000</th>
            <th>20/6/23</th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>ST273864</th>
            <th>Marine</th>
            <th>Dummy Text</th>
            <th>NGN500,000</th>
            <th>20/6/23</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PinTransaction;

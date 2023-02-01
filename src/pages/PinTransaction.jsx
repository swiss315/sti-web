import React from "react";
import "../stylesheets/Claims.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import Bell from "../assets/icons/Bell.svg";

const PinTransaction = () => {
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
        <h4>Transaction History</h4>
      </div>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Reference No</th>
            <th>Policy</th>
            <th>Insurance claim</th>
            <th>Amount</th>
            <th>Date</th>
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

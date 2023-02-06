import React, { useState } from 'react'

import '../stylesheets/dashboard.css'

import marineinsurance from "../assets/images/marineinsurance.png";
import {ReactComponent as Searchicon} from "../assets/icons/searchicon.svg";

function Dashboard() {
  const [tab, setTab] = useState("Motor")
  return (
    <div className='dashboard-content'>
      <p>
        Hi <span>Khalid</span>,
      </p>
      <h2 className='dashboard-greetings'>
        Good Morning!
      </h2>
      <div className='search-container'>
        <div className='input-group'>
            <label>
                <Searchicon />
                <span>
                Search
                </span>
            </label>
            <input name='firstname' type='text' className='' />
        </div>
      </div>
      <div className='insurance-tab-container'>
        <div className={`insurance-type-tab ${tab === "Motor" ? "dashboard-active" : ""}`} onClick={() => {
              setTab("Motor");
            }}>
          Motor Insurance
        </div>
        <div className={`insurance-type-tab ${tab === "Risk" ? "dashboard-active" : ""}`} onClick={() => {
              setTab("Risk");
            }}>
          All Risk Insurance
        </div>
        <div className={`insurance-type-tab ${tab === "Swiss" ? "dashboard-active" : ""}`} onClick={() => {
              setTab("Swiss");
            }}>
          Swiss-F Insurance
        </div>
        <div className={`insurance-type-tab ${tab === "Travel" ? "dashboard-active" : ""}`} onClick={() => {
              setTab("Travel");
            }}>
          Easy Travel Insurance Cover
        </div>
        <div className={`insurance-type-tab ${tab === "Marine" ? "dashboard-active" : ""}`} onClick={() => {
              setTab("Marine");
            }}>
          Marine Insurance
        </div>
        <div className={`insurance-type-tab ${tab === "Contractor" ? "dashboard-active" : ""}`} onClick={() => {
              setTab("Contractor");
            }}>
          Contractors All Risk Insurance
        </div>
      </div>
      <div className='insurance-tab-content'>
          <div className='tab-box' style={{ backgroundImage: `url(${marineinsurance})` }}>
            <div>
              <h2>
                Marine Insurance
              </h2>
              <p>
                2 policies
              </p>
            </div>
          </div>
          <div className='tab-box' style={{ backgroundImage: `url(${marineinsurance})` }}>
            <div>
              <h2>
                Marine Insurance
              </h2>
              <p>
                2 policies
              </p>
            </div>
          </div>
          <div className='tab-box' style={{ backgroundImage: `url(${marineinsurance})` }}>
            <div>
              <h2>
                Marine Insurance
              </h2>
              <p>
                2 policies
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Dashboard
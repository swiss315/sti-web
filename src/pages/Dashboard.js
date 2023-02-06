import React from 'react'
import { Link } from "react-router-dom";

import '../stylesheets/dashboard.css'

import marineinsurance from "../assets/images/marineinsurance.png";
import {ReactComponent as Searchicon} from "../assets/icons/searchicon.svg";

function Dashboard() {
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
        <Link to='/motor-insurance' className={`insurance-type-tab `} >
          Motor Insurance
        </Link>
        <Link to='/all-risk' className={`insurance-type-tab `} >
          All Risk Insurance
        </Link>
        <Link to='/swiss-insurance' className={`insurance-type-tab `} >
          Swiss-F Insurance
        </Link>
        <Link to='/travel-insurance' className={`insurance-type-tab `} >
          Easy Travel Insurance Cover
        </Link>
        <Link to='/marine-insurance' className={`insurance-type-tab`}>
          Marine Insurance
        </Link>
        <Link className={`insurance-type-tab `} >
          Contractors All Risk Insurance
        </Link>
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
import React from 'react'
import { Link } from "react-router-dom";
import { Cookies } from "react-cookie";

import '../stylesheets/dashboard.css'

import marineinsurance from "../assets/images/marineinsurance.png";
import { ReactComponent as Searchicon } from "../assets/icons/searchicon.svg";

function Dashboard() {
  const cookie = new Cookies();
  let userdata = cookie.get("user");
  let userpolicy = cookie.get("policy");
  userdata = JSON.parse(atob(userdata));
  userpolicy = JSON.parse(atob(userpolicy));
  console.log(userdata);
  console.log(userpolicy);
  return (
    <div className='dashboard-content'>
      <p>
        Hi <span>{userdata.first_name}</span>,
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
        {userpolicy.my_policies.swiss.length === 0 ? '' : <div className='tab-box' style={{ backgroundImage: `url(${marineinsurance})` }}>
          <div>
            <h2>
              Swiss Insurance
            </h2>
            <p>
              {userpolicy.my_policies.swiss.length} policies
            </p>
          </div>
        </div>
        }
        {userpolicy.my_policies.vehicle.length === 0 ? '' : <div className='tab-box' style={{ backgroundImage: `url(${marineinsurance})` }}>
          <div>
            <h2>
              Vehicle Insurance
            </h2>
            <p>
              {userpolicy.my_policies.vehicle.length} policies
            </p>
          </div>
        </div>
        }
        {userpolicy.my_policies.travel.length === 0 ? '' : <div className='tab-box' style={{ backgroundImage: `url(${marineinsurance})` }}>
          <div>
            <h2>
              Travel Insurance
            </h2>
            <p>
              {userpolicy.my_policies.travel.length} policies
            </p>
          </div>
        </div>
        }
        {userpolicy.my_policies.all_risk.length === 0 ? '' : <div className='tab-box' style={{ backgroundImage: `url(${marineinsurance})` }}>
          <div>
            <h2>
            All risk Insurance
            </h2>
            <p>
              {userpolicy.my_policies.all_risk.length} policies
            </p>
          </div>
        </div>
        }
      </div>
    </div>
  )
}

export default Dashboard
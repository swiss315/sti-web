import React, {useEffect} from 'react'
import { Link } from "react-router-dom";
import { Cookies } from "react-cookie";

import '../stylesheets/dashboard.css'

import marineinsurance from "../assets/images/marineinsurance.png";
import motorInsurance from "../assets/images/motorinsurance.png";
import travelInsurance from "../assets/images/travelinsurance.png";
import { ReactComponent as SearchIcon } from "../assets/icons/searchicon.svg";
import {useTransaction} from "../hooks/transaction";

function Dashboard() {
  const cookie = new Cookies();
  let userdata = cookie.get("user");
  // let userPolicies = cookie.get("policy");
  const {transaction, data: allData} = useTransaction()

  userdata = JSON.parse(atob(userdata));
  // userPolicies = JSON.parse(atob(userPolicies));

  console.log(userdata);
  // console.log(userPolicies);
  function convertDate(date) {
    const fullYear = new Date(date);
    let year = fullYear.getFullYear();
    let month = fullYear.getMonth() + 1;
    let day = fullYear.getDate();
    day = day.toString().padStart(2, "0");

    month = month.toString().padStart(2, "0");
    let formattedToday;
    formattedToday = day + "/" + month + "/" + year;
    return formattedToday;
  }

  useEffect(() => {
    transaction()
  }, [transaction])

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
              <SearchIcon/>
              <span>
              Search
            </span>
            </label>
            <input name='firstname' type='text' className=''/>
          </div>
        </div>
        <div className='insurance-tab-container'>
          <Link to='/motor-insurance' className={`insurance-type-tab `}>
            Motor Insurance
          </Link>
          <Link to='/all-risk' className={`insurance-type-tab `}>
            All Risk Insurance
          </Link>
          <Link to='/swiss-insurance' className={`insurance-type-tab `}>
            Swiss-F Insurance
          </Link>
          <Link to='/travel-insurance' className={`insurance-type-tab `}>
            Easy Travel Insurance Cover
          </Link>
          <Link to='/marine-insurance' className={`insurance-type-tab`}>
            Marine Insurance
          </Link>
        </div>
        <div className='insurance-tab-content'>
          <div className='tab-box' style={{backgroundImage: `url(${marineinsurance})`}}>
            <div>
              <h2>
                Marine Insurance
              </h2>
              <p>
                {/*{userPolicies.my_policies.swiss.length} policies*/}
              </p>
            </div>
          </div>
          <div className='tab-box' style={{backgroundImage: `url(${motorInsurance})`}}>
            <div>
              <h2>
                Vehicle Insurance
              </h2>
              <p>
                {/*{userPolicies.my_policies.vehicle.length} policies*/}
              </p>
            </div>
          </div>
          <div className='tab-box' style={{backgroundImage: `url(${travelInsurance})`}}>
            <div>
              <h2>
                Travel Insurance
              </h2>
              <p>
                {/*{userPolicies.my_policies.travel.length} policies*/}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h5 className="fw-bold">
            Transaction History
          </h5>
          <table className="transaction-table mt-4">
            <thead>
            <tr>
              <th className="ref">Index</th>
              <th className="ref">Reference No</th>
              <th className="ref">Policy Number</th>
              <th className="ref">Amount</th>
              <th className="ref">Status</th>
              <th className="ref">Date</th>
            </tr>
            </thead>
            {allData.length === 0 ? <tbody>
                <tr>
                  <th className="text-center p-5" colSpan={6}>
                    No Data Found
                  </th>
                </tr>
                </tbody> :
                <tbody>
                {
                  allData.map((data, index) => {
                    return (
                        <tr key={index}>
                          <th className="ref">{index + 1}</th>
                          <th>{data.reference}</th>
                          <th>{data.policy_number}</th>
                          <th>{data.amount}</th>
                          <th>{data.status}</th>
                          <th>{convertDate(data.updated_at)}</th>
                        </tr>
                    )
                  })
                }

                </tbody>
            }
          </table>
        </div>
      </div>
  )
}

export default Dashboard
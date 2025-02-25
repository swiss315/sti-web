import React, {useEffect} from 'react'
import { Link } from "react-router-dom";
import '../../stylesheets/dashboard.css'
import marineinsurance from "../../assets/images/marineinsurance.png";
import motorInsurance from "../../assets/images/motorinsurance.png";
import travelInsurance from "../../assets/images/travelinsurance.png";
import { ReactComponent as SearchIcon } from "../../assets/icons/searchicon.svg";
import {useTransaction} from "../../hooks/transaction";
import {useDashboard} from "../../hooks/dashboard";
import {useSelector} from "react-redux";
import {RootState} from "../../service/reducers/rootReducer.ts";

function Dashboard() {
  const AuthState = useSelector((state: RootState) => state.auth);
  const {userData: userdata} = AuthState
  console.log(userdata)
  const {transaction} = useTransaction()
  const {getDashboard, data} = useDashboard()

  const getStatusClass = (status) => {
    switch (status) {
      case "Successful":
        return "text-green-500 font-bold";
      case "Pending":
        return "text-orange-500 font-semibold";
      case "Failed":
        return "text-red-500 font-bold";
      default:
        return "text-gray-500";
    }
  };

  const getInsurancePath = (name) => {
    switch (name) {
      case "All Risk Insurance":
        return "all-risk";
      case "Vehicle Insurance":
        return "vehicle-insurance";
      case "Health Insurance":
        return "health-insurance";
      case "Home Insurance":
        return "home-insurance";
      case "Travel Insurance":
        return "travel-insurance";
      default:
        return "vehicle-insurance";
    }
  };

  console.log(userdata);
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
    getDashboard()
  }, [])

  return (
      <div className='dashboard-content'>
        <p>
          Hi <span>{userdata?.firstname}</span>,
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
          {
            data.insurance_policies.length !== 0 && (
                  data.insurance_policies.map((policy, index) => {
                    return (
                        <Link to={`/${getInsurancePath(policy.label)}`} className={`insurance-type-tab `}>
                          {policy.label}
                        </Link>
                    )
                  })
            )
          }
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
            {data.transactions.length === 0 ? <tbody>
                <tr>
                  <th className="text-center p-5" colSpan={6}>
                    No Data Found
                  </th>
                </tr>
                </tbody> :
                <tbody>
                {
                  data.transactions.map((data, index) => {
                    return (
                        <tr key={index}>
                          <th className="ref">{index + 1}</th>
                          <th>{data.reference}</th>
                          <th>{data.policy_number}</th>
                          <th>{data.amount}</th>
                          <th className={getStatusClass(data.status)}>{data.status}</th>
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

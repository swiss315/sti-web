import React, {useEffect} from 'react'
import {Link, useNavigate} from "react-router-dom";
import '../../stylesheets/dashboard.css'
import marineinsurance from "../../assets/images/marineinsurance.png";
import motorInsurance from "../../assets/images/motorinsurance.png";
import travelInsurance from "../../assets/images/travelinsurance.png";
import { ReactComponent as SearchIcon } from "../../assets/icons/searchicon.svg";
import {useDashboard} from "../../hooks/dashboard";
import {useSelector} from "react-redux";
import {RootState} from "../../service/reducers/rootReducer.ts";

function Dashboard() {
  const AuthState = useSelector((state: RootState) => state.auth);
  const {userData: userdata} = AuthState
  const {getDashboard, data, loading} = useDashboard()
  const navigate = useNavigate();

  const getInsurancePath = (name) => {
    switch (name) {
      case "All Risk Insurance":
        return "all-risk";
      case "Vehicle Insurance":
        return "motor-insurance";
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
        {
          loading ?
              <div className="insurance-tab-container flex gap-3 mb-4 animate-pulse">
                {Array.from({length: 4}).map((_, i) => (
                    <div
                        key={i}
                        className="h-10 w-32 bg-gray-300 rounded-lg"
                    ></div>
                ))}
              </div> :
              <div className='insurance-tab-container'>
                {
                    data.insurance_policies.length !== 0 && (
                        data.insurance_policies.map((policy, index) => {
                          return (
                              <Link key={index} to={`/${getInsurancePath(policy.label)}?id=${policy.id}`}
                                    className={`insurance-type-tab `}>
                                {policy.label}
                              </Link>
                          )
                        })
                    )
                }
              </div>
        }

        {
          loading ?
              <div className="insurance-tab-content grid grid-cols-1 md:grid-cols-3 gap-4 animate-pulse">
                {Array.from({length: 3}).map((_, i) => (
                    <div key={i} className="tab-box h-40 rounded-xl bg-gray-200 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gray-300 opacity-40"></div>
                      <div className="p-4 space-y-2 relative z-10">
                        <div className="h-6 w-32 bg-gray-400 rounded"></div>
                        {/* Title */}
                        <div className="h-4 w-20 bg-gray-300 rounded"></div>
                        {/* Subtext */}
                      </div>
                    </div>
                ))}
              </div> :
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
                <div onClick={() => navigate('/motor')} className='tab-box cursor-pointer' style={{backgroundImage: `url(${motorInsurance})`}}>
                  <div>
                    <h2>
                      Vehicle Insurance
                    </h2>
                    <p>
                      {/*{userPolicies.my_policies.vehicle.length} policies*/}
                    </p>
                  </div>
                </div>
                <div onClick={() => navigate('/travel')} className='tab-box cursor-pointer' style={{backgroundImage: `url(${travelInsurance})`}}>
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

        }
        {
          loading ?
              <table className="transaction-table w-full">
                <thead>
                <tr>
                  {[...Array(5)].map((_, i) => (
                      <th key={i}>
                        <div className="h-4 w-20 bg-gray-300 rounded"></div>
                      </th>
                  ))}
                </tr>
                </thead>
                <tbody>
                {Array.from({length: 5}).map((_, i) => (
                    <tr key={i}>
                      <td className="p-3" colSpan={5}>
                        <div className="h-4 w-full bg-gray-200 rounded "></div>
                      </td>
                    </tr>
                ))}
                </tbody>
              </table>
              :
              <div className="mt-5">
                <h5 className="fw-bold">
                  Transaction History
                </h5>
                <table className="transaction-table mt-4">
                  <thead>
                  <tr>
                    <th className="ref">Index</th>
                    <th className="ref">Reference No</th>
                    <th className="ref">Details</th>
                    <th className="ref">Amount</th>
                    {/*<th className="ref">Status</th>*/}
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
                                <th>{data.trnx}</th>
                                <th>{data.details}</th>
                                <th>{data.amount}</th>
                                {/*<th className={getStatusClass(data.status)}>{data.status}</th>*/}
                                <th>{convertDate(data.updated_at)}</th>
                              </tr>
                          )
                        })
                      }

                      </tbody>
                  }
                </table>
              </div>
        }
      </div>
  )
}

export default Dashboard

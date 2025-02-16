import React, {useEffect} from 'react'
import { Link } from "react-router-dom";
import { Cookies } from "react-cookie";
import '../../stylesheets/dashboard.css'
import marineinsurance from "../../assets/images/marineinsurance.png";
import motorInsurance from "../../assets/images/motorinsurance.png";
import travelInsurance from "../../assets/images/travelinsurance.png";
import { ReactComponent as SearchIcon } from "../../assets/icons/searchicon.svg";
import {useTransaction} from "../../hooks/transaction";

function Dashboard() {
  const cookie = new Cookies();
  let userdata = cookie.get("user");
  // let userPolicies = cookie.get("policy");
  const {transaction} = useTransaction()
  if(userdata) {
    userdata = JSON.parse(atob(userdata));
  }

  const data = [
    {
      name: "Jane Smith",
      reference: "REF/0002",
      policy_number: "MOT/PM/02/23/SA/23456",
      amount: "₦ 150,000",
      status: "Pending",
      updated_at: "2021-10-01T12:30:00Z"
    },
    {
      name: "Mike Johnson",
      reference: "REF/0003",
      policy_number: "MOT/PM/03/23/SA/78901",
      amount: "₦ 200,000",
      status: "Failed",
      updated_at: "2021-11-12T14:45:00Z"
    },
    {
      name: "Emily Davis",
      reference: "REF/0004",
      policy_number: "MOT/PM/04/23/SA/56789",
      amount: "₦ 180,000",
      status: "Successful",
      updated_at: "2021-12-05T09:15:00Z"
    },
    {
      name: "Chris Brown",
      reference: "REF/0005",
      policy_number: "MOT/PM/05/23/SA/34567",
      amount: "₦ 220,000",
      status: "Pending",
      updated_at: "2022-01-10T11:00:00Z"
    },
    {
      name: "Sophia Wilson",
      reference: "REF/0006",
      policy_number: "MOT/PM/06/23/SA/12345",
      amount: "₦ 130,000",
      status: "Successful",
      updated_at: "2022-02-15T10:30:00Z"
    }
  ];


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
    transaction()
  }, [transaction])

  return (
      <div className='dashboard-content'>
        <p>
          Hi <span>{userdata?.first_name}</span>,
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
            {data.length === 0 ? <tbody>
                <tr>
                  <th className="text-center p-5" colSpan={6}>
                    No Data Found
                  </th>
                </tr>
                </tbody> :
                <tbody>
                {
                  data.map((data, index) => {
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

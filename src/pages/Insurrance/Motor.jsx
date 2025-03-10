import React, {useEffect} from 'react'
// import { useState } from 'react'
import "../../stylesheets/motor.css"
import motorp from '../../assets/motorp.png'
import Policy from '../../components/Policy'
import {usePolicy} from "../../hooks/Policy";

const Motor = () => {
    const getStatusClass = (status) => {
        switch (status) {
            case 1:
                return "text-green-500 font-bold";
            case 0:
                return "text-orange-500 font-semibold";
            // case "0":
            //     return "text-red-500 font-bold";
            default:
                return "text-gray-500";
        }
    };
    const getPolicyStatusClass = (status) => {
        switch (status) {
            case "Successful":
                return "text-green-500 font-bold";
            case "Processing":
                return "text-orange-500 font-semibold";
            case "Failed":
                return "text-red-500 font-bold";
            default:
                return "text-green-500 font-bold";
        }
    };
    const {getMotorPolicy, isLoading, policy} = usePolicy()

    useEffect(() => {
        getMotorPolicy()
    }, [])

    return (
    <div className="motor">
        <div className="motor_container">
            <Policy heading='Motor Insurance' text='32 Policies' image={motorp}   />
            <div className="mt-5">
                <table className="transaction-table mt-4">
                    <thead>
                    <tr>
                        <th className="ref">Index</th>
                        <th className="ref">Name</th>
                        <th className="ref">Plate Number</th>
                        <th className="ref">Policy Number</th>
                        <th className="ref">Policy Type</th>
                        <th className="ref">Amount</th>
                        <th className="ref">Status</th>
                        <th className="ref">Payment Status</th>
                        <th className="ref">End Date</th>
                    </tr>
                    </thead>
                    {policy.motor.length === 0 ? <tbody>
                        <tr>
                            <th className="text-center p-5" colSpan={9}>
                                No Data Found
                            </th>
                        </tr>
                        </tbody> :
                        <tbody>
                        {
                            policy.motor.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <th className="ref">{index + 1}</th>
                                        <th>{data?.quote?.customer.lastname + " " + data.quote.customer.firstname}</th>
                                        <th>{data.quote?.plate_number}</th>
                                        <th>{data.policy_number || 'N/A'}</th>
                                        <th>{data.quote?.policy_type.name}</th>
                                        <th>{data.quote?.total}</th>
                                        <th className={getPolicyStatusClass(data.quote?.policy_status)}>{data.quote?.policy_status}</th>
                                        <th className={getStatusClass(data.quote?.status)}>{data.quote?.status === 1 ? 'Paid' : 'Not Paid'}</th>

                                        <th>{data.edate}</th>
                                    </tr>
                                )
                            })
                        }

                        </tbody>
                    }
                </table>
            </div>
        {/*<div className="policy_container">*/}
        {/*      {motorData.map((item)=>(*/}
        {/*        <div className="transaction" key={item.id}>*/}
        {/*        <div className="dot"></div>*/}
        {/*        <div className="details">*/}
        {/*            <p> Policy Number: <b>{item.number}</b></p>*/}
        {/*            <p>Name: <b>{item.names}</b></p>*/}
        {/*            <p>Date Of Birth: {item.dob} </p>*/}
        {/*            <p>Start Date: {item.sdate}</p>*/}
        {/*            <p>End Date: {item.edate}</p>*/}
        {/*            <p>Period: {item.period}</p>*/}
        {/*            <p>Price: {item.price}</p>*/}
        {/*            <p>Plate Number: {item.plate}</p>*/}
        {/*            <p>Premium Value: {item.value}</p>*/}
        {/*            <p>Premium Type: {item.type}</p>*/}
        {/*            <p>Payment Status: <span  className={*/}
        {/*                item.pay === "Paid"? "active_text" : (*/}
        {/*                    item.pay === "Failed" ? "notactive" : "pending"*/}
        {/*                )*/}

        {/*            }>{item.pay}</span> </p>*/}
        {/*            <p>Status: <span className={*/}
        {/*                item.stats === "Active"? "active_text" : (*/}
        {/*                    item.stats === "Not Active" ? "notactive" : "stats-pending"*/}
        {/*                )*/}

        {/*            }>{item.stats} </span> </p>*/}
        {/*        </div>*/}

        {/*       </div>*/}
        {/*      ))}*/}
        {/*</div>*/}


        </div>
    </div>
  )
}

export default Motor

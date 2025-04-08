import React, {useEffect} from 'react'
// import { useState } from 'react'
import "../../stylesheets/motor.css"
import motorp from '../../assets/motorp.png'
import Policy from '../../components/Policy'
import {usePolicy} from "../../hooks/Policy";
import {PolicyLoader} from "../../components/Loader/policyLoader";

const Travel = () => {
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
    const {getTravelPolicy, isLoading, policy} = usePolicy()

    console.log(policy, 'policy')
    useEffect(() => {
        getTravelPolicy()
    }, [])


    if (isLoading) {
        return (
            <PolicyLoader />
        );
    }


    return (
        <div className="motor">
            <div className="motor_container">
                <Policy heading='Travel Insurance' text={`${policy.travel.length} Policies`} image={motorp}/>
                <div className="mt-5">
                    <table className="transaction-table mt-4">
                        <thead>
                        <tr>
                            <th className="ref">Index</th>
                            <th className="ref">Name</th>
                            <th className="ref">Country</th>
                            <th className="ref">Amount</th>
                            <th className="ref">Status</th>
                            <th className="ref">Payment Status</th>
                            <th className="ref">End Date</th>
                        </tr>
                        </thead>
                        {isLoading ? (
                            Array.from({length: 5}).map((_, i) => (
                                <tr key={i}>
                                    {Array.from({length: 7}).map((_, j) => (
                                        <td key={j}>
                                            <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : policy.travel.length === 0 ? <tbody>
                            <tr>
                                <th className="text-center p-5" colSpan={6}>
                                    No Data Found
                                </th>
                            </tr>
                            </tbody> :
                            <tbody>
                            {
                                policy.travel.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <th className="ref">{index + 1}</th>
                                            <th>{data.quote.customer.lastname + " " + data.quote.customer.firstname}</th>
                                            <th>{data.quote.departure}</th>
                                            <th>{data.quote.total}</th>
                                            <th className={getStatusClass(data.status)}>{data.quote.policy_status}</th>
                                            <th className={getStatusClass(data.status)}>{data.quote.status === 1 ? 'Paid' : 'Not Paid'}</th>
                                            <th>{data.edate}</th>
                                        </tr>
                                    )
                                })
                            }

                            </tbody>
                        }
                    </table>
                </div>



            </div>
        </div>
    )
}

export default Travel

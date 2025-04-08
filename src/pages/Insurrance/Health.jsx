import React, {useEffect} from 'react'
// import { useState } from 'react'
import "../../stylesheets/motor.css"
import motorp from '../../assets/health1.jpg'
import Policy from '../../components/Policy'
import {usePolicy} from "../../hooks/Policy";
import {PolicyLoader} from "../../components/Loader/policyLoader";

const Health = () => {
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
    const {getHealthPolicy, isLoading, policy} = usePolicy()

    console.log(policy, 'policy')
    useEffect(() => {
        getHealthPolicy()
    }, [])


    if (isLoading) {
        return (
            <PolicyLoader/>
        );
    }

    return (
        <div className="motor">
            <div className="motor_container">
                <Policy heading='Health Insurance' text={`${policy.health.length} Policies`} image={motorp}/>
                <div className="mt-5">
                    {/*<TableSkeleton />*/}
                    <table className="transaction-table mt-4">
                        <thead>
                        <tr>
                            <th className="ref">Index</th>
                            <th className="ref">Name</th>
                            <th className="ref">Policy Number</th>
                            <th className="ref">Policy Type</th>
                            <th className="ref">Amount</th>
                            <th className="ref">Status</th>
                            <th className="ref">Payment Status</th>
                        </tr>
                        </thead>
                        {policy.health.length === 0 ? <tbody>
                            <tr>
                                <th className="text-center p-5" colSpan={9}>
                                    No Data Found
                                </th>
                            </tr>
                            </tbody> :
                            <tbody>
                            {
                                policy.health.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <th className="ref">{index + 1}</th>
                                            <th>{data.quote?.customer.lastname + ' ' + data.quote?.customer.firstname}</th>
                                            <th>{data.policy_number}</th>
                                            <th>{data.quote.policy_type.name}</th>
                                            <th>{data.quote.policy_type.rate}</th>
                                            <th className={getStatusClass(data.quote.status)}>{data.quote.status === 1 ? 'Paid' : 'Not Paid'}</th>
                                            <th className={getStatusClass(data.quote.status)}>{data.quote.status === 1 ? 'Paid' : 'Not Paid'}</th>

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

export default Health

import React, {useEffect} from 'react'
// import { useState } from 'react'
import "../../stylesheets/motor.css"
import motorp from '../../assets/health1.jpg'
import Policy from '../../components/Policy'
import {usePolicy} from "../../hooks/Policy";
import TableSkeleton from "../../components/Loader/TableSkeleton";

const Health = () => {
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
    const {getHealthPolicy, isLoading, policy} = usePolicy()

    useEffect(() => {
        getHealthPolicy()
    }, [])

    return (
        <div className="motor">
            <div className="motor_container">
                <Policy heading='Health Insurance' text='32 Policies' image={motorp}/>
                <div className="mt-5">
                    {/*<TableSkeleton />*/}
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
                                            <th>{data.names}</th>
                                            <th>{data.plate}</th>
                                            <th>{data.number}</th>
                                            <th>{data.type}</th>
                                            <th>{data.value}</th>
                                            <th className={getStatusClass(data.stats)}>{data.stats}</th>
                                            <th className={getStatusClass(data.pay)}>{data.pay}</th>

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

export default Health

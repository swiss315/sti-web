import React from 'react'
// import { useState } from 'react'
import "../../stylesheets/motor.css"
import motorp from '../../assets/motorp.png'
import Policy from '../../components/Policy'

const Travel = () => {
    const motorData = [
        {
            id: 1,
            number: 'MOT/PM/01/23/SA/10677',
            names: 'Joy Imole',
            dob: 'Oct 10,2014',
            sdate: 'Jun 10,2023',
            edate: 'Feb 05,2026',
            period: '425 Days',
            country: 'United Kingdom',
            price: 'NGN 2500',
            plate: 'KSG457738',
            value: 'NGN 1200000.00',
            type: 'Third Party Only',
            pay: 'Paid',
            stats: 'Active'

        },
        {
            id: 2,
            number: 'MOT/PM/01/23/SA/10677',
            names: 'Joy Imole',
            dob: 'Oct 10,2014',
            sdate: 'Jun 10,2023',
            edate: 'Feb 05,2026',
            period: '425 Days',
            country: 'Spain',
            price: 'NGN 2500',
            plate: 'KSG457738',
            value: 'NGN 1200000.00',
            type: 'Third Party Only',
            pay: 'Failed',
            stats: 'Not Active'

        },
        {
            id: 3,
            number: 'MOT/PM/01/23/SA/10677',
            names: 'Joy Imole',
            dob: 'Oct 10,2014',
            sdate: 'Jun 10,2023',
            edate: 'Feb 05,2026',
            period: '425 Days',
            country: 'Switzerland',
            price: 'NGN 2500',
            plate: 'KSG457738',
            value: 'NGN 1200000.00',
            type: 'Third Party Only',
            pay: 'Pending',
            stats: 'Pending'

        },
        {
            id: 1,
            number: 'MOT/PM/01/23/SA/10677',
            names: 'Joy Imole',
            dob: 'Oct 10,2014',
            sdate: 'Jun 10,2023',
            edate: 'Feb 05,2026',
            period: '425 Days',
            country: 'United Arab Emirates',
            price: 'NGN 2500',
            plate: 'KSG457738',
            value: 'NGN 1200000.00',
            type: 'Third Party Only',
            pay: 'Paid',
            stats: 'Active'

        },
        {
            id: 2,
            number: 'MOT/PM/01/23/SA/10677',
            names: 'Joy Imole',
            dob: 'Oct 10,2014',
            sdate: 'Jun 10,2023',
            edate: 'Feb 05,2026',
            period: '425 Days',
            country: 'Canada',
            price: 'NGN 2500',
            plate: 'KSG457738',
            value: 'NGN 1200000.00',
            type: 'Third Party Only',
            pay: 'Failed',
            stats: 'Not Active'

        },
        {
            id: 3,
            number: 'MOT/PM/01/23/SA/10677',
            names: 'Joy Imole',
            dob: 'Oct 10,2014',
            sdate: 'Jun 10,2023',
            edate: 'Feb 05,2026',
            period: '425 Days',
            country: 'United States of America',
            price: 'NGN 2500',
            plate: 'KSG457738',
            value: 'NGN 1200000.00',
            type: 'Third Party Only',
            pay: 'Pending',
            stats: 'Pending'

        },
    ]
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


    return (
        <div className="motor">
            <div className="motor_container">
                <Policy heading='Travel Insurance' text='32 Policies' image={motorp}/>
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
                        {motorData.length === 0 ? <tbody>
                            <tr>
                                <th className="text-center p-5" colSpan={6}>
                                    No Data Found
                                </th>
                            </tr>
                            </tbody> :
                            <tbody>
                            {
                                motorData.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <th className="ref">{index + 1}</th>
                                            <th>{data.names}</th>
                                            <th>{data.country}</th>
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

export default Travel

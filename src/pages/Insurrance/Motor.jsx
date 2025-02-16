import React from 'react'
// import { useState } from 'react'
import "../../stylesheets/motor.css"
import motorp from '../../assets/motorp.png'
import Policy from '../../components/Policy'

const Motor = () => {
    const motorData = [
        {
            id: 1,
            number: 'MOT/PM/01/23/SA/10677',
            names: 'Joy Imole',
            dob: 'Oct 10,2014',
            sdate: 'Jun 10,2023',
            edate: 'Feb 05,2026',
            period:'425 Days',
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
            period:'425 Days',
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
            period:'425 Days',
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

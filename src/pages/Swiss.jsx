import React from 'react'
import "../stylesheets/motor.css"
import swissp from '../assets/swissp.png'
import Policy from '../components/Policy'





const Swiss = () => {


<<<<<<< HEAD
    const swissData = [
=======
    const swissData= [
>>>>>>> 8416aeb (update)
        {
            id: 1,
            number: 'SWISS/01/23/SA/10677',
            names: 'Foluke Osas',
            dob: 'Oct 10,2014',
            sdate: 'Jun 10,2023',
            edate: 'Feb 05,2026',
            period:'425 Days',
            price: 'NGN 2500',
            pay: 'Failed',
            stats: 'Not Active'
    
        },
        {
            id: 2,
            number: 'SWISS/01/23/SA/10677',
            names: 'Foluke Osas',
            dob: 'Oct 10,2014',
            sdate: 'Jun 10,2023',
            edate: 'Feb 05,2026',
            period:'425 Days',
            price: 'NGN 2500',
            pay: 'Paid',
            stats: 'Active'
    
        },
        {
            id: 3,
            number: 'SWISS/01/23/SA/10677',
            names: 'Foluke Osas',
            dob: 'Oct 10,2014',
            sdate: 'Jun 10,2023',
            edate: 'Feb 05,2026',
            period:'425 Days',
            price: 'NGN 2500',
            pay: 'Failed',
            stats: 'Not Active'
    
        },
    ]







  return (
    <div className="motor">
        <div className="motor_container">
            <Policy heading='Swiss-F Insurance' text='3 Policies' image={swissp}   />
        <div className="policy_container">
              {swissData.map((item)=>(
                <div className="transaction" key={item.id}>
                <div className="dot"></div>
                <div className="details">
                    <p> Policy Number: <b>{item.number}</b></p>
                    <p>Name: <b>{item.names}</b></p>
                    <p>Date Of Birth: {item.dob} </p>
                    <p>Start Date: {item.sdate}</p>
                    <p>End Date: {item.edate}</p>
                    <p>Period: {item.period}</p>
                    <p>Price: {item.price}</p>
                    <p>Payment Status: <span  className={
                        item.pay === "Paid"? "active" : (
                            item.pay === "Failed" ? "notactive" : "pending"
                        )
                        
                    }>{item.pay}</span> </p>
                    <p>Status: <span className={
                        item.stats === "Active"? "active" : (
                            item.stats ==="Not Active" ? "notactive" : "stats-pending"
                        )
                        
                    }>{item.stats} </span> </p>
                </div>
                
               </div>
              ))}
             

        </div> 
 

        </div>
    </div>
  )
}

export default Swiss

import React from 'react'
import '../stylesheets/motor.css'

const Policy= ({heading, text, image,number, names,dob, sdate, edate, period, price, plate, value, type, pay ,stats}) => {
  return (
  
        <div className="policy_heading">

          <div className="policy_text">
            <h3>{heading}</h3>
            <p>{text}</p>
          </div>

          <img src={image} alt='Image_heading' />
        </div>
        

  
  )
}

export default Policy
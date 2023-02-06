import React from 'react'
import "../stylesheets/Claims.css";





const Pin  = () => {
  return (
    <div className="general-claims">
    {/* <div className="claims-header">
      <AiOutlineArrowLeft />
       <div className="sign-update">
        <FaUserAlt />
        <img src={Bell} alt="" />
      </div> 
    </div> */}
    <div className="myclaims">
      <h4>My Pins</h4>
    </div>
    <div className="pin-message">
        <p>You have no pins yet!</p>
    </div>
    </div>
  )
}

export default Pin; 
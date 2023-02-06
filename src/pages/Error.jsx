import React from 'react'
import '../stylesheets/confirmation.css'
import Errorimage from '../assets/error.png'

const Error = () => {
  return (
    <div className="confirmation">
      <div className="confirmation_container">
        <img src={Errorimage} alt="Error_img" />
        <div className="confirmation_text">
          <h3>Error</h3>
          <p>Transcaction failed and payment has not been completed. <br /> Go back to retry your payment.</p>
        </div>

        <button type="submit" className='confirmation_button'>
        Retry Payment
        </button>

      </div>
    </div>
  )
}

export default Error
import React from 'react'
import '../../stylesheets/confirmation.css'
import Successimage from '../../assets/success.png'

const Success = () => {
    return (
        <div className="confirmation">
          <div className="confirmation_container">
            <img src={Successimage} alt="Error_img" />
            <div className="confirmation_text">
              <h3 className='success'>Success!</h3>
              <p>Transcaction Successfull and payment has been completed. <br /> Go back to retry your payment.</p>
            </div>

            <button type="submit" className='confirmation_button'>
            Retry Payment
            </button>

          </div>
        </div>
      )
}

export default Success

import React, { useState } from 'react'

import '../stylesheets/help&feedback.css'

function Helpandfeedback() {
    const [active, setActive] = useState('')

  return (
    <div>
    <div className='report-content'>
            <div className='feedback-header'>
                <h5 className='report-title'>
                    Help & Feedback
                </h5>
                <p>
                    Help us to help you. What can we do better?
                    <span>
                        Select one or more options
                    </span>
                </p>
            </div>
        <div className='feedback-container'>
            <div className={`feedback-button ${active === 'product offer' ? 'active' : ''}`} onClick={() => setActive('product offer')}>
                Wider product offers
            </div>
            <div className={`feedback-button ${active === 'Better insurance services' ? 'active' : ''}`} onClick={() => setActive('Better insurance services')}>
                Better insurance services
            </div>
            <div className={`feedback-button ${active === 'Easier registration process' ? 'active' : ''}`} onClick={() => setActive('Easier registration process')}>
                Easier registration process
            </div>
            <div className={`feedback-button ${active === 'Easier registration processs' ? 'active' : ''}`} onClick={() => setActive('Easier registration processs')}>
                Easier registration process
            </div>
            <div className={` ${active === '' ? 'feedback-next' : 'activebutton'}`}>
                <button className='feedback-next-button'>
                    Next
                </button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Helpandfeedback
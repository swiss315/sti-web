import React from 'react'

import '../../stylesheets/Notification.css'

function Notification() {
  return (
    <div>
        <div>
            <h2 className='notification-title'>
                Notification
            </h2>
            <div>
                <div className='notification-button-container'>
                    <button className='notification-button'>
                        Mark All As Read
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Notification

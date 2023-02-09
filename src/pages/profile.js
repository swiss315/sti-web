import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom";

import '../stylesheets/profile.css'

import {ReactComponent as Editicon} from "../assets/icons/Edit.svg";
import {ReactComponent as Termsicon} from "../assets/icons/termsicon.svg";
import {ReactComponent as Privacyicon} from "../assets/icons/privacyicon.svg";
import {ReactComponent as Redlogouticon} from "../assets/icons/redlogout.svg";

function Profile() {
    const [show, setShow] = useState(false)
    const click = useRef('')
    const [filename, setFilename] = useState()

    const file = () => {
        click.current.click()
      }

  return (
    <div>
        <h5 className='report-title'>
          {show ? 'Profile Settings' : 'My profile'}
        </h5>
        <div className=''>
            <div className={`profile-container ${show ? 'd-none' : ''}`}>
                <div className='profile-box'>
                    <div>
                        
                    </div>
                    <span>
                        Khalid Philips
                    </span>
                    <span className='profile-edit-button' onClick={() => setShow(!show)}>
                        <Editicon /> Edit Profile
                    </span>
                </div>
                <div className='profile-menu'>
                    <Link to='/terms&condition'>
                        <Termsicon /> 
                        <span>
                            Terms & Conditions
                        </span>
                    </Link>
                    <Link to='/privacy' className='second'>
                        <Privacyicon /> 
                        <span>
                            Privacy Policy
                        </span>
                    </Link>
                    <Link>
                        <Redlogouticon /> <span className='redlogout'>Logout</span>
                    </Link>
                </div>
            </div>
        </div>
        <div>
            <div className={`edit-profile-box ${show ? '' : 'd-none'}`}>
                <div>
                    <img src={filename} alt='profilepicture' />
                </div>
                <span className='uploadimage' onClick={file}>
                    upload
                </span>
                <input type='file' ref={click} onChange={(e) => { setFilename(URL.createObjectURL(e.target.files[0].name))}} hidden />
                <p className='edit-profile-text'>
                    Update your profile picture and personal details
                </p>
                <form className='profile-form-group'>
                    <div className='profile-input-group'>
                        <div className='profile-input'>
                            <label>
                                First Name
                            </label>
                            <input type='text' />
                        </div>
                        <div className='profile-input'>
                            <label>
                                Last Name
                            </label>
                            <input type='text' />
                        </div>
                    </div>
                    <div className='profile-input'>
                        <label>
                            Email Address
                        </label>
                        <input type='email' />
                    </div>
                    <div className='profile-input'>
                        <label>
                            Phone Number
                        </label>
                        <input type='text' />
                    </div>
                    <div className='profile-input'>
                        <label>
                            Address
                        </label>
                        <textarea row={2} type='text' />
                    </div>
                    <div className='edit-profile-button'>
                        <button>
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Profile
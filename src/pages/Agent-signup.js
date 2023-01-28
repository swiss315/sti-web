import React, { useState } from 'react'

import Navbar from '../components/Navbar'
import {ReactComponent as Labelname} from "../assets/icons/labelname.svg";
import {ReactComponent as Email} from "../assets/icons/emailicon.svg";
import {ReactComponent as Password} from "../assets/icons/passwordicon.svg";

import '../stylesheets/agent-signup.css'

function Agentsignup() {
    const [active, setActive] = useState(true)

    const nextClick = () => {
        setActive(false)
    }

  return (
    <div>
        <Navbar />
        <div className='agentsignup'>
            <h1 className='agentsignup-title'>
                Sign Up <span>Below</span>
            </h1>
            <form className='form-container'>
                <div className={active ? '' : 'd-none'}>
                    <div className='input-group'>
                        <label>
                            <Labelname />
                            <span>
                            First Name
                            </span>
                        </label>
                        <input name='firstname' type='text' className='' />
                    </div>
                    <div className='input-group'>
                        <label>
                            <Labelname />
                            <span>
                            First Name
                            </span>
                        </label>
                        <input name='firstname' type='text' className='' />
                    </div>
                    <div className='input-group'>
                        <label>
                            <Labelname />
                            <span>
                                Last Name
                            </span>
                        </label>
                        <input name='firstname' type='text' className='' />
                    </div>
                    <div className='input-group'>
                        <label>
                            <Email />
                            <span>
                                Email 
                            </span>
                        </label>
                        <input name='email' type='email' className='' />
                    </div>
                    <div className='input-group'>
                        <label>
                            <Password />
                            <span>
                                Password
                            </span>
                        </label>
                        <input name='password' type='password' className='' />
                    </div>
                    <div className='input-group'>
                        <label>
                            <Password />
                            <span>
                                Confirm Password
                            </span>
                        </label>
                        <input name='confirmpassword' type='confirmpassword' className='' />
                    </div>
                </div>
                <div className={active ? 'd-none' : ''}>
                    <div className='input-group'>
                        <label>
                            <Labelname />
                            <span>
                                Last Name
                            </span>
                        </label>
                        <input name='firstname' type='text' className='' />
                    </div>
                    <div className='input-group'>
                        <label>
                            <Labelname />
                            <span>
                            First Name
                            </span>
                        </label>
                        <input name='firstname' type='text' className='' />
                    </div>
                    <div className='input-group'>
                        <label>
                            <Labelname />
                            <span>
                                Last Name
                            </span>
                        </label>
                        <input name='firstname' type='text' className='' />
                    </div>
                    <div className='input-group'>
                        <label>
                            <Email />
                            <span>
                                Email 
                            </span>
                        </label>
                        <input name='email' type='email' className='' />
                    </div>
                    <div className='input-group'>
                        <label>
                            <Password />
                            <span>
                                Password
                            </span>
                        </label>
                        <input name='firstname' type='text' className='' />
                    </div>
                    <div className='input-group'>
                        <label>
                            <Password />
                            <span>
                                Confirm Password
                            </span>
                        </label>
                        <input name='firstname' type='text' className='' />
                    </div>
                </div>
                <div className='checkbox-container'>
                    <span className={`checkbox ${active ? 'active' : ''}`}></span>
                    <span className={`checkbox ${active ? '' : 'active'}`}></span>
                </div>
                {active ? <div className='agent-button' onClick={nextClick} >
                    Next
                </div> : <button className='agent-button'>
                    Submit
                </button>}
                
            </form>
        </div>
    </div>
  )
}

export default Agentsignup
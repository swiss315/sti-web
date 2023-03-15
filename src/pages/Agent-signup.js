import React, { useState } from 'react'

import Navbar from '../components/Navbar'
import { ReactComponent as Labelname } from "../assets/icons/labelname.svg";
import { ReactComponent as Email } from "../assets/icons/emailicon.svg";
import { ReactComponent as Password } from "../assets/icons/passwordicon.svg";
import { ReactComponent as Phone } from "../assets/icons/phoneicon.svg";
import { ReactComponent as Date } from "../assets/icons/date-2.svg";

import '../stylesheets/agent-signup.css'

function Agentsignup() {
    const [active, setActive] = useState(true)
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        gender: '',
        Password: '',
        address: '',
        date_of_birth: '',
        bvn: '',
        identification: '',
        document: ''
    })

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
                            <input name='firstname' type='text' className='' onChange={(e) =>
                                setData({ ...data, first_name: e.target.value })
                            } />
                        </div>
                        <div className='input-group'>
                            <label>
                                <Labelname />
                                <span>
                                    Last Name
                                </span>
                            </label>
                            <input name='firstname' type='text' className=''  onChange={(e) =>
                                setData({ ...data, last_name: e.target.value })
                            }/>
                        </div>
                        <div className='input-group'>
                            <label>
                                <Email />
                                <span>
                                    Email
                                </span>
                            </label>
                            <input name='email' type='email' className=''  onChange={(e) =>
                                setData({ ...data, email: e.target.value })
                            } />
                        </div>
                        <div className='input-group'>
                            <label>
                                <Phone/>
                                <span>
                                    Mobile Number
                                </span>
                            </label>
                            <input name='password' type='password' className='' onChange={(e) =>
                                setData({ ...data, phone: e.target.value })
                            }/>
                        </div>
                        <div className='input-group'>
                            <label>
                                <Labelname />
                                <span>
                                    Gender
                                </span>
                            </label>
                            <input name='email' type='email' className=''  onChange={(e) =>
                                setData({ ...data, gender: e.target.value })
                            }/>
                        </div>
                        <div className='input-group'>
                            <label>
                                <Date />
                                <span>
                                    Date Of Birth
                                </span>
                            </label>
                            <input name='d-o-b' type='date' className='' onChange={(e) =>
                                setData({ ...data, address: e.target.value })
                            }/>
                        </div>
                    </div>
                    <div className={active ? 'd-none' : ''}>
                        <div className='input-group'>
                            <label>
                                <Password />
                                <span>
                                    Address
                                </span>
                            </label>
                            <input name='confirmpassword' type='confirmpassword' className='' onChange={(e) =>
                                setData({ ...data, address: e.target.value })
                            }/>
                        </div>          
                        <div className='input-group'>
                            <label>
                                <Labelname />
                                <span>
                                    BVN
                                </span>
                            </label>
                            <input name='number' type='number' className=''  onChange={(e) =>
                                setData({ ...data, bvn: e.target.value })
                            }/>
                        </div>
                        <div className='input-group'>
                            <label>
                                <Password />
                                <span>
                                    Password
                                </span>
                            </label>
                            <input name='password' type='password' className='' onChange={(e) =>
                                setData({ ...data, Password: e.target.value })
                            }/>
                        </div>
                        <div className='input-group'>
                            <label>
                                <Password />
                                <span>
                                    Confirm Password
                                </span>
                            </label>
                            <input name='password' type='password' className='' onChange={(e) =>
                                setData({ ...data, address: e.target.value })
                            }/>
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
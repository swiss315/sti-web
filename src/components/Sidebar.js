import React from 'react'
import { Link } from "react-router-dom";

import '../stylesheets/sidebar.css'

import {ReactComponent as Claimicon} from "../assets/icons/claimicon.svg";
import {ReactComponent as Mypinsicon} from "../assets/icons/pinicon.svg";
import {ReactComponent as Activepolicies} from "../assets/icons/actpolicon.svg";
import {ReactComponent as Transactionicon} from "../assets/icons/tranhisicon.svg";
import {ReactComponent as Reporticon} from "../assets/icons/report&incidenticon.svg";
import {ReactComponent as Passwordicon} from "../assets/icons/cpasswordicon.svg";
import {ReactComponent as Helpicon} from "../assets/icons/help&feedbackicon.svg";
import {ReactComponent as Logouticon} from "../assets/icons/logouticon.svg";



function Sidebar({setSidebar, sidebar}) {


    // const handleclick = () => {
    //   setSidebar(!sidebar);
    // };

  return (
    <div>
        <div className='sidbar-info'>
            <p className='sidbar-info-name'>
                Welcome, <span>Khalid Ejiogu</span>
            </p>
            <p className='sidebar-info-wallet'>
                Wallet Balance: <span>NGN20000</span>
            </p>
        </div>
        <div className='sidebar-menu'>
            <Link to="/claim" onClick={() => setSidebar(!sidebar) } >
                <Claimicon />
                <span>
                    Claims
                </span>
            </Link>
            <Link to="/pin" onClick={() => setSidebar(!sidebar) }>
                <Mypinsicon />
                <span className='mypin'>
                    My Pins
                </span>
            </Link>
            <Link to="/policies" onClick={() => setSidebar(!sidebar) }>
                <Activepolicies />
                <span>
                    Active Policies
                </span>
            </Link>
            <Link to='/transactionhistory' onClick={() => setSidebar(!sidebar) }>
                <Transactionicon />
                <span>
                    Transaction History
                </span>
            </Link>
            <Link to='/report' onClick={() => setSidebar(!sidebar) }>
                <Reporticon />
                <span>
                    Report and Incident
                </span>
            </Link>
            <Link to='/changepassword' onClick={() => setSidebar(!sidebar) }>
                <Passwordicon />
                <span>
                    Change Password
                </span>
            </Link>
            <Link to='/feedback' onClick={() => setSidebar(!sidebar) }>
                <Helpicon />
                <span>
                    Help & Feedback
                </span>
            </Link>
            <div className='logout'>
                <Link to='/login'>
                    <Logouticon />
                    <span>
                        Logout
                    </span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Sidebar

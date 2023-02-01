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


function Sidebar() {
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
            <Link>
                <Claimicon />
                <span>
                    Claims
                </span>
            </Link>
            <Link>
                <Mypinsicon />
                <span className='mypin'>
                    My Pins
                </span>
            </Link>
            <Link>
                <Activepolicies />
                <span>
                    Active Policies
                </span>
            </Link>
            <Link>
                <Transactionicon />
                <span>
                    Transaction History
                </span>
            </Link>
            <Link>
                <Reporticon />
                <span>
                    Report and Incident
                </span>
            </Link>
            <Link>
                <Passwordicon />
                <span>
                    Change Password
                </span>
            </Link>
            <Link>
                <Helpicon />
                <span>
                    Help & Feedback
                </span>
            </Link>
            <div className='logout'>
                <Link>
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
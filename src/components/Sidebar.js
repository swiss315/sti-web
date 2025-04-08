import React from 'react'
import { Link } from "react-router-dom";

import '../stylesheets/sidebar.css'

import {ReactComponent as Claimicon} from "../assets/icons/claimicon.svg";
import {ReactComponent as Activepolicies} from "../assets/icons/actpolicon.svg";
import {ReactComponent as Transactionicon} from "../assets/icons/tranhisicon.svg";
import {ReactComponent as Reporticon} from "../assets/icons/report&incidenticon.svg";
import {ReactComponent as Passwordicon} from "../assets/icons/cpasswordicon.svg";
import {ReactComponent as Helpicon} from "../assets/icons/help&feedbackicon.svg";
import {ReactComponent as Logouticon} from "../assets/icons/logouticon.svg";
import {useSelector} from "react-redux";
import {RootState} from "../service/reducers/rootReducer.ts";
// import { useLogout } from '../hooks/logout';

function Sidebar({setSidebar, sidebar}) {
    const AuthState = useSelector((state: RootState) => state.auth);
    const {userData: userdata} = AuthState
    console.log(userdata)

    // const { logout } = useLogout()
    console.log(userdata);

    return (
    <div>
        <div className='sidbar-info'>
            <p className='sidbar-info-name'>
                Welcome, <span>{userdata?.firstname + " " + userdata?.lastname}</span>
            </p>
            {/*<p className='sidebar-info-wallet'>*/}
            {/*    Wallet Balance: <span>NGN{userinfo?.wallet}</span>*/}
            {/*</p>*/}
        </div>
        <div className='sidebar-menu'>
            <Link className={'!flex items-center'} to="/claim" onClick={() => setSidebar(!sidebar) } >
                <Claimicon />
                <span>
                    Claims
                </span>
            </Link>
            {/*<Link className={'!flex items-center'} to="/pin" onClick={() => setSidebar(!sidebar) }>*/}
            {/*    <Mypinsicon />*/}
            {/*    <span className='mypin'>*/}
            {/*        My Pins*/}
            {/*    </span>*/}
            {/*</Link>*/}
            <Link className={'!flex items-center'} to="/policies" onClick={() => setSidebar(!sidebar) }>
                <Activepolicies />
                <span>
                    Active Policies
                </span>
            </Link>
            {/*<Link className={'!flex items-center'} to='/claim' onClick={() => setSidebar(!sidebar)}>*/}
            {/*    <Transactionicon/>*/}
            {/*    <span>*/}
            {/*        Claims*/}
            {/*    </span>*/}
            {/*</Link>*/}
            <Link className={'!flex items-center'} to='/transactionhistory' onClick={() => setSidebar(!sidebar) }>
                <Transactionicon />
                <span>
                    Transaction History
                </span>
            </Link>
            <Link className={'!flex items-center'} to='/report' onClick={() => setSidebar(!sidebar) }>
                <Reporticon />
                <span>
                    Report an Incident
                </span>
            </Link>
            <Link className={'!flex items-center'} to='/changepassword' onClick={() => setSidebar(!sidebar) }>
                <Passwordicon />
                <span>
                    Change Password
                </span>
            </Link>
            <Link className={'!flex items-center'} to='/feedback' onClick={() => setSidebar(!sidebar) }>
                <Helpicon />
                <span>
                    Help & Feedback
                </span>
            </Link>
            <div className='logout'>
                <Link className={'!flex items-center'} to='/login' >
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

import React, { useState } from 'react'
import { Link, Route, Routes, useLocation } from "react-router-dom";

import '../stylesheets/dashboardlayout.css'

import Dashboard from './Dashboard';
import ReportandIncident from './report&incident';
import Helpandfeedback from './Help&feedback';
import Profile from './profile';
import Sidebar from '../components/Sidebar';
import Claims from '../pages/Claims';
import Pin from '../pages/Pin';
import PinTransaction from '../pages/PinTransaction';
import PinPassword from '../pages/PinPassword';
import Policies from '../pages/Policies'
import Motor from '../pages/Motor'
import Swiss from '../pages/Swiss';

import {ReactComponent as Logoicon} from "../assets/icons/logoicon.svg";
import {ReactComponent as Closeicon} from "../assets/icons/closeicon.svg";
import {ReactComponent as Sidebarmenu} from "../assets/icons/sidebarmenu.svg";
import {ReactComponent as Backicon} from "../assets/icons/backicon.svg";
import {ReactComponent as Labelname} from "../assets/icons/blacklabel.svg";
import {ReactComponent as Notification} from "../assets/icons/notification.svg";
import Motorinsuranceregister from './Motorinsuranceregister';
import Marineinsurance from './Marineinsurance';
import Allrisk from './Allrisk';
import Travelinsurance from './Travelinsurance';
import Swissinsurance from './swissinsurance';
import Notifications from './Notification';
import Terms from './Terms';
import Privacy from './Privacy';

function Dashboardlayout() {
  const [sidebar, setSidebar] = useState(true);

  const handleclick = () => {
    setSidebar(!sidebar);
  };

  const location = useLocation();
  let pagename = location.pathname;
  pagename = pagename.slice(1);


  return (
    <div className={` ${sidebar ? "sidbarcollapse" : "dashboardlayout"}`}>
        <div className='sidebar'>
            <div className='logocontainer'>
                <Logoicon />
                <Closeicon className='closeicon' onClick={handleclick} />
            </div>
            <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        </div>
        <div className={` ${sidebar ? "maincontentexpand" : "maincontent"}`}>
          <div className='dashboard-nav'>
            <div className='sidebar-container'>
              {
                pagename === 'dashboard' ? <Sidebarmenu onClick={handleclick}/> : <Link to='/dashboard' > <Backicon /> </Link>
              }
            </div>
            <div className='profile-notification'>
              <Link to='/profile'>
                <Labelname />
              </Link>
              <Link to='/notification'>
                <Notification />
              </Link>
            </div>
          </div>
        
          <Routes>
            {/* add route of dashboard here */}
              <Route path="dashboard" index element={<Dashboard />} />
              <Route path="claim" index element={<Claims />} />
              <Route path="pin" index element={<Pin />} />
              <Route path="transactionhistory" index element={<PinTransaction />} />
              <Route path="changepassword" index element={<PinPassword />} />
              <Route path='policies' element={<Policies/>} />
              <Route path='motor' element={<Motor/>} />
              <Route path='swiss' element={<Swiss/>} />
              <Route path="report" index element={<ReportandIncident />} />
              <Route path="feedback" index element={<Helpandfeedback />} />
              <Route path="profile" index element={<Profile />} />
              <Route path="motor-insurance" index element={<Motorinsuranceregister />} />
              <Route path="swiss-insurance" index element={<Swissinsurance />} />
              <Route path="marine-insurance" index element={<Marineinsurance />} />
              <Route path="notification" index element={<Notifications/>} />
              <Route path="all-risk" index element={<Allrisk />} />
              <Route path="travel-insurance" index element={<Travelinsurance />} />
              <Route path="terms&condition" index element={<Terms />} />
              <Route path="privacy" index element={<Privacy />} />
          </Routes>
        </div>
    </div>
  )
}

export default Dashboardlayout

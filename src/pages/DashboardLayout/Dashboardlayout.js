import React, { useState } from 'react'
import { Link, Route, Routes, useLocation } from "react-router-dom";

import '../../stylesheets/dashboardlayout.css'
import '../../stylesheets/dashboardlayout.css'

import Dashboard from '../Dashboard/Dashboard';
import ReportandIncident from '../Report/report&incident';
import Helpandfeedback from '../Report/Help&feedback';
import Profile from '../Profile/profile';
import Sidebar from '../../components/Sidebar';
import Claims from '../Claims/Claims';
import Pin from '../Pin/Pin';
import PinTransaction from '../Pin/PinTransaction';
import PinPassword from '../Pin/PinPassword';
import Policies from '../Policies/Policies'
import Motor from '../Insurrance/Motor'
import Swiss from '../Insurrance/Swiss';

// import {ReactComponent as Logoicon} from "../../assets/icons/logoicon.svg";
import {ReactComponent as Closeicon} from "../../assets/icons/closeicon.svg";
import {ReactComponent as Sidebarmenu} from "../../assets/icons/sidebarmenu.svg";
import {ReactComponent as Backicon} from "../../assets/icons/backicon.svg";
import {ReactComponent as Labelname} from "../../assets/icons/blacklabel.svg";
import {ReactComponent as Notification} from "../../assets/icons/notification.svg";
import Motorinsuranceregister from '../Insurrance/modal/Motorinsuranceregister';
import Marineinsurance from '../Insurrance/modal/Marineinsurance';
import Allrisk from '../Insurrance/modal/Allrisk';
import Travelinsurance from '../Insurrance/modal/Travelinsurance';
import Swissinsurance from '../Insurrance/modal/swissinsurance';
import Notifications from '../Notification/Notification';
import Terms from '../Termsandprivacy/Terms';
import Privacy from '../Termsandprivacy/Privacy';
import Risk from "../Insurrance/risk";
import Travel from "../Insurrance/travel";
import BuyHealth from "../Insurrance/buyPolicy/buy_healthpolicy";

function Dashboardlayout() {
  const [sidebar, setSidebar] = useState(true);

  const handleclick = () => {
    setSidebar(!sidebar);
  };

  const location = useLocation();
  let pagename = location.pathname;
  pagename = pagename.slice(1);


  return (
    <div className={` ${sidebar ? "collapsible" : "dashboardlayout"}`}>
        <div className='sidebar'>
            <div className='logocontainer'>
                {/*<Logoicon />*/}
                <Closeicon className='close-icon' onClick={handleclick} />
            </div>
            <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        </div>
        <div className={` ${sidebar ? "maincontentexpand" : "content"}`}>
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
              <Route path="dashboard" index exact element={<Dashboard />} />
              <Route path="claim"  element={<Claims />} />
              <Route path="pin"  element={<Pin />} />
              <Route path="transactionhistory"  element={<PinTransaction />} />
              <Route path="changepassword" index element={<PinPassword />} />
              <Route path='policies' element={<Policies/>} />
              <Route path='motor' element={<Motor/>} />
              <Route path='swiss' element={<Swiss/>} />
              <Route path='travel' element={<Travel/>}/>
              <Route path='risk' element={<Risk/>}/>
              <Route path="report"  element={<ReportandIncident />} />
              <Route path="feedback"  element={<Helpandfeedback />} />
              <Route path="profile"  element={<Profile />} />
              <Route path="motor-insurance"  element={<Motorinsuranceregister />} />
              <Route path="swiss-insurance"  element={<Swissinsurance />} />
              <Route path="marine-insurance"  element={<Marineinsurance />} />
              <Route path="health-insurance" element={<BuyHealth/>}/>
              <Route path="notification"  element={<Notifications/>} />
              <Route path="all-risk"  element={<Allrisk />} />
              <Route path="travel-insurance"  element={<Travelinsurance />} />
              <Route path="terms&condition"  element={<Terms />} />
              <Route path="privacy"  element={<Privacy />} />
          </Routes>
        </div>
    </div>
  )
}

export default Dashboardlayout

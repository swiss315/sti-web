import React, { useState } from 'react'
import { Route, Routes } from "react-router-dom";

import '../stylesheets/dashboardlayout.css'

import Dashboard from './Dashboard';
import Sidebar from '../components/Sidebar';

import {ReactComponent as Logoicon} from "../assets/icons/logoicon.svg";
import {ReactComponent as Closeicon} from "../assets/icons/closeicon.svg";
import {ReactComponent as Sidebarmenu} from "../assets/icons/sidebarmenu.svg";
import {ReactComponent as Labelname} from "../assets/icons/blacklabel.svg";
import {ReactComponent as Notification} from "../assets/icons/notification.svg";

function Dashboardlayout() {
  const [sidebar, setSidebar] = useState(false);

  const handleclick = () => {
    setSidebar(!sidebar);
  };


  return (
    <div className={` ${sidebar ? "sidbarcollapse" : "dashboardlayout"}`}>
        <div className='sidebar'>
            <div className='logocontainer'>
                <Logoicon />
                <Closeicon className='closeicon' onClick={handleclick} />
            </div>
            <Sidebar />
        </div>
        <div className={` ${sidebar ? "maincontentexpand" : "maincontent"}`}>
          <div className='dashboard-nav'>
            <div className='sidebar-container'>
              <Sidebarmenu onClick={handleclick}/>
            </div>
            <div className='profile-notification'>
              <Labelname />
              <Notification />
            </div>
          </div>

          <Routes>
              <Route path="dashboard" index element={<Dashboard />} />
          </Routes>
        </div>
    </div>
  )
}

export default Dashboardlayout
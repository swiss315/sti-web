import React, { useState } from 'react'
import { Route, Routes } from "react-router-dom";

import '../stylesheets/dashboardlayout.css'

import Dashboard from './Dashboard';

import {ReactComponent as Logoicon} from "../assets/icons/logoicon.svg";
import {ReactComponent as Closeicon} from "../assets/icons/closeicon.svg";
import {ReactComponent as Sidebarmenu} from "../assets/icons/sidebarmenu.svg";

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

        </div>
        <div className={` ${sidebar ? "maincontentexpand" : "maincontent"}`}>
          <div className='sidebar-container'>
            <Sidebarmenu onClick={handleclick}/>
          </div>

          <Routes>
              <Route path="dashboard" index element={<Dashboard />} />
          </Routes>
        </div>
    </div>
  )
}

export default Dashboardlayout
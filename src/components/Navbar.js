import React from 'react'
import { Link } from "react-router-dom";

import {ReactComponent as Searchicon} from "../assets/icons/searchicon.svg";
import {ReactComponent as Loginbuttonicon} from "../assets/icons/loginbuttonicon.svg";
import {ReactComponent as Logo} from "../assets/icons/logo.svg";

import '../stylesheets/navbar.css'


function Navbar() {
  return (
    <div>
        <div className='Navbar'>
            <div className='address'>
                {/* <img src={logo} alt='Logo' /> */}
                Address & Phone details
            </div>
            <div className='navbar-menu'>
                <Link>
                    Home
                </Link>
                <Link>
                    Products
                </Link>
                <Link>
                    Claims
                </Link>
                <Link>
                    Agent
                </Link>
                <Link>
                    Information Center
                </Link>
                <Link>
                    About Us
                </Link>
                <Link>
                    Contact Us
                </Link>
            </div>
        </div>
        <div className='Navbar-2'>
            <div className='logocontainer'>
                <Logo />
            </div>
            <form className='searchbox'>
                <div className='input-group'>
                    <input type='text' placeholder='Search for products' name='search' className='searchinput'/>
                    <button>
                        <Searchicon/>
                    </button>
                </div>
            </form>
            <div className='navbar-button-container'>
                <Link className='login-button'>
                    <Loginbuttonicon /> 
                    <span>Login</span> 
                </Link>
                <Link className='register-button'>
                    Register
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar
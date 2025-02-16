import React from 'react'
import { Link } from "react-router-dom";

// import {ReactComponent as Searchicon} from "../assets/icons/searchicon.svg";
import {ReactComponent as Loginbuttonicon} from "../assets/icons/loginbuttonicon.svg";
import {ReactComponent as Logo} from "../assets/icons/logo.svg";

import '../stylesheets/navbar.css'


function Navbar() {
  return (
    <div>
        {/* <div className='Navbar'>
            <div className='address'>
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
        </div> */}
        <div className='Navbar-2'>
            <Link to={'/'} className='logocontainer'>
                <Logo />
            </Link>
            <div className='navbar-menu-container'>
                <div className='navbar-menu'>
                    {/*<Link>Home</Link>*/}
                    {/*<Link>About Us</Link>*/}
                    {/*<Link>Contact Us</Link>*/}
                    <Link to='/login' className='login-button !flex items-center'>
                        <Loginbuttonicon />
                        <span>Login</span>
                    </Link>
                    <Link to='/onboarding' className='register-button'>
                        Register
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar

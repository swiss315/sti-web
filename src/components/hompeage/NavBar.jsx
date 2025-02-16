import React, {useState} from "react";
import {ReactComponent as ArrowLeft} from "../../assets/svgs/arrow-left.svg";
import {ReactComponent as Location} from "../../assets/svgs/location.svg";
import {ReactComponent as Logo} from "../../assets/svgs/logo.svg";
import {Link} from "react-router-dom";
// import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";


export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const titleMap = {
        'who-we-are': 'Who we are',
        'chairman-speech': 'Chairman’s Statement',
        'international-highlight': 'International Statements',
        'financial-highlight': 'Financial Highlights',
        'reinsurance-treaty': 'Reinsurance Treaty Cover',
        'board-of-directors': 'Board Of Directors',
        'management': 'Management',
        'our-client': 'Our Client',
    };
    return (
        <>
            <section className="flex justify-center items-center gap-5 py-2 px-4 bg-custom-purple w-full">
                <div className="flex justify-center items-center gap-1">
                    <span className="uppercase text-custom-orange text-xs font-light">Call Us: </span>
                    <span className="text-white text-xs font-light"> 07000784752</span>
                </div>
                <div className="flex justify-center items-center gap-2">
        <span className="uppercase">
          <Location/>
        </span>
                    <span className="text-white text-xs font-light">17, Adetokunbo Ademola Street, Victoria Island, Lagos</span>
                </div>
            </section>

            <section className="flex justify-between border-b border-[#C4C4C4] items-center w-full py-3 px-6">
                <div className="w-fit overflow-hidden">
                    <Logo/>
                </div>

                <button id="hamburger" className="block lg:hidden text-custom-orange focus:outline-none">
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M4 6h16M4 12h16m-7 6h7"/>
                    </svg>
                </button>

                <div id="menu"
                     className="hidden absolute top-24 left-0 z-10 w-full bg-white shadow-lg lg:static lg:flex-row text-xs lg:text-sm xl:text-lg items-center gap-4 lg:gap-6 px-4 py-4">
                    <p className="block px-4 py-2 hover:bg-gray-100">Home</p>
                    <p className="block px-4 py-2 hover:bg-gray-100">About us</p>
                    <p className="block px-4 py-2 hover:bg-gray-100">Claims</p>
                    <p className="block px-4 py-2 hover:bg-gray-100">Agent</p>
                    <p className="block px-4 py-2 hover:bg-gray-100">Contact Us</p>
                    <p className="block px-4 py-2 hover:bg-gray-100">Information Center</p>

                    <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
                        <button
                            className="block w-full text-center text-sm xl:text-lg text-white bg-custom-orange rounded py-1.5 px-2 xl:py-2.5 xl:px-4">
                            Login
                        </button>
                        <button
                            className="block w-full text-center text-sm xl:text-lg text-white bg-custom-orange rounded py-1.5 px-2 xl:py-2.5 xl:px-4">
                            Register
                        </button>
                    </div>
                </div>


                <div
                    className="w-1/2 hidden md:flex text-xs lg:text-sm xl:text-sm items-center justify-evenly gap-1 text-black no-underline">
                    <Link to={'/'} className={'text-black no-underline'}>
                        Home
                    </Link>
                    {/*<Link to={'/aboutus'} className={'text-black no-underline'}>*/}
                    {/*    About us*/}
                    {/*</Link>*/}
                    <div className="relative inline-block text-left">
                        {/* Button */}
                        <button
                            onMouseEnter={() => setIsOpen(true)}
                            onClick={() => setIsOpen(!isOpen)} // Optional: Click to toggle as well
                            className="rounded-md bg-white px-4 py-2  "
                        >
                            About us
                        </button>

                        {/* Dropdown menu */}
                        {isOpen && (
                            <div
                                onMouseEnter={() => setIsOpen(true)} // Keep open when hovering
                                onMouseLeave={() => setIsOpen(false)} // Close when leaving the dropdown
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5"
                            >
                                <div className="py-1">
                                    {Object.entries(titleMap).map(([path, title]) => (
                                        <Link
                                            to={path === 'who-we-are' ? '/aboutus' : `/aboutus/${path}`}
                                            key={path}
                                            className="block px-4 no-underline py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                        >
                                            {title}
                                        </Link>
                                    ))}

                                </div>
                            </div>
                        )}
                    </div>


                    <Link to={'/aboutus'} className={'text-black no-underline'}>
                        Claims
                    </Link>
                    <Link to={'/aboutus'} className={'text-black no-underline'}>
                        Agent
                    </Link>
                    <Link to={'/aboutus'} className={'text-black no-underline'}>
                        Contact Us
                    </Link>
                    <Link to={'/aboutus'} className={'text-black no-underline'}>
                        Information Center
                    </Link>
                </div>
                <div className="hidden md:flex items-center justify-center gap-3">
                    <Link to={'/login'} id="login"
                            className="flex items-center no-underline text-sm xl:text-lg justify-center gap-1 xl:gap-3 text-white bg-custom-orange rounded py-1.5 px-2 xl:py-2.5 xl:px-4">
          <span>
            <ArrowLeft/>
          </span>
                        <span>Login</span>
                    </Link>
                    <Link to={'/onboarding'} id="register"
                            className="flex text-sm xl:text-lg  no-underline items-center justify-center gap-1 xl:gap-3 text-white bg-custom-orange rounded py-1.5 px-2 xl:py-2.5 xl:px-4">
          <span>
            <ArrowLeft/>
          </span>
                        <span>Register</span>
                    </Link>
                </div>
            </section>
        </>
    )
}

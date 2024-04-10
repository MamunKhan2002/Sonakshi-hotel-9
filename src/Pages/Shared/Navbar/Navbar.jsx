import { FaPhoneAlt, FaFacebook, FaTwitter, FaGithub, FaInstagram, FaArrowDown} from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { Twirl as Hamburger } from 'hamburger-react'

import { useState } from "react";
import { MdEmail } from "react-icons/md";
import flug from "../../../assets/flag.png";
import logo from "../../../assets/site-logo.png"
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const [showMenu, setShoeMenu] = useState(false);

    return (
        <div>
            <div className="border-b-2 font-Poppins">
                <div className="hidden w-11/12 max-w-6xl mx-auto lg:flex justify-between ">
                    <div className="text-base font-cabin flex ">
                        <p className="py-3 flex items-center gap-1 pr-[14px] border-r-2"><span className="text-[#dfa974]"><FaPhoneAlt /></span> <a href="tel:+4733378901">+47 333 78 901</a></p>
                        <a className="py-3 flex items-center gap-1 pl-[14px]" href="mailto: info.name@email.com"><span className="text-[#dfa974]"><MdEmail /></span> info.name@email.com</a>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-2 mr-6 cursor-pointer">
                                <FaFacebook></FaFacebook>
                                <FaTwitter></FaTwitter>
                                <FaGithub></FaGithub>
                                <FaInstagram></FaInstagram>
                            </div>
                            <button className="py-3 px-4 bg-[#dfa974] text-white font-semibold">BOOKING NOW</button>
                            <div className="avatar ml-6">
                                <div className="w-12 rounded-full">
                                    <img src={flug} />
                                </div>
                            </div>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="m-1 flex items-center gap-2">EN<span><FaArrowDown /></span></div>
                                <ul tabIndex={0} className="dropdown-content mt-3 z-[1] menu p-2 shadow bg-base-100 rounded-box w-32">
                                    <li className="hover:bg-white hover:text-[#dfa974]"><a>ZI</a></li>
                                    <li className="hover:bg-white hover:text-[#dfa974]"><a>FR</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-11/12 max-w-6xl mx-auto navbar mt-5 lg:flex justify-between">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className="">
                    <ul className={`top-0 font-Cabin uppercase h-full lg:h-[21px] lg:flex gap-5 pt-[80px] pl-[30px] z-40 pr-[30px] pb-[30px] lg:p-0 absolute 
                    ${showMenu ? "duration-700" : "-left-[500px] duration-700"} bg-[#dfa974] w-[300px] lg:w-full lg:bg-white lg:static left-0`}>
                        <div className="mb-10 flex justify-center">
                            <img src={logo} alt="" />
                        </div>
                        <li className="border-b lg:border-none lg:py-0 py-1 pl-2 "><NavLink to="/" className={({ isActive }) =>
                            isActive ? 'lg:text-[#dfa974] duration-300 font-bold text-white' : ''
                        } >Home</NavLink></li>
                        <li className="border-b lg:border-none lg:py-0 py-1 pl-2 "><NavLink to="/register" className={({ isActive }) =>
                            isActive ? 'lg:text-[#dfa974] duration-300 font-bold text-white' : ''
                        } >Rooms</NavLink></li>
                        <li className="border-b lg:border-none lg:py-0 py-1 pl-2 "><NavLink to="/rooms" className={({ isActive }) =>
                            isActive ? 'lg:text-[#dfa974] duration-300 font-bold text-white' : ''
                        }>Gallery</NavLink></li>
                        <li className="border-b lg:border-none lg:py-0 py-1 pl-2 "><NavLink to="/gallery" className={({ isActive }) =>
                            isActive ? 'lg:text-[#dfa974] duration-300 text-white' : ''
                        }>User profile</NavLink></li>
                        <li className="border-b lg:border-none lg:py-0 py-1 pl-2 "><NavLink to="/about" className={({ isActive }) =>
                            isActive ? 'lg:text-[#dfa974] duration-300 font-bold text-white' : ''
                        }>About Us</NavLink></li>
                        <li className="border-b lg:border-none lg:py-0 py-1 pl-2 "><NavLink to="/contact" className={({ isActive }) =>
                            isActive ? 'lg:text-[#dfa974] duration-300 font-bold text-white' : ''
                        }>Contact</NavLink></li>
                        <button className="btn hover:bg-[#dfa974] text-white bg-[#dfa974] lg:hidden ml-5 mt-10">Login</button>
                        <button className="btn hover:bg-[#dfa974] text-white bg-[#dfa974] lg:hidden ml-5 mt-10">Register</button>
                    </ul>
                    <Link to="/login"><button className="border-2 text-xl border-[#dfa974] px-3 py-2 text-black ml-5 hidden lg:flex items-center gap-2 font-Lora"><CiLogin ></CiLogin>Login</button></Link>
                    <button className='lg:hidden text-[#dfa974]' onClick={() => setShoeMenu(!showMenu)}><Hamburger label="Show menu" /></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
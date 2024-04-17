import { Link, NavLink } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import Swal from 'sweetalert2';
import { CiLogin, CiLogout } from "react-icons/ci";
import { MdOutlineSettings } from "react-icons/md";
import { Twirl as Hamburger } from 'hamburger-react'
import hotel_Logo from "../../../assets/site-logo.png"
import Profile from "../../../assets/hotel_rooms_photos/profile.png"
import { AuthContext } from "../../../Providers/FirebaseAuthProvider";


const Navbar = () => {
    const [showMenu, setShoeMenu] = useState(false);
    const [showProfile, setProfile] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const { Logout, user } = useContext(AuthContext);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.addEventListener("scroll", handleScroll);
    }, [])


    const handleScroll = () => {
        if (window.scrollY > 40) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };


    // Handle
    const handleSignOut = () => {
        Logout()
            .then(response => {
                console.log(response);
                Swal.fire({
                    title: "Good job!",
                    text: "Logout Successful !",
                    icon: "success"
                });
            })
    }

    return (
        <>
            {/* <Header></Header> */}
            <div
                className={`${scrolling ? "sticky top-0  duration-700 z-40 shadow-lg" : "-top-10"} bg-white`}>
                <div className="w-11/12 max-w-6xl mx-auto navbar mt-3 lg:flex justify-between">
                    <div>
                        <img src={hotel_Logo} alt="" />
                    </div>
                    <div className="">
                        <ul className={`top-0 text-base bg-[#dfa974] lg:bg-transparent  h-svh mr-2 font-Cabin uppercase lg:h-[21px] lg:flex gap-3 pt-[80px] pl-[30px] z-40 pr-[30px] pb-[30px] lg:p-0 absolute 
                    ${showMenu ? "left-0 duration-300" : "-left-full duration-300"} w-[300px] lg:w-full lg:static left-0`}>
                            <div className="mb-10 flex justify-center">
                                <img src={hotel_Logo} alt="" />
                            </div>
                            <li className="border-b lg:border-none lg:py-0 py-1 pl-2 "><NavLink to="/" className={({ isActive }) =>
                                isActive ? 'lg:text-[#dfa974] duration-300 text-white underline' : ''
                            } >Home</NavLink></li>
                            <li className="border-b lg:border-none lg:py-0 py-1 pl-2 "><NavLink to="/rooms" className={({ isActive }) =>
                                isActive ? 'lg:text-[#dfa974] duration-300 text-white underline' : ''
                            } >Rooms</NavLink></li>
                            <li className="border-b lg:border-none lg:py-0 py-1 pl-2 "><NavLink to="/gallery" className={({ isActive }) =>
                                isActive ? 'lg:text-[#dfa974] duration-300 text-white underline' : ''
                            }>Gallery</NavLink></li>
                            {/* <li className="border-b lg:border-none lg:py-0 py-1 pl-2 "><NavLink to="/userProfile" className={({ isActive }) =>
                                isActive ? 'lg:text-[#dfa974] duration-300 text-white underline' : ''
                            }>User profile</NavLink></li> */}
                            <li className="border-b lg:border-none lg:py-0 py-1 pl-2 "><NavLink to="/about" className={({ isActive }) =>
                                isActive ? 'lg:text-[#dfa974] duration-300 text-white underline' : ''
                            }>About Us</NavLink></li>
                            <li className="border-b lg:border-none lg:py-0 py-1 pl-2 "><NavLink to="/contact" className={({ isActive }) =>
                                isActive ? 'lg:text-[#dfa974] duration-300 text-white underline' : ''
                            }>Contact</NavLink></li>

                            <Link to="/login"><button className="btn hover:bg-[#dfa974] text-white bg-[#dfa974] lg:hidden ml-5 mt-10">Login</button></Link>
                            <Link to="/register"><button className="btn hover:bg-[#dfa974] text-white bg-[#dfa974] lg:hidden ml-5 mt-10">Register</button></Link>
                        </ul>
                        {
                            !user ? <Link to="/login"><button className="border-2 text-base border-[#dfa974] px-2 py-1 text-black ml-5 hidden lg:flex items-center gap-2 font-Lora"><CiLogin ></CiLogin>Login</button></Link> :
                                <>
                                    <div className="avatar relative">
                                        <div className="w-12 cursor-pointer rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img onClick={() => setProfile(!showProfile)} src={` ${user?.photoURL || Profile}`} />

                                        </div>
                                        <button onClick={handleSignOut} className="border-2 text-base border-[#dfa974] px-3  text-black ml-5 hidden lg:flex items-center gap-2 font-Lora"><CiLogout ></CiLogout>Logout</button>
                                        <ul className={`absolute text-center bg-white rounded-md space-y-3 -left-[57px] shadow-xl p2 lg:p-4 ${showProfile ? "top-[70px] duration-300" : "-top-[400px] duration-300"} text-base font-Cabin z-30`}>
                                            <li className="cursor-pointer">{user?.displayName}</li>
                                            <li className="cursor-pointer flex items-center gap-2"><MdOutlineSettings /> Update Profile</li>
                                        </ul>
                                    </div>
                                </>
                        }
                        <button onClick={() => setShoeMenu(!showMenu)} className='lg:hidden text-[#dfa974]'><Hamburger label="Show menu" /></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
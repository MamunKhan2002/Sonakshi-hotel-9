import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import Swal from 'sweetalert2';

// react icon is here...
import { CiLogin, CiLogout } from "react-icons/ci";
import { Twirl as Hamburger } from 'hamburger-react'
import hotel_Logo from "../../../assets/site-logo.png"
import Header from "../../../Components/Header/Header";
import { AuthContext } from "../../../Providers/FirebaseAuthProvider";


const Navbar = () => {
    const [showMenu, setShoeMenu] = useState(false);
    const { Logout, user } = useContext(AuthContext);
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
            <Header></Header>
            <div
                className="bg-white">
                <div className="w-11/12 max-w-6xl mx-auto navbar mt-3 lg:flex justify-between">
                    <div>
                        <img src={hotel_Logo} alt="" />
                    </div>
                    <div className="">
                        <ul className={`top-0 font-Cabin uppercase h-full lg:h-[21px] lg:flex gap-5 pt-[80px] pl-[30px] z-40 pr-[30px] pb-[30px] lg:p-0 absolute 
                    ${showMenu ? "duration-700" : "-top-full duration-700"} w-[300px] lg:w-full lg:static left-0`}>
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
                            <li className="border-b lg:border-none lg:py-0 py-1 pl-2 "><NavLink to="/userProfile" className={({ isActive }) =>
                                isActive ? 'lg:text-[#dfa974] duration-300 text-white underline' : ''
                            }>User profile</NavLink></li>
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
                            !user ? <Link to="/login"><button className="border-2 text-xl border-[#dfa974] px-3 py-2 text-black ml-5 hidden lg:flex items-center gap-2 font-Lora"><CiLogin ></CiLogin>Login</button></Link> :
                                <>
                                    <div className="avatar ">
                                        <div className="w-12 cursor-pointer rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                        <button onClick={handleSignOut} className="border-2 text-xl border-[#dfa974] px-3 py-2 text-black ml-5 hidden lg:flex items-center gap-2 font-Lora"><CiLogout ></CiLogout>Logout</button>
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
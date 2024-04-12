import { FaPhoneAlt, FaFacebook, FaTwitter, FaGithub, FaInstagram, FaArrowDown } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import flug from "../../assets/flag.png";

const Header = () => {
    return (
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
    );
};

export default Header;
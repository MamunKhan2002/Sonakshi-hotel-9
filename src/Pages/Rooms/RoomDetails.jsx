import { GiCheckMark } from "react-icons/gi";
import { CiWifiOn } from "react-icons/ci";
import { FaBath, FaParking, FaSwimmingPool } from "react-icons/fa";
import { PiCoffeeLight } from "react-icons/pi";
import { MdOutlineBreakfastDining, MdOutlineSportsGymnastics, MdOutlineLocalDrink } from "react-icons/md";


import PropTypes from 'prop-types';

const RoomDetails = () => {

    return (
        <div className=''>
            <div className='relative '>
                <figure className='mt-5 '>
                    <img className='h-[250px] md:h-[350px] lg:h-[500px] w-full object-cover object-center' src="https://i.ibb.co/cX687H5/437.jpg" alt="" />
                </figure>
            </div>
            {/* details container */}
            <div className='w-11/12 max-w-6xl mx-auto md:flex gap-10 mt-16 mb-8 md:mb-10 lg:mb-16'>
                {/* left side container */}
                <div className='w-full md:w-1/2 lg:w-2/3'>
                    <h1 className='text-3xl font-Lora mb-4'>Luxury Suite</h1>
                    <p className='text-base font-Cabin text-[#AAA] mb-4'>Indulge in luxury with our Royal Suite. This spacious and elegantly designed suite offers stunning views and top-notch amenities.</p>
                    <img src="https://i.ibb.co/ZXbg9rn/modern-studio-apartment-design-with-bedroom-living-space.jpg" alt="" />
                    <h2 className='text-2xl font-Lora mt-10'>Room Facilities</h2>
                    <p className='text-base text-[#AAA] mt-2'>The standard hotel room amenities may vary depending on the hotel's rating and location, but typically include a bed and linens, bathroom with towels and toiletries, hairdryer, television, telephone, wi-fi, desk, wardrobe, minibar, kettle, iron, safe, housekeeping and air conditioning.</p>
                    <div className='flex gap-16 capitalize text-[18px] text-[#AAA] font-Lora mt-8'>
                        <div className='flex flex-col space-y-2'>
                            <span className="flex items-center gap-2"><CiWifiOn className="text-[#dfa974]"></CiWifiOn> wifi</span>
                            <span className="flex items-center gap-2"><FaParking className="text-[#dfa974]"></FaParking>Parking space</span>
                            <span className="flex items-center gap-2"><MdOutlineSportsGymnastics className="text-[#dfa974]"></MdOutlineSportsGymnastics>GYM</span>

                        </div>
                        <div className='flex flex-col space-y-2'>
                            <span className="flex items-center gap-2"><PiCoffeeLight className="text-[#dfa974]"></PiCoffeeLight>coffee</span>
                            <span className="flex items-center gap-2"><FaSwimmingPool className="text-[#dfa974]"></FaSwimmingPool> swimming pool</span>
                            <span className="flex items-center gap-2"><MdOutlineLocalDrink className="text-[#dfa974]"></MdOutlineLocalDrink>Drinks</span>

                        </div>
                        <div className='flex flex-col space-y-2'>
                            <span className="flex items-center gap-2"><FaBath className="text-[#dfa974]"></FaBath>bath</span>
                            <span className="flex items-center gap-2">< MdOutlineBreakfastDining className="text-[#dfa974]"></MdOutlineBreakfastDining>breakfast</span>

                        </div>
                    </div>
                </div>
                {/* right side container */}
                <div className='md:w-1/2 lg:w-1/3 mt-8 md:mt-0'>
                    <div className="flex flex-col font-Poppins justify-center mx-auto bg-[#dfa974] bg-opacity-15 py-5 px-4  lg:bottom-10 bottom-full rounded-md space-y-2 mb-20">
                        <h2 className='capitalize text-2xl text-center font-Lora'>your reservation</h2>
                        <div className='flex flex-col w-full  lg:items-end gap-4'>
                            <div className=' w-full'>
                                <p className="mb-[10px]">Check In:</p>
                                <input className="outline-none border-2 py-2 px-4 w-full" type="date" id="birthday" name="birthday"></input>
                            </div>
                            <div className=' w-full'>
                                <p className="mb-[10px]">Check out:</p>
                                <input className="outline-none border-2 py-2 px-4 w-full " type="date" id="birthday" name="birthday"></input>
                            </div>
                            <div className=' w-full'>
                                <p className="mb-[10px]">Guests:</p>
                                <input className="outline-none border-2 py-2 px-4 w-full " type="date" id="birthday" name="birthday"></input>
                            </div>
                            <div className=' w-full'>
                                <p className="mb-[10px]">Room:</p>
                                <input className="outline-none border-2 py-2 px-4 w-full " type="date" id="birthday" name="birthday"></input>
                            </div>
                            <button className='py-2 uppercase text-white outline-none bg-[#dfa974]  w-full'>Check Availability</button>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-Lora mb-3 capitalize'>Hotel rules</h1>
                        <p className='text-[14px] text-[#AAA] font-Poppins text-justify'>Welcome to Sona Hotel. Please read with the following rules and regulations which are obligatory for all our guests. We reserve the right to deny admission, or to require a person already admitted to leave the hotel, without refund or compensation, for failure to comply with any of these rules, for unsafe, illegal or offensive behaviors, to ensure safety, security or order, or if we consider that the circumstances so require.</p>
                        <ul className='mt-6 font-Lora space-y-2'>
                            <li className="flex items-center gap-2"><GiCheckMark className="text-[#dfa974]"></GiCheckMark> check-in: 3:00 PM - 9:PM</li>
                            <li className="flex items-center gap-2"><GiCheckMark className="text-[#dfa974]"></GiCheckMark> Check-out: 10:30 AM</li>
                            <li className="flex items-center gap-2"><GiCheckMark className="text-[#dfa974]"></GiCheckMark> No Pets</li>
                            <li className="flex items-center gap-2"><GiCheckMark className="text-[#dfa974]"></GiCheckMark> No Smoking</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

RoomDetails.propTypes = {

};

export default RoomDetails;
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
// import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import hero1 from "../../assets/heroPhoto/hero-1.jpg"
import hero2 from "../../assets/heroPhoto/hero-2.jpg"
import hero3 from "../../assets/heroPhoto/hero-3.jpg"
// bg-[url('/img/hero-pattern.svg')]

const HeroSection = () => {
    return (
        <div className=' relative lg:flex  lg:justify-center'>
            <Swiper
                navigation={true}
                pagination={{
                    clickable: true
                }}
                modules={[Navigation, Autoplay, Pagination]}
                loop={true}
                autoplay={{
                    delay: 2500,
                }}>
                <SwiperSlide>
                    <div style={{
                        backgroundImage: `url(${hero1})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',

                    }} className="">
                        <div className="w-11/12 max-w-6xl mx-auto mt-6 relative">
                            <div className="text-white max-w-[555px] py-[200px]">
                                <h1 className="text-[80px] font-lora mb-4">Sona A Luxury Hotel</h1>
                                <p className="text-[18px] font-cabin mb-8">Here are the best hotel booking sites, including recommendations for international travel and for finding low-priced hotel rooms.</p>
                                <a className="pb-4 border-b border-[#dfa974]" href="">DISCOVER NOW</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{
                        backgroundImage: `url(${hero2})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }} className="">
                        <div className="w-11/12 max-w-6xl mx-auto mt-6 relative">
                            <div className="max-w-[555px] text-white py-[200px]">
                                <h1 className="text-[80px] font-lora mb-4">Sona A Luxury Hotel</h1>
                                <p className="text-[18px] font-cabin mb-8">Here are the best hotel booking sites, including recommendations for international travel and for finding low-priced hotel rooms.</p>
                                <a className="pb-4 border-b border-[#dfa974]" href="">DISCOVER NOW</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{
                        backgroundImage: `url(${hero3})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }} className="">
                        <div className="w-11/12 max-w-6xl mx-auto mt-6 relative">
                            <div className="max-w-[555px] text-white py-[200px]">
                                <h1 className="text-[80px] font-lora mb-4">Sona A Luxury Hotel</h1>
                                <p className="text-[18px] font-cabin mb-8">Here are the best hotel booking sites, including recommendations for international travel and for finding low-priced hotel rooms.</p>
                                <a className="pb-4 border-b border-[#dfa974]" href="">DISCOVER NOW</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="flex justify-center mx-auto border-2  bg-white bg-opacity-15 p-3 lg:absolute lg:bottom-10 bottom-full rounded-md space-y-2 z-10 mt-4">
                <div className='flex  flex-col w-full lg:flex-row lg:items-end gap-4'>
                    <div className=' w-6/12'>
                        <p className="mb-[10px] text-white">Check In:</p>
                        <input className="outline-none border-2 py-2 px-4 w-full" type="date" id="birthday" name="birthday"></input>
                    </div>
                    <div className=' w-6/12'>
                        <p className="mb-[10px] text-white">Check out:</p>
                        <input className="outline-none border-2 py-2 px-4 w-full " type="date" id="birthday" name="birthday"></input>
                    </div>
                    <div className=' w-6/12'>
                        <p className="mb-[10px] text-white">Guests:</p>
                        <input className="outline-none border-2 py-2 px-4 w-full " type="date" id="birthday" name="birthday"></input>
                    </div>
                    <div className=' w-6/12'>
                        <p className="mb-[10px] text-white">Room:</p>
                        <input className="outline-none border-2 py-2 px-4 w-full " type="date" id="birthday" name="birthday"></input>
                    </div>
                    <button className='btn w-[180px] uppercase text-[#dfa974] outline-none bg-white hover:bg-white border-2 hover:border-[#dfa974] border-[#dfa974]'>Check Availability</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
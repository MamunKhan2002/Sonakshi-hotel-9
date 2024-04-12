import AboutUs from "../../Pages/AboutUs/AboutUs";
import Rooms from "../../Pages/Rooms/Rooms";
import HeroSection from "../HeroSection/HeroSection";
import HotelFacilities from "../HotelFacilities/HotelFacilities";
import MeetingAndEvent from "../MeetingAndEvent/MeetingAndEvent";

import Welcome from "../WelComeSection/Welcome";



const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Welcome></Welcome>
            <Rooms></Rooms>
            <HotelFacilities></HotelFacilities>
            <MeetingAndEvent></MeetingAndEvent>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;
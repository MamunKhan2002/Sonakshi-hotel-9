import AboutUs from "../../Pages/AboutUs/AboutUs";
import Rooms from "../../Pages/Rooms/Rooms";
import HeroSection from "../HeroSection/HeroSection";



const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Rooms></Rooms>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;
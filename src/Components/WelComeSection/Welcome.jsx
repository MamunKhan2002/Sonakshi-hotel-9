import { GoArrowRight } from "react-icons/go";
import roomPhoto_1 from "../../assets/hotel_rooms_photos/img-33-600x799.jpg"
import roomPhoto_2 from "../../assets/hotel_rooms_photos/img-34-2-370x555.jpg"


const Welcome = () => {
    return (
        <div className="w-11/12 max-w-6xl mx-auto navbar flex- flex-col mt-8 md:mt-10 lg:mt-20">
            {/* Here is the title & description */}
            <div className="flex flex-col mb-10">
                <h3 className="uppercase text-xl font-Lora mb-3 border-b-2 w-fit mx-auto border-[#dfa974] pb-3">Sonaksi LUXURY HOTEL</h3>
                <h1 className="text-xl md:text-3xl md:font-Lora font-Poppins">Welcome to the best five-star Luxury hotel in New York.</h1>
            </div>
            {/* Here is the main section part */}
            <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-1/2 ">
                    <h3 className="text-base mb-4 leading-loose">Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Hotel ut nisl quam nestibulum.</h3>
                    <div className="flex items-center gap-3 cursor-pointer">
                        <GoArrowRight  className="text-2xl text-[#dfa974]"></GoArrowRight>
                        <a className="uppercase" href="">Read More</a>
                    </div>
                </div>
                <div className="relative space-y-2 mx-auto">
                    <img className="w-full" src={roomPhoto_1} alt="" />
                    <img className="hidden md:flex absolute  top-60 -left-60 md:h-3/4" src={roomPhoto_2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Welcome;
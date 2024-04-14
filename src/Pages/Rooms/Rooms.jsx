import { useContext } from "react";
import { HotelDataContext } from "../../Providers/HotelDataProvider";
import "../../../src/App.css"
import HotelRoomCard from "./HotelRoomCard";



const Rooms = () => {
    const { roomsData } = useContext(HotelDataContext);
    console.log(roomsData);

    return (
        <div className="w-11/12 max-w-6xl mx-auto">
            <div className="text-center font-Lora my-10 space-y-2">
                <h1
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    className="text-xl border-b-2 w-fit mx-auto border-[#dfa974] pb-3">Rooms & Suites</h1>
                <p className="text-4xl">Enjoy a Luxury Experience</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    roomsData?.map(roomCard => <HotelRoomCard
                        key={roomCard.id}
                        roomCard={roomCard}
                    ></HotelRoomCard>)
                }
            </div>

        </div>
    );
};

export default Rooms;
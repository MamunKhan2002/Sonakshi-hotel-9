import { FaPeopleRoof } from "react-icons/fa6";
import { SlSizeFullscreen } from "react-icons/sl";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const HotelRoomCard = ({ roomCard }) => {
    const { id, title, status, price, max_people, room_size, room_img, description } = roomCard;

    return (
        <div className="parent card bg-base-100 rounded-none  shadow-xl">
            <figure className="child_2">
                <img src={room_img} alt={title} className="" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-Lora mt-5">{title}</h2>
                <p className="font-Poppins text-[#AAA]">{description}</p>
                <div className="flex justify-between w-full text-base font-Cabin text-start py-2">
                    <p className="uppercase font-Lora">price : {price}</p>
                    <p className="text-right text-[#dfa974] pr-2 capitalize cursor-pointer underline">{status}</p>
                </div>
                <div className="card-actions w-full">
                    <Link to ={`/roomCard/${id}`} className="py-3 px-5 bg-[#dfa974] w-full uppercase text-base text-white font-Lora">Room Details</Link>
                </div>
                <div className="child">
                    <div className="flex gap-4 py-2 px-4 shadow-lg font-Poppins uppercase bg-white ">
                        <h3 className="flex items-center gap-2"><SlSizeFullscreen className="text-[#dfa974]"></SlSizeFullscreen>size {room_size}</h3>
                        <h3 className="flex items-center gap-2"><FaPeopleRoof className="text-[#dfa974]"></FaPeopleRoof> max-People {max_people}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};


HotelRoomCard.propTypes = {
    roomCard: PropTypes.object
};

export default HotelRoomCard;
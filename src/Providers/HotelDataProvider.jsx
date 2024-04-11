import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const HotelDataContext = createContext(null);

const HotelDataProvider = ({ children }) => {
    const [roomsData, setRoomsData] = useState();

    useEffect(() => {
        const hotelDataLoad = async () => {
            const res = await fetch("/hotel_rooms_card_data.json")
            const data = await res.json()
            setRoomsData(data);
        };
        hotelDataLoad()
    }, []);

    const data = { roomsData };
    return (
        <HotelDataContext.Provider value={data}>
            {children}
        </HotelDataContext.Provider>
    );
};

HotelDataProvider.propTypes = {
    children: PropTypes.node
};

export default HotelDataProvider;
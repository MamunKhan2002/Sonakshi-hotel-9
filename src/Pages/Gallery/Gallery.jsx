

const Gallery = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto w-11/12 my-20">
            <div className="relative flex items-center justify-center">
                <img className="rounded-md opacity-75" src="https://i.ibb.co/ZXbg9rn/modern-studio-apartment-design-with-bedroom-living-space.jpg" alt="" />
                <h2 className="absolute text-3xl font-Lora text-black">Luxury Suite</h2>
            </div>
            <div className="relative flex items-center justify-center">
                <img className="rounded-md opacity-75" src="https://i.ibb.co/C2Fxmgs/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv.jpg" alt="" />
                <h2 className="absolute text-3xl font-Lora text-black">Executive Room</h2>
            </div>
            <div className="relative flex items-center justify-center">
                <img className="rounded-md opacity-75" src="https://i.ibb.co/4FWZwGx/3d-rendering-luxury-modern-bedroom-suite-hotel-with-tv-cabinet-1.jpg" alt="" />
                <h2 className="absolute text-3xl font-Lora text-black">Family Room</h2>
            </div>
            <div className="relative flex items-center justify-center">
                <img className="rounded-md opacity-75" src="https://i.ibb.co/k3xRNGW/interior-modern-comfortable-hotel-room.jpg" alt="" />
                <h2 className="absolute text-3xl font-Lora text-black">Deluxe Room</h2>
            </div>
            <div className="relative flex items-center justify-center">
                <img className="rounded-md opacity-75" src="https://i.ibb.co/Pws4hRm/luxury-classic-modern-bedroom-suite-hotel.jpg" alt="" />
                <h2 className="absolute text-3xl font-Lora text-black">Ocean View Room</h2>
            </div>
            <div className="relative flex items-center justify-center">
                <img className="rounded-md opacity-75" src="https://i.ibb.co/yRFd71z/luxury-bedroom-hotel.jpg" alt="" />
                <h2 className="absolute text-3xl font-Lora text-black">Penthouse Suite</h2>
            </div>
        </div>
    );
};

export default Gallery;
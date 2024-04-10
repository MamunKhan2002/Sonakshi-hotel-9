import about_img from "../../assets/about_img/about-1.jpg"
import about_img_2 from "../../assets/about_img/about-2.jpg"

const AboutUs = () => {
    return (
        <div className="lg:flex justify-between items-center w-11/12 max-w-6xl mx-auto my-20 ">
            {/* about title and desc */}
            <div 
            // data-aos="fade-right" 
            // data-aos-duration="1000"
            // data-aos-delay="500"
            className="lg:max-w-[485px] text-center">
                <h4 
                data-aos="fade-down"
                data-aos-duration="700"
                data-aos-delay="400"
                className="text-[#dfa974]">ABOUT US</h4>
                <h1 
                data-aos="fade-down"
                data-aos-duration="1000"               
                className="text-[42px] mt-[10px] font-Lora mb-5">Intercontinental LA Westlake Hotel</h1>
                <p className="text-base mt-[10px] font-Poppins">Sona.com is a leading online accommodation site. We’re passionate about travel. Every day, we inspire and reach millions of travelers across 90 local websites in 41 languages.</p>
                <p className="text-base mt-[10px] font-Poppins mb-9">So when it comes to booking the perfect hotel, vacation rental, resort, apartment, guest house, or tree house, we’ve got you covered.</p>
                <a className="pb-1 border-b border-[#dfa974] uppercase font-Lora font-bold tracking-widest" href="">READ MORE</a>
            </div>
            {/* about section img */}
            <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="flex gap-5 md:flex-row flex-col justify-center lg:mt-0 mt-5">
                <img src={about_img} alt="" />
                <img src={about_img_2} alt="" />
            </div>
        </div>
    );
};

export default AboutUs;
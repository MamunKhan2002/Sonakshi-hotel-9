import Meeting_Photo_1 from "../../assets/Meeting_Event_Photo/h16.jpg"
import Meeting_Photo_2 from "../../assets/Meeting_Event_Photo/mee.jpg"

const MeetingAndEvent = () => {
    return (
        <div className="flex items-center justify-between w-11/12 mx-auto">
            <figure>
                <img src={Meeting_Photo_1} alt="" />
            </figure>
            <div className="text-center mx-auto">
                <h3 className="text-[14px] pb-3 mx-auto border-b-2 border-[#dfa974] w-[220px] mb-10">MEETING & EVENTS</h3>
                <h1 className="text-5xl font-Lora max-w-[500px] leading-loose	">A Warm, Exquisite, Practical And Urban Space.</h1>
            </div>
            <figure>
                <img src={Meeting_Photo_2} alt="" />
            </figure>
        </div>
    );
};

export default MeetingAndEvent;
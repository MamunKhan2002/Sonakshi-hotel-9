import { Link } from "react-router-dom";
import errorPageImg from "../../assets/Page_Not_Found/Page_Not_Found.png"


const PageNotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center gap-3 h-screen ">
            <img className="w-4/12" src={errorPageImg} alt="" />
            <Link className="underline text-primary" to="/">Home</Link>
        </div>
    );
};

export default PageNotFound;
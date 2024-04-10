import Lottie from "lottie-react";
import { FaGithub, FaGoogle } from "react-icons/fa";

import animateLogin from '../../assets/loitte_data/Animation - 1712725869587.json'
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="w-11/12 max-w-6xl my-20  mx-auto flex items-end flex-row-reverse gap-8">
            <div className="w-1/2">
                <Lottie
                    animationData={animateLogin}
                    loop={true} />
            </div>
            <div className="flex flex-col items-center w-1/2 p-10 shadow-md">
                {/* from start here */}
                <form className="w-full">
                    <h1 className="text-4xl font-Lora mb-6">Login</h1>
                    <div className="text-xl font-Lora mb-6 space-y-1">
                        <p>Email :</p>
                        <input className="border-2 outline-none w-full py-2 px-3 focus:border-[#dea874]" type="email" name="email" id="" />
                    </div>
                    <div className="text-xl font-Lora space-y-1">
                        <p>Password :</p>
                        <input className="border-2 outline-none w-full py-2 px-3 focus:border-[#dea874]" type="password" name="email" id="" />
                    </div>
                    <div className="flex flex-col justify-end items-end space-y-1">
                        <button className="btn w-full mt-8 uppercase hover:text-black text-Lora text-white bg-[#dea874]">Submit</button>
                        <a className="underline font-Lora" href="">Forget Password?</a>
                    </div>
                </form>
                {/* from end here */}
                <div className="flex items-center font-Lora">
                    <span className="w-[120px]"><hr /></span>
                    <span className="p-2 rounded-lg border-2 uppercase">or</span>
                    <span className="w-[120px]"><hr /></span>
                </div>

                <div className="flex justify-around w-full font-Lora mt-10">
                    <button className="py-2 px-8 border-2  border-[#fbbc04] flex items-center gap-2"><FaGoogle className="text-[#fbbc04] text-2xl"></FaGoogle> Google</button>
                    <button className="py-2 px-8 border-2 border-black flex items-center gap-2"><FaGithub className="text-2xl"></FaGithub> Github</button>
                </div>
                <p className="mt-8 font-Lora">Need an account?  <Link to="/register" className="underline text-[#dea874]" href="">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;
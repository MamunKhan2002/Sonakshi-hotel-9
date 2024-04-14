import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';


import Lottie from "lottie-react";
import animateLogin from '../../assets/loitte_data/Animation - 1712725869587.json';
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/FirebaseAuthProvider";
import SocialButton from "./SocialButton";

const Login = () => {
    const { LoginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    // console.log(LoginUser);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;
        LoginUser(email, password)
            .then(response => {
                reset()
                console.log(response.user);
                Swal.fire({
                    title: "Good job!",
                    text: "Login Successful !",
                    icon: "success",
                });
                navigate(`/`)
            })
            .catch(error => {
                console.error(error)
            })
        console.log(email, password)
    }


    return (
        <div className="w-11/12 max-w-6xl my-20  mx-auto flex items-end flex-row-reverse gap-8">
            <div className="hidden md:flex lg:w-1/2">
                <Lottie
                    animationData={animateLogin}
                    loop={true} />
            </div>
            <div className="flex flex-col items-center w-full lg:w-1/2 p-10 shadow-md">
                {/* from start here */}
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <h1 className="text-4xl font-Lora mb-6">Login</h1>
                    <div className="text-xl font-Lora mb-6 space-y-1">
                        <p>Email :</p>
                        <input {...register("email")} className="rounded-lg border-2 outline-none w-full py-2 px-3 focus:border-[#dea874]" type="email" name="email" id="" />
                    </div>
                    <div className="text-xl font-Lora space-y-1">
                        <p>Password :</p>
                        <input {...register("password")} className="rounded-lg  border-2 outline-none w-full py-2 px-3 focus:border-[#dea874]" type="password" name="password" id="" />
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
                <SocialButton></SocialButton>
                <p className="mt-8 font-Lora">Need an account?  <Link to="/register" className="underline text-[#dea874]" href="">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;
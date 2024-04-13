import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { useContext } from "react";
import Lottie from "lottie-react";
import animateRegister from "../../assets/loitte_data/Animation - 1712745858843.json"
import { AuthContext } from "../../Providers/FirebaseAuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    // console.log(createUser);

    const {
        register,
        handleSubmit,
        reset
        // watch,
        // formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        const { userName, email, password, photoURL } = data;
        createUser(email, password)
            .then(response => {
                reset()
                console.log(response.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="w-11/12 max-w-6xl my-20  mx-auto flex items-end gap-8">
            <div className="w-1/2">
                <Lottie
                    animationData={animateRegister}
                    loop={true}
                />
            </div>
            <div className="flex flex-col items-center w-1/2 p-10 shadow-md">
                {/* from start here */}
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <h1 className="text-4xl font-Lora mb-8 font-semibold text-center">Registration From</h1>
                    <div className="text-xl font-Lora mb-6 space-y-1">
                        <p>User Name :</p>
                        <input {...register("userName")} className="border-2 outline-none w-full py-2 rounded-lg px-3 focus:border-[#dea874]" placeholder="User Name" type="text" name="userName" id="" />
                    </div>
                    <div className="text-xl font-Lora mb-6 space-y-1">
                        <p>Email Address :</p>
                        <input {...register("email")} className="border-2 outline-none rounded-lg w-full py-2 px-3 focus:border-[#dea874]" placeholder="Email" type="email" name="email" id="" />
                    </div>
                    <div className="text-xl font-Lora mb-6 space-y-1">
                        <p>Photo URL :</p>
                        <input {...register("photoURL")} className="border-2 rounded-lg outline-none w-full py-2 px-3 focus:border-[#dea874]" placeholder="Photo URL" type="text" name="photoURL" id="" />
                    </div>
                    <div className="text-xl font-Lora space-y-1">
                        <p>Password :</p>
                        <input {...register("password")} className="border-2 rounded-lg outline-none w-full py-2 px-3 focus:border-[#dea874]" placeholder="Password" type="password" name="password" id="" />
                    </div>
                    <div className="font-Lora mt-2 space-y-1">
                        <input type="checkbox" />
                        <label htmlFor=""> I agree to the <small className="underline cursor-pointer font-thin">Terms & Conditions</small></label>
                    </div>
                    <div className="flex flex-col justify-end items-end space-y-1">
                        <button className="btn w-full mt-8 uppercase hover:text-black text-Lora text-white bg-[#dea874]">Create Account</button>
                    </div>
                </form>
                {/* from end here */}
                <div className="flex items-center mt-4 font-Lora">
                    <span className="w-[120px]"><hr /></span>
                    <span className="p-2 rounded-lg border-2 uppercase">or</span>
                    <span className="w-[120px]"><hr /></span>
                </div>
                <p className="mt-8 font-Lora">Already Have An Account?  <Link to="/login" className="underline text-[#dea874]" href="">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;
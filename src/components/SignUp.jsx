import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col md:flex-row h-auto md:h-[700px] w-full">


            <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 md:px-0 py-10 md:py-0">
                <form className="w-full md:w-96 flex flex-col items-center justify-center">


                    <h2 className="text-4xl text-gray-900 font-normal text-center mb-2">
                        <span className="font-light">Start with proof</span>
                    </h2>
                    <p className="text-sm text-gray-500/90 text-center mb-6">
                        Evidence-first visibility for serious talent.
                    </p>

                    <button className="w-full h-12 flex items-center font-bold justify-center bg-gray-100 rounded-md">
                        <FcGoogle className="w-6 h-6 mr-2" />
                        Google
                    </button>

                    <div className="flex items-center gap-4 w-full my-5">
                        <div className="flex-1 h-px bg-gray-300/90"></div>
                        <p className="text-sm text-gray-500/90">or continue with </p>
                        <div className="flex-1 h-px bg-gray-300/90"></div>
                    </div>

                    <div className="flex items-center w-full border border-gray-300/60 h-12 rounded-md overflow-hidden px-4 mb-4">
                        <input
                            type="email"
                            placeholder="johndoe@gmail.com"
                            className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
                            required
                        />
                    </div>

                    <div className="flex items-center w-full border border-gray-300/60 h-12 rounded-md overflow-hidden px-4 mb-4">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
                            required
                        />
                        <button
                            type="button"
                            className="ml-2 text-gray-400"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                    <div className="flex items-center w-full border border-gray-300/60 h-12 rounded-md overflow-hidden px-4 mb-4">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
                            required
                        />
                        <button
                            type="button"
                            className="ml-2 text-gray-400"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    <div className="text-sm text-gray-500 mt-4 text-center md:text-left">
                        <p>
                            By registering you accept nexio{" "}
                            <a
                                href="#"
                                className="text-[#449FED] hover:underline"
                            >
                                Terms of Service
                            </a>{" "}
                            &{" "}
                            <a
                                href="#"
                                className="text-[#449FED] hover:underline"
                            >
                                Privacy Policy
                            </a>
                        </p>
                    </div>


                    <button
                        type="submit"
                        className="mt-6 w-full h-11 rounded-md text-white bg-[#449FED] hover:opacity-90 transition-opacity"
                    >
                        Create Account
                    </button>

                    <p className="text-gray-500/90 text-sm mt-4">
                        Already have an account?{" "}
                        <Link to="/signin" className="text-[#449FED] hover:underline">
                            Login
                        </Link>
                    </p>
                </form>
            </div>


            <div className="w-full md:w-1/2 flex justify-center items-center mt-4 mx-10 md:mt-0 md:ml-6">
                <img
                    className="max-h-[400px] md:max-h-[500px] w-auto object-contain"
                    src={assets.signup_image}
                    alt="signup image"
                />
            </div>


        </div>
    );
};

export default SignUp;

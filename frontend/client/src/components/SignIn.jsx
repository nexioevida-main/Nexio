// import React, { useState } from "react";
// import { assets } from "../assets/assets";
// import { Link } from "react-router-dom";
// import { Eye, EyeOff } from "lucide-react";
// import { FcGoogle } from "react-icons/fc";


// const SignIn = () => {
//     const [showPassword, setShowPassword] = useState(false);

//     return (
//         <div className="flex flex-col md:flex-row h-auto md:h-[700px] w-full">

//             <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 md:px-0 py-10 md:py-0">
//                 <form className="w-full md:w-96 flex flex-col items-center justify-center">

//                     <h2 className="text-4xl text-gray-900 font-normal text-center">
//                         <span className="font-light">Hello, </span> Welcome Back!
//                     </h2>
//                     <p className="text-sm text-gray-500/90 mt-3 text-center">
//                         Sign in to continue where your evidence speaks for you.
//                     </p>


//                     <button className="w-full h-12 mt-8 flex items-center font-bold justify-center bg-gray-100 rounded-md">
//                         <FcGoogle className="w-6 h-6 mr-2" />
//                         Google
//                     </button>

//                     <div className="flex items-center gap-4 w-full my-5">
//                         <div className="flex-1 h-px bg-gray-300/90"></div>
//                         <p className="text-sm text-gray-500/90">or continue with</p>
//                         <div className="flex-1 h-px bg-gray-300/90"></div>
//                     </div>

//                     <div className="flex items-center w-full border border-gray-300/60 h-12 rounded-md overflow-hidden px-4">
//                         <input
//                             type="email"
//                             placeholder="Email id"
//                             className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
//                             required
//                         />
//                     </div>

//                     <div className="flex items-center w-full border border-gray-300/60 h-12 rounded-md overflow-hidden px-4 mt-4">
//                         <input
//                             type={showPassword ? "text" : "password"}
//                             placeholder="Password"
//                             className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
//                             required
//                         />
//                         <button
//                             type="button"
//                             className="ml-2 text-gray-400"
//                             onClick={() => setShowPassword(!showPassword)}
//                         >
//                             {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                         </button>
//                     </div>

//                     <div className="w-full flex items-center justify-between mt-4 text-gray-500/80">
//                         <div className="flex items-center gap-2">
//                             <input className="h-5 w-5" type="checkbox" id="checkbox" />
//                             <label className="text-sm" htmlFor="checkbox">
//                                 Remember me
//                             </label>
//                         </div>
//                         <Link className="text-sm underline" to="#">
//                             Forgot password?
//                         </Link>
//                     </div>

//                     <button
//                         type="submit"
//                         className="mt-6 w-full h-11 rounded-md text-white bg-[#449FED] hover:opacity-90 transition-opacity"
//                     >
//                         Login
//                     </button>

//                     <p className="text-gray-500/90 text-sm mt-4">
//                         Don’t have an account?{" "}
//                         <Link to="/signup" className="text-[#449FED] hover:underline">
//                             Sign up for free
//                         </Link>
//                     </p>
//                 </form>
//             </div>

//             <div className="w-full md:w-1/2 flex justify-center items-center mt-4 mx-10 md:mt-0 md:ml-6">
//                 <img
//                     className="max-h-[400px] md:max-h-[500px] w-auto object-contain"
//                     src={assets.signin_image}
//                     alt="signup image"
//                 />
//             </div>
//         </div>
//     );
// };

// export default SignIn;

import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { apiRequest } from "../utils/api";

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            await apiRequest("/api/auth/login", {
                method: "POST",
                body: JSON.stringify({ email, password }),
            });
            navigate("/dashboard");
        } catch (err) {
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = () => {
        window.location.href = "/api/auth/google";
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen">

            {/* Login form */}
            <div className="w-full md:w-1/2 flex items-center justify-center px-6">
                <form
                    onSubmit={handleLogin}
                    className="w-full max-w-sm space-y-5"
                >
                    <h2 className="text-3xl text-gray-900 text-center">
                        <span className="font-light">Hello,</span>{" "}
                        <span className="font-semibold">Welcome Back!</span>
                    </h2>

                    <p className="text-sm text-gray-500 text-center">
                        Sign in to continue where your evidence speaks for you.
                    </p>

                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="w-full h-12 flex items-center justify-center bg-gray-100 rounded-md font-medium"
                    >
                        <FcGoogle className="w-5 h-5 mr-2" />
                        Google
                    </button>

                    <div className="flex items-center gap-3">
                        <div className="flex-1 h-px bg-gray-300" />
                        <span className="text-sm text-gray-500">or continue with</span>
                        <div className="flex-1 h-px bg-gray-300" />
                    </div>

                    <div className="w-full space-y-1">
                        <label className="text-sm font-medium text-gray-700">
                            Email
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="johndoe@gmail.com"
                            className="w-full h-12 px-4 border border-gray-300 rounded-md text-sm outline-none focus:border-[#449FED]"
                            required
                        />
                    </div>


                    <div className="flex items-center h-12 px-4 border rounded-md">
                        <label>

                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="flex-1 text-sm outline-none"
                            required
                        />

                        <button type="button" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    <div className="flex justify-between text-sm text-gray-500">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <Link to="#" className="underline">
                            Forgot password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-11 bg-[#449FED] text-white rounded-md"
                    >
                        {loading ? "Signing in..." : "Login"}
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                        Don’t have an account?{" "}
                        <Link to="/signup" className="text-[#449FED] font-medium">
                            Sign up for free
                        </Link>
                    </p>
                </form>
            </div>

            {/* Image */}
            <div className="hidden md:flex w-1/2 items-center justify-center">
                <img src={assets.signin_image} className="max-h-[520px]" />
            </div>
        </div>
    );
};

export default SignIn;

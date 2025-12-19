// import React, { useState } from "react";
// import { assets } from "../assets/assets";
// import { Link } from "react-router-dom";
// import { Eye, EyeOff } from "lucide-react";
// import { FcGoogle } from "react-icons/fc";

// const SignUp = () => {
//     const [showPassword, setShowPassword] = useState(false);

//     return (
//         <div className="flex flex-col md:flex-row h-auto md:h-[700px] w-full">


//             <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 md:px-0 py-10 md:py-0">
//                 <form className="w-full md:w-96 flex flex-col items-center justify-center">


//                     <h2 className="text-4xl text-gray-900 font-normal text-center mb-2">
//                         <span className="font-light">Start with proof</span>
//                     </h2>
//                     <p className="text-sm text-gray-500/90 text-center mb-6">
//                         Evidence-first visibility for serious talent.
//                     </p>

//                     <button className="w-full h-12 flex items-center font-bold justify-center bg-gray-100 rounded-md">
//                         <FcGoogle className="w-6 h-6 mr-2" />
//                         Google
//                     </button>

//                     <div className="flex items-center gap-4 w-full my-5">
//                         <div className="flex-1 h-px bg-gray-300/90"></div>
//                         <p className="text-sm text-gray-500/90">or continue with </p>
//                         <div className="flex-1 h-px bg-gray-300/90"></div>
//                     </div>

//                     <div className="flex items-center w-full border border-gray-300/60 h-12 rounded-md overflow-hidden px-4 mb-4">
//                         <input
//                             type="text"
//                             placeholder="Username"
//                             className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
//                             required
//                         />
//                     </div>
//                     <div className="flex items-center w-full border border-gray-300/60 h-12 rounded-md overflow-hidden px-4 mb-4">
//                         <input
//                             type="email"
//                             placeholder="johndoe@gmail.com"
//                             className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
//                             required
//                         />
//                     </div>

//                     <div className="flex items-center w-full border border-gray-300/60 h-12 rounded-md overflow-hidden px-4 mb-4">
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
//                     <div className="flex items-center w-full border border-gray-300/60 h-12 rounded-md overflow-hidden px-4 mb-4">
//                         <input
//                             type={showPassword ? "text" : "password"}
//                             placeholder="Confirm Password"
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

//                     <div className="text-sm text-gray-500 mt-4 text-center md:text-left">
//                         <p>
//                             By registering you accept nexio{" "}
//                             <a
//                                 href="#"
//                                 className="text-[#449FED] hover:underline"
//                             >
//                                 Terms of Service
//                             </a>{" "}
//                             &{" "}
//                             <a
//                                 href="#"
//                                 className="text-[#449FED] hover:underline"
//                             >
//                                 Privacy Policy
//                             </a>
//                         </p>
//                     </div>


//                     <button
//                         type="submit"
//                         className="mt-6 w-full h-11 rounded-md text-white bg-[#449FED] hover:opacity-90 transition-opacity"
//                     >

//                         Create Account
//                     </button>

//                     <p className="text-gray-500/90 text-sm mt-4">
//                         Already have an account?{" "}
//                         <Link to="/signin" className="text-[#449FED] hover:underline">
//                             Login
//                         </Link>
//                     </p>
//                 </form>
//             </div>


//             <div className="w-full md:w-1/2 flex justify-center items-center mt-4 mx-10 md:mt-0 md:ml-6">
//                 <img
//                     className="max-h-[400px] md:max-h-[500px] w-auto object-contain"
//                     src={assets.signup_image}
//                     alt="signup image"
//                 />
//             </div>


//         </div>
//     );
// };

// export default SignUp;

import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { apiRequest } from "../utils/api";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.password !== form.confirmPassword) {
            return alert("Passwords do not match");
        }

        try {
            setLoading(true);
            await apiRequest("/api/auth/register", {
                method: "POST",
                body: JSON.stringify(form),
            });
            navigate("/signin");
        } catch (err) {
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignup = () => {
        window.location.href = "/api/auth/google";
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <div className="w-full md:w-1/2 flex items-center justify-center px-6">
                <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">

                    <h2 className="text-3xl text-center font-semibold">
                        Start with proof
                    </h2>
                    <p className="text-sm text-gray-500 text-center">
                        Evidence-first visibility for serious talent.
                    </p>

                    <button
                        type="button"
                        onClick={handleGoogleSignup}
                        className="w-full h-12 bg-gray-100 rounded-md flex items-center justify-center font-medium"
                    >
                        <FcGoogle className="mr-2" />
                        Google
                    </button>

                    <div className="flex items-center gap-3">
                        <div className="flex-1 h-px bg-gray-300" />
                        <span className="text-sm text-gray-500">or continue with</span>
                        <div className="flex-1 h-px bg-gray-300" />
                    </div>

                    {["username", "email"].map((field) => (
                        <div key={field} className="w-full space-y-1">
                            <label className="text-sm font-medium text-gray-700 capitalize">
                                {field === "email" ? "Email" : "User name"}
                            </label>

                            <input
                                type={field}
                                value={form[field]}
                                placeholder={field === "email" ? "johndoe@gmail.com" : "User Name"}
                                onChange={(e) =>
                                    setForm({ ...form, [field]: e.target.value })
                                }
                                className="w-full h-12 px-4 border border-gray-300 rounded-md text-sm outline-none focus:border-[#449FED]"
                                required
                            />
                        </div>
                    ))}

                    {["password", "confirmPassword"].map((field) => (
                        <div key={field} className="w-full space-y-1">
                            <label className="text-sm font-medium text-gray-700">
                                {field === "password" ? "Password" : "Confirm Password"}
                            </label>

                            <div className="flex items-center h-12 px-4 border border-gray-300 rounded-md focus-within:border-[#449FED]">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={form[field]}
                                    placeholder={
                                        field === "password" ? "Password" : "Confirm Password"
                                    }
                                    onChange={(e) =>
                                        setForm({ ...form, [field]: e.target.value })
                                    }
                                    className="flex-1 text-sm outline-none"
                                    required
                                />

                                <button
                                    type="button"
                                    className="text-gray-400"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>
                    ))}

                    <p className="text-xs text-gray-500">
                        By registering you accept nexio{" "}
                        <span className="text-[#449FED]">Terms of Service</span> &{" "}
                        <span className="text-[#449FED]">Privacy Policy</span>
                    </p>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-11 bg-[#449FED] text-white rounded-md"
                    >
                        {loading ? "Creating account..." : "Create Account"}
                    </button>

                    <p className="text-sm text-center text-gray-500">
                        Already have an account?{" "}
                        <Link to="/signin" className="text-[#449FED]">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
            
            <div className="hidden md:flex w-1/2 items-center justify-center">
                <img src={assets.signup_image} className="max-h-[520px]" />
            </div>
        </div>
    );
};

export default SignUp;

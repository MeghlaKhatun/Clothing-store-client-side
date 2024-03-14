import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import logIn from '../../assets/images/login.jpg'
import { Helmet } from "react-helmet";
const LogIn = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Helmet>
                <title>LogIn - Clothing Store</title>
            </Helmet>
            <div className="px-10 lg:px-0">
                <div className="max-w-[800px] mx-auto  shadow-lg flex items-center justify-center mt-10">
                    <div className="flex flex-row-reverse">

                        <div className=" hidden lg:flex lg:flex-1 ">
                            <img className="h-full w-full rounded-bl-full" src={logIn} alt="" />
                        </div>


                        <div className="flex-1">
                            <div className="  p-10 r">
                                {/* 
                        {
                            verifyPassword && <p className="text-xl text-white font-bold mb-6">{verifyPassword}</p>
                        } */}


                                <h2 className="text-xl md:text-2xl lg:text-3xl text-black text-center font-bold mb-3 uppercase">LogIn</h2>

                                <form className="w-full">
                                

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-gray-700 font-semibold  text-[18px]">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Your Email" className="border border-gray-500 mb-2 py-3 pl-3 input-bordered outline-none" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-gray-700  font-semibold  text-[18px]">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="Your Email" className="border border-gray-500 mb-2 py-3 pl-3 input-bordered outline-none" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-gray-700  text-[18px] font-semibold ">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="password" className="border border-gray-500 mb-2  py-3 pl-3 input-bordered outline-none" required />
                                    </div>

                                    <div className="form-control mt-6">
                                        <button className="py-2 md:py-3  border-2 border-transparent bg-[#48CFCE] text-white font-bold">LogIn</button>
                                    </div>
                                </form>
                                {/* GoogleLogIn */}
                                <div className="flex justify-center mt-6">
                                    <button className="py-2 md:py-3 px-10 w-full justify-center border-2 border-[#48CFCE] text-[#48CFCE] font-bold flex items-center gap-3"><FcGoogle className="text-2xl"></FcGoogle> Google SignUp</button>
                                </div>
                                <p className="text-[16px] mt-4 text-black font-semibold text-center">Already Have An Account ? please <Link className="text-[#48CFCE] hover:underline font-bold" to="/registration">Registration</Link> </p>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
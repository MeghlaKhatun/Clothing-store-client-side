import Navbar from "../Navbar/Navbar";
import { FcGoogle } from "react-icons/fc";
import registration from '../../assets/images/registration.jpg'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const Registration = () => {

    const {createUser}=useContext(AuthContext)

    const handleRegistration=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const photo=form.photo.value;
        console.log(name,email,password,photo);

        //create user

        createUser(email,password)
        .then(result=>{
           console.log("result",result)
        })
        .catch(error=>{
         console.log("error",error)
        })
        
    }


    return (
        <div>
            <Navbar></Navbar>
            <Helmet>
                <title>Registration - Clothing Store</title>
            </Helmet>
            <div className="px-10 lg:px-0">
                <div className="max-w-[800px] mx-auto  shadow-lg flex items-center justify-center mt-10">
                    <div className="flex ">

                        <div className=" hidden lg:flex lg:flex-1 ">
                            <img className="h-full w-full rounded-br-full" src={registration} alt="" />
                        </div>


                        <div className="flex-1">
                        <div className="  p-10 r">
{/* 
                            {
                                verifyPassword && <p className="text-xl text-white font-bold mb-6">{verifyPassword}</p>
                            } */}


                            <h2 className="text-xl md:text-2xl lg:text-3xl text-black text-center font-bold mb-3 uppercase">Registration</h2>

                            <form onSubmit={handleRegistration} className="w-full">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-700 font-semibold text-[18px]">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your Name" className="border border-gray-500  py-3 pl-3 input-bordered outline-none" required />
                                </div>



                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-700  font-semibold  text-[18px]">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Your Email" className="border border-gray-500  py-3 pl-3 input-bordered outline-none" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-700  text-[18px] font-semibold ">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="border border-gray-500 py-3 pl-3 input-bordered outline-none" required />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-700 text-[18px] font-semibold ">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Photo URL" className="border border-gray-500 py-3 pl-3 input-bordered outline-none" required />
                                </div>

                                <div className="form-control mt-6">
                                    <button className="py-2 md:py-3  border-2 border-transparent bg-[#48CFCE] text-white font-bold">Registration</button>
                                </div>
                            </form>
                            {/* GoogleLogIn */}
                            <div className="flex justify-center mt-6">
                                <button  className="py-2 md:py-3 px-10 w-full justify-center border-2 border-[#48CFCE] text-[#48CFCE] font-bold flex items-center gap-3"><FcGoogle className="text-2xl"></FcGoogle> Google SignUp</button>
                            </div>
                            <p className="text-[16px] mt-4 text-black font-semibold text-center">Already Have An Account ? please <Link className="text-[#48CFCE] hover:underline font-bold" to="/logIn">Login</Link> </p>

                        </div>

                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
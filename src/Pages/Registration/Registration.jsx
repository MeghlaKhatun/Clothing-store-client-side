import Navbar from "../Navbar/Navbar";
import { FcGoogle } from "react-icons/fc";
import registration from '../../assets/images/registration.jpg'
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/axiosPublic";

const image_hosting_key = "db64d3896d67f4f8e108db40e0c85d9d"
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const Registration = () => {

    const [changePassword, setChangePassword] = useState(true);
    const [verifyPassword, setVerifyPassword] = useState("")
    const changeIcon = changePassword === true ? false : true;
    const { createUser } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const handleRegistration = async (e )=> {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.files[0]
        console.log(photo,name);

        const imageFile = { image: photo}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })

        console.log(res.data.data.display_url)

        setVerifyPassword("");
        //verify password condition
        if (password.length < 6) {
            setVerifyPassword("Password should be at least 6 characters");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setVerifyPassword("Password must be one character uppercase");
            return;
        }
        else if (!/[!@#$%^&*()_+{}[\]:;<>,.?/~\\-]/.test(password)) {
            setVerifyPassword("Password must have one character special key word");
            return
        }
        else if (!/\d/.test(password)) {
            setVerifyPassword("Password must contain at least one numeric character.");
            return;
        }

        //create user

        createUser(email, password)
            .then(result => {
                console.log(result)
                Swal.fire({
                    title: "Good job!",
                    text: "Registration Successful",
                    icon: "success"
                });
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops sorry...',
                    text: (`${error.message}`),
                })
            })

    }


    return (
        <div>
            <Navbar></Navbar>
            <Helmet>
                <title>Registration - Clothing Store</title>
            </Helmet>

            <div className="md:px-10 lg:px-0 ">
                {
                    verifyPassword && <p className="text-xl text-red-700 font-bold mb-6 text-center md:mt-8 lg:mt-6">{verifyPassword}</p>
                }

                <div className="max-w-[800px] mx-auto flex items-center justify-center mt-10 shadow-2xl">

                    <div className="flex ">

                        <div className=" hidden lg:flex lg:flex-1 ">
                            <img className="h-full w-full rounded-br-full" src={registration} alt="" />
                        </div>


                        <div className="flex-1">
                            <div className="  p-10 r">



                                <h2 className="text-xl md:text-2xl lg:text-3xl text-black text-center font-bold mb-3 uppercase">Registration</h2>

                                <form onSubmit={handleRegistration} className="w-full">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-gray-700 font-semibold text-[18px]">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Your Name" className="border border-gray-500 mb-2 py-3 pl-3 input-bordered outline-none" required />
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
                                        <input type={changePassword ? "password" : "text"} name="password" placeholder="password" className="border border-gray-500 mb-2  py-3 pl-3 input-bordered outline-none" required />
                                        <span className="icon absolute mt-[52px] ml-72 text-[18px] cursor-pointer"
                                            onClick={() => {
                                                setChangePassword(changeIcon);
                                            }}
                                        >
                                            {changeIcon ? <FaEye /> : <FaEyeSlash />}
                                        </span>

                                    </div>


                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-gray-700 text-[18px] font-semibold ">Photo URL</span>
                                        </label>
                                        <input type="file" name="photo" placeholder="Photo URL" className="border border-gray-500 mb-2  py-3 pl-3 input-bordered outline-none" required />
                                    </div>

                                    <div className="form-control mt-6">
                                        <button className="py-2 md:py-3  border-2 border-transparent bg-[#48CFCE] text-white font-bold">Registration</button>
                                    </div>
                                </form>
                                {/* GoogleLogIn */}
                                <div className="flex justify-center mt-6">
                                    <button className="py-2 md:py-3 px-10 w-full justify-center border-2 border-[#48CFCE] text-[#48CFCE] font-bold flex items-center gap-3"><FcGoogle className="text-2xl"></FcGoogle> Google SignUp</button>
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
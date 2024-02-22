import { NavLink } from 'react-router-dom';
import logo from '../../assets/icon/logo.png'
import  './Navbar.css'


const Navbar = () => {
    return (
        <div className='border-b-2 bg-white border-[#48CFCE] shadow-xl sticky top-0'>
            <div className="max-w-[1320px] mx-auto ">

                <div className="drawer">
                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

                    <div className="drawer-content flex justify-between flex-col">
                        {/* Navbar */}
                        <div className="w-full flex justify-between navbar">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block text-black w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>

                            <a href="/"><img className="h-[60px] w-[80px]  lg:h-[120px] lg:w-[150px] rounded-full" src={logo} alt="" /></a>

                            <nav className="flex-none hidden lg:block">
                                <ul className=" flex gap-8  menu-horizontal text-black font-bold lg:text-[18px] ">
                                    {/* Navbar menu content here */}
                                    <li><NavLink to={"/"}>Home</NavLink></li>
                                    <li><NavLink to={"/addProduct"}>Add-Product</NavLink></li>
                                    <li><NavLink to={"/myCart"}>My-Cart</NavLink></li>
                                    <li><NavLink to={"/registration"}>Registration</NavLink></li>
                                    <li><NavLink to={"/logIn"}>LogIn</NavLink></li>
                                    
                                    

                                </ul>

                            </nav>

                            {/* profile  */}


                        </div>
                        {/* Page content here */}

                    </div>


                    <nav className="drawer-side z-10 ">
                        <li htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay "></li>
                        <ul className="menu py-10 px-4 w-80 gap-3 bg-white font-bold text-black shadow-xl">

                            <li><NavLink to={"/"}>Home</NavLink></li>
                            <li><NavLink to={"/addProduct"}>Add-Product</NavLink></li>
                            <li><NavLink to={"/myCart"}>My-Cart</NavLink></li>
                            <li><NavLink to={"/registration"}>Registration</NavLink></li>
                            <li><NavLink to={"/logIn"}>LogIn</NavLink></li>

                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
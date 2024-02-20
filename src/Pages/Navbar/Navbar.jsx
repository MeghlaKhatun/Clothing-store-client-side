import logo from '../../assets/icon/logo.png'


const Navbar = () => {
    return (
        <div>
            
        <nav className="flex items-center justify-start gap-20 px-10 py-8">
            <img className='w-3/12 h-3/6' src={logo} alt="navigateui logo" />
            <ul className="flex items-center justify-between gap-10">
                <li className="cursor-pointer hover:text-sky-500">Home</li>
                <li className="cursor-pointer hover:text-sky-500">Services</li>
                <li className="cursor-pointer hover:text-sky-500">About</li>
                <li className="cursor-pointer hover:text-sky-500">Contact</li>
            </ul>
        </nav>
   
        </div>
    );
};

export default Navbar;
import banner from '../../assets/images/bannerImage.png';
import { FaShoppingCart } from "react-icons/fa";

const Banner = () => {
    return (

        <div className=''>
            <div className='max-w-[1320px] mx-auto flex flex-col-reverse lg:flex-row justify-between items-center'>


                <div className='flex-1 '>
                    <h1 className='text-5xl font-bold mb-6'>Happy <span className='text-[#48CFCE]'>Shopping</span></h1>
                    <p className='w-3/4 text-gray-700 '>A clothes shop or clothes store is any shop which sells items of ready-made clothing. A small shop which sells expensive or designer clothing may be called a boutique. A shop that sells clothes for a narrowly restricted market such as school uniforms or outdoor sports may be called an outfitter.</p>
                    <div className='mt-6'>
                        <button className='flex items-center gap-2 py-3 px-8 bg-[#48CFCE] font-semibold text-white border-2 justify-center hover:border-2 border-[#48CFCE] hover:text-[#48CFCE] hover:bg-transparent'>< FaShoppingCart />Buy Now</button>                      
                    </div>
                </div>
                
                <div className='flex-1'>
                    <img src={banner} alt="" />
                </div>


            </div>
        </div>
    );
};

export default Banner;
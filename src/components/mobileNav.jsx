import { FaRegHeart } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { FiTrendingUp } from "react-icons/fi";
import { NavLink } from "react-router-dom";
const MobileNav = () => {
    return (
        <div className="fixed left-0 bottom-0 z-50 w-full  md:hidden block shadow-[0_-4px_10px_rgba(0,0,0,0.2)] ">
            <div className="flex  bg-white justify-between  px-4 py-2">

                <NavLink to='/' className={({ isActive }) => `font-Gilroy text-center  ${isActive ? 'text-pink-500 font-bold text-[14px] ' : 'font-medium text-[13px] text-black'}`}>

                    <div className="font-Gilroy flex justify-center flex-col items-center text-center bg-white " >
                        <FiHome className="text-[23px]"></FiHome>
                        <p className="">Home</p>
                    </div>
                </NavLink>


                <NavLink to='/sdds' className={({ isActive }) => `font-Gilroy text-center  ${isActive ? 'font-bold text-[14px] text-pink-500' : 'font-medium text-[13px]'}`}>

                    <div className="bg-white flex flex-col items-center justify-center">
                        <FiTrendingUp className="text-[23px]"></FiTrendingUp>
                        <p>Trending</p>
                    </div>
                </NavLink>


                <NavLink to='/deded' className={({ isActive }) => `font-Gilroy text-center ${isActive ? 'font-bold  text-[15px] text-pink-500' : 'font-medium  text-[13px]'}`}>

                    <div className="bg-white relative flex flex-col items-center justify-center">
                        <div className="p-4 shadow-sm  rounded-full top-[-20px] border-8 border-solid  border-white absolute bg-pink-500 text-white">
                            <LuShoppingCart className="text-[25px] "></LuShoppingCart>
                        </div>
                    </div>
                </NavLink>

                <NavLink to='/edde' className={({ isActive }) => `font-Gilroy text-center ${isActive ? 'font-bold  text-[15px] text-pink-500' : 'font-medium  text-[13px]'}`}>

                    <div className="bg-white flex flex-col items-center justify-center">
                        <FaRegHeart className="text-[22px]"></FaRegHeart>
                        <p>Likes</p>
                    </div>
                </NavLink>

                <NavLink to='/edde' className={({ isActive }) => `font-Gilroy text-center ${isActive ? 'font-bold  text-[15px] text-pink-500' : 'font-medium  text-[13px]'}`}>

                    <div className="bg-white flex flex-col items-center justify-center">
                        <FaRegUser className="text-[22px]" ></FaRegUser>
                        <p>Profile</p>
                    </div>
                </NavLink>

            </div>
        </div >
    )
}
export default MobileNav
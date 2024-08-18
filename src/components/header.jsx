import logo from '../assets/logo.png'
import { IoLocationOutline } from "react-icons/io5";
const Header = () => {
    return (
        <header className='max-w-[1200px] mx-auto  bg-red-400 sm:bg-white flex'>
            <div className='flex items-center'>
                <img className='hidden sm:block h-[85px] w-[90px]' src={logo} alt="" />
                <h1 className='p-2 text-3xl font-extrabold sm:hidden font-logo text-white'>Foodie</h1>
                <div className='text-sm flex items-center' >
                    <div>
                        <IoLocationOutline/>
                    </div>
                    <div>
                        <p>Select location</p>
                        <p>Patna, Bihar</p>
                    </div>
                </div>
            </div>


            <div>
                <div>
                    <div className='hidden sm:block'>

                    </div>

                    <div className='sm:hidden'>

                    </div>
                </div>
            </div>
        </header>

    )
}
export default Header
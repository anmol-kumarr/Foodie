import { IoLocationOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { BiSolidOffer } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa6";
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLocation } from '../utils/locationSlice';
import { IoReorderThreeOutline } from "react-icons/io5";

const Header = () => {
    const locationKey = process.env.REACT_APP_LOCATION_KEY
    const [cityInput, setCityInput] = useState('')
    const [CityInputIndia, setIndiaCity] = useState([])

    const [cityData, setCityData] = useState([])

    useEffect(() => {
        if (cityInput.length < 2) return

        const timeOut = setTimeout(() => {
            fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${cityInput}&apiKey=${locationKey}`).then((res) => res.json()).then((res) => setCityData(res.features)).catch((err) => console.log('error on city fetch'))
        }, 0)
        return () => clearTimeout(timeOut)


    }, [cityInput])

    useEffect(() => {
        if (Array.isArray(cityData) && cityData.length > 0) {
            const data = cityData.filter((item) => item.properties.country === "India"
            )
            setIndiaCity(data)
        }
    }, [cityData])

    // useEffect(() => {
    //     console.log(CityInputIndia)
    // }, [CityInputIndia])


    // ----------------------------------------------location-box----------------------------------------------------
    const [isVisible, setIsVisible] = useState(false);
    const divRef = useRef(null);

    const handleDivClick = () => {
        setIsVisible(true);
    };

    const handleOutsideClick = (event) => {
        // console.log(divRef)
        if (divRef.current && !divRef.current.contains(event.target)) {
            setIsVisible(false);
            // console.log(event.target)
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick, true);
        return () => {
            document.removeEventListener('click', handleOutsideClick, true);
        };
    }, []);


    // -------------------------------------------------------------end----------------------------------------------------
    // -----------------------------------------------------set geolocation------------------------------------

    const dispatch = useDispatch()
    const cityLocationHandler = (item) => {
        const long = item?.properties?.lon
        const lat = item?.properties?.lat
        const city = item?.properties?.formatted
        dispatch(addLocation({ long, lat, city }))
    }


    const myCity = useSelector(store => store.location.city)
    // console.log(myCity)
    useEffect(() => {
        setIsVisible(false)
    }, [myCity])


    const [userCoordinates, setUserCoordinates] = useState({
        long: null,
        lat: null
    })
    const [geoCity, setGeocity] = useState(null)

    const currentLocationHandler = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition)
        }
        else {
            alert('Location is not Supported in your system')
        }
    }

    const showPosition = (position) => {
        const coordinates = {
            long: position?.coords?.longitude,
            lat: position?.coords?.latitude
        };
        // console.log('hello2')
        if (userCoordinates !== coordinates) setUserCoordinates(coordinates)
    }

    useEffect(() => {
        if (userCoordinates.lat && userCoordinates.long) {

            fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${userCoordinates.lat}&lon=${userCoordinates.long}&limit=1&appid=${process.env.REACT_APP_CITYAPI_KEY}`).then((res) => res.json()).then((res) => setGeocity(res)).catch((err) => console.log('err in city geolocation'))
        }
    }, [userCoordinates])

    useEffect(() => {
        if (geoCity) {

            const city = geoCity[0]?.name + ',' + geoCity[0]?.state
            dispatch(addLocation({ city, long: userCoordinates.long, lat: userCoordinates.lat }))
            // console.log(city)
        }
    }, [geoCity])
    return (
        <header className='shadow-md md:shadow-slate-200'>

            <div className=" max-w-[1200px] mx-auto sm:p-4 p-3 bg-pink-600  md:bg-white flex justify-between items-center">

                <div className='flex gap-4 items-center'>

                    <h1 className='text-3xl font-extrabold text-white md:text-pink-500  font-logo'>Foodie</h1>

                    {/* <div className=' relative '> */}

                    <div onClick={handleDivClick} className='relative  cursor-pointer text-sm flex items-center gap-1 group'  >
                        <div className='md:text-text-gray text-white'>
                            <IoLocationOutline className='' />
                        </div>
                        <div className='md:text-text-gray text-white text-[13px] font-medium font-gilory'>
                            <p>Select location</p>
                            <p className='text-[12px] font-semibold'>{myCity}</p>
                        </div>

                        <div ref={divRef} className={`border-solid border-[1px] overflow-hidden top-[56px] ${isVisible ? 'block' : 'hidden'} rounded-md w-[230px] z-10 bg-white absolute `}>
                            <div onClick={currentLocationHandler} className='bg-red-400 rounded-t-md p-3 text-white flex items-center gap-1'>
                                <IoLocationOutline className='' />
                                Use current location
                            </div>
                            <div className={`${isVisible ? '' : 'rounded-b-md'} p-1 border-solid border-b-[1px] `}>
                                <input onChange={(e) => setCityInput(e.target.value)} value={cityInput} className='border-none p-2 bg-transparent outline-none' type="text" placeholder='Enter your City' />
                            </div>
                            <div className=''>
                                {
                                    CityInputIndia && CityInputIndia.length > 0 && CityInputIndia.map((item, index) => (
                                        <div onClick={() => cityLocationHandler(item)} key={item?.properties?.place_id} className='text-text-gray font-gilory m-2'>
                                            <p className='font-semibold'>{item?.properties?.address_line1}</p>
                                            <p className='font-normal text-sm mb-1'>
                                                {
                                                    item?.properties?.formatted.length > 27 ? <span>{item?.properties?.formatted.slice(0, 27)}...</span> : item?.properties?.formatted
                                                }
                                            </p>
                                            {
                                                CityInputIndia.length > index + 1 && <hr />
                                            }
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    </div>

                    {/* </div> */}

                </div>


                <div className="sm:block hidden">
                    <div className='flex gap-6 items-center text-text-gray'>
                        <div className='hidden font-gilory text-sm md:flex items-center gap-1 bg-theme-pink text-white px-4 py-2 rounded-md'>
                            <BiSolidOffer />
                            Offers
                        </div>

                        <div className='bg-white text-sm p-2 rounded-md w-[270px] flex items-center gap-2 border-solid border-[1px] border-gray-300'>
                            <input className=' border-none outline-none w-[90%] bg-transparent ' type="text" placeholder='Search for Resturants & foods' />
                            <span className='text-lg'>
                                <IoSearch></IoSearch>
                            </span>
                        </div>

                        <div className='text-xl md:text-text-gray text-white'>
                            <FiShoppingCart></FiShoppingCart>
                        </div>
                        <div className='text-xl md:text-text-gray text-white'>
                            <FaRegUser></FaRegUser>
                        </div>
                    </div>
                </div>
                <div className="sm:hidden block text-[35px] text-white">
                    <IoReorderThreeOutline />
                </div>
            </div>

        </header >

    )
}
export default Header
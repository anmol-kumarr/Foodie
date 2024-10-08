import { MdOutlineAccessTime } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { useState } from "react";
const Card = ({ item }) => {
    const url = 'https://media-assets.swiggy.com/'
    const[like,setLike]=useState(false)
    const likeHandler=()=>{
        setLike(!like)
    }
    return (
        <div className=" bg-white max-[640px]:w-[350px] sm:w-[277px] m-2 overflow-hidden shadow-md shadow-black rounded-md">
            <div className="relative">


                <img className="w-full h-52 shadow-inner-bottom" src={url + item.info.cloudinaryImageId} alt="" />
                <span onClick={likeHandler} className="flex h-7 w-7 justify-center items-center absolute top-2 right-2 text-theme-pink p-[0px] text-lg font-thin bg-white rounded-[50%]">

                
                {
                    like===true?<FaHeart></FaHeart>:<FiHeart />
                }
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            <div className="p-4">
                <p className="text-base mb-[-3px] font-gilory font-semibold text-text-gray">
                    {
                        item.info.name.length > 25 ?
                            <>
                                {
                                    item.info.name.slice(0, 25)
                                }
                                ...
                            </>
                            : item.info.name
                    }
                </p>
                <p className="mb-1 font-gilory text-[0.8rem] font-medium text-text-gray">{item.info.areaName}</p>
                <p className="font-gilory text-text-gray font-medium text-sm">
                    {item.info.cuisines[0]}
                    ,
                    {item.info.cuisines[1]}
                </p>
                <p className="font-gilory flex justify-between">
                    <span className="text-sm flex bg-gray-100 rounded-lg px-1 items-center font-medium gap-1 text-text-gray">
                        <MdOutlineAccessTime />
                        {item.info.sla.slaString}

                    </span>
                    <span className="text-sm font-medium text-text-gray">
                        {item.info.costForTwo}
                    </span>

                </p>
            </div>
        </div>
    )
}
export default Card
import { MdOutlineAccessTime } from "react-icons/md"

const SmallCard = ({ item }) => {
    const url = 'https://media-assets.swiggy.com/'
    return (
        <div className=" bg-white w-[95%]  sm:w-[277px] flex sm:flex-col m-2 overflow-hidden shadow-md shadow-black rounded-md">
            <div className="w-[160px] relative sm:w-auto sm:h-auto h-3/4">


                <img className="sm:w-full sm:h-52 h-36 w-full  shadow-inner-bottom" src={url + item.info.cloudinaryImageId} alt="" />
                <div className="absolute sm:block hidden  inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            <div className="p-4 sm:w-auto  w-3/5">
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
                <p className="font-gilory flex flex-wrap pt-2 justify-between">
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
export default SmallCard
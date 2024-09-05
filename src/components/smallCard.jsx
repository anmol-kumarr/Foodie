import { MdOutlineAccessTime } from "react-icons/md"

const SmallCard = ({ item }) => {
    const url = 'https://media-assets.swiggy.com/'
    return (
        <div className=" bg-white w-[277px] m-2 overflow-hidden shadow-md shadow-black rounded-md">
            <div className="relative">


                <img className="w-full h-52 shadow-inner-bottom" src={url + item.info.cloudinaryImageId} alt="" />
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
export default SmallCard
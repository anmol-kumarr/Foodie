const Card = ({ item }) => {
    const url = 'https://media-assets.swiggy.com/'
    return (
        <div className="w-56 bg-slate-50 rounded-md overflow-hidden">
            <div className="w-56">
                <img className="w-56 h-40" src={url + item.info.cloudinaryImageId} alt="" />
            </div>
            <div className="p-2">
                <p className="font-gilory font-semibold text-text-gray">
                    {
                        item.info.name.length > 25 ?
                            <>
                                {
                                    item.info.name.slice(0,25)
                                }
                                ...
                            </>
                            : item.info.name
                    }
                </p>
                <p className="font-gilory text-[13px] font-normal">{item.info.areaName}</p>
                <p>
                    {item.info.cuisines[0]}
                    {item.info.cuisines[1]}
                </p>
                <p>
                    <span>
                        {item.info.sla.slaString}
                    </span>
                    <p>
                        {item.info.costForTwo}
                    </p>

                </p>
            </div>
        </div>
    )
}
export default Card
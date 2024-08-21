import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export const ImageCard = ({ item }) => {
    // console.log(item)
    const url = 'https://media-assets.swiggy.com/'
    const navigate = useNavigate()
    const location = useSelector(store => store.location.city)
    const city = location.split(',', 1)

    // console.log(city)
    const foodItemHandler = (id) => {
        // console.log(id)

        if (item.entityId.length < 6) {
            navigate(`/${city}/${item.description}/${item.entityId}`)
            // console.log(item.entityId)
        }
        else {

            const collectionEntity = item.entityId.split('=', 2)
            const collectionId = collectionEntity[1].split('&', 1)
            // console.log(collectionId)

            navigate(`/${city}/${item.description}/${collectionId}`)
        }


    }
    return (
        <div onClick={() => foodItemHandler(item.id)} className="h-[148px] flex justify-center rounded-md items-center bg-white w-[158px] shadow-xl shadow-text mx-2">
            <img className="h-[130px] w-[110px]" src={url + item.imageId} alt="" />
        </div>
    )
}
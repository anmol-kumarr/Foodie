import { useParams } from "react-router-dom"
import Header from "../components/header"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Card from "../components/card"

const Collection = () => {
    const [collectionData, setCollectionData] = useState([])
    const { city, id, collection } = useParams()
    // console.log(collection, id)
    const { long, lat } = useSelector(store => store.location)
    // console.log(long, lat)
    // const option = {
    //     method: 'get',
    // }

    useEffect(() => {
        fetch(`https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&collection=${id}&tags=layout_CCS_${collection}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`).then((res) => res.json()).then((res) => setCollectionData(res)).catch((err) => console.log(err))
    }, [long])
    console.log(collectionData)
    // https://crossorigin.me
    // https://proxy.cors.sh/
    // https://foodfire.onrender.com/api/restaurants?lat=25.59080&lng=85.13480&page_type=DESKTOP_WEB_LISTING
    return (
        <div>
            <Header></Header>
            <div className="mt-1 bg-slate-50">

                <div className="max-w-[1200px] mx-auto pt-5" >

                    <div>
                        <h1 className="font-gilory text-2xl  font-semibold text-text-gray">{collection}</h1>
                        <div>
                            {
                                collectionData && collectionData.splice(0, 3).map((item) => (
                                    <Card item={item}></Card>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Collection
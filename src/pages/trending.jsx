import { useEffect, useState } from "react"
// import useFetchHomeData from "../hooks/useFetchHomeData"
import Card from "../components/card"
import { useSelector } from "react-redux"
import BreedCrumber from "../components/breedCrumber"
import useFetchHomeData from "../hooks/useFetchHomeData"

const Trending = () => {
    const data=useFetchHomeData()
    const trending=data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // const data = useSelector(store => store.showData.trending)
    // console.log(data)

    // const [trending, setTrending] = useState(null)

    // useEffect(() => {
        // setTrending(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // }, [data])

    // console.log(trending)
    return (
        <div className="bg-theme-gray">
            <h1 className="font-gilory text-text-gray font-bold text-3xl px-5 py-3">Trending Now</h1>
            <BreedCrumber></BreedCrumber>
            <div className="max-w-[1200px] mx-auto flex justify-center flex-wrap py-5 ">
                {
                    trending && Array.isArray(trending) ? (
                        <>
                            {
                                trending.map((item) => (
                                    <Card key={item.info.id} item={item}></Card>
                                ))
                            }
                        </>
                    ) : (
                        <>

                        </>
                    )
                }
            </div>
        </div>
    )
}
export default Trending
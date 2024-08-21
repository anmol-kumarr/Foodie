import Card from "../components/card"
import CarouselDiv from "../components/carousel"
import Header from "../components/header"
import useFetchHomeData from "../hooks/useFetchHomeData"

const Home = () => {
    const data = useFetchHomeData()
    // console.log(data)
    const carouselData = data?.data?.cards[0]?.card?.card?.imageGridCards?.info
    const trending=data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    console.log(trending)
    return (
        <div className="overflow-hidden">

            <Header></Header>
            <div>
                <div className="">
                    <div className="bg-green-500 p-5">
                        <CarouselDiv data={carouselData}></CarouselDiv>
                    </div>

                    <div className="max-w-[1000px] mx-auto flex  flex-wrap justify-center gap-6 ">
                        {
                            trending&&trending.map((item)=>(
                                <Card key={item.info.id} item={item}></Card>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Home
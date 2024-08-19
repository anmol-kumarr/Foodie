import CarouselDiv from "../components/carousel"
import Header from "../components/header"
import Scrollbar from "../components/scroller"
import useFetchHomeData from "../hooks/useFetchHomeData"

const Home = () => {
    const data = useFetchHomeData()
    // console.log(data)
    const carouselData=data?.data?.cards[0]?.card?.card?.imageGridCards?.info
    // console.log(carouselData)
    return (
        <div className="overflow-hidden">

            <Header></Header>
            <div>
                <div className="bg-green-500 h-[100vh]">
                    <div>

                        {/* <CarouselDiv data={carouselData}></CarouselDiv> */}
                        <Scrollbar data={carouselData}></Scrollbar>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Home
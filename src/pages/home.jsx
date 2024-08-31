import Card from "../components/card"
import CarouselDiv from "../components/carousel"
import Header from "../components/header"
import TrendingCarouselDiv from "../components/home/trendingCarousel"
import MobileNav from "../components/mobileNav"
import useFetchHomeData from "../hooks/useFetchHomeData"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Home = () => {

    const data = useFetchHomeData()
    // console.log(data)
    const carouselData = data?.data?.cards[0]?.card?.card?.imageGridCards?.info
    const trending = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // console.log(trending)
    return (
        <div className="overflow-hidden relative">

            <Header></Header>
            <div>
                <div className="">
                    <div className="bg-theme-green p-5">
                        <CarouselDiv data={carouselData}></CarouselDiv>
                    </div>
                    <div className="bg-theme-gray">

                        <div className="max-w-[1200px] mx-auto flex   flex-wrap justify-center gap-6 ">
                            {
                                <TrendingCarouselDiv data={trending}></TrendingCarouselDiv>
                            

                            }
                        </div>
                    </div>
                </div>
            </div>
            <MobileNav></MobileNav>
        </div >

    )
}
export default Home
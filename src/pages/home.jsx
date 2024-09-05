import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import CarouselDiv from "../components/carousel"
import Offer from "../components/home/offer"
import TrendingCarouselDiv from "../components/home/trendingCarousel"
import useFetchHomeData from "../hooks/useFetchHomeData"
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import SmallCard from "../components/smallCard";
const Home = () => {

    const data = useFetchHomeData()
    const navigate = useNavigate()
    // console.log(data)
    const carouselData = data?.data?.cards[0]?.card?.card?.imageGridCards?.info
    const trending = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    const  resutrantsList=data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // console.log(resutrantsList)
    return (
        <div className="overflow-hidden relative">

            <div>
                <div className="">
                    <div className="bg-theme-green p-5">
                        <CarouselDiv data={carouselData}></CarouselDiv>
                    </div>

                    <Offer></Offer>
                    <div className="bg-theme-gray -mt-2 ">
                        <div className="max-w-[1250px] mx-auto gap-6 ">
                            <div className="max-w-[1200px] mt-4 p-2 mx-auto flex justify-between items-center">
                                <h1 className="text-left text-text-gray text-2xl font-semibold font-gilory">Trending Now</h1>

                                <span onClick={() => navigate('/trending now')} className=" cursor-pointer text-theme-pink font-gilory font-semibold text-sm flex  justify-center items-center">
                                    View All
                                    <MdKeyboardDoubleArrowRight />
                                </span>

                            </div>
                            {
                                <TrendingCarouselDiv data={trending}></TrendingCarouselDiv>
                            }
                        </div>

                        <div className="max-w-[1200px] mx-auto">

                            <div className="max-w-[1200px] mt-4 p-2 mx-auto flex justify-between items-center">
                                <h1 className="text-left text-text-gray text-2xl font-semibold font-gilory">Most Popular</h1>

                                <span onClick={() => navigate('/trending now')} className=" cursor-pointer text-theme-pink font-gilory font-semibold text-sm flex  justify-center items-center">
                                    View All
                                    <MdKeyboardDoubleArrowRight />
                                </span>

                            </div>
                            <div className="flex flex-wrap justify-center items-center">
                                {
                                    resutrantsList&&resutrantsList.length>0?(
                                        resutrantsList.map((item)=>(
                                            <SmallCard key={item.info.id} item={item}></SmallCard>
                                        ))
                                    ):(
                                        <>
                                        </>
                                    )
                                }
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        
        </div >

    )
}
export default Home
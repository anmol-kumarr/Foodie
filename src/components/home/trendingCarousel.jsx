import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import { useRef} from "react";
import { ShimmerSimpleGallery} from "react-shimmer-effects";
import Card from "../card";
const TrendingCarouselDiv = ({ data }) => {

    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -250, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 250, behavior: 'smooth' });
        }
    };
    return (
        <div className="p-4 lg:max-w-[900px] sm:max-w-[600px] min-[350px]:max-w-[300px] xl:max-w-[1250px] mx-auto relative">
            <div className="overflow-hidden">
                <button
                    onClick={scrollLeft}
                    className="shadow-md z-30 absolute left-[10px] top-[50%] text-sm  p-2  transform  bg-white text-text-gray  rounded-[200%]"
                >
                    <div>
                        <MdArrowBackIosNew ></MdArrowBackIosNew>
                    </div>
                </button>
                <div
                    ref={carouselRef}
                    className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
                >
                    {data ? data && data.map((item) => (
                        <div className="">

                            <Card key={item.info.id} item={item}></Card>
                        </div>
                    )) :
                        <>

                            <ShimmerSimpleGallery card imageHeight={300} caption />
                        </>
                    }

                </div>
                <button
                    onClick={scrollRight}
                    className="shadow-md absolute right-[10px] z-30 top-1/2 text-sm bg-white text-text-gray p-2 rounded-full"
                >
                    <div>
                        <MdOutlineArrowForwardIos></MdOutlineArrowForwardIos>
                    </div>
                </button>
            </div>


        </div>
    )
}
export default TrendingCarouselDiv
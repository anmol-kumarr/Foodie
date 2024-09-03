import { useRef } from "react";
import offerone from '../../assets/offer1-Photoroom.png';
import offertwo from '../../assets/offer2-Photoroom.png';
import offerthree from '../../assets/offer4-Photoroom.png';
import offerfour from '../../assets/offer5-Photoroom.png';
import offerfive from '../../assets/offer6-Photoroom.png';
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

const Offer = () => {
    const OfferData = [
        { img: offerone },
        { img: offertwo },
        { img: offerthree },
        { img: offerfour },
        { img: offerfive }
    ];

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
        <div className="p-4 lg:max-w-[900px] sm:max-w-[600px] min-[350px]:max-w-[300px] xl:max-w-[1200px] mx-auto relative">
            <div className="overflow-hidden">
                <button
                    onClick={scrollLeft}
                    className="shadow-md shadow-slate-950 absolute left-[10px] top-[50%] transform -translate-y-1/2 text-sm p-2 bg-white text-gray-500 rounded-full"
                >
                    <MdArrowBackIosNew />
                </button>
                <div
                    ref={carouselRef}
                    className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
                >
                    {OfferData.map((item, index) => (
                        <div key={index} className="overflow-hidden flex-shrink-0 h-[150px] w-[275px] mx-2 rounded-lg snap-center">
                            <img className="w-full h-full" src={item.img} alt={`Offer ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <button
                    onClick={scrollRight}
                    className="shadow-md shadow-slate-700 absolute right-[10px] top-1/2 transform -translate-y-1/2 text-sm bg-white text-gray-500 p-2 rounded-full"
                >
                    <MdOutlineArrowForwardIos />
                </button>
            </div>
        </div>
    );
}

export default Offer;

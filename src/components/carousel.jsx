import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import {ImageCard} from "./home/imgCard"
import ReactSimplyCarousel from 'react-simply-carousel';
import { useState } from "react";
import { ShimmerThumbnail } from "react-shimmer-effects";
const CarouselDiv = ({ data }) => {
    // console.log(data)
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
        <div className="max-w-[1000px] mx-auto relative">

            <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={8}
                itemsToScroll={1}
                infinite={true}

                containerProps={
                    {
                        style: {
                            gap: '20px'
                        }
                    }
                }
                forwardBtnProps={{

                    style: {
                        position: "absolute",
                        right: '-1%',
                        bottom: '50%',
                        top: '50%',
                        alignSelf: 'center',
                        zIndex: '10',
                        // alignSelf: 'center',
                        boxShadow: '0px 0px 30px black',
                        background: 'white',
                        border: 'none',
                        color: 'rgba(2, 6, 12, 0.75)',
                        cursor: 'pointer',
                        fontSize: '1.03rem',
                        borderRadius: '50%',
                        // height:20,
                        lineHeight: 1,
                        textAlign: 'center',

                        padding: '5px',
                
                    },
                    children: <span><MdOutlineArrowForwardIos></MdOutlineArrowForwardIos></span>,
                }}
                backwardBtnProps={{

                    style: {
                        position: "absolute",
                        left: '-4px',
                        bottom: '50%',
                        top: '50%',
                        zIndex: '10',
                        alignSelf: 'center',
                        boxShadow: '0px 0px 30px black',
                        background: 'white',
                        border: 'none',
                        color: 'rgba(2, 6, 12, 0.75)',
                        cursor: 'pointer',
                        fontSize: '1.03rem',
                        borderRadius: '50%',
                        // height:20,
                        lineHeight: 1,
                        textAlign: 'center',

                        padding: '5px',

                    },
                    children: <span><MdArrowBackIosNew></MdArrowBackIosNew></span>,
                }}
                responsiveProps={[
                    {

                        itemsToShow: 8,
                        itemsToScroll: 3,
                        minWidth: 768,

                    },
                ]}
                speed={400}
                easing="linear"

            >

                {data ? data && data.map((item) => (
                    <ImageCard  key={item.id} item={item}></ImageCard>
                )) :
                    <div className="flex gap-4 p-2 ">
                        <div className="h-[148px] w-[158px] rounded-md">
                            <ShimmerThumbnail height={148} width={158} />
                        </div>
                        <div className="h-[148px] w-[158px] rounded-md">
                            <ShimmerThumbnail height={148} width={158} />
                        </div>
                        <div className="h-[148px] w-[158px] rounded-md">
                            <ShimmerThumbnail height={148} width={158} />
                        </div>
                        <div className="h-[148px] w-[158px] rounded-md">
                            <ShimmerThumbnail height={148} width={158} />
                        </div>
                        <div className="h-[148px] w-[158px] rounded-md">
                            <ShimmerThumbnail height={148} width={158} />
                        </div>
                        <div className="h-[148px] w-[158px] rounded-md">
                            <ShimmerThumbnail height={148} width={158} />
                        </div>
                        <div className="h-[148px] w-[158px] rounded-md">
                            <ShimmerThumbnail height={148} width={158} />
                        </div>


                    </div>

                }





            </ReactSimplyCarousel>


        </div>
    )
}
export default CarouselDiv
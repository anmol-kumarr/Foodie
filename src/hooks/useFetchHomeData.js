import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addHome, addTrending } from "../utils/showData"

const useFetchHomeData=()=>{
    const {lat,long}=useSelector(store=>store.location)
    const[homePageData,setHomePageData]=useState([])
    const dispatch=useDispatch()
    const url=`https://foodfire.onrender.com/api/restaurants?lat=${lat}&lng=${long}&page_type=DESKTOP_WEB_LISTING`
    useEffect(()=>{
        fetch(url).then((res)=>res.json()).then((res)=>setHomePageData(res)).catch((err)=>console.log(err))
    },[long,lat])
    dispatch(addTrending(homePageData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants))
    return homePageData;
}
export default useFetchHomeData
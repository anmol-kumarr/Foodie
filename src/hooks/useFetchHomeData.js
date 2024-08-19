import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const useFetchHomeData=()=>{
    const {lat,long}=useSelector(store=>store.location)
    const[homePageData,setHomePageData]=useState([])
    const url=`https://foodfire.onrender.com/api/restaurants?lat=${lat}&lng=${long}&page_type=DESKTOP_WEB_LISTING`
    useEffect(()=>{
        fetch(url).then((res)=>res.json()).then((res)=>setHomePageData(res)).catch((err)=>console.log(err))
    },[long,lat])
    return homePageData;
}
export default useFetchHomeData
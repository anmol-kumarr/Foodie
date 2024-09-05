import { Link, useLocation } from "react-router-dom"
import { MdKeyboardArrowRight } from "react-icons/md";
const BreedCrumber = () => {
    const location = useLocation()
    const pageLocation = location.pathname.split('/').filter(x => x)
    // console.log(pageLocation)
    let breedCrumberPath=''
    return (
        <div className="mx-7 flex items-center font-gilory text-text-gray font-medium">
            <Link to='/'>Home</Link>
            {
                pageLocation.map((item,index)=>{
                    let replacedName=item.replace('%20',' ')
                    breedCrumberPath +=`/${replacedName}`
                    let isLast=breedCrumberPath.length-1
                    return isLast ? <span className="flex items-center font-gilory" key={index}><MdKeyboardArrowRight className="text-xl" />{replacedName}</span> : <span key={index}><Link to={breedCrumberPath}>{`/${replacedName}`}</Link></span>
                })
            }
        </div>
    )
}
export default BreedCrumber
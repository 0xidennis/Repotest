import Custom from "../card/Custom"
import CustomOne from "../card/CustomOne"
import Upcoming from "../card/Upcoming"
import './Topcards.css'

const Topcards = () => {
  return (
    <div className="top">
     <Upcoming/>
     <Custom/>
     <CustomOne/>
    </div>
  )
}

export default Topcards
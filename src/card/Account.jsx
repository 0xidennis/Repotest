import './Account.css'
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 
const Account = () => {
  return (
    <div>
         <div className="account-dropdown">
      <div className="avatar">DW</div>
      <div className="account-info">
        <p className="account-name">Dlex Designs</p>
        <p className="account-role">general team</p>
      </div>
      <FaChevronUp className="dropup-icon" size={10}/>
      <FaChevronDown className="dropdown-icon" size={10}/>
    
    </div>
    </div>
  )
}

export default Account
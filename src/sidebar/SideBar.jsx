import union from '../assets/Logo/Union.png'
import Account from '../card/Account'
import { FaChartPie } from "react-icons/fa";
import './SideBar.css'
import Storage from '../card/Storage';
import UserProfile from '../card/UserProfile';
const SideBar = () => {
  return (
    <div className='side'>
     <div className='logo'>
        <img src={union} alt="" />

     </div>
     <hr />
     <Account/>
     <div className="dashboard-item">
      <FaChartPie className="dashboard-icon" />
      <span className="dashboard-text">Dashboard</span>
    </div>
     <div className="dashboard-item">
      <FaChartPie className="dashboard-icon" />
      <span className="dashboard-text">Overview</span>
    </div>
     <div className="dashboard-item">
      <FaChartPie className="dashboard-icon" />
      <span className="dashboard-text">Chat</span>
    </div>
     <div className="dashboard-item">
      <FaChartPie className="dashboard-icon" />
      <span className="dashboard-text">Team</span>
    </div>

    <div className='short'>
        <h1>SHORTCUT</h1>
        <div className="dashboard-item">
      <FaChartPie className="dashboard-icon" />
      <span className="dashboard-text">Dashboard</span>
    </div>
        <div className="dashboard-item">
      <FaChartPie className="dashboard-icon" />
      <span className="dashboard-text">Dashboard</span>
    </div>
        <div className="dashboard-item">
      <FaChartPie className="dashboard-icon" />
      <span className="dashboard-text">Dashboard</span>
    </div>
    </div>
    <Storage/>
    <UserProfile/>
    </div>
  )
}

export default SideBar
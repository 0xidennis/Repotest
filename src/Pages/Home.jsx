import './Home.css'
import SideBar from '../sidebar/SideBar'
import ProgressDashboard from '../Progressbar/ProgressDashboard'

const Home = () => {
  return (
    <div className='home'>
        <SideBar/>
        <ProgressDashboard/>
    </div>
  )
}

export default Home
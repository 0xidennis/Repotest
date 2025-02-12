import MiddleCards from './MiddleCards'
import './Progressbar.css'
import Topcards from './Topcards'

const ProgressDashboard = () => {
  return (
    <div className='progress'>
        <div>
            <h1>
            Progress Dashboard
            </h1>
            <Topcards/>
            <MiddleCards/>
        </div>
    </div>
  )
}

export default ProgressDashboard
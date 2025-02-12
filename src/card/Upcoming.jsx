import './Upcoming.css'
import { FiClock } from 'react-icons/fi';
import img from '../assets/images/img.png'
import { FaFileImage } from 'react-icons/fa';
const Upcoming = () => {
  return (
    <div className="exam-card">
      <div className="exam-header">
        {/* <FiClock className="clock-icon" /> */}
        <span className="deadline">DEADLINE 12:00</span>
      </div>
      <h2 className="exam-title">Exam - Unit 5</h2>
      <p className="exam-subtitle">Spanish for beginners</p>
      <div className="participants">
        <img src={img} alt="Participant 1" className="participant-avatar" />
        <img src={img} alt="Participant 2" className="participant-avatar" />
        <img src={img} alt="Participant 3" className="participant-avatar" />
        <div className="more-participants">+99</div>
      </div>
    </div>
  )
}

export default Upcoming
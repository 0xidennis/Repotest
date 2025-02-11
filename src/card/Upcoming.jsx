import './Upcoming.css'
import { FiClock } from 'react-icons/fi';
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
        <img src="/path-to-avatar1.jpg" alt="Participant 1" className="participant-avatar" />
        <img src="/path-to-avatar2.jpg" alt="Participant 2" className="participant-avatar" />
        <img src="/path-to-avatar3.jpg" alt="Participant 3" className="participant-avatar" />
        <div className="more-participants">+99</div>
      </div>
    </div>
  )
}

export default Upcoming
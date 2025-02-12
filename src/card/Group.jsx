import './Group.css'
import { FiBell, FiChevronRight } from 'react-icons/fi';

const Group = () => {
  return (
    <div className="group-info-card">
    <div className="group-header">
      <h2 className="group-title">Group info</h2>
      <FiBell className="notification-icon" />
    </div>
    <p className="group-subtitle">13 students in the group</p>

    <div className="group-homework">
      <div>
        <h3 className="homework-titl">Group homework</h3>
        <p className="homework-subtitl">4 students from your group online now</p>
      </div>
      <FiChevronRight className="chevron-icon" />
    </div>

    <div className="lesson-info">
      <h3 className="lesson-title">Today's lesson</h3>
      <p className="lesson-subtitle">unit 6 - Article</p>
    </div>
  </div>
  )
}

export default Group
import { FiCheckCircle } from 'react-icons/fi';

const CustomOne = () => {
  return (
    <div className="homewor-card">
       <div className="homework-header">
         <FiCheckCircle className="check-ico" /> 
         <h2 className="homework-title">Reading</h2>
       </div>
       <p className="homework-subtitle">24 words per week</p>
       <p className="homework-time">2h ago</p>
     </div>
  )
}

export default CustomOne
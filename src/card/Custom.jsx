import React from 'react'
import { FiCheckCircle } from 'react-icons/fi';
import './Custom.css'
const Custom = () => {
  return (
    <div className="homework-card">
    <div className="homework-header">
      <FiCheckCircle className="check-icon" /> 
      <h2 className="homework-title">Homework</h2>
    </div>
    <p className="homework-subtitle">For today's lesson</p>
    <p className="homework-time">35 MIN AGO</p>
  </div>
  )
}

export default Custom
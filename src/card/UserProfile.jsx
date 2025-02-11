import React, { useState } from 'react';
import img from '../assets/images/img.png'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import './UserProfile.css'
const UserProfile = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="user-profile" onClick={toggleDropdown}>
    <img src={img} alt="User Avatar" className="avatar" />
    <span className="user-name">Jane Smith</span>
    {/* {isOpen ? <FiChevronUp className="dropdown-icon" /> : <FiChevronDown className="dropdown-icon" />} */}
  </div>
  )
}

export default UserProfile
import './Storage.css'
import { FiBox } from 'react-icons/fi';
const Storage = () => {
  return (
    <div className="storage-card">
    <div className="storage-header">
      <span className="storage-title">
        <FiBox className="storage-icon" /> Storage
      </span>
      <button className="upgrade-button">Upgrade</button>
    </div>
    <div className="storage-usage">
      <strong>3.4 GB</strong> of 15 GB
    </div>
    <div className="storage-bar">
      <div className="storage-bar-filled" style={{ width: '22.67%' }}></div>
    </div>
  </div>
  )
}

export default Storage
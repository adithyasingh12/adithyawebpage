import React from 'react';

const Modal = ({ show, onClose, title, content, logo }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {logo && <img src={logo} alt={`${title} logo`} style={{ maxWidth: '50px', marginBottom: '1rem' }} />} {/* Display the logo */}
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;

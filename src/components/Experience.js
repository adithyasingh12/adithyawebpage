import React, { useState } from 'react';
import Modal from './Modal';

const Experience = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '', logo: null });

  const handleOpenModal = (title, content, logo) => {
    setModalContent({ title, content, logo });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        <div className="experience-item" onClick={() => handleOpenModal('Company A', 'Details about your role at Company A', '/sparcsymbol.png')}>
          <img src="/sparcsymbol.png" alt="SPARC logo" className="company-logo" />
          <div>
            <h3>SPARC Foundation</h3>
            <p>Full-Stack Development Intern - July 2024 - August 2024</p>
          </div>
        </div>
        <div className="experience-item" onClick={() => handleOpenModal('Company B', 'Details about your role at Company B', '/psusymbol.png')}>
          <img src="/psusymbol.png" alt="Penn State Health logo" className="company-logo" />
          <div>
            <h3>Penn State Health</h3>
            <p>Full-Stack Development Intern - June 2024 - August 2024</p>
          </div>
        </div>
        <div className="experience-item" onClick={() => handleOpenModal('Company C', 'Details about your role at Company C', '/doesymbol.png')}>
          <img src="/doesymbol.png" alt="DOE logo" className="company-logo" />
          <div>
            <h3>U.S. Department of Energy</h3>
            <p>Software Development Intern - August 2022 - December 2022</p>
          </div>
        </div>
      </div>

      <Modal
        show={showModal}
        onClose={handleCloseModal}
        title={modalContent.title}
        content={modalContent.content}
        logo={modalContent.logo} // Pass the logo to the modal
      />
    </div>
  );
};

export default Experience;

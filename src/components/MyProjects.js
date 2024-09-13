import React from 'react';

const MyProjects = () => {
  return (
    <section className="projects" id="projects">
      <h2 style={{ color: '#00AEEF', fontSize: '2.5rem' }}>My Projects</h2>
      <div className="projects-list">
        <div className="projects-item">
          <img src="/stocksymbol.png" alt="Stock Project" className="project-logo" />
          <div>
            <h3>Stock Price Forecasting</h3>
            <p>Uses Time Series Analysis to perform calculations on historical stock data and gives future predictions.</p>
          </div>
        </div>
        <div className="projects-item">
          <img src="/resumesymbol.png" alt="Resume Project" className="project-logo" />
          <div>
            <h3>Resume Parser and Suggestions Tool</h3>
            <p>Uses data extraction and text processing to read resumes and give improvement suggestions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;

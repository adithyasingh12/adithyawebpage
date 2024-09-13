import React from 'react';

const Expertise = () => {
  const icons = [
    '/angularsymbol.png',
    '/awssymbol.png',
    '/firebasesymbol.png',
    '/javasymbol.png',
    '/nodejssymbol.png',
    '/pythonsymbol.png',
    '/reactsymbol.png',
    '/rubysymbol.png',
    '/sqlsymbol.png',
    '/swiftsymbol.png',
    '/htmlsymbol.png',
    '/mongosymbol.png',
  ];

  return (
    <section className="expertise" id="expertise">
      <div className="content">
        <h2>Expertise</h2>

        {/* Quote Section */}
        <div className="quote-section">
          <p>
            <em>“Accomplishment will prove to be a journey, not a destination.”</em>
            <br />
            <strong>— Dwight D. Eisenhower</strong>
          </p>
        </div>

        {/* Icons Section */}
        <div className="icons-container">
          {icons.map((icon, index) => (
            <div className="icon-box" key={index}>
              <img src={icon} alt={`Icon ${index + 1}`} className="icon-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;

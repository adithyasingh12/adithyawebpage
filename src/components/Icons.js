import React from 'react';

const Icons = () => {
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
    '/mongosymbol.png'
  ];

  return (
    <section className="expertise" id="expertise">
      <h2>Expertise</h2>
      <div className="icons-container">
        {icons.map((icon, index) => (
          <div className="icon-box" key={index}>
            <img src={icon} alt={`Icon ${index + 1}`} className="icon-image" />
          </div>
        ))}
      </div>

      {/* Dwight D. Eisenhower Quote */}
      <div className="quote-container">
        <blockquote>
          <p>“Accomplishment will prove to be a journey, not a destination.”</p>
          <footer>– Dwight D. Eisenhower</footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Icons;

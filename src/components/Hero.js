import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Hi there!<br />
          I'm <span style={{ color: '#00AEEF' }}>Adithya</span>!
        </h1>
        <p>Using modern software solutions for modern problems.</p>
        <a href="#projects" className="btn">See My Work</a>
      </div>
      <div className="hero-image">
        <img src="/adithyapicture.png" alt="Adithya" />
      </div>
    </section>
  );
};

export default Hero;

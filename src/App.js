import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Icons from './components/Icons';
import MyProjects from './components/MyProjects';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      
      {/* Image between About Me and Experience */}
      <div className="between-sections">
        <img src="/techpic1.png" alt="Technology Tree" />
      </div>
      
      <Experience />
      <section className="expertise">
        <Icons />
      </section>
      
      {/* Add techpic2.png image here */}
      <div className="between-expertise-projects">
        <img src="/techpic2.png" alt="Tech" />
      </div>
      
      <MyProjects />
      <Footer />
    </div>
  );
}

export default App;

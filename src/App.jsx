import React from 'react';
import { useState } from 'react';
import "../src/App.css"
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Social from './components/Social';


const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='bg-black text-white min-h-screen '>
      <nav className="bg-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">

          </div>
          <button onClick={toggleNavbar} className="md:hidden">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
          <ul className={`md:flex p-4 md:space-x-5 absolute md:static  bg-black md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? "top-16 left-0 w-full" : "top-[-250px]"}`}>
            <li className="p-2"><a href="#home" className="hover:underline hover:bg-blue-400 transition p-2">Home</a></li>
            <li className="p-2"><a href="#education" className="hover:underline hover:bg-blue-400 transition p-2">Education</a></li>
            <li className="p-2"><a href="#skills" className="hover:underline hover:bg-blue-400 transition p-2" >Skills</a></li>
            <li className="p-2"><a href="#certification" className="hover:underline hover:bg-blue-400 transition p-2">Certification</a></li>
            <li className="p-2"><a href="#project" className="hover:underline hover:bg-blue-400 transition p-2">Projects</a></li>
            <li className="p-2"><a href="#contact" className="hover:underline hover:bg-blue-400 transition p-2">Contact</a></li>
          </ul>
        </div>
      </nav>


      <Home />
      <Education />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
      <Social />
    </div>

  );
}

export default App;

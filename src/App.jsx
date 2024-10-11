import React from 'react';
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { LuTwitter } from "react-icons/lu";
import resume from "../src/images/Resume.pdf";
import "../src/App.css"
const home = new URL("../src/images/profile.jpg", import.meta.url);
const html = new URL("../src/images/html.png", import.meta.url);
const css = new URL("../src/images/css.jpeg", import.meta.url);
const js = new URL("../src/images/js.png" , import.meta.url);
const react = new URL("../src/images/react.png" , import.meta.url);
const sql = new URL("../src/images/sql.jpeg" , import.meta.url);
const mongodb = new URL("../src/images/mongodb.png" , import.meta.url);
const python = new URL("../src/images/ph.png" , import.meta.url);
const framer= new URL('../src/images/framer.jpeg', import.meta.url);
const figma=  new URL("../src/images/figma.png" , import.meta.url);
const express = new URL("../src/images/express.png"  , import.meta.url);


const App = () => {
  return (
    <div className='bg-black text-white min-h-screen '>
      <div className="navbar">
        <nav>
          <ul className="flex text-center justify-center space-x-1 p-4">
            <a href="#home"><li className="hover:underline hover:bg-blue-300 hover:-translate-y-1 transition">Home</li></a>
            <a href="#education"><li className="hover:underline hover:bg-blue-300 hover:-translate-y-1 transition">Education</li></a>
            <a href="#skills"><li className="hover:underline hover:bg-blue-300 hover:-translate-y-1 transition">Skills</li></a>
            <a href="#certification"><li className="hover:underline hover:bg-blue-300 hover:-translate-y-1 transition">Certification</li></a>
            <a href="#project"><li className="hover:underline hover:bg-blue-300 hover:-translate-y-1 transition">Projects</li></a>
            <a href="#contact"><li className="hover:underline hover:bg-blue-300 hover:-translate-y-1 transition">Contact</li></a>
          </ul>
        </nav>
      </div>




      <div className="tittle text-center p-8" id="home">
        <div className="home-image">
          <img src={home} className="mx-auto rounded-full w-72 h-72 hover:scale-[1.1]" alt="Profile" />
        </div>
        <div className="home-content">
          <h1 className="text-4xl font-bold">Hi, it's <span className="text-blue-400">KANNAN</span></h1>
          <h3 className="text-animation text-2xl my-2">I'm a <span className="text-blue-400"></span></h3>
          <p className="my-4">Motivated Full stack developer with a strong foundation in programming principles. Skilled in React and SQL. Passionate about creating efficient applications. Strong problem-solving abilities.</p>
          <div className="btn-group ">
            <a className='btn mr-5 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded' href={resume} download='resume'>Download CV</a>
            <a href="mailto:kannannagappan55@gmail.com" className="btn bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">Hire Me</a>
          </div>
        </div>
      </div>
      <section className="education" id="education">
        <h2 className="heading text-3xl font-serif text-center text-blue-700">Education</h2>
        <section className="education" id="education">
          <div className="max-w-2xl mx-auto p-4 text-center">
            <ul className="space-y-4">
              <li className="bg-black border   p-4 rounded-3xl">
                <h3 className="text-xl font-bold">MCA Pursing</h3>
                <p className="text-gray-400">JJ College of arts and science, 2024</p>
              </li>
              <li className="bg-black border   p-4 rounded-3xl">
                <h3 className="text-xl font-bold">Internship</h3>
                <p className="text-gray-400">NxWEB Company (Software Developer) Intern, 2024</p>
              </li>

              <li className="bg-black border   p-4 rounded-3xl">
                <h3 className="text-xl font-bold">University</h3>
                <p className="text-gray-400">(B.sc CS) JJ College of arts and science Pudukottai, 2023</p>
                <span>CGPA : 8.7</span>
              </li>

              <li className="bg-black border   p-4 rounded-3xl">
                <h3 className="text-xl font-bold">High school</h3>
                <p className="text-gray-400">Government higher secondary school Melaisivapuri

                </p>
              </li>
            </ul>
          </div>
        </section>

      </section>

      <div className='skills mt-5' id='skills'>
        <div className='skill'>
          <h2 className="text-3xl font-serif text-center text-blue-700">Skills</h2>
          <marquee>
            <div className='skills' id='skills'>

              <div className="flex justify-center my-4 w-20 gap-7 rounded-3xl">
                <img src={html} />
                <img src={css} />
                <img src={js}/>
                <img src={react} />
                <img src={sql}/>
                <img src={mongodb} />
                <img src={python}/>
                <img src={framer} />
                <img src={figma}/>
                <img src={express}/>
              </div>
            </div>
          </marquee>
        </div>
      </div>

      <div className="cert mt-5 " id='certification'>
        <h2 className="text-3xl font-serif text-center text-blue-700">Certification</h2>
        <div className="cert" id='certification'>
          <div className=" mx-auto p-7 ">
            <ul className="space-y-4 text-center  flex flex-wrap gap-10 justify-evenly ">
              <li className="p-4 bg-black border rounded-3xl">
                <a href='../src/images/python cert.jpg'target='_blank'> <h3 className="text-xl font-bold">Python Programming</h3></a>
                <p className="text-violet-400 font-mono">Conducted By JJC</p>
              </li>
              <li className="p-4 bg-black border rounded-3xl ">
                <a href='../src/images/cloud cert.jpg'target='_blank'>  <h3 className="text-xl font-bold">Cloud Computing</h3></a>
                <p className="text-violet-400 font-mono">Conducted By JJC</p>
              </li>

              <li className="p-4 bg-black border rounded-3xl">
                <a href='../src/images/Geekster cert.jpg' target='_blank'><h3 className="text-xl font-bold">SQL And Database Management</h3></a>
                <p className="text-violet-400 font-mono">Participated in Geekster</p>
              </li>

              <li className="p-4 bg-black border rounded-3xl">
                <a href='../src/images/Nxweb cert.jpg'target='_blank'>   <h3 className="text-xl font-bold">Software Development</h3></a>
                <p className="text-violet-400 font-mono">Nxweb</p>
              </li>

              <li className="p-4 bg-black border rounded-3xl">
                <a href='../src/images/codealphacert.jpg' target='_blank'> <h3 className="text-xl font-bold">Full Stack Internship</h3></a>
                <p className="text-violet-400 font-mono">CodeAlpha</p>
              </li>

              <li className="p-4 bg-black border rounded-3xl">
                <a href='../src/images/Nexcap cert.jpg' target='_blank'><h3 className="text-xl font-bold">Front-end Development</h3></a>
                <p className="text-violet-400 font-mono">Nexcap</p>
              </li>
              <li className="p-4 bg-black border rounded-3xl">
                <a href='../src/images/Novitech cert.jpg' target='_blank'> <h3 className="text-xl font-bold">Full stack Development</h3></a>
                <p className="text-violet-400 font-mono">Novitech</p>
              </li>

              <li className="p-4 bg-black border rounded-3xl">
                <a href='../src/images/infosys cert.jpg' target='_blank'>   <h3 className="text-xl font-bold">Time Management</h3></a>
                <p className="text-violet-400 font-mono">Infosys</p>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="project mt-5" id='project'>
        <h2 className="text-3xl font-serif text-center text-blue-700 ">Projects</h2>
        <div className="project" id='project'>
          <div className="max-w-1xl mx-auto p-4 ">
            <ul className="space-y-4   flex flex-wrap gap-10 justify-around ">
              <li className="bg-black rounded-2xl border p-4 text-center">
                <h3 className="text-xl font-bold">Password Manager</h3>
                <p> <a href="https://github.com/kannankkking/Password-Manager " target='_blank' className="text-red-400 font-mono">View Project</a></p>
              </li>
              <li className="bg-black rounded-2xl border p-4 text-center">
                <h3 className="text-xl font-bold">Shop Zone Web</h3>
                <p> <a href="https://github.com/kannankkking/ShopZone" className="text-red-400 font-mono">View Project</a></p>
              </li>

              <li className="bg-black rounded-2xl border p-4 text-center">
                <h3 className="text-xl font-bold">Next Web Application</h3>
                <p><a href="https://github.com/kannankkking/NextWeb" className="text-red-400 font-mono">View Project</a></p>
              </li>

              <li className="bg-black rounded-2xl border p-4 text-center">
                <h3 className="text-xl font-bold">Moviflix Clone</h3>
                <p> <a href="https://github.com/kannankkking/MovieFlix" target='_blank' className="text-red-400 font-mono">View Project</a></p>
              </li>

              <li className="bg-black rounded-2xl border p-4 text-center">
                <h3 className="text-xl font-bold">NoteBook-Therapy web</h3>
                <p> <a href="https://github.com/kannankkking/Notebook-therapy" className="text-red-400 font-mono">View Project</a></p>
              </li>

              <li className="bg-black rounded-2xl border p-4 text-center">
                <h3 className="text-xl font-bold">Social Media Platform</h3>
                <p> <a href="https://github.com/kannankkking/CodeAlpha_Project_Social_Media_Platform" className="text-red-400 font-mono">View Project</a></p>
              </li>
              <li className="bg-black rounded-2xl border p-4 text-center">
                <h3 className="text-xl font-bold">Greendan Web</h3>
                <p> <a href="https://github.com/kannankkking/Greendan" className="text-red-400 font-mono">View Project</a></p>
              </li>

              <li className="bg-black rounded-2xl border p-4 text-center">
                <h3 className="text-xl font-bold">Multiplayer Game</h3>
                <p> <a href="https://github.com/kannankkking/CodeAlpha_Project_Multiplayer_Game" className="text-red-400 font-mono">View Project</a></p>
              </li>


            </ul>

          </div>
        </div>

      </div>

      <section className="contact" id="contact">
        <h2 className="text-3xl text-center">Contact <span className="text-blue-400">Me</span></h2>
        <form action="" className="max-w-lg mx-auto p-4">
          <form action="" className="max-w-lg mx-auto p-4">
            <div className="mb-4">
              <label className="block text-gray-300" htmlFor="name">Name</label>
              <input type="text" id="name" className="w-full p-2 bg-gray-700 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300" htmlFor="email">Email</label>
              <input type="email" id="email" className="w-full p-2 bg-gray-700 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300" htmlFor="message">Message</label>
              <textarea id="message" className="w-full p-2 bg-gray-700 rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Send Message</button>
          </form>

        </form>
      </section>

      <footer className="footer text-center p-4 relative top-20">
        <ul className="flex justify-center space-x-1">
          <footer className="footer text-center p-4 ">
            <ul className="flex justify-center space-x-1 font-serif">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#education" className="hover:underline">Education</a></li>
              <li><a href="#skills" className="hover:underline">Skills</a></li>
              <li><a href="#certification" className="hover:underline">Certification</a></li>
              <li><a href="#project" className="hover:underline">Projects</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>

          </footer>

        </ul>
      </footer>
      <div className="social  p-4 flex flex-col text-start relative bottom-72 w-9 gap-4 sticky">
        <a href="https://x.com/kannan__006?t=u7uA3ftscoHm0S-RnfaDrA&s=09" target='_blank'><LuTwitter className='icons inline-block mx-2 ' /></a>
        <a href="https://github.com/kannankkking" target='_blank'><FaGithub className='icons inline-block mx-2' /></a>
        <a href="https://www.linkedin.com/in/kannan-n-78809b287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><CiLinkedin className='icons inline-block mx-2' /></a>
        <a href="https://wa.me/7639564969" target='_blank'><FaWhatsapp className='icons inline-block mx-2' /></a>
      </div>
    </div>

  );
}

export default App;

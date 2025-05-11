import React from 'react'
import resume from "../images/Kannan__Resume.pdf";
const home = new URL("../images/home.jpg", import.meta.url);
import "../App.css"

const Home = () => {
  return (
    <div className="tittle text-center p-8 " id="home">
      <div className="home-image">
        <img src={home} className="mx-auto rounded-full w-72 h-72 hover:scale-[1.1]" alt="Profile" />
      </div>
      <div className="home-content">
        <h1 className="text-4xl font-bold">Hi, it's <span className="text-blue-400">KANNAN</span></h1>
        <h3 className="text-animation text-2xl my-2">I'm a <span className="text-blue-400"></span></h3>
        <p className="my-4">Motivated and dedicated a web developer with a strong foundation in
          programming principles. Skilled in MERN stack (MongoDB, Express.js,
          React.js, Node.js), HTML5, CSS3, TailwindCSS, and Figma. Passionate
          about building efficient, scalable web applications with a focus on user
          experience. Strong problem-solving and collaboration skills, eager to
          contribute to dynamic software development projects.</p>
        <div className="btn-group ">
          <a className='btn mr-5 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded' href={resume} download='resume'>Download CV</a>
          <a href="mailto:kannannagappan55@gmail.com" className="btn bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">Get in Touch</a>
        </div>
      </div>
    </div>
  )
}
export default Home;
import React from 'react'

 const Footer = () => {
  return (
    <footer className="footer text-center p-4 relative top-20 bottom-0">
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
  )
}
export default Footer;
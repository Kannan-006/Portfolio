import React from 'react'
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { LuTwitter } from "react-icons/lu";

 const Social = () => {
  return (
    <div className="social  p-4 flex flex-col text-start relative bottom-72 w-9 gap-4 sticky">
        <a href="https://github.com/Kannan-006" target='_blank'><FaGithub className='icons inline-block mx-1 hover:text-blue-600 text-2xl' /></a>
        <a href="https://x.com/kannan__006?t=u7uA3ftscoHm0S-RnfaDrA&s=09" target='_blank'><LuTwitter className='icons inline-block mx-1 hover:text-blue-600 text-2xl' /></a>
        <a href="https://www.linkedin.com/in/kannan-n-78809b287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><CiLinkedin className='icons inline-block mx-1 hover:text-blue-600 text-2xl' /></a>
        <a href="https://wa.me/7639564969" target='_blank'><FaWhatsapp className='icons inline-block mx-1 hover:text-blue-600 text-2xl' /></a>
      </div>
  
  )
}
export default Social;
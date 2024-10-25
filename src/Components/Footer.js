import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Kunal Verma</h4>
      <h4>Copyright &copy; 2024 KV </h4>
      <div className='footerLinks'>
        <a href="https://github.com/kunalvrm555" target='_blank' rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/kunalvrm555/" target='_blank' rel="noopener noreferrer" ><FaLinkedin /></a>
        <a href='mailTo:kunalvrm555@gmail.com' target='_blank' rel="noopener noreferrer"><GrMail /></a>
        <a href="https://leetcode.com/kunalvrm555/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
      </div>
    </footer>
  )
}

export default Footer
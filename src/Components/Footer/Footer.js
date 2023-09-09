import React from 'react'
import { AiOutlineCopyrightCircle, AiFillLinkedin, AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai'
import './Footer.css'
export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='footer'>
      <div>
        <span className='copyright'><AiOutlineCopyrightCircle /></span>
        <span className='year'>{year} </span>
        <span className='footer-label'>ShopHub</span>
      </div>
      <ul className='social-links'>
        <li><a href="https://www.linkedin.com/in/prabal-a-918315134/" target='_blank' rel="noreferrer" className='social-item social-1'><AiFillLinkedin /></a></li>
        <li> <a href="https://github.com/Prabal2001" target='_blank' rel="noreferrer" className='social-item social-2'><AiFillGithub /></a></li>
        <li><a href="*" target='_blank' rel="noreferrer" className='social-item social-3'><AiFillTwitterCircle /></a></li>
      </ul>
    </footer>
  )
}

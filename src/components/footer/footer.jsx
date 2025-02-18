import React from 'react'
import './footer.css'
import instagram_icon from '../assets/instagram_icon.png'
import pinterest_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
import logo from '../assets/logo12.png'


export default function Footer(){
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img className='footer-sw-logo' src={logo} alt="" />
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Prodcuts</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icon-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={pinterest_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
                <hr />
                <p>Copyright@2025 - All Right Reserved.</p>
            </div>
    </div>
  )
}


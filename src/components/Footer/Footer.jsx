import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import instgram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={instgram_icon} alt="" />
        <img src={facebook_icon} alt="" />
        <img src={twitter_icon} alt="" />
      </div>
      <ul>
        <li>Audio Desciption</li>
        <li>Hepp Center</li>
        <li>Gifts Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Conatct Us</li>
      </ul>
      <p className='copyright-text'>&copy;1998-2025</p>
    </div>
  )
}

export default Footer

import React from 'react'
import './hero.css'
import hand_icon from "../assets/hand_icon.png"
import arrow_icon from "../assets/arrow.png"

export default function Hero() {
  return (
    <div className='hero'>

            <h1>NEW ARRIVALS ONLY</h1>
            <div className='hero-hand-icon'>
            <img src={hand_icon} alt="" />
            </div>
            <p >New</p>
            <p>Collections</p>
            <p>For everyone</p>
            <div className="hero-latest-btn">
                <div>Latest Collections</div>
                <img src={arrow_icon} alt="" />
            </div>


    </div>
  )
}

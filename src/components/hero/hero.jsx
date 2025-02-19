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
            <div >New</div>
            <div>Collections</div>
            <div>For everyone</div>
            <div className="hero-latest-btn">
                <p>Latest Collections</p>
                <img src={arrow_icon} alt="" />
            </div>


    </div>
  )
}

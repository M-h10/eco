import React from 'react'
import hand_icon from '../components/assets/Frontend_Assets/hand_icon.png'
import arrow from '../components/assets/Frontend_Assets/arrow.png'
import heroimg from '../components/assets/Frontend_Assets/hero.jpg'
export const Hero = () => {
  return (
    <div className="hero ">
        
        <div className="hero-left items-center absolute top-10 ">
            <h2 className='flex-1 text-[32px]'>NEW ARRIVALS ONLY</h2><br />
            <div className="hand_icon">
                <p className='text-[25px]'>NEW COLLECTION</p>
            </div>
         
          

        </div>
    </div>
  )
}

export default Hero
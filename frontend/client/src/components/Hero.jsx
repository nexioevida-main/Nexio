import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <div>
            <img
                className="w-full w-40"
                src={assets.hero}
                alt="image"
            />
        </div>
    )
}

export default Hero
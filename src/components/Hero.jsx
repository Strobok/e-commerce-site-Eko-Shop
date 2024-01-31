import React from 'react'
import a2 from '../assets/images/a2.jpg'
import ImgSlider from './ImgSlider.jsx'

const Hero = () => {
  return (
    <div 
      className='flex w-full bg-cover' 
      // style={ mobile ? { backgroundImage: `url(${a2})` }: {}}
    >
      <div className='flex h-[550px] w-full md:w-1/2 py-20 px-8 flex-col justify-center 
                      items-start gap-4 shrink-0 bg-white'>
        <h1 className='self-stretch font-grey-600 px-10'>
          Healthy cutlery, healthy body
        </h1>
        <p className='body-lg text-grey-500 self-stretch mb-3 px-10'>
          Upgrade your dining experience and begin your path to a healthy you right now.
        </p>
        <div className='px-10'>
          <button className="button body-lg text-center text-white hover1">
            Learn More
          </button>
        </div>
      </div>
      <div 
        className='hidden md:flex pr-16 bg-white overflow-hidden'
      >
        <ImgSlider />
      </div>
    </div>
  )
}

export default Hero
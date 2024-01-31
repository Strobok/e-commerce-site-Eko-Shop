import React from 'react'
import { line } from '../assets/icons'
import fg from '../assets/images/fg.png'


const Fg = () => {
  return (
    <div className=' relative bg-primary bg-opacity-95 w-full flex flex-col justify-center items-center'>
      <p className="pt-28 pb-16 px-20 text-white text-center h4">
        Shop guilt-free knowing that our eco-friendly 
        e-commerce platform is committed to reducing 
        environmental impact and promoting sustainable 
        practices in every step of the shopping process
      </p>
      <img className='w-[33%] md:w-[20%] mb-20' src={line} alt="line" />
      <img className='z-[-10] absolute object-cover w-full h-full' src={fg} alt="Img" />

    </div>
  )
}

export default Fg

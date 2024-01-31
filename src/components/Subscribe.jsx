import React from 'react'
import image1004 from '../assets/images/image1004.png'

const Subscribe = () => {
  return (
    <div className='relative w-full h-[580px] flex justify-center items-center'>
      <img src={image1004} alt="Img" 
        className="z-[-10] absolute object-cover w-full h-full" />
      <div>
        <div className="sm:absolute sm:bottom-16 sm:left-16 w-[330px] md:w-[420px] flex shadow-xl p-8 flex-col items-start gap-5 bg-wite rounded-lg bg-white">
          <p className="self-stretch text-grey-600 body-lg-bold">
            Subscribe to our newsletter
          </p>
          <p className="self-stretch text-gray-500 body-md">
            Be the first to know about exclusive offers, eco-tips, and new arrivals!
          </p>
          <label className="flex flex-1 justify-between py-1 px-1 items-center gap-2 border-2 rounded-full border-grey-200 ">
            <input 
              className=" pl-2 w-[75%] flex text-grey-400 focus:outline-none focus:border-white focus:ring-white focus:ring-0 text-md" 
              placeholder='Your e-mail...' 
              type="text" 
              autoComplete="off"
              name="search"/>
            <button className="flex py-1 px-4 justify-center items-center rounded-[40px] bg-primary body-md text-center text-white">
              Subscribe
            </button>   
          </label>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
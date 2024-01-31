import React from 'react'
import { Link } from 'react-router-dom'
import {allData} from '../allData'


const MostWanted = () => {
  const newImages = allData.filter((item) => item.category === 'mostWanted')

  return (
    <div className='flex w-full py-8 px-8 md:py-20 md:px-16 flex-col justify-center items-center gap-10 bg-[#FFEFE5]'>
      <div>
        <h1 className='text-center text-grey-600'>
          Our Most Wanted Products
        </h1>
        <p className="text-center text-grey-500 body-lg">
          Good for environment, good for you
        </p>
      </div>
      <div  className='flex justify-between flex-wrap md:flex-nowrap w-full '>
        { newImages.map((item)=>(
          <div key={item.name} className='w-[50%] md:w-[25%] p-2 '>
            <Link 
             onClick={() => window.scrollTo(0, 0)} 
             to={`/product/:${item.id}`}>
              <img 
                className='object-cover object-bottom w-full mb-2 rounded-md hover1' 
                src={item.src} alt={item.name} />
              <div>
                <p className="self-stretch body-md-bold text-grey-600">
                {item.text}             
                </p>                
                <p className="self-stretch body-md-bold text-primary">
                {item.price}
                </p>
              </div>
            </Link>
          </div>
        ))}  
      </div>
    </div>
  )
}

export default MostWanted

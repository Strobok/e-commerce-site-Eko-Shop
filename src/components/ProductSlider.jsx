import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, IconButton } from "@material-tailwind/react";
import { ShopContext } from '../context/ShopContextProvider';


const ProductSlider = ({ newImages, title }) => {
  const { mobile } = useContext(ShopContext)

  return (
    <>
      <div className='flex flex-col items-start justify-center w-full gap-10 pt-8 pb-8 px-8 md:pt-16 md:pb-8 md:px-16 bg-white'>
        <div className='flex items-end justify-between w-full'>
          <div>
            <h1 className='text-left text-grey-600'>
              {title}
            </h1>
            <p className="text-left text-grey-500 body-lg">
              Be the first to have the first-class product
            </p>
          </div>
        </div>
      </div>

      <div className="pb-8 md:pb-20">
      <Carousel key={mobile ? 'mobile' : 'non-mobile'}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="gray"
            size="md"
            onClick={handlePrev}
            className="rounded-full !absolute top-2/4 left-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6 stroke-grey-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}

        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="gray"
            size="md"
            onClick={handleNext}
            className="rounded-full !absolute top-2/4 !right-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6 stroke-grey-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" 
              />
            </svg>
          </IconButton>
        )}

        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-2 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1  cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-grey-500" : "w-4 bg-grey-500/30"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
      {mobile ? (
        newImages.map((item, index) => (
          <ul className='  px-16  flex  items-center justify-center gap-3 bg-white'>
              <li key={index} className=' md:min-w-[24%]  flex flex-col items-center'>
                <Link key={index}
                 onClick={() => window.scrollTo(0, 0)} 
                 to={`/product/:${item.id}`}>
                <img 
                  className='object-cover object-bottom w-full mb-4 rounded-md hover1' 
                  src={item.src} alt={item.name} />
                <div>
                  <p className="self-stretch body-md-bold text-grey-600">
                    {item.text}             
                  </p>                
                  <p className="self-stretch body-md-bold mb-8 text-primary">
                    {item.price}
                  </p>
                </div>
                </Link>
              </li>
          </ul>  
        ))
      ) : (
      new Array(Math.ceil(newImages.length / 4))
      .fill('')
      .map((_, i) => (
        <ul className='flex gap-3 px-16 mb-12 bg-white'>
            {newImages.slice(i * 4, i * 4 + 4).map((item, index) => (
              <li key={index} className='w-[24%]  flex flex-col items-center'>
                <Link  onClick={() => window.scrollTo(0, 0)} to={`/product/:${item.id}`}>
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
              </li>
            ))}
        </ul>
      ))
      )}

      </Carousel>
      </div>
    </>
  );
}

export default ProductSlider



   
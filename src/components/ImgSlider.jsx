import React from 'react'
import a1 from '../assets/images/a1.jpg'
import a2 from '../assets/images/a2.jpg'
import a3 from '../assets/images/a3.jpg'
import a4 from '../assets/images/a4.jpg'
import { Carousel, IconButton } from "@material-tailwind/react";

const ImgSlider = () => {
      return (
        <Carousel
          className=""

          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute rounded-full top-2/4 left-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
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
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute rounded-full top-2/4 !right-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
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
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <img
            src={a1}
            alt="image 1"
            className="h-full w-full  object-cover"
          />
          <img
            src={a2}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          {/* <img
            src={a3}
            alt="image 3"
            className="h-full w-full object-cover"
        /> */}
          <img
            src={a4}
            alt="image 3"
            className="h-full w-full object-cover"
        />
        </Carousel>
      );
    }


export default ImgSlider


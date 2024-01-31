import React from 'react'
import { smile, shipping, eco, cs} from '../assets/icons'

const mostWanted = [
  { src: smile,  name: 'smile',  title: 'Satisfaction Guaranteed', text: 'Our satisfaction guarantee ensures quality products.'},
  { src: shipping,  name: 'shipping',  title: 'Free Shipping', text: 'Shop now and enjoy free shipping on all orders.'},
  { src: eco,  name: 'eco',  title: 'Eco Friendly Packaging', text: 'Using eco-friendly materials, sustainable and biodegradable.'},
  { src: cs,  name: 'cs',  title: 'Fast Response', text: '24/7 fast and reliable assistance whenever you need it.'},
];


const WhyUs = () => {
  return (
    <div className='flex w-full py-8 px-8 md:pt-20 md:pb-10 md:px-16 md:mt-16 flex-col justify-center items-center gap-14 bg-white'>
      <h2 className="text-center text-grey-600">
        Why Bought From Us?
      </h2>
      <div className="flex flex-wrap md:flex-nowrap justify-around items-start self-stretch">
        {mostWanted.map((item) => (
          <div key={item.title} className="w-[50%] md:w-[25%} p-2 flex flex-col items-center gap-2 rounded-lg ">
            <img className='hover2' src={item.src} alt={item.name} />
              <div className="flex flex-col justify-center items-start gap-1 self-stretch">
                <p className='body-lg-bold text-grey-600 text-center self-stretch'>
                  {item.title}
                </p>
                <p className='body-md text-grey-600 text-center self-stretch'>
                  {item.text}
                </p>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyUs
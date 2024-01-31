import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BackToHome } from '../components'
import { ShopContext } from '../context/ShopContextProvider'

const Category = () => {
  
  const { categoryName, data } = useContext(ShopContext)
  const categoryData = categoryName !== 'All' ? data.filter((i)=> i.category === categoryName) : data
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('loaded');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    const categoryItems = document.querySelectorAll('.category-item')
    categoryItems.forEach((item) => {
    observer.observe(item);
    });

    return () => {
      categoryItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, [ categoryData, categoryName ]);

  return (
    <div className='relative flex w-full px-8 py-20 md:px-16 flex-col justify-center items-center gap-10 bg-white'>
      <div className='absolute top-3 left-4 flex flex-nowrap items-center gap-1 '>
        <Link onClick={() => window.scrollTo(0, 0)} to="/">
          <BackToHome />
        </Link>
      </div>
      <div>
        <h1 className='text-center text-grey-600'>
        {categoryName !== 'All' ? `Our ${categoryName} Products` : 'All Our Products' }
        </h1>
        <p className="text-center text-grey-500 body-lg">
          Good for environment, good for you
        </p>
      </div>
      <div key={categoryName} className='flex justify-start flex-wrap  w-full '>
        { categoryData.map((item)=>(
          <div key={item.name} className='category-item w-[50%] md:w-[25%] p-2 '>
            <Link onClick={() => window.scrollTo(0, 0)} to={`/product/:${item.id}`}>
            <img 
              className=' object-cover object-bottom w-full mb-2 rounded-md hover1' 
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

export default Category
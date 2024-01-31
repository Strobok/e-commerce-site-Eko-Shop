import React, { useContext } from 'react'
import { allData }  from '../allData'
import { useParams } from "react-router";
import { ProductSlider, BackToHome } from '../components';
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContextProvider';


const ProductPage = () => {
  const { mobile, addToCart, cartItems, handleShopingBagThnx } = useContext(ShopContext)
  
  const { id } = useParams();
  const image = allData.filter((item) => item.id === id.slice(1));
  const category = image.map((i) => i.category)
  
  const newImages = allData.filter((item) => item.category === category[0] && item.id !== id.slice(1) )
  const title = 'Similar Products'

  const handleAddToCart =() => {
    cartItems[id.slice(1)] <1 && addToCart(id.slice(1));
    handleShopingBagThnx()
  }

  return (
    <>
    <div className='relative flex flex-col md:flex-row  items-center w-full bg-cover gap-6' >
      <div className='absolute top-3 left-10 md:left-4 flex flex-nowrap items-center gap-1 '>
        <Link onClick={() => window.scrollTo(0, 0)} to="/">
          <BackToHome />
        </Link>
      </div>
      <div className='flex px-8 md:pl-16 w-full md:w-1/2 shrink bg-white overflow-hidden'>
        <img
          src={image.map((i)=> i.src)}
          alt="image 1"
          className="object-cover w-full"
        />
      </div>    
        
      <div className='flex w-full md:w-1/2 px-8 md:px-16 flex-col gap-4 lg:gap-10 shrink bg-white'>
        <h3 className='shrink self-stretch font-grey-600 md:pt-8 md:max-lg:text-[28px] '>
          {image.map((i)=> i.text)}
        </h3>
        <p className='body-md md:max-lg:body-sm text-grey-500 self-stretch mb-3 '>
          Upgrade your experience and begin your path to a healthy you right now. Repudiandae eaque fuga suscipit quibusdam maiores vel rerum repellendus laborum, quaerat quas. Quibusdam maiores vel rerum repellendus laborum, quaerat quas.
        </p>
        <div className='flex justify-between gap-2 items-center '>
          <h6 className=' text-primary md:max-lg:text-sm' >
            Price: {image.map((i)=> i.price)}
          </h6>
            <div onClick={()=>handleAddToCart() } className="button-md text-white text-nowrap font-bold md:max-lg:text-sm bg-primary hover1 ">
              Add to Cart
            </div>
        </div>
      </div>
    </div>

    <ProductSlider mobile={mobile} newImages={newImages} title={title} />
      
    </>
  );
}
   


export default ProductPage


   

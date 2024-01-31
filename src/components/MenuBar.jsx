
import React, { useEffect, useContext } from 'react'
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from '../context/ShopContextProvider';

const menuBar = [
  { name: 'NEW!', title: 'New'},
  { name: 'All', title: 'All'},
  { name: 'Clothing', title: 'Clothing'},
  { name: 'Bedding', title: 'Bedding'},
  { name: 'Home Goods', title: 'Home Goods'},
  { name: 'Furniture', title: 'Furniture'},
  { name: 'Footwear', title: 'Footwear'},
  { name: 'Accessories', title: 'Accessories'},
 ]

function MenuBar() {
  const { setCategoryName } = useContext(ShopContext)

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
        setCategoryName('All');
    }
}, [location.pathname, setCategoryName]);

  return (
    <div className='hidden md:block'>
      <div className='border-b-[1px] border-primary bg-white'>
        <ul className='flex flex-wrap w-full pb-4 px-8 justify-center items-center gap-2'>
          {menuBar.map((item) => (
              <Link key={item.name} onClick={() => window.scrollTo(0, 0)} to='category'>
              <li 
                onClick={()=>setCategoryName(item.title) }
                className='flex  py-2 px-4 justify-center items-center gap-2 text-nowrap
                text-grey-600 text-base font-semibold hover2' 
              >
                {item.name}
              </li>
              </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MenuBar
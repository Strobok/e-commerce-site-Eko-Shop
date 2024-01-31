import React, { useRef, useContext } from 'react'
import logo from '../assets/images/logo.png'
import { bag, close, profile, search, menu, } from '../assets/icons'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import { ShopContext } from '../context/ShopContextProvider';
import { Input } from "@material-tailwind/react";

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

const NavBar = () => {
  const { mobile, setCategoryName, setSearchTerm, cartItems, iconAnimation } = useContext(ShopContext)

  let hasNonZeroValue = false;

  for (const item in cartItems) {
		if (cartItems[item] > 0) {
      hasNonZeroValue = true;
      break;
    }
  }

  const inputRef = useRef(null); 

    const clearInput = () => {
        if (inputRef.current) {
            inputRef.current.value = '';
        }
        setSearchTerm('')  
    };

  let timer;

  const navigateTo = useNavigate();

  const handleSearch = (value) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
          setSearchTerm(value.toLowerCase());
          navigateTo('/category');
      }, 500);
  };

  return (
     mobile ? (
      <div className="block">
        <div className='flex pt-4 pb-2 w-full px-8 justify-between items-center bg-white'>
          <Link onClick={() => window.scrollTo(0, 0)} to={'/'}>
            <img className='flex w-[80px] shrink-0 mb-4 hover1'
              src={logo} alt="logo" />
          </Link>
          <div className='relative flex items-start'>
          <Link onClick={() => window.scrollTo(0, 0)} to={'/signin'}>
            <img className='hover2' src={profile} alt="Profile" />
          </Link>
            <Link onClick={() => window.scrollTo(0, 0)} to={'/Cart'}>
            <img className='hover2' src={bag} alt="Bag" />
          </Link>
          {hasNonZeroValue &&
          <div className='absolute top-1 right-[10px]'>
            <div className="animate-ping inline-flex opacity-75 absolute bg-primary rounded-full w-2 h-2 hover2"></div>
            <div className="opacity-50 absolute bg-primary rounded-full w-2 h-2 hover2"></div>
          </div>}
          </div>
        </div>
        <div className='flex w-full px-8 pb-4 border-b-[1px] border-primary items-center bg-white'>
          <label className="flex flex-1 justify-between py-2 px-3 items-center gap-2 border-2 rounded-full border-grey-200 ">
            <img src={search} alt="Search" />
            <input 
              onChange={(e) => handleSearch(e.target.value)}
              ref={inputRef}
              className="flex w-[75%] text-grey-600 focus:outline-none focus:border-white focus:ring-white focus:ring-0 text-sm" 
              placeholder="Search here..." 
              type="text" 
              autoComplete="off"
              name="search"/>
            <img className='hover2' onClick={clearInput} src={close} alt="Close" />
          </label>
          <Menu>
            <MenuHandler>
              <img className='shrink-0 ml-6 hover2'src={menu} alt="Menu" />
            </MenuHandler>
            <MenuList className='border-none'>
              <MenuItem>
              {menuBar.map((item) => (
              <Link key={item.name} to='category'>
              <li 
                onClick={()=>setCategoryName(item.title) }
                className='flex  py-2 px-4 justify-center items-center gap-2 text-nowrap
                text-grey-600 text-base font-semibold hover2' 
              >
                {item.name}
              </li>
              </Link>
          ))}
              </MenuItem>
            </MenuList>
          </Menu>
        </div> 
      </div>
    ) : (
      <div className='flex pt-4 pb-2 px-[60px] justify-between items-center self-stretch bg-white'>
        <Link className='flex shrink-0 w-[95px] h-[48px] mr-[35px] mb-4 hover1' to={'/'}>
          <img src={logo} alt="logo" />
        </Link>
        <div className='flex w-full'>
        <label className="flex justify-between flex-1 py-2 px-4 items-center gap-2 border-2 rounded-full border-grey-200">
          <img src={search} alt="Search" />
          <input 
            onChange={(e) => handleSearch(e.target.value)}
            ref={inputRef}
            className="flex-1 text-grey-600 focus:outline-none focus:border-white focus:ring-white focus:ring-0 text-sm" 
            placeholder="Search here..." 
            type="text" 
            autoComplete="off"
            name="search"/>
            <img className='hover2' onClick={clearInput}  src={close} alt="Close" />
        </label>
        </div>
        <div className='relative flex shrink-0 w-[120px] justify-end items-center gap-4 '>
        <Link onClick={() => window.scrollTo(0, 0)} to={'/signin'}>
            <img className='hover2' src={profile} alt="Profile" />
          </Link>
          <Link onClick={() => window.scrollTo(0, 0)} to={'/Cart'}>
            <img className={`hover2 ${iconAnimation ? 'animate-icon' : ''}`} src={bag} alt="Bag" />
          </Link>
          {hasNonZeroValue &&
          <div className='absolute top-1 right-[10px]'>
            <div className="animate-ping inline-flex opacity-75 absolute bg-primary rounded-full w-2 h-2 hover2"></div>
            <div className="opacity-50 absolute bg-primary rounded-full w-2 h-2 hover2"></div>
          </div>}
        </div>
      </div>
    )
  )
}

export default NavBar





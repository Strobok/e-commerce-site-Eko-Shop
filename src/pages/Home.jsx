import React from 'react'
import { Footer, MenuBar, NavBar, SaleBar } from '../components'
import { Outlet } from 'react-router-dom';

const Home = () => {

  return (
    <div className=''>
      <div className=' max-w-[1240px] h-[5194] m-auto'>
        <SaleBar />
        <NavBar />
        <MenuBar  />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Home
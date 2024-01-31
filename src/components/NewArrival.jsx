import React from 'react'
import {allData} from '../allData'
import ProductSlider from './ProductSlider.jsx'

const NewArrival = () => {

  const newImages = allData.filter((item) => item.category === 'New')
  const title = 'New Arrival'

  return (
   <ProductSlider newImages={newImages} title={title} />
  );
}

export default NewArrival



   
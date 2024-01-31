import React from 'react'

const Product = ({data}) => {
    const { id, category, name, src, text, price, } = data

    console.log({id})
  return (
    <div>Product</div>
  )
}

export default Product

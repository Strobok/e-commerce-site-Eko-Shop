import React from 'react'

const SaleBar = () => {
  return (
    <div className="flex bg-primary w-full py-3 sm:py-4 justify-center items-start gap-2">
      <p className='text-white text-center font-sans text-base/[24px]'>
        Free Shipping with minimum purchase $250
      </p>
    </div>
  )
}

export default SaleBar
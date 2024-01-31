import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContextProvider'

  const Counter = ({id}) => {

  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext)

	return (
    <form className="max-w-xs">
      <div className="relative flex justify-end items-center">
          <button
            onClick={() => removeFromCart(id)}
            type="button"
            id="decrement-button"
            data-input-counter-decrement = "counter-input"
            className="flex-shrink-0 bg-grey-100 hover:bg-grey-200 inline-flex items-center justify-center rounded-lg h-5 w-5"
          >
            <svg
              className="w-2.5 h-2.5 text-grey-600 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h16"
              />
            </svg>
          </button>

          <input className="flex-shrink-0 text-grey-600 body-md-bold w-[2.2rem] px-2 text-center focus:outline-none focus:border-white focus:ring-white focus:ring-0"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />

          <button
            onClick={()=>addToCart(id)}
            type="button"
            id="increment-button"
            data-input-counter-increment="counter-input"
            className="flex-shrink-0 bg-grey-100 hover:bg-grey-200 inline-flex items-center justify-center rounded-lg h-5 w-5"
          >
          <svg
            className="w-2.5 h-2.5 text-grey-600 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
    </form>
  )
}

export default Counter
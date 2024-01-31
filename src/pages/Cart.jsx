import React, { useState, useContext } from 'react'
import { Counter } from '../components'
import { ShopContext } from '../context/ShopContextProvider';
import { allData }  from '../allData'

const Cart = () => {
	const { cartItems, deleteFromCart } = useContext(ShopContext);

	let totalAmount = 0;
	for (const item in cartItems) {
		if (cartItems[item] > 0) {
			let itemInfo = allData.find((product) => product.id === item);
			totalAmount += cartItems[item] * itemInfo.price.slice(1);
			console.log(itemInfo)
		}
	}

  return (
		<>
			<div className='pt-8 pb-8 px-8 md:pt-16 md:pb-8 md:px-16'>
				{allData.map((item)=>(
					cartItems[item.id] !==0 && 
						<div className='flex justify-between items-center py-2 border-b-[1px] border-primary'>
							<div className='flex w-2/3 justify-start gap-2 items-center' >
								<div className='relative shrink-0 flex items-center justify-start' >
									<img src={item.src} alt="Img15" width='100px' />
									<div onClick={()=> deleteFromCart(item.id) } className="absolute top-2 left-2 text-grey-700 text-sm bg-white rounded-full px-[6px] hover2">
										{'\u2716'}
									</div>
								</div>
								<div className='flex flex-col items-start justify-start gap-1' >
									<div className=' text-grey-600 body-md-bold'>{item.text}</div>
									<div className='body-md-bold text-grey-600'>{item.price}</div>
								</div>
							</div> 
							<div className='flex flex-col w-1/3 items-end gap-3'>
								<div className='body-md-bold text-grey-600'>Quantity</div>
								<Counter id = {item.id} />
								<div className='body-md-bold text-grey-600 text-end'>Subtotal: {item.price.slice(1)*cartItems[item.id]}</div>
							</div>
						</div>
					))}
			</div>
			<div className='flex flex-col px-8 md:px-16 w-full items-end gap-1' >
				<div className="body-lg-bold">Cart Total</div>
				<div className='body-md-bold text-grey-600'>Shipping: Free</div>
				<div className='body-lg-bold text-grey-600 text-end pb-6'>Total:{totalAmount}</div>
				<div className="button-md text-white font-bold md:max-lg:text-sm bg-primary hover1 ">
					Checkout
        </div>
			</div>
		</>
  )
}


export default Cart


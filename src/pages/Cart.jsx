import React from 'react'
import useCart from '../context/useCart'
const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity
  }=useCart();
  return (
    <div className='flex flex-wrap'>
          {cartItems.map((items, i)=>{
           return(<div key={i} className='border w-50 h-72 flex flex-col justify-between'>
            <div>
            name: {items.name}
            </div>
            <div>
              desc: {items.description}
            </div>
            <div>
              price: {items.price}
            </div>
            <div className="flex items-center justify-between w-full">
                  <button
                    onClick={() => decreaseQuantity(items.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    -
                  </button>
                  <span className="text-lg font-medium">{items.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(items.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    +
                  </button>
                </div>
            </div>
          )})}
    </div>
  )
}

export default Cart
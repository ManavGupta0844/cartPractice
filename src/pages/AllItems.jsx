import React from 'react'
import {data} from '../data'
import useCart from '../context/useCart'
const AllItems = () => {
  const {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();
  console.log(cartItems);
  return (
    <div className='flex flex-wrap'>
      {data.map((items, i)=>{
         const itemWithId = { ...items, id: i };
         const cartItem = cartItems.find((c) => c.id === i);
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
        {!cartItem ?(<div className='w-[100%]'><button className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 mt-auto" onClick={()=>addToCart(itemWithId)}>AddToCart</button></div>):
        (<div className="flex items-center justify-between w-full">
                  <button
                    onClick={() => decreaseQuantity(i)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    -
                  </button>
                  <span className="text-lg font-medium">{cartItem.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(i)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    +
                  </button>
                </div>)}
        
        </div>)
      })}
    </div>
  )
}

export default AllItems
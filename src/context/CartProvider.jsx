import {useState} from 'react';
import CartContext from './CartContext';

export const CartProvider =({children})=>{
  const [cartItems,setCartItems] = useState([]);
  const addToCart = (item) =>{
    setCartItems((prevItems)=>[...prevItems,{...item,quantity:1}]);
  }
  const removeFromCart =(id) =>{
    setCartItems((prevItems)=>prevItems.filter((item)=>item.id!=id));
  }
  const increaseQuantity = (id)=>{
    setCartItems((prevItems)=>prevItems.map((item)=>
    item.id===id?{...item,quantity:item.quantity+1}:item))
  }
  const decreaseQuantity =(id)=>{
    setCartItems((prevItems)=>prevItems.map((item)=>
    item.id===id?{...item,quantity:Math.max(0,item.quantity-1)}:item).filter(item=>item.quantity>0));
  }
  const getTotalItemsInCart =()=>{
    cartItems.reduce((total,item)=>total+item.quantity,0);
  }
  const value={
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalItemsInCart
  }
  return (<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}
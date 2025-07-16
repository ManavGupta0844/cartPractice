import React from 'react'
import AllItems from './pages/AllItems'
import { CartProvider } from './context/CartProvider'
import Cart from './pages/Cart'
const App = () => {
  return (
    <CartProvider><AllItems/><Cart/></CartProvider>
  )
}

export default App
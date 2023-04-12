import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import ProductPage from './components/ProductPage'
import Cart from './components/Cart'
import Menu from './components/Menu'
import data from './data'
import CartItem from './components/CartItem'

const App = () => {
  const [activeCart, setActiveCart] = useState(false)
  const [menu, setMenu] = useState(false)
  const [products, setProducts] = useState(data)
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightBox, setLightBox] = useState(false)
  const [ orderNumber, setOrderNumber ] = useState(0);
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const cartItems = cart.map((item) => {
    return(
      <CartItem key={item.id} item={item}/>
    )
  })

  const addOrderNumber = () => {
    setOrderNumber((prev) => prev + 1)
  }

  const minusOrderNumber = () => {
    if(orderNumber !== 0 ){
      setOrderNumber((prev) => prev - 1)
    } return;
  }

  const newProducts = products.map((item) => {
    return (
      <ProductPage key={item.id} product={item} lightBox={lightBox}
        setLightBox={setLightBox} currentSlide={currentSlide} orderNumber={orderNumber}  
        setCurrentSlide={setCurrentSlide} addOrderNumber={addOrderNumber} minusOrderNumber={minusOrderNumber}
        addToCart={addToCart}
         />
    )
  })

  return (
    <section id='root' className='bg-white w-full md:px-32 relative'>
      <Header setMenu={setMenu} setActiveCart={setActiveCart} />
      {newProducts}
      {menu && <Menu setMenu={setMenu} />}
      {activeCart && <Cart cart={cart} cartItems={cartItems} />}
    </section>
  )
}

export default App

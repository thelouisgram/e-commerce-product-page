import React, { useState } from 'react'
import Header from './components/Header'
import ProductPage from './components/ProductPage'
import Cart from './components/Cart'
import Menu from './components/Menu'
import data from './data'

const App = () => {
  const [activeCart, setActiveCart] = useState(false)
  const [menu, setMenu] = useState(false)
  const [products, setProducts] = useState(data)
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightBox, setLightBox] = useState(false)


  const newProducts = products.map((item) => {
    return (
      <ProductPage key={item.id} product={item} lightBox={lightBox}
        setLightBox={setLightBox} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
    )
  })

  return (
    <section id='root' className='bg-white w-full md:px-32 relative'>
      <Header setMenu={setMenu} setActiveCart={setActiveCart} />
      {newProducts}
      {menu && <Menu setMenu={setMenu} />}
      {activeCart && <Cart />}
    </section>
  )
}

export default App

import React, { useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Cart from './components/Cart'
import Menu from './components/Menu'

const App = () => {
  const [ activeCart, setActiveCart ] = useState(false)
  const [ menu, setMenu ] = useState(false)
  return (
    <section id='root' className='bg-white w-full md:px-32 relative'>
      <Header setMenu={setMenu} setActiveCart={setActiveCart}  />
      <Body />
      {menu && <Menu setMenu={setMenu} /> }
      {activeCart  && <Cart />}
    </section>
  )
}

export default App

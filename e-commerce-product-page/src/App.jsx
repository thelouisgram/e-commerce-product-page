import React, { useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Cart from './components/Cart'
import Menu from './components/Menu'
import data from './data'

const App = () => {
  const [ activeCart, setActiveCart ] = useState(false)
  const [ menu, setMenu ] = useState(false)
  const [ products, setProducts ] =useState(data)

  const newProducts = products.map((item) => {
        return (
          <Body key={item.id} {...item}/>
        )
  })

  return (
    <section id='root' className='bg-white w-full md:px-32 relative'>
      <Header setMenu={setMenu} setActiveCart={setActiveCart}  />
      {newProducts}
      {menu && <Menu setMenu={setMenu} /> }
      {activeCart  && <Cart />}
    </section>
  )
}

export default App

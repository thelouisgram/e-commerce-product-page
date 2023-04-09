import React from 'react'
import { iconClose } from '../assets'

const Menu = ({setMenu}) => {
    const toggleMenu = () => {
        setMenu((prev) => !prev)
    }
  return (
    <section className='h-[100vh] w-full bg-black top-0 left-0 z-[10]  fixed flex md:hidden'>
          <div className='w-[60%] element bg-white py-6 px-6'>
            <img onClick={toggleMenu} src={iconClose}  className='cursor-pointer mb-8' />
            <ul className="flex flex-col gap-4 text-veryDarkBlue font-[700] font-Kumbh text-[16px]">
					<li className="cursor-pointer">Collections</li>
					<li className="cursor-pointer">Men</li>
					<li className="cursor-pointer">Women</li>
					<li className="cursor-pointer">About</li>
					<li className="cursor-pointer">Contact</li>
				</ul>
        </div>
    </section>
  )
}

export default Menu

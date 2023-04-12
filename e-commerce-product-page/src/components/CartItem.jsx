import React from 'react'
import { iconDelete } from '../assets'

const CartItem = ({item}) => {
  return (
      <div className='flex w-full items-center justify-between gap-[10px]'>
          <div className='w-[50px] h-auto'>
            <img className='w-full h-full rounded-[5px]' src={item.images[0].thumbnail} /></div>
          <div className='flex flex-col flex-1 gap-[0px]'>
              <div className='text-[18px] md:text-[14px] text-darkGrayishBlue'>{item.edition}</div>
            <div>
                  <div className='text-[18px] md:text-[14px] text-darkGrayishBlue flex flex-row gap-1'>
                      <p>${item.price}</p> x <p>{item.quantity}</p> <p>{item.total}</p></div>
            </div>
          </div>
          <div><img src={iconDelete}/></div>
      </div>
  )
}

export default CartItem

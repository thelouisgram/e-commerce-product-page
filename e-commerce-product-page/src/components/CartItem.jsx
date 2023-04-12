import React from 'react';
import { iconDelete } from '../assets';

const CartItem = ({ item, deleteOrder }) => {
	return (
		<div className="flex w-full items-center justify-between gap-[10px]">
			<div className="w-[45px] h-auto">
				<img className="w-full h-full rounded-[5px]" src={item.images[0].thumbnail} />
			</div>
			<div className="flex flex-col flex-1 gap-[0px]">
				<div className="text-base md:text-[14px] text-darkGrayishBlue">{item.edition}</div>
				<div>
					<div className="text-base md:text-[14px] text-darkGrayishBlue flex flex-row gap-1">
						<p>${item.price}.00</p> x <p>{item.quantity}</p>
						<p className="font-bold text-veryDarkBlue">${item.total}.00</p>
					</div>
				</div>
			</div>
			<div onClick={() => deleteOrder(item.id)} className="cursor-pointer">
				<img src={iconDelete} />
			</div>
		</div>
	);
};

export default CartItem;

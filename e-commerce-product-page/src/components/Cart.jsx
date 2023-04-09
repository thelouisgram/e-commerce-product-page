import React from 'react';

const Cart = ({ activeCart, setActiveCart }) => {
	return (
		<section className="top-[80px] px-6 md:p-0 w-full absolute flex  md:justify-end font-Kumbh md:right-[100px] md:top-[90px]">
			<div className="bg-white rounded-[10px] md:w-[300px] box  w-full ">
				<div className="border-b-[1px] p-4 border-lightGrayishBlue">
					<h4 className="font-[700] text-veryDarkBlue">Cart</h4>
				</div>
				<div className="min-h-[175px] p-4 flex justify-center items-center">
					<h4 className="font-[700] text-darkGrayishBlue">Your cart is empty.</h4>
				</div>
			</div>
		</section>
	);
};

export default Cart;

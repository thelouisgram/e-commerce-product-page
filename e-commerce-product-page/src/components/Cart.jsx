import React from 'react';

const Cart = ({ cart, cartItems }) => {
	return (
		<section className="top-[80px] w-full px-2 md:p-0 md-w-[300px] absolute flex  md:justify-end 
		font-Kumbh md:right-[100px] md:top-[90px]">
			<div className="bg-white rounded-[10px] md:w-[300px] box  w-full ">
				<div className="border-b-[2px] p-4 border-lightGrayishBlue">
					<h4 className="font-[700] text-veryDarkBlue">Cart</h4>
				</div>
				{cart.length < 1 && (
					<div className="min-h-[175px] p-4 flex justify-center items-center">
						<h4 className="font-[700] text-darkGrayishBlue">Your cart is empty.</h4>
					</div>
				)}
				{cart.length > 0 && (
					<div className="p-4 flex flex-col gap-2">
						{cartItems}
						<div className="w-full h-[50px] rounded-[10px] text-white 
					font-[500] flex gap-2 items-center justify-center bg-orange cursor-pointer">
							<span class="material-symbols-rounded">shopping_cart_checkout</span>
							Checkout
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default Cart;

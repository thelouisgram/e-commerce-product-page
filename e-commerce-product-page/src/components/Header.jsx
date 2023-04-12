import React from 'react';
import { logo, iconMenu, iconCart, imageAvatar } from '../assets';

const Header = ({ setActiveCart, setMenu, cartTotal }) => {
	const toggleCart = () => {
		setActiveCart((prev) => !prev);
	};
	const toggleMenu = () => {
		setMenu((prev) => !prev);
	};
	return (
		<nav className="py-4 px-6 w-full md:py-8 md:border-b-[2px] border-lightGrayishBlue flex items-center justify-between">
			<div className="flex items-center">
				<img src={iconMenu} onClick={toggleMenu} className="mr-4 h-[16px] cursor-pointer w-[auto] md:hidden" />
				<img src={logo} className="md:mr-12 h-[20px] md:h-[24px] w-[auto]" />
				<ul className="hidden md:flex flex-row gap-8 text-darkGrayishBlue font-Kumbh text-[14px]">
					<li className="hover:text-black cursor-pointer">Collections</li>
					<li className="hover:text-black cursor-pointer">Men</li>
					<li className="hover:text-black cursor-pointer">Women</li>
					<li className="hover:text-black cursor-pointer">About</li>
					<li className="hover:text-black cursor-pointer">Contact</li>
				</ul>
			</div>

			<div className="flex items-center">
				<div
					onClick={toggleCart}
					className="cursor-pointer mr-4 md:mr-8 w-[40px] h-[30px] flex items-center
					 justify-center relative"
				>
					{cartTotal !== 0 && (
						<div className="min-h-[12px] min-w-[auto] px-[8px]
					 flex justify-center items-center
					 absolute top-0 right-0 z-1 bg-orange text-[9px] text-white
					font-Kumbh rounded-full">
							{cartTotal}
						</div>
					)}
					<img src={iconCart} className="w-[20px] h-[20px] " />
				</div>
				<div className="w-[34px] h-[34px] md:w-[50px] md:h-[50px] p-[2px] hover:bg-orange 
				rounded-full cursor-pointer">
					<img src={imageAvatar} className="w-[100%] h-[100%]" />
				</div>
			</div>
		</nav>
	);
};

export default Header;

import React from 'react';
import { iconMinus, iconPlus } from '../assets';

const Body = ({...props}) => {
	return (
		<section className="md:py-16 flex-col flex md:flex-row w-full font-Kumbh">
			{/* left div */}
			<div className="flex-1 flex">
				{/* Desktop Product image */}
				<div className="w-full md:w-[400px] hidden md:flex items-center mx-auto justify-center">
					<img src={props.image1} className=" w-[100%] rounded-[10px] h-[100%]" />
				</div>
				<div className="md:hidden block w-[100%] h-[325px] ">
					<img src={props.image1} className="md:hidden block object-cover w-[100%]  h-[100%]" />
				</div>
			</div>
			{/* Right Div */}
			<div className="flex-1 flex-col flex p-6 md:p-0 justify-center">
				{/* Product information */}
				<h3 className="mb-2 text-orange tracking-[0.25em] text-[12px] ss:text-[14px] 
              font-[700]">
					{props.company}
				</h3>
				<h1 className="mb-6 font-[700] max-w-[300px] ss:max-w-[400px] text-veryDarkBlue leading-[1] text-[32px] ss:text-[40px]">
					{props.edition}
				</h1>
				<p className="mb-6 w-[100%] md:max-w-[450px] text-darkGrayishBlue text-[16px]">
					{props.description}
				</p>

				{/* Product price */}
                <div className="flex flex-row items-center ss:flex-col mb-4 ss:items-start justify-between">
					<div className="flex flex-row items-center">
						<h3 className="text-veryDarkBlue text-[24px] font-[700] mr-4">${props.price}</h3>
						<div className="bg-paleOrange px-[6px] rounded-[5px] py-[1px]">
							<h4 className="text-orange text-[14px] font-[700]">{props.discount}</h4>
						</div>
					</div>
                    <div>
                        <h5 className='text-grayishBlue font-[600] text-[16px] line-through'>
							${props.oldPrice}</h5>
                    </div>
				</div>

				{/* Cart button section */}
				<div className="flex flex-col  ss:flex-row gap-4">
					<div className="bg-lightGrayishBlue h-[50px] w-full ss:w-[125px] 
                    justify-between rounded-[10px] flex items-center">
                        <div className="cursor-pointer hover:opacity-[0.5] py-[12px] px-[18px] ss:px-[12px]">
							<img src={iconMinus} />
						</div>
						<div className="py-[12px] px-[18px] ss:px-[12px] font-bold">0</div>
                        <div className=" cursor-pointer hover:opacity-[0.5] py-[12px] px-[18px] ss:px-[12px]">
							<img src={iconPlus} />
						</div>
					</div>
					<div className="bg-orange cursor-pointer hover:text-veryDarkBlue mb-4 hover:bg-paleOrange
                     text-white  h-[50px] w-full ss:w-[250px]
                     justify-center rounded-[10px] font-bold text-[14px] flex items-center">
						<h5>Add to cart</h5>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Body;

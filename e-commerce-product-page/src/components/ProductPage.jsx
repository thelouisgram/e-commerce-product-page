import React from 'react';
import { iconMinus, iconPlus } from '../assets';
import ProductImage from './ProductImage';
import LightBox from './LightBox';

const ProductPage = ({ product, currentSlide, setCurrentSlide, lightBox, setLightBox, orderNumber,
	addOrderNumber, minusOrderNumber, addToCart }) => {
	return (
		<section className="md:py-20 flex-col md:gap-4 flex md:flex-row w-full font-Kumbh">
			{lightBox && (
				<LightBox
					product={product}
					lightBox={lightBox}
					setLightBox={setLightBox}
					currentSlide={currentSlide}
					setCurrentSlide={setCurrentSlide}
				/>
			)}

			{/* left div */}
			<div className="flex-1 flex justify-center">
				{/* Desktop Product image */}
				<ProductImage
					product={product}
					lightBox={lightBox}
					setLightBox={setLightBox}
					currentSlide={currentSlide}
					setCurrentSlide={setCurrentSlide}
				/>
			</div>
			{/* Right Div */}
			<div className="md:mr-8 flex-col flex p-6 md:p-0 justify-center">
				{/* Product information */}
				<h3 className="mb-2 text-orange tracking-[0.25em] text-[12px] ss:text-[14px] 
              font-[700]">
					{product.company}
				</h3>
				<h1 className="mb-6 font-[700] max-w-[300px] ss:max-w-[400px] text-veryDarkBlue leading-[1] text-[32px] ss:text-[40px]">
					{product.edition}
				</h1>
				<p className="mb-6 w-[100%] md:max-w-[450px] text-darkGrayishBlue text-[16px]">{product.description}</p>

				{/* Product price */}
				<div className="flex flex-row items-center ss:flex-col mb-4 ss:items-start justify-between">
					<div className="flex flex-row items-center">
						<h3 className="text-veryDarkBlue text-[24px] font-[700] mr-4">${product.price}.00</h3>
						<div className="bg-paleOrange px-[6px] rounded-[5px] py-[1px]">
							<h4 className="text-orange text-[14px] font-[700]">{product.discount}</h4>
						</div>
					</div>
					<div>
						<h5 className="text-grayishBlue font-[600] text-[16px] line-through">
							${product.oldPrice}.00</h5>
					</div>
				</div>

				{/* Cart button section */}
				<div className="flex flex-col  ss:flex-row gap-4">
					<div className="bg-lightGrayishBlue h-[50px] w-full ss:w-[125px] 
                    justify-between rounded-[10px] flex items-center">
						<div 
							onClick={minusOrderNumber}
							className="cursor-pointer hover:opacity-[0.5] py-[12px] px-[18px] ss:px-[12px]">
							<img src={iconMinus} />
						</div>
						<div className="py-[12px] px-[18px] ss:px-[12px] font-bold">{orderNumber}</div>
						<div 
							onClick={addOrderNumber}
							className=" cursor-pointer hover:opacity-[0.5] py-[12px] px-[18px] ss:px-[12px]">
							<img src={iconPlus} />
						</div>
					</div>
					<div 
						onClick={()=>addToCart(product, product.id)}
						className="bg-orange cursor-pointer hover:text-veryDarkBlue mb-4 hover:bg-lightGrayishBlue
                    text-white  h-[50px] w-full ss:w-[250px]
                     justify-center rounded-[10px] font-bold text-[14px] gap-2 flex items-center">
						<span class="material-symbols-rounded">
							shopping_cart
						</span>
						<h5>Add to cart</h5>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductPage;

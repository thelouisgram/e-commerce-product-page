import React from 'react';
import { iconClose } from '../assets';
import { iconPrevious, iconNext } from '../assets';

const LightBox = ({ product, setLightBox, currentSlide, setCurrentSlide }) => {
	const slides = product.images;

	const toggleLightBox = () => {
		setLightBox(false);
	};

	const setThumbnail = (index) => {
		setCurrentSlide(index);
	};

	const ProductImage = slides.map((slide, index) => {
		return (
			<div key={`slide-${index}`} className={`slideContainer ${index === currentSlide ? 'active' : ''}`}>
				<img
					className="w-full object-cover md:object-fill h-full md:rounded-[10px]"
					src={slide.image}
					alt={`Slide ${index}`}
				/>
			</div>
		);
	});

	const thumbnailSlide = slides.map((thumbnail, index) => {
		return (
			<div
				key={`thumbnail-${index}`}
				onClick={() => setThumbnail(index)}
				className={`thumbnailDiv cursor-pointer overflow:hidden
                rounded-[10px] w-[80px] h-[80px] ${index === currentSlide ? 'active' : ''} `}
			>
				<img
					className={`thumbnail ${index === currentSlide ? 'active' : ''} 
                rounded-[8px] w-full h-full `}
					src={thumbnail.thumbnail}
					alt={`Thumbnail ${index}`}
				/>
			</div>
		);
	});

	const nextSlide = () => {
		setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
	};

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
	};

	return (
		<section className="w-full h-full fixed top-0 left-0 z-[8] hidden md:flex items-center justify-center 
        bg-black">
			<div className="flex flex-col w-[450px] mb-6 items-center">
				<div onClick={toggleLightBox} className="flex w-full mb-4 justify-end cursor-pointer">
					<span
						class="material-symbols-rounded cursor-pointer
          				text-white hover:text-orange">close</span>
				</div>
				<div className="max-w-full mb-6 flex items-center md:h-auto relative">
					{/* prev btn */}
					<div
						onClick={prevSlide}
						className="absolute bg-white h-[40px] w-[40px] 
                    p-4 rounded-full flex justify-center items-center -left-[20px] cursor-pointer"
					>
						<img src={iconPrevious} className="w-full h-auto" />
					</div>
					{ProductImage}
					{/* Next btn */}
					<div
						onClick={nextSlide}
						className="absolute bg-white h-[40px] 
                    w-[40px] p-4 rounded-full flex justify-center items-center -right-[20px] cursor-pointer"
					>
						<img src={iconNext} className="w-full h-auto" />
					</div>
				</div>
				<div className="hidden w-[400px] md:flex justify-between">{thumbnailSlide}</div>
			</div>
		</section>
	);
};

export default LightBox;

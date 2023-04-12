import { iconPrevious, iconNext } from '../assets';
import {useState} from 'react'

const ProductImage = ({ product, currentSlide, setCurrentSlide, setLightBox }) => {
	const slides = product.images;
	const [btn, setBtn] = useState(false)

	const hideBtn = () => {
		setBtn(false)
	}

	const showBtn = () => {
		setBtn(true)
	}

	const toggleLightBox = () => {
		setLightBox(true);
	};

	const setThumbnail = (index) => {
		setCurrentSlide(index);
	};

	const ProductImage = slides.map((slide, index) => {
		return (
			<div 
			key={`slide-${index}`}
				
			className={`slide ${index === currentSlide ? 'active' : ''} w-full h-full`} onClick={toggleLightBox}>
				<img
					className="w-[100%] h-[100%] object-cover md:rounded-[10px] md:object-fill"
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
                rounded-[10px] ${index === currentSlide ? 'active' : ''} `}
			>
				<img
					className={`thumbnail ${index === currentSlide ? 'active' : ''} 
                rounded-[8px] w-[80px] h-[80px]`}
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
		<section 
			onMouseOver={showBtn}
			onMouseLeave={hideBtn} 
			className="w-full  flex md:flex-col items-center   md:h-auto">
			<div className="w-full h-[345px] ss:h-[525px] md:max-w-[425px] md-4 md:mb-6 flex
             items-center  md:h-auto">
				{/* prev btn */}
				{btn && <div
					onClick={prevSlide}
					className="absolute md:hidden bg-white h-[40px] w-[40px]
                    p-2 rounded-full flex justify-center items-center left-[4%] cursor-pointer"
				>
					<img src={iconPrevious} />
				</div>}
				{ProductImage}
				{/* Next btn */}
				{ btn && <div
					onClick={nextSlide}
					className="absolute md:hidden bg-white h-[40px] w-[40px]
                    p-2 rounded-full flex justify-center items-center right-[4%] cursor-pointer"
				>
					<img src={iconNext} />
				</div>}
			</div>
			<div className="hidden w-[425px] md:flex justify-between">{thumbnailSlide}</div>
		</section>
	);
};

export default ProductImage;

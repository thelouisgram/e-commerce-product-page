import React, { useState } from 'react'
import { iconPrevious, iconNext } from '../assets'

const ImageSlide = ({ ...props }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = props.images

    const setThumbnail = (index) => {
        setCurrentSlide(index)
    }

    const imageSlide = slides.map((slide, index) => {
        return (
            <img
                key={`slide-${index}`}
                className={`slide ${index === currentSlide ? 'active' : ''} w-full object-cover md:object-fill 
                h-full md:rounded-[10px] `}
                src={slide.image} alt={`Slide ${index}`} />
        )
    })

    const thumbnailSlide = slides.map((thumbnail, index) => {
        return (
            <div
                key={`thumbnail-${index}`}
                onClick={() => setThumbnail(index)}
                className={`thumbnailDiv cursor-pointer overflow:hidden
                rounded-[10px] ${index === currentSlide ? 'active' : ''} `}>
            <img
                className={`thumbnail ${index === currentSlide ? 'active' : ''} 
                rounded-[10px] w-[80px] h-[80px]`}
                src={thumbnail.thumbnail} alt={`Thumbnail ${index}`} />
            </div>
        )
    })

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };


    return (
        <section className='w-full  flex md:flex-col items-center  md:h-auto'>
            <div className='w-full h-[345px] ss:h-[525px] md:max-w-[400px] mb-6 flex  items-center  md:h-auto relative '>
                {/* prev btn */}
                <div
                    onClick={prevSlide}
                    className='absolute md:hidden bg-white h-[40px] w-[40px]
            p-2 rounded-full flex justify-center items-center left-[4%] cursor-pointer'>
                    <img src={iconPrevious} /></div>
                {imageSlide}
                {/* Next btn */}
                <div
                    onClick={nextSlide}
                    className='absolute md:hidden bg-white h-[40px] w-[40px]
            p-2 rounded-full flex justify-center items-center right-[4%] cursor-pointer'>
                    <img src={iconNext} /></div>
        </div>
            <div className='hidden w-[400px] md:flex justify-between'>
                {thumbnailSlide}
        </div>
        </section>
    )
}

export default ImageSlide

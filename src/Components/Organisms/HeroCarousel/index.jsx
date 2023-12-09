import React, { useState } from 'react';
import { Buttons, CarouselContainer, FirstCaro, SecCaro, ThirdCaro } from '../../Molecules'

const images = [
    {
        indx: "1",
        hero: <FirstCaro />
    },
    {
        indx: "2",
        hero: <SecCaro />
    },
    {
        indx: "3",
        hero: <ThirdCaro />
    }

]

export const HeroCarousel = () => {
    // Carousel logic will go here
    const [activeIndex, setActiveIndex] = useState(0)

    const handleNext = () => {
        setActiveIndex(prev => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setActiveIndex(prev => (prev - 1 + images.length) % images.length);
    };


    const renderPaginationIndicators = () => {
        return images.map((_, indx) => (
            <button
                key={indx}
                className={`pagination-indicator ${indx === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(indx)}
            ></button>
        ))
    }

    const currentTransform = -activeIndex * 100;
    return (
        <CarouselContainer
            Width="100%"
            className='Carousel-wrapper' >
            <CarouselContainer
                Display="flex"
                Width="100%"
                Transform={`translateX(${currentTransform}%)`}
                className='carousel-items'>
                {images.map((item, i) => (
                    <div key={i.index} className='carousel-item'>
                        {item.hero}
                    </div>
                ))}
            </CarouselContainer>
            {/* Carousel controls will go here */}

            <buttons text="prev" className="carousel-control prev" onClick={handlePrev} />
            <button text="next" className="carousel-control next" onClick={handleNext} >Hi</button>
            {renderPaginationIndicators()}
        </CarouselContainer>
    )
}

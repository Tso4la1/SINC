import React, { useState } from 'react'
import punch from "../../../assets/punch.png";
import Buj from "../../../assets/Buj.png";
import Ontecx from "../../../assets/Ontecx.png";
import { CarouselContainer } from '../../Molecules';
import { Images } from '../../Atoms';

const featured = [
    {
        indx: 1,
        icon: <Images name="image" className="featured-image" src={punch} alt="costumer service officer with the ok sign" />,



    },

    {
        indx: 2,
        icon: <Images name="image" className="featured-image" src={Buj} alt="costumer service officer on call" />,


    },
    {
        indx: 3,
        icon: <Images name="image" className="featured-image" src={Ontecx} alt="costumer service officer on call" />,


    },
]


export const Featured = () => {


    const [activeIndex, setActiveIndex] = useState(0)

    const handleKeyDown = (event) => {
        if (event.key === "ArrowRight") {
            handleNext();
        }
        else if (event.key === "ArrowLeft") {
            handlePrev()
        }
    }
    const handleNext = () => {
        setActiveIndex(prev => (prev + 1) % featured.length);
    };

    const handlePrev = () => {
        setActiveIndex(prev => (prev - 1 + featured.length) % featured.length);
    };


    const renderPaginationIndicators = () => {
        return featured.map((_, indx) => (
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
            className='Carousel-wrapper' onKeyDown={handleKeyDown} tabIndex="0" >
            <CarouselContainer
                Display="flex"
                Width="100%"
                Transform={`translateX(${currentTransform}%)`}
                className='carousel-items'>
                {featured.map((item, i) => (
                    <div key={i.index} className={`carousel-item fade ${i === activeIndex ? "active" : ""
                        }`}>
                        {item.icon}
                    </div>
                ))}
            </CarouselContainer>
            {/* Carousel controls will go here */}

            {/* <buttons text="prev" className="carousel-control prev" onClick={handlePrev} />
            <button className="carousel-control next" onClick={handleNext} >Hi</button> */}
            {renderPaginationIndicators()}
        </CarouselContainer>
    )

}

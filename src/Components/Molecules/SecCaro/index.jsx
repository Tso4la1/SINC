import React from 'react';
import { CarouselContainer } from '../FirstCaro';
import { Images, Texts } from '../../Atoms';
import clapping from "../../../assets/accolades.svg";
import { Buttons } from '../Buttons';
export const SecCaro = () => {
    return (
        <CarouselContainer
            Display="flex"
            justifyContent="center"
            // Width="100%"
            Height="65vh"
        >

            <CarouselContainer
                className='left-section'
                Width="48%"
                Display="flex"
                flexdirection="column"
                justifyContent="center"
                alignItems="center"
                lineHeight="24px"
                Margin="0 -86px 0 50px"
            >

                <Texts name="paragraph" className="heroTextHeader2" text="SINC Partners is a service incubation company" />
                <Texts name="paragraph" className="heroText" text="Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).
" />
                <div className='caroButtonContainer'>
                    <Buttons className="caroButton" text="SINC With Us" />
                </div>

            </CarouselContainer>
            <Images name="image" src={clapping} alt="standing ovation" />
        </CarouselContainer>


    )
}

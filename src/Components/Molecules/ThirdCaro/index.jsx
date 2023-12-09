import React from 'react'
import { CarouselContainer } from '../FirstCaro'
import { Images, Texts } from '../../Atoms';
import { Buttons } from '../Buttons';
import triangleFace from "../../../assets/triangle faces.svg"

export const ThirdCaro = () => {
    return (
        <CarouselContainer
            Display="flex"
            justifyContent="center"
        // Width="100%"
        // Height="62vh"
        >

            <CarouselContainer
                className='left-section'
                Width="53%"
                Display="flex"
                flexdirection="column"
                justifyContent="center"
                alignItems="center"
                lineHeight="24px"
                Margin="0 -86px 0 70px"
            >
                <Texts name="paragraph" className="heroTextHeader2" text="Come with an idea, leave with a company." />
                <Texts name="paragraph" className="heroText" text="You, alongside seasoned service partners and investors, expedite the growth and market entry of your startup.
" />
                <div className='caroButtonContainer'>
                    <Buttons className="caroButton" text="SINC With Us" />
                </div>
            </CarouselContainer>
            <Images name="image" className="trianle-img" src={triangleFace} alt="Picture of ambassor" />

        </CarouselContainer>
    )
}

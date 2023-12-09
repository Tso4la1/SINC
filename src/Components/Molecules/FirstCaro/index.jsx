import React from 'react';
import pricing from "../../../assets/advert-pricing.svg";
import techTeens from "../../../assets/college teach.svg";
import { Texts, Images } from "../../Atoms";
import { Buttons } from '../Buttons';
import styled from 'styled-components';

export const CarouselContainer = styled.div`
display:${props => props.Display};
justify-content:${props => props.justifyContent};
width:${props => props.Width};
height:${props => props.Height};
background-colour:${props => props.backgroundColour};
justify-content: ${props => props.justifyContent};
align-items: ${props => props.alignItems};
line-height: ${props => props.lineHeight};
flex-direction:${props => props.flexdirection};
margin: ${props => props.Margin};
transform: ${props => props.Transform};

`


export const FirstCaro = () => {
    return (
        <CarouselContainer
            Display="flex"
            justifyContent="center"
        // Width="100%"
        // Height="65vh"
        >
            <CarouselContainer
                className='left-section'
                Width="45%"
                Display="flex"
                flexdirection="column"
                justifyContent="center"
                alignItems="center"
                lineHeight="30px">

                <Texts name="paragraph" className="heroTextHeader" text="We are big on these 3 things;" />
                <Texts name="paragraph" className="heroText" text="✓ Service Incubation & Ecosystem Advocacy
" />
                <Texts className="heroText" name="paragraph" text="✓ Building SAAS & Marketing Tech Platforms 
" />
                <Texts className="heroText" name="paragraph" text="✓ Institutional Innovations  
" />
                <div className='caroButtonContainer'>
                    <Buttons className="caroButton" text="SINC With Us" />
                </div>

            </CarouselContainer>
            <Images name="image" className="center-price" src={pricing} alt="adverising catalogue" />
            <Images name="image" className="jet-club" src={techTeens} alt="Young learning tech" />
        </CarouselContainer >
    )
}

{/*✓ Building SAAS & Marketing Tech Platforms
✓ Institutional Innovations 
We are big on these 3 things;*/}

import React from 'react';
import { Texts } from "../../Atoms";
import styled from "styled-components";


export const TextWrappers = styled.div`
width: ${props => props.width};
height: ${props => props.height};
display: ${props => props.display};
flex-direction: ${props => props.flex_direction};
justify-content: ${props => props.justify_content};
align-items: ${props => props.align_items};
background-colour: ${props => props.background_colour};
font-size: ${props => props.font_size}
`

export const OpenningSpeech = () => {
    return (
        <TextWrappers
            display="flex"
            flex_direction="column"
            justify_content="center"
            align_items="center"

        >
            <TextWrappers
                className='intro-speech-container'
                width="55%"

            >

                <TextWrappers
                    display="flex"
                    flex_direction="column"
                    justify_content="center"
                    align_items="center"
                    width="100%"
                    className='intro-speech-text'
                >
                    <Texts name="paragraph" text='"Nigeria and Africa has a massive network effect that has not been fully utilized. With ' />
                    <Texts name="paragraph" text=' Nigerians/Africans in every countery and territory of the world, we can scale an African ' />
                    <Texts name="paragraph" text='business to 100+ countries in few weeks"' />
                </TextWrappers>

                <TextWrappers
                    display="flex"
                    flex_direction="column"
                    justify_content="center"
                    align_items="center"
                    width="100%"
                    className='intro-speech-author'
                >
                    <Texts name="paragraph" text="Daniel Izeghs Oratokahai" />
                </TextWrappers>

                <TextWrappers
                    display="flex"
                    flex_direction="column"
                    justify_content="center"
                    align_items="center"
                    width="100%"
                    className='intro-speech-title'
                >
                    <Texts name="paragraph" text="Managing Patner at SINC Partners Ltd" />
                </TextWrappers>

            </TextWrappers>
        </TextWrappers>
    )
}

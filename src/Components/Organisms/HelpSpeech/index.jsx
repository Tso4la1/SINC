import React from 'react'
import { TextWrappers, Buttons } from '../../Molecules';
import { Texts } from '../../Atoms';


export const HelpSpeech = () => {
    return (
        <TextWrappers
            className='helpspeech'
            display="flex"
            flex_direction="column"
            justify_content="center"
            align_items="center"
        >
            <TextWrappers
                display="flex"
                justify_content="center"
                flex_direction="column"
                align_items="center"
                font_size="56px"
                width="60%"

                className="help 
    ">
                <Texts name="paragraph" text="Let' s build companies that" />
                <Texts name="paragraph" text="help everyone succeed" />
            </TextWrappers>
            <TextWrappers
                display="flex"
                flex_direction="row"
                justify_content="center"
                align_items="center"
                gap="10px">
                <Buttons text="SINC With Us" className="helpButton" />
                <Buttons text="Apply to SIP 1.0" className="NavBlackButton" />
            </TextWrappers>
        </TextWrappers>
    )
}

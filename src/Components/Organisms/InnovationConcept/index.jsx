import React from 'react'
import { TextWrappers } from '../../Molecules/OpenningSpeech'
import { Texts } from "../../Atoms/Texts";



export const InnovationConcept = () => {
    return (
        <TextWrappers
            display="flex"
            flex_direction="column"
            justify_content="center"
            align_items="center"

        >
            <TextWrappers
                display="flex"
                justify_content="center"
                align_items="center"
                font_size="50px"
                width="60%"
                className="innovation-concept
    ">
                <Texts name="paragraph" text="Our Concept Innovations" />
            </TextWrappers>
            <TextWrappers
                display="flex"
                flex_direction="column"
                justify_content="center"
                align_items="center"
                width="100%"
                className='innovation-concept-text'
            >
                <Texts name="paragraph" text='We have proprietary concept innovations that will support the startup ecosystem, support solution-providers/enterpreneurs and' />
                <Texts name="paragraph" text='ultimately help democratize success;' />
            </TextWrappers>
        </TextWrappers>

    )
}

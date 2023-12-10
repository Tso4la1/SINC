import React from 'react';
import { TextWrappers } from '../../Molecules/OpenningSpeech';
import { Texts } from "../../Atoms/Texts";

export const ServiceIncubation = () => {
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
                className="service-incubation
    ">
                <Texts name="paragraph" text="Our Service Incubation Model" />
            </TextWrappers>
            <TextWrappers
                display="flex"
                flex_direction="column"
                justify_content="center"
                align_items="center"
                width="100%"
                className='service-incubation-text'
            >
                <Texts name="paragraph" text='The Service Incubation model is an alternate funding model for startup that allows professionals to offer their services to' />
                <Texts name="paragraph" text='startups in return for a minute equity (usually between 0.5% to 1.5%) in the startup. As a service incubator, you will see' />

                <Texts name="paragraph" text=' your share grow as much as 1000% in 12 – 24 months as been first to invest.' />
            </TextWrappers>

        </TextWrappers>

    )
}

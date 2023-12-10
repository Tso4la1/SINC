import React from 'react';
import { TextWrappers, Buttons } from '../../Molecules';
import { Texts, Icons } from '../../Atoms';

export const CoFound = () => {

    const found = [
        {
            indx: 1,
            icon: "black",
            header: <Texts name="paragraph" text="We Ideate" />,
            content: <Texts name="paragraph" text="We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.
            " />,

        },

        {
            indx: 2,
            icon: "orange",
            header: <Texts name="paragraph" text="You Validate" />,
            content: <Texts name="paragraph" text="You join our 3 months  inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions " />,

        },
        {
            indx: 3,
            icon: "purple",
            header: <Texts name="paragraph" text="You Co-own" />,
            content: <Texts name="paragraph" text="After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.
            " />,

        },
    ]

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
                className="co-found
    ">
                <Texts name="paragraph" text="Co-found With Us" />
            </TextWrappers>
            <TextWrappers
                display="flex"
                flex_direction="column"
                justify_content="center"
                align_items="center"
                width="100%"
                className='co-found-text'
            >
                <Texts name="paragraph" text='We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed ' />
            </TextWrappers>
            <div className='
                co-found-gallery'>
                {found.map((items) => (

                    <div className='co-found-container' key={items.indx}  >
                        <div className='co-found-header'>
                            <Icons name={items.icon} />
                        </div>
                        <div className='co-found-header'>
                            {items.header}
                        </div>
                        <div className='co-found-content'>
                            {items.content}
                        </div>


                    </div>
                ))
                }
            </div>
            <TextWrappers
                display="flex"
                justify_content="center"
                align_items="center"
                width="60%"
                className="build-button
    ">
                <Buttons className="build-become-button" text="Build your dream" />
                <Icons name="arrow-right" />
            </TextWrappers>
        </TextWrappers>
    )
}

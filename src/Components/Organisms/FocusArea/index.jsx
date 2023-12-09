import React from 'react';
import { TextWrappers } from '../../Molecules/OpenningSpeech';
import { Texts } from "../../Atoms/Texts"

const areaDisplay = [
    {
        indx: 1,
        header: <Texts name="paragraph" text="01" />,
        content: <Texts name="paragraph" text="Business Support & Incubation" />,

    },

    {
        indx: 2,
        header: <Texts name="paragraph" text="02" />,
        content: <Texts name="paragraph" text="On-Demand & As-A-Service" />,

    },
    {
        indx: 3,
        header: <Texts name="paragraph" text="03" />,
        content: <Texts name="paragraph" text="Marketplace & Crowdsourcing" />,

    },
    {
        indx: 4,
        header: <Texts name="paragraph" text="04" />,
        content: <Texts name="paragraph" text="Aggregation & Shared Economy" />,

    },
    {
        indx: 5,
        header: <Texts name="paragraph" text="05" />,
        content: <Texts name="paragraph" text="Decentralized Economy & Digital Assests" />,

    },
]

export const FocusArea = () => {
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
                className="focus-area
    ">
                <Texts name="paragraph" text="Our Area of Focus" />
            </TextWrappers>
            <TextWrappers
                display="flex"
                flex_direction="column"
                justify_content="center"
                align_items="center"
                width="100%"
                className='focus-area-text'
            >
                <Texts name="paragraph" text='In our quest to help make success available to everyone, we have initial strategic ' />
                <Texts name="paragraph" text='direction to focus on these five @ key areas at the lab' />

                <div className='
                focus-area-gallery'>
                    {areaDisplay.map((items) => (

                        <div className='focus-area-container' key={items.indx}  >
                            <div className='focus-area-header'>
                                {items.header}
                            </div>
                            <div className='focus-area-content'>
                                {items.content}
                            </div>


                        </div>
                    ))
                    }

                </div>

            </TextWrappers>
        </TextWrappers>

    )
}

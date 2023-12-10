import React from 'react';
import { TextWrappers } from '../../Molecules/OpenningSpeech';
import { Icons, Texts } from '../../Atoms';

const polygons = [
    {
        indx: 1,
        header: "triangle",
        content: <Texts name="paragraph" text="Most early-stage companies and pre-product startups cannot afford professional services especially those who don’t have family and friends’ network that can support
        " />,

    },

    {
        indx: 2,
        header: "kite",
        content: <Texts name="paragraph" text="If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment" />,

    },
    {
        indx: 3,
        header: "pentagon",
        content: <Texts name="paragraph" text="Young professionals who don’t have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return" />,

    },
]

export const Hypothesis = () => {
    return (
        <TextWrappers
            display="flex"
            flex_direction="column"
            justify_content="center"
            align_items="center"

        >

            <TextWrappers
                display="flex"
                align_items="center"
                font_size="28px"
                width="95%"
                className="hypothesis
    ">
                <Texts name="paragraph" text="Hypothesis" />
            </TextWrappers>
            <TextWrappers
                display="flex"
                flex_direction="column"
                justify_content="center"
                width="95%"
                className='hypothesis-text'
            >
                <Texts name="paragraph" text='Just a few reasons we know its time for this model within the ecosystem' />
            </TextWrappers>
            <div className='
                hypothesis-gallery'>
                {polygons.map((items) => (

                    <div className='hypothesis-container' key={items.indx}  >
                        <div className='hypothesis-header'>
                            <Icons name={items.header} />
                        </div>
                        <div className='hypothesis-content'>
                            {items.content}
                        </div>


                    </div>
                ))
                }
            </div>
        </TextWrappers>
    )
}

import React from 'react';
import { TextWrappers } from '../../Molecules';
import { Texts } from '../../Atoms';

export const Investors = () => {
    return (
        <TextWrappers
            className='Carousel-wrapper'
            display="flex"
            flex_direction="column"
            justify_content="center"
            align_items="center">
            <TextWrappers
                display="flex"
                justify_content="center"
                flex_direction="column"
                align_items="center"
                font_size="50px"
                width="60%"

                className="investor 
    ">
                <Texts name="paragraph" text="SINC Investors Network" />

            </TextWrappers>
            <TextWrappers
                display="flex"
                flex_direction="column"
                justify_content="center"
                align_items="center"
                width="100%"
                className='investor-text'
            >
                <Texts name="paragraph" text='Our deals are structured not just to take in investments but to onboard owners passionate about our solutions. Our ' />
                <Texts name="paragraph" text='portfolio companies are valued at $50k at start, with these low valuation, you are guaranteed at least 2x-5x, usually been ' />
                <Texts name="paragraph" text='the first to invest. 
' />
                <TextWrappers
                    display="flex"
                    justify_content="center"
                    align_items="center"

                >
                    <strong>
                        <Texts name="paragraph" text='Disclaimer: ' />
                    </strong>
                    <Texts name="paragraph" text='These deal flows is a statement of our projections and may differ from stage to stage and from venture to   ' />
                </TextWrappers>
                <Texts name="paragraph" text='venture and the guarantee is for deal 1, usually the first to invest' />
            </TextWrappers>
            <TextWrappers
                display="flex"
                align_items="center"
                width="98%"
                className="micro
    ">
                <TextWrappers
                    display="flex"
                >

                    <strong>
                        <Texts name="paragraph" text="Micro Angel Investors & Service incubators " />
                    </strong>
                    <TextWrappers
                        className='above-bracket'
                    >
                        <Texts name="paragraph" text="(Invest from $500 & above)" />
                    </TextWrappers>
                </TextWrappers>

            </TextWrappers>
        </TextWrappers>
    )
}

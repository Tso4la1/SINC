import React from 'react';
import { TextWrappers } from '../../Molecules/OpenningSpeech';
import { Texts } from '../../Atoms';

export const CaseStudy = () => {

    const study = [
        {
            indx: 1,

            content: <Texts name="paragraph" text="Service Incubator Equity
            " />,

        },

        {
            indx: 2,
            content: <Texts name="paragraph" text="SEEQ Maths Equation" />,

        },
        {
            indx: 3,
            content: <Texts name="paragraph" text="
            Value of my Equity Over Time" />,

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
                align_items="center"
                font_size="28px"
                width="95%"
                className="case-study
    ">
                <Texts name="paragraph" text="Case Study" />
            </TextWrappers>
            <TextWrappers
                display="flex"
                flex_direction="column"
                justify_content="center"
                width="95%"
                className='case-study-text'
            >
                <Texts name="paragraph" text='See what Service Incubators get, the maths behind Service Equity (SEEQ) and what the value of your share equity can be over time' />
            </TextWrappers>
            <div className='
                case-study-gallery'>
                {study.map((items) => (

                    <div className='case-study-container' key={items.indx}  >
                        <div className='case-study-content'>
                            {items.content}
                        </div>


                    </div>
                ))
                }
            </div>
        </TextWrappers>
    )
}

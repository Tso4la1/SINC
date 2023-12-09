import React from 'react'
import { TextWrappers } from '../../Molecules/OpenningSpeech'
import { Texts } from "../../Atoms/Texts";
import { Buttons } from "../../Molecules/Buttons"
import { Icons } from '../../Atoms';

const network = [
    {
        indx: 1,
        header: <Texts name="paragraph" text="Work with Service Incubators to expedite your time-to-market" />,
        content: <Texts name="paragraph" text="Collaborate with our meticulously chosen service partners, each with a vested interst, ensuring a shared commitment to success in the game of venture building." />,
        price: <Texts name="paragraph" text="For 7.5% equity, you get a product designer, frontend engineer, software engineer and growth marketer to build the MVP off your app or web application and validate it" />,
        learn: "Learn More",
        icon: "arrow-right",


    },

    {
        indx: 2,
        header: <Texts name="paragraph" text="Access funding after your mvp is validated" />,
        content: <Texts name="paragraph" text="Startups that have built and validated their product can take advantage of the financial resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape." />,
        price: <Texts name="paragraph" text="Riase $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months" />,
        learn: "Learn More",
        icon: "arrow-right",


    }
]

export const NetworkOverview = () => {
    return (
        <TextWrappers
            display="flex"
            flex_direction="column"
            justify_content="center"
            align_items="center"
        // background_colour="blue"
        >
            <TextWrappers
                display="flex"
                justify_content="center"
                align_items="center"
                font_size="50px"
                width="60%"
                flex_direction="column"
                className="Network-header
            ">
                <Texts name="paragraph" text="Network of builders helping" />
                <Texts name="paragraph" text=" startup scale" />
            </TextWrappers>
            <div className='network-categories'>
                {network.map((items) => (

                    <div className='network-categories-container' key={items.indx}  >
                        <div className='network-categories-header'>
                            {items.header}
                        </div>
                        <div className='network-categories-content'>
                            {items.content}
                        </div>
                        <div className='network-categories-price'>
                            {items.price}
                        </div>
                        <div className='network-categories-learn'>
                            <Buttons className="network-categories-button" text={items.learn} /><Icons name={items.icon} />
                        </div>
                    </div>
                ))
                }
            </div>
        </TextWrappers >
    )
}

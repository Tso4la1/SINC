import React from 'react';
import { TextWrappers, Buttons } from '../../Molecules';
import { Texts, Images, Icons } from '../../Atoms';
import skirmer from "../../../assets/skirmer.png";
import kreeca from "../../../assets/kreeca.png";
import krowback from "../../../assets/krowback.png";
import wetta from "../../../assets/wetta.png";

export const EquityJobs = () => {

    const equity = [
        {
            indx: 1,
            icon: <Images name="image" className="equity-image" src={skirmer} alt="equity job cards" />,


        },

        {
            indx: 2,
            icon: <Images name="image" className="equity-image" src={kreeca} alt="equity job cards" />,

        },
        {
            indx: 3,
            icon: <Images name="image" className="equity-image" src={krowback} alt="equity job cards" />,


        },

        {
            indx: 4,
            icon: <Images name="image" className="equity-image" src={wetta} alt="equity job cards" />,


        },
    ]
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
                <Texts name="paragraph" text="Equity jobs" />

            </TextWrappers>
            <TextWrappers
                display="flex"
                flex_direction="column"
                justify_content="center"
                align_items="center"
                width="100%"
                className='investor-text'
            >
                <Texts name="paragraph" text='See companies and startups offering equity or a mix of cash and equity for very important position in their company ' />
            </TextWrappers>

            <div className='
                equity-gallery'>
                {equity.map((items) => (

                    <div className='equity-container' key={items.indx}  >
                        <div className='equity-header'>
                            {items.icon}
                        </div>

                        <Buttons className="equity-become-button" text="View Details" />



                    </div>
                ))
                }
            </div>
            <TextWrappers
                display="flex"
                justify_content="center"
                align_items="center"
                width="60%"
                className="quity-button
    ">
                <Buttons className="equity-right-button" text="See More Equity Jobs" />
                <Icons name="arrow-right" />
            </TextWrappers>
        </TextWrappers>
    )
}

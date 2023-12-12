import React from 'react';
import { TextWrappers, Buttons } from '../../Molecules';
import { Texts, Images, Icons } from '../../Atoms';
import okservice from "../../../assets/okservice.png";
import youtubed1 from "../../../assets/youtubed1.png";
import youtubed2 from "../../../assets/youtubed2.png";
import youtubed3 from "../../../assets/youtubed3.png";
import customerservice from "../../../assets/customerservice.png";


export const BlogResoures = () => {

    const resources = [
        {
            indx: 1,
            icon: <Images name="image" className="blog-image" src={okservice} alt="costumer service officer with the ok sign" />,
            header: <Images name="image" className="youtubed" src={youtubed1} alt="costumer service officer with the ok sign" />,


        },

        {
            indx: 2,
            icon: <Images name="image" className="blog-image" src={customerservice} alt="costumer service officer on call" />,
            header: <Images name="image" className="youtubed" src={youtubed2} alt="costumer service officer with the ok sign" />,

        },
        {
            indx: 3,
            icon: <Images name="image" className="blog-image" src={customerservice} alt="costumer service officer on call" />,
            header: <Images name="image" className="youtubed" src={youtubed3} alt="costumer service officer with the ok sign" />,


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
                <Texts name="paragraph" text="Blogs & Resources" />

            </TextWrappers>

            <div className='
                resources-gallery'>
                {resources.map((items) => (

                    <div className='resources-container' key={items.indx}  >
                        <div className='co-found-header'>
                            {items.icon}
                        </div>


                        <div className='resources-header'>
                            {items.header}
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
                className="blog-button
    ">
                <Buttons className="blog-become-button" text="See More Equity Jobs" />
                <Icons name="arrow-right" />
            </TextWrappers>
        </TextWrappers>
    )
}

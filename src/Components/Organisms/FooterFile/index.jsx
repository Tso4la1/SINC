import React from 'react';
import { Buttons, NigeriaProducts, TextWrappers, TrustedBusines } from '../../Molecules';
import { Images, Input, Texts } from '../../Atoms';
import SINCLOGOwhite from "../../../assets/SINCLOGOwhite.png";
import gasus from "../../../assets/gasus.png";
import footermedia from "../../../assets/footer-media.png";



const data3 = [
    {
        indx: 1,
        header: <Images name="image" src={SINCLOGOwhite} />,
        row1: <Texts name="paragraph" text="SINC Partners is a service" />,
        row2: <Texts name="paragraph" text=" incubation company connecting" />,
        row3: <Texts name="paragraph" text=" experts in product development " />,
        row4: <Texts name="paragraph" text="and growth marketing willing to" />,
        row5: <Texts name="paragraph" text=" offer their services to amazing" />,
        row6: <Texts name="paragraph" text=" startups in exchange" />,
        row7: <Texts name="paragraph" text=" for minute equity (usually" />,
        row8: <Texts name="paragraph" text=" 0.5% to 2%)" />,
    },

    {
        indx: 2,
        header: <Texts name="paragraph" text="Platforms" />,
        row1: <Texts name="paragraph" text="Kofoundme" />,
        row2: <Texts name="paragraph" text="InResidency" />,
        row3: <Texts name="paragraph" text="Service Market" />,
        row4: <Texts name="paragraph" text="Founders School" />,
        row5: <Texts name="paragraph" text="Metty" />,
        row6: <Texts name="paragraph" text="Grantty" />,
        row7: <Texts name="paragraph" text="Boldtell" />,
        row8: <Texts name="paragraph" text="Chekwa" />,
    },
    {
        indx: 3,
        header: <Texts name="paragraph" text="Initiatives" />,
        row1: <Texts name="paragraph" text="Jabi Plains" />,
        row2: <Texts name="paragraph" text="Local Pricing Initiative" />,
        row3: <Texts name="paragraph" text="Scholarship Program" />,
        row4: <Texts name="paragraph" text="SSMN Pricing" />,
        row5: <Texts name="paragraph" text="University STEM" />,
        row6: <Texts name="paragraph" text="University InResidency" />,
        row7: <NigeriaProducts />,
        row8: <Texts name="paragraph" text=" Founders Festival" />,
    },
    {
        indx: 4,
        header: <Texts name="paragraph" text="About Us" />,
        row1: <Texts name="paragraph" text="Who We Are" />,
        row2: <Texts name="paragraph" text="Our People" />,
        row3: <Texts name="paragraph" text="Concept Innovations" />,
        row4: <Texts name="paragraph" text="Our Process" />,
        row5: <Texts name="paragraph" text="Investors" />,
        row6: <Texts name="paragraph" text="CSR & Events" />,
        row7: <Texts name="paragraph" text="Career" />,
        row8: <Texts name="paragraph" text="Contact" />,




    },
    {
        indx: 5,
        header: <Texts name="paragraph" text="More" />,
        row1: <Texts name="paragraph" text="Services" />,
        row2: <Texts name="paragraph" text="Equity Jobs" />,
        row3: <Texts name="paragraph" text="Co-found with us" />,
        row4: <Texts name="paragraph" text="Offers" />,
        row5: <Texts name="paragraph" text="Innovation News" />,
        row6: <Texts name="paragraph" text="FAQ" />,
        row7: <Texts name="paragraph" text="Blog & Resources" />,
        row8: <Texts name="paragraph" text="Press" />,


    },

    {
        indx: 5,
        header: <Texts name="paragraph" text="Locations" />,
        row1: <Texts name="paragraph" text="Abuja, Nigeria " />,
        row2: <Texts name="paragraph" text="Lagos, Nigeria" />,
        row3: <Texts name="paragraph" text="Philadelphia, USA" />,

        row8: <TrustedBusines />,


    }

]


export const FooterFile = () => {
    return (
        <TextWrappers
            className='footer-wrapper'
            display="flex"
            flex_direction="column"
            justify_content="center"
            align_items="center"

        >

            <TextWrappers
                display="flex"
                align_items="center"
                width="98%"
                className="footer">
                <Texts name="paragraph" className="footer-header" text="Newsletter" />
            </TextWrappers>

            <TextWrappers
                display="flex"
                flex_direction="column"
                align_items="start"
                width="98%"
                className='footer-text'
            >
                <Texts name="paragraph" className="footer-content" text='Get the latest about SINC Partners, our startup Incubator program, Portfolio  ' />
                <Texts name="paragraph" className="footer-content" text='company offerings - straight into your inbox.' />

                <TextWrappers
                    display="flex"
                    flex_direction="row"
                    // justify_content="center"
                    className='email-cover'
                >
                    <Input type="email" placeholder="Enter your email address" className="footer-email" />
                    <Buttons text="Subscribe" className="footer-email-button" />
                </TextWrappers>
            </TextWrappers>
            <TextWrappers
                display="flex"
                flex_direction="row"
                justify_content="center"
                align_items="center"
                className='table3-deal-container'
            >

                {data3.map((items) => (

                    <div className='table3-deal-wrapper ' key={items.indx}  >

                        <div className='first3-data-header'>{items.header}</div>
                        <div className='first3-data'>{items.row1}</div>
                        <div className='first3-data'>{items.row2}</div>
                        <div className='first3-data'>{items.row3}</div>
                        <div className='first3-data'>{items.row4}</div>
                        <div className='first3-data'>{items.row5}</div>
                        <div className='first3-data'>{items.row6}</div>
                        <div className='first3-data'>{items.row7}</div>
                        <div className='first3-data'>{items.row8}</div>

                    </div>
                ))
                }


            </TextWrappers >

            <TextWrappers
                display="flex"
                flex_direction="row"
                justify_content="space-between"
                align_items="center"
                className="footerdetails"
            >
                <TextWrappers
                    display="flex"
                    flex_direction="row"
                    // justify_content="space-between"
                    // align_items="center"
                    className='footer-bracket'
                >
                    <Texts name="paragraph" text="Guaranteed 2x on your service or cash investment, usually been the first to invest." />
                    <Texts name="paragraph" className="bold-footer" text=" Get in early and SINC your guaranty! " />
                </TextWrappers>

                <Images name="image" src={gasus} alt="a foundation based on christian value" />


            </TextWrappers>

            <TextWrappers
                display="flex"
                flex_direction="row"
                justify_content="space-between"
                align_items="center"
                className="footerdetails"
            >
                <Texts name="paragraph" text="©
2023 SINC Partners Ltd. All rights reserved" />
                <TextWrappers
                    display="flex"
                    gap="1px"
                    justify_content="space-between"
                    align_items="center"
                    className='footer-bracket'
                >
                    <Texts name="paragraph" className="bold-footer" text="Privacy Policy " />
                    <Texts name="paragraph" className="bold-footer" text="Terms of Service " />
                    <Texts name="paragraph" className="bold-footer" text=" Get in early and SINC your guaranty! " />
                </TextWrappers>

                <Images name="image" src={footermedia} alt="social medial platforms" />


            </TextWrappers>
        </TextWrappers>
    )
}

import React, { useState } from 'react';
import { TextWrappers, Buttons } from '../../Molecules';
import { Texts, Icons } from '../../Atoms';
import { CarouselContainer } from '../../Molecules';

const enterpreneur = [

    {
        indx: 1,
        icon: "list",
        header: <Texts name="paragraph" text="Application and Selection" />,
        content: <Texts name="paragraph" text="Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies.
        Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application." />,

    },

    {
        indx: 2,
        icon: "gisting-colleague",
        header: <Texts name="paragraph" text="Alignment Meeting and Proposal Submission" />,
        content: <Texts name="paragraph" text="If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.
        Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies. " />,

    },
    {
        indx: 3,
        icon: "notepad",
        header: <Texts name="paragraph" text="Negotiation and Agreement" />,
        content: <Texts name="paragraph" text="Upon successful alignment and proposal review, we'll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements.
        Once terms are agreed upon, we'll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners.
        " />,

    },
    {
        indx: 4,
        icon: "user-card",
        header: <Texts name="paragraph" text="Onboarding and Integration" />,
        content: <Texts name="paragraph" text="Congratulations! As an accepted EIR, you'll undergo an onboarding process to familiarize yourself with the SINC Partners ecosystem, our portfolio companies, and key team members.
        Facilitated introductions will ensure a seamless integration between you and relevant portfolio companies, setting clear expectations for collaboration." />,
    },


]

export const EIR = () => {
    // Casousel logic goes in here
    const [activeIndex, setActiveIndex] = useState(0)

    const handleNext = () => {
        setActiveIndex(prev => (prev + 1) % enterpreneur.length);
    };

    const handlePrev = () => {
        setActiveIndex(prev => (prev - 1 + enterpreneur.length) % enterpreneur.length);
    };



    const currentTransform = -activeIndex * 12;

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

                className="studio 
    ">
                <Texts name="paragraph" text="Join Our Entrepreneur in Residence" />
                <Texts name="paragraph" text="(EIR) Program" />
            </TextWrappers>
            <TextWrappers
                display="flex"
                flex_direction="column"
                justify_content="center"
                align_items="center"
                width="100%"
                className='studio-text'
            >
                <Texts name="paragraph" text='Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and' />
                <Texts name="paragraph" text='technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each.' />
            </TextWrappers>
            <CarouselContainer

                className='eir-Carousel-wrapper'
            >
                <CarouselContainer
                    Transform={`translateX(${currentTransform}%)`}
                    className='eir-carousel-items'>
                    {enterpreneur.map((items, i) => (

                        <div className={`eir-carousel-item fade ${i === activeIndex ? "active" : ""
                            }`} key={i.indx}  >
                            <div className='eir-header'>
                                <Icons name={items.icon} />
                            </div>
                            <div className='eir-header'>
                                {items.header}
                            </div>
                            <div className='eir-content'>
                                {items.content}
                            </div>


                        </div>
                    ))
                    }
                </CarouselContainer>
            </CarouselContainer>
            <TextWrappers
                display="flex"
                justify_content="center"
                align_items="center"
                width="60%"
                className="eir-button
    ">
                <Buttons className="eir-become-button" text="Support the Future" />
                <Icons name="arrow-right" />
            </TextWrappers>
            <TextWrappers
                display="flex"
                justify_content="center"
                align_items="center"
                width="60%"
                className='left-right'
            >
                <button className="eir-carousel-control" onClick={handlePrev} ><Icons name="left-cirle" /></button>
                <button className="eir-carousel-control" onClick={handleNext} ><Icons name="right-circle" /></button>
            </TextWrappers>
        </TextWrappers>
    )
}

import React from 'react';
import { TextWrappers, Buttons } from '../../Molecules';
import { Images, Texts, Icons } from '../../Atoms';
import studioGrid from "../../../assets/studio.png";

export const Studio = () => {
    return (
        <TextWrappers
            display="flex"
            flex_direction="column"
            justify_content="center"
            align_items="center">
            <TextWrappers
                display="flex"
                justify_content="center"
                align_items="center"
                font_size="50px"
                width="60%"
                className="studio
    ">
                <Texts name="paragraph" text="Our Studio Portfolio" />
            </TextWrappers>
            <TextWrappers
                display="flex"
                flex_direction="column"
                justify_content="center"
                align_items="center"
                width="100%"
                className='studio-text'
            >
                <Texts name="paragraph" text='Our 2024 Service Incubator Portfolio Companies' />
            </TextWrappers>
            <TextWrappers
                display="flex"
                justify_content="center"
                align_items="center"
                font_size="50px"
                width="89%"
                className='studio-image-cover'
            >
                <Images name="image" src={studioGrid} alt="Porfolio" className="studio-image" />
            </TextWrappers>
            <TextWrappers
                display="flex"
                justify_content="center"
                align_items="center"
                width="60%"
                className="studio-button
    ">
                <Buttons className="studio-become-button" text="View All Companies" />
                <Icons name="arrow-right" />

            </TextWrappers>
        </TextWrappers>
    )
}

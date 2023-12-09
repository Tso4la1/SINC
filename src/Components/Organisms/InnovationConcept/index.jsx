import React from 'react'
import { TextWrappers } from '../../Molecules/OpenningSpeech'
import { Texts } from "../../Atoms/Texts";

const areaDisplay = [
    {
        indx: 1,
        header: <Texts name="paragraph" text="Service Incubator" />,
        content: <Texts name="paragraph" text="A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP" />,

    },

    {
        indx: 2,
        header: <Texts name="paragraph" text="Virtualting" />,
        content: <Texts name="paragraph" text="A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resources" />,

    },
    {
        indx: 3,
        header: <Texts name="paragraph" text="Diming" />,
        content: <Texts name="paragraph" text="A progressive investment model that allows you to put aside income (disposable or non disposoble) as investment over a period towards an investment or spend of your choice" />,

    },
]

export const InnovationConcept = () => {
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
                className="innovation-concept
    ">
                <Texts name="paragraph" text="Our Concept Innovations" />
            </TextWrappers>
            <TextWrappers
                display="flex"
                flex_direction="column"
                justify_content="center"
                align_items="center"
                width="100%"
                className='innovation-concept-text'
            >
                <Texts name="paragraph" text='We have proprietary concept innovations that will support the startup ecosystem, support solution-providers/enterpreneurs and' />
                <Texts name="paragraph" text='ultimately help democratize success;' />
            </TextWrappers>

            <div className='
                innovation-concept-gallery'>
                {areaDisplay.map((items) => (

                    <div className='innovation-concept-container' key={items.indx}  >
                        <div className='innovation-concept-header'>
                            {items.header}
                        </div>
                        <div className='innovation-concept-content'>
                            {items.content}
                        </div>


                    </div>
                ))
                }
            </div>
        </TextWrappers>

    )
}

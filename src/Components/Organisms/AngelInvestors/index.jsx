import React from 'react';
import { TextWrappers } from '../../Molecules';
import { Images, Texts } from '../../Atoms';
import BBB from "../../../assets/blackBgButton.png"

export const AngelInvestors = () => {
    const data2 = [
        {
            indx: 5,
            header: <Texts name="paragraph" text="Deal 1" />,
            row1: <Texts name="paragraph" text="✓ Pre-seed Stage:" />,
            row2: <Texts name="paragraph" text="✓ Expected Revenue at This Stage: " />,
            row3: <Texts name="paragraph" text="✓ Duration of Raise:" />,
            row4: <Texts name="paragraph" text="✓ Who Can Invest: " />,
            row5: <Texts name="paragraph" text="  $1.5M for 10% Equity" />,
            row6: <Texts name="paragraph" text=" $50k+/mth
            " />,
            row7: <Texts name="paragraph" text=" 6-18mths" />,
            row8: <Texts name="paragraph" text="Angel Investors, VCs, PE, Institutions" />,
        },
        {
            indx: 6,
            header: <Texts name="paragraph" text="Deal 2" />,
            row1: <Texts name="paragraph" text="✓ Seed Stage:" />,
            row2: <Texts name="paragraph" text="✓ Expected Revenue at This Stage: " />,
            row3: <Texts name="paragraph" text="✓ Duration of Raise:" />,
            row4: <Texts name="paragraph" text="✓ Who Can Invest: " />,
            row5: <Texts name="paragraph" text="$7.5M for 20% Equity" />,
            row6: <Texts name="paragraph" text=" $250k+/mth " />,
            row7: <Texts name="paragraph" text="12-24mths" />,
            row8: <Texts name="paragraph" text="VCs, PE, Institutions" />,
        },
        {
            indx: 7,
            header: <Texts name="paragraph" text="Deal 3" />,
            row1: <Texts name="paragraph" text="✓ IPO Stage:" />,
            row2: <Texts name="paragraph" text="✓ Expected Revenue at This Stage:" />,
            row3: <Texts name="paragraph" text="✓ Duration of Raise:" />,
            row4: <Texts name="paragraph" text="✓ Who Can Invest: " />,
            row5: <Texts name="paragraph" text="  $1.5B for 20% Equity " />,
            row6: <Texts name="paragraph" text="$1M+/mth" />,
            row7: <Texts name="paragraph" text=" 18-36mths" />,
            row8: <Texts name="paragraph" text=" The Public " />,




        },
        {
            indx: 8,
            row1: <Images name="image" className="bbb" src={BBB} alt="A black background with black button" />



        }

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
                align_items="center"
                width="98%"
                className="micro
    ">
                <TextWrappers
                    display="flex"
                >

                    <strong>
                        <Texts name="paragraph" text="Angel Investors & Venture Capital  " />
                    </strong>
                    <TextWrappers
                        className='above-bracket'
                    >
                        <Texts name="paragraph" text="(Invest from $50k and above) " />
                    </TextWrappers>
                </TextWrappers>

            </TextWrappers>
            <TextWrappers
                display="flex"
                flex_direction="row"
                justify_content="center"
                align_items="center"
                className='second-table-deal-container'
            >

                {data2.map((items) => (

                    <div className='second-table-deal-wrapper ' key={items.indx}  >

                        <div className='second-data-header'>{items.header}</div>
                        <span className='second-data'>{items.row1} <span className='bold-table-deal-text'>{items.row5}</span></span>
                        <span className='second-data'>{items.row2} <span className='bold-table-deal-text'>{items.row6}</span></span>
                        <span className='second-data'>{items.row3} <span className='bold-table-deal-text'>{items.row7}</span></span>
                        <span className='second-data'>{items.row4} <span className='bold-table-deal-text'>{items.row8}</span></span>
                    </div>
                ))
                }

            </TextWrappers >
        </TextWrappers>
    )

}

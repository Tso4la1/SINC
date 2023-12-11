import React from 'react';
// import { TextWrappers } from '../../Molecules';
import { Texts, Icons } from '../../Atoms';
import { TextWrappers } from '../../Molecules';

const data1 = [
    {
        indx: 1,
        header: <Texts name="paragraph" text="Deal 1" />,
        row1: <Texts name="paragraph" text="✓ Idea Stage:" />,
        row2: <Texts name="paragraph" text="✓ Expected Revenue at This Stage:" />,
        row3: <Texts name="paragraph" text="✓ Duration of Raise: " />,
        row4: <Texts name="paragraph" text="✓ Who Can Invest: " />,
        row5: <Texts name="paragraph" text=" $5k for 5% Equity
  " />,
        row6: <Texts name="paragraph" text=" $0/mth" />,
        row7: <Texts name="paragraph" text="1mth" />,
        row8: <Texts name="paragraph" text="People with Domain Expertise and Advisors" />,
    },
    {
        indx: 2,
        header: <Texts name="paragraph" text="Deal 2" />,
        row1: <Texts name="paragraph" text="✓ Build Stage: " />,
        row2: <Texts name="paragraph" text="✓ Expected Revenue at This Stage:" />,
        row3: <Texts name="paragraph" text="✓ Duration of Raise:" />,
        row4: <Texts name="paragraph" text="✓ Who Can Invest: " />,
        row5: <Texts name="paragraph" text="$25k worth of service for 10% Equity" />,
        row6: <Texts name="paragraph" text=" $100+/mth" />,
        row7: <Texts name="paragraph" text="1-3mths" />,
        row8: <Texts name="paragraph" text="Developers, Engineers, Growth Marketers" />,
    },
    {
        indx: 3,
        header: <Texts name="paragraph" text="Deal 3" />,
        row1: <Texts name="paragraph" text="✓ Validation Stage:" />,
        row2: <Texts name="paragraph" text="✓ Expected Revenue at This Stage: " />,
        row3: <Texts name="paragraph" text="✓ Duration of Raise: " />,
        row4: <Texts name="paragraph" text="
        ✓ Who Can Invest:" />,
        row5: <Texts name="paragraph" text=" $50k for 5% Equity" />,
        row6: <Texts name="paragraph" text="$1k+/mth" />,
        row7: <Texts name="paragraph" text="3-6mths" />,
        row8: <Texts name="paragraph" text=" Everyone " />,




    },
    {
        indx: 4,
        header: <Texts name="paragraph" text="Deal 4" />,
        row1: <Texts name="paragraph" text="✓ Traction Stage: " />,
        row2: <Texts name="paragraph" text="✓ Expected Revenue at This Stage:" />,
        row3: <Texts name="paragraph" text="✓ Duration of Raise: " />,
        row4: <Texts name="paragraph" text="✓ Who Can Invest: " />,
        row5: <Texts name="paragraph" text=" $125k worth of service for 5% Equity" />,
        row6: <Texts name="paragraph" text="$5k+/mth" />,
        row7: <Texts name="paragraph" text="6-12mths" />,
        row8: <Texts name="paragraph" text="Media, Influencers, Celebrity, Platform Owners" />,


    }

]



export const TableDeal = () => {

    return (
        <TextWrappers
            display="flex"
            flex_direction="row"
            justify_content="center"
            align_items="center"
            className='table-deal-container'
        >

            {data1.map((items) => (

                <div className='table-deal-wrapper ' key={items.indx}  >

                    <div className='first-data-header'>{items.header}</div>
                    <span className='first-data'>{items.row1} <span className='bold-table-deal-text'>{items.row5}</span></span>
                    <span className='first-data'>{items.row2} <span className='bold-table-deal-text'>{items.row6}</span></span>
                    <span className='first-data'>{items.row3} <span className='bold-table-deal-text'>{items.row7}</span></span>
                    <span className='first-data'>{items.row4} <span className='bold-table-deal-text'>{items.row8}</span></span>
                </div>
            ))
            }

        </TextWrappers >
    )
}

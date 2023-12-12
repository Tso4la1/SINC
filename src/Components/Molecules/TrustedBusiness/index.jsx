import React from 'react';
import { Icons, Images } from '../../Atoms';
import trusted from "../../../assets/trusted.png"

export const TrustedBusines = () => {
    return (
        <div className='trusted'>
            <Images name="image" src={trusted} className="trust" alt="Accredited business" />
            <Icons name="whatsapp" />
        </div>
    )
}

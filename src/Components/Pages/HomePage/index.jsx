import React from 'react';
import { NavBarWrapper, Navbar } from '../../Organisms/Navbar';
import { HeroCarousel } from '../../Organisms/HeroCarousel';
import { OpenningSpeech } from '../../Molecules';


export const HomePage = () => {
    return (
        <NavBarWrapper
            Display="flex"
            flexDirection="column"
        >
            <Navbar />
            <HeroCarousel />
            <OpenningSpeech />
        </NavBarWrapper>

    )
}

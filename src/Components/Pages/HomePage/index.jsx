import React from 'react';
import { NavBarWrapper, Navbar } from '../../Organisms/Navbar';
import { SecCaro, FirstCaro, ThirdCaro } from '../../Molecules';
import { HeroCarousel } from '../../Organisms/HeroCarousel';
// import { FirstCaro } from '../../Molecules';

export const HomePage = () => {
    return (
        <NavBarWrapper
            Display="flex"
            flexDirection="column"
        >
            <Navbar />
            <HeroCarousel />
            {/* <SecCaro /> */}
            {/* <FirstCaro /> */}
            {/* <ThirdCaro /> */}
        </NavBarWrapper>

    )
}

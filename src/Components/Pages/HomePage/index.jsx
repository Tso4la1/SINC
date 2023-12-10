import React from 'react';
import { HeroCarousel, NetworkOverview, NavBarWrapper, Navbar, FocusArea, InnovationConcept, ServiceIncubation, Hypothesis, CaseStudy, Studio, CoFound, EIR } from '../../Organisms';
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
            <NetworkOverview />
            <FocusArea />
            <InnovationConcept />
            <ServiceIncubation />
            <Hypothesis />
            <CaseStudy />
            <Studio />
            <CoFound />
            <EIR />
        </NavBarWrapper>

    )
}

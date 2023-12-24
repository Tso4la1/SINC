import React from 'react';
import { styled } from "styled-components";
import { Icons, Texts } from '../../Atoms';
import { Buttons } from "../../Molecules";


export const NavBarWrapper = styled.div`
display : ${props => props.Display};
align-items:${props => props.alignItems};
justify-content:${props => props.justifyContent};
flex-direction:${props => props.flexDirection};
gap:${props => props.Gap};
margin:${props => props.Margin};
padding:${props => props.Padding};
font-weight:${props => props.fontWeight};
position: ${props => props.position}
z-index: ${props => props.zindex};

`

export const Navbar = () => {
    return (

        <NavBarWrapper
            Display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexDirection="row"
            Margin="20px 70px"

        > {/*NavBar styling goes in here as styled-component*/}

            <NavBarWrapper
                Display="flex"
                alignItems="center"
                flexDirection="row"
                Gap="20px"
                fontWeight="600"
                position="sticky"
                zindex="25px"
            >

                <NavBarWrapper Margin="0 10px 0 0">
                    <Icons name="companyLogo" />
                </NavBarWrapper>

                <Texts className="nav-Link-text" name="paragraph" text="About" />
                <Texts className="nav-Link-text" name="paragraph" text="SIP" />
                <Texts className="nav-Link-text" name="paragraph" text="Studio" />
                <Texts className="nav-Link-text" name="paragraph" text="SEEQ" />
                <Texts className="nav-Link-text" name="paragraph" text="Platform" />
                <Texts className="nav-Link-text" name="paragraph" text="Initiatives" />
                <Texts className="nav-Link-text" name="paragraph" text="More" />
            </NavBarWrapper>

            <NavBarWrapper
                Display="flex"
                Gap="10px"
            >
                <Buttons text="SINC With Us" className="NavGreenButton" />
                <Buttons text="Apply to SIP 1.0" className="NavBlackButton" />
            </NavBarWrapper>
        </NavBarWrapper>
    )
}

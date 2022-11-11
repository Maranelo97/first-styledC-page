import React from "react";
import { Button, Container, MainHeading } from '../../globalStyles';
import Navbar from "../NavBar/NavBar";
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';


const Hero = () =>{
    return (

    <HeroSection>
    <Navbar></Navbar>
        <HeroVideo src="./assets/hero2.mp4" autoPlay loop muted/>
        <Container>
            <MainHeading>Tu Información esta segura con nosotros</MainHeading>
            <HeroText>
                Proveemos la mejor seguridad de sistemas para todos los clientes
            </HeroText>
            <ButtonWrapper>
                
                    <Button>Registrate</Button>
                
                <HeroButton>
                    Descubre más
                    </HeroButton>
            </ButtonWrapper>
        </Container>
    </HeroSection>
    );
}

export default Hero;
import React from 'react'
import { Link } from "gatsby"
import image from '../../images/Hero/hero-image.svg'
import { Container, HeadingContainer, Heading, Card, Image } from './StyleHeroSection'

export const HeroSection = () => (
    
    <Container>

        <HeadingContainer>
            <Heading>VANTAGE</Heading>
            <Heading primary>POINT.</Heading>
            <Image src={image} />
        </HeadingContainer>
        
    </Container>

)
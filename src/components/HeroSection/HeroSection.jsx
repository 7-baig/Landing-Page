import React from 'react'
import { Link } from "gatsby"
import image from '../../images/hero-image.jpg'
import { Container, HeadingContainer, Heading, Card } from './StyleHeroSection'

export const HeroSection = () => (
    
    <Container image={image}>

        <HeadingContainer>
            <Heading>VANTAGE</Heading>
            <Heading primary>POINT.</Heading>
        </HeadingContainer>
        
    </Container>

)
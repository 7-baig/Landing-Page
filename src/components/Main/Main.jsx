import React from "react"
import styled from 'styled-components'
import { Header } from "../Header/Header"
import { HeroSection } from "../HeroSection/HeroSection"
import { CarouselSection } from '../CarouselSection/CarouselSection'

const Container = styled.div`
    background: #b7c0ca;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export const Main = () => (

    <Container>
        <Header />
        <HeroSection />
        <CarouselSection />
    </Container>

)


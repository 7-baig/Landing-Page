import React from 'react'
import { PropertiesCards } from './PropertiesCards'
import {
    Container,
    HeadingContainer,
    Heading,
} from './StyleProperties'

export const Properties = () => (

    <Container>
        <HeadingContainer>
            <Heading>FEATURED PROPERTIES</Heading>
        </HeadingContainer>
        <PropertiesCards />
    </Container>
)

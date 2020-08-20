import React from 'react'
import slash from '../../images/triple-slash.png'
import { UpperFooter } from './UpperFooter'
import { LowerFooter } from './LowerFooter'
import { Container, Slash } from './StyleFooter'

export const Footer = () => (
    <Container>
        <Slash src={slash}/>
        <UpperFooter />
        <LowerFooter />
    </Container>
)

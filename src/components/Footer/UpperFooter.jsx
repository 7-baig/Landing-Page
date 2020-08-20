import React from 'react'
import fbIcon from '../../images/Footer/fbIcon.svg'
import instaIcon from '../../images/Footer/instaIcon.svg'
import linkedinIcon from '../../images/Footer/linkedinIcon.svg'
import { 
Container, 
IconsContainer, 
Icon,
H2,
ButtonsContainer,
Button,
} from './StyleUpperFooter'

export const UpperFooter = () => (
    <Container>
        <IconsContainer>
            <Icon src={fbIcon}/>
            <Icon src={instaIcon}/>
            <Icon src={linkedinIcon}/>
        </IconsContainer>    
        <H2>Let's talk?</H2>
        <ButtonsContainer>
            <Button>WANT TO SELL?</Button>
            <Button>WANT TO LET?</Button>
        </ButtonsContainer>

    </Container>
)

import React from 'react'
import { Container, Content, H6, H2, ButtonsContainer, Button } from './StyleCarousel'


export const Carousel = () => (
    <Container>
        <Content>
            {/* <Count>01</Count> */}
            <H6>27 FREDMAN DRIVE</H6>
            <H2>OFFICE TO LET</H2>
        </Content>
        <ButtonsContainer>
            <Button primary>
                &gt;
            </Button>

            <Button>
                &lt;
            </Button>
        </ButtonsContainer>
    </Container>
)
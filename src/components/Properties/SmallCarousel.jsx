import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 80%;
    height: 22%;
    background: #ffffff;
    display: flex;
    margin-left: 2px;
    @media (max-width: 600px) {
        width: 70%;
    }
    @media (max-width: 480px) {
        height: 20%;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1 1 auto;
`

const H6 = styled.h6`
    font-weight: 800;
    font-size: 10px;
    color: #0b1724;
    padding: 0;
    margin: 2px 0px;
`
const H2 = styled.h2`
    font-weight: 800;
    font-size: 14px;
    color: #b7c0ca;
    padding: 0;
    margin: 2px 0px;
`

const ButtonsContainer = styled.div`
    flex: 0 1 auto;
    display: flex;
    flex-direction: column;
`

const Button = styled.button`
    font-size: 10px;
    background: #0b1724;
    border: none;
    color: #ffffff;
    flex-grow: 1;
    border-bottom: ${ props => props.primary ? '1px solid #b7c0ca' : "none" };
    padding: 0px 10px;
    cursor: pointer;
`



export const SmallCarousel = () => (
    <Container>
        <Content>
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
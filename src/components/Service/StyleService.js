import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    padding: 20px 0px;
`
export const HeadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0px;
    @media (max-width: 480px) {
        padding: 20px 0px;
    }

`
export const Heading = styled.h1`
    color: #b7c0ca;
    padding: 0;
    margin: 0;
    text-align: center;
    @media (max-width: 480px) {
        font-size: 28px;
    }
`
// Cards container
export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px 30px;
    @media (max-width: 480px) {
        padding: 20px 10px;
    }
`
// Card
export const Card = styled.div`
    border-bottom: 1px solid #000;
    width: 25%;
    min-width: 300px;
    min-height: 190px;
    display: flex;
    flex-direction: column;   
    align-items: flex-start;
    justify-content: space-between;
    @media (max-width: 950px) {
        margin-bottom: 30px;
    }
    @media (max-width: 350px) {
        min-width: 250px;
    }
`
export const Slash = styled.img`
    width: 25px;
    margin-bottom: -15px;
    margin-left: -30px;
`
export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;   
    align-items: flex-start;
`
export const H3 = styled.h3`
    color: #000;
    width: 85%;
`
export const Paragraph = styled.p`
    color: #000;
    font-size: 14px;
    width: 85%;
    @media (max-width: 350px) {
        width: 80%;
    }
`
export const Button = styled.button`
    color: #000;
    border: none;
    border-bottom: ${ props => props.primary ? '3px solid #000' : 'none' };
    background: none;
    font-size: 14px;
` 


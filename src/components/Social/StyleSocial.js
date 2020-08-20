import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    padding: 30px 0px;
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

// Content
export const ContentContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    @media (max-width: 700px) {
        flex-direction: column;
    }
`
// Vector Container
export const VectorContainer = styled.div`
    margin: 0;
    padding: 0;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`
// Vector
export const Vector = styled.img`
    width: 60%;
    min-width: 300px;
    margin: 0;
    padding: 0;
    @media (max-width: 700px) {
        min-width: 250px;
    }
    @media (max-width: 350px) {
        min-width: 200px;
    }
`
// Text Container
export const TextContainer = styled.div`
    width: 50%;
    @media (max-width: 700px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 700px) {
        width: 100%;
        align-items: center;
        justify-content: center;
    }
`
export const H2 = styled.h2`
    font-weight: 700;
    width: 40%;
    min-width: 300px;
    color: #0b1724;
    @media (max-width: 480px) {
        font-size: 22px;
        text-align: center;
        min-width: 250px;
    }
    @media (max-width: 350px) {
        font-size: 16px;
    }
`
export const P = styled.p`
    width: 50%;
    min-width: 300px;
    font-size: 14px;
    line-height: 20px;
    color: #0b1724;
    @media (max-width: 480px) {
        text-align: center;
    }
    @media (max-width: 350px) {
        font-size: 13px;
        min-width: 230px;
    }
`
export const ButtonWrapper = styled.div`
    border-bottom: 1px solid black;
    width: 50%;
    min-width: 200px;
`
export const Button = styled.button`
    border: none;
    border-bottom: 3px solid #000;
    background: none;
    font-size: 13px;
    padding-right: 30px;
    letter-spacing: 2px;
    cursor: pointer;
    color: #0b1724;
    @media (max-width: 350px) {
        font-size: 12px;
    }
`
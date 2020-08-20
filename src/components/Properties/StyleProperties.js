import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0px
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
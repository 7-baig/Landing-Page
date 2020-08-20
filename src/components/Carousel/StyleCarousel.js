import styled from 'styled-components'

export const Container = styled.div`
    width: 400px;
    background: #ffffff;
    display: flex;
    @media (max-width: 800px) {
        width: 350px;
    }
    @media (max-width: 600px) {
        width: 300px;
    }
    @media (max-width: 480px) {
        width: 250px;
    }
    @media (max-width: 300px) {
        width: 100%;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1 1 auto;
`

export const H6 = styled.h6`
    font-weight: 800;
    color: #0b1724;
    padding: 0;
    margin: 2px 0px;
    @media (max-width: 600px) {
        font-size: 12px;
    }
`
export const H2 = styled.h2`
    font-weight: 800;
    color: #b7c0ca;
    padding: 0;
    margin: 2px 0px;
    @media (max-width: 600px) {
        font-size: 22px;
    }
`

export const ButtonsContainer = styled.div`
    flex: 0 1 auto;
    display: flex;
    flex-direction: column;
`

export const Button = styled.button`
    background: #0b1724;
    border: none;
    color: #ffffff;
    flex-grow: 1;
    border-bottom: ${ props => props.primary ? '1px solid #b7c0ca' : "none" };
    padding: 0px 10px;
    cursor: pointer;
`

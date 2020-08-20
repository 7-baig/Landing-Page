import styled from 'styled-components'

export const Container = styled.div`
    border: 1px solid #000;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background: #252625;
`

export const IconsContainer = styled.div`
    display: flex;
    aling-items: center;
    justify-content: center;
    margin: 40px 0px;
    @media (max-width: 480px) {
        margin: 20px 0px;
    }
`
export const Icon = styled.img`
    width: 40px;
    margin: 0px 20px;
    padding: 0;
    @media (max-width: 480px) {
        width: 30px;
        margin: 0px 15px;
    }
`
export const H2 = styled.h2`
    color: #ffffff;
    padding: 0;
    margin: 0;
    font-size: 40px;
    margin: 40px 0px;
    @media (max-width: 480px) {
        font-size: 25px;
        margin: 20px 0px;
    }
`
export const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 40px 0px;
    aling-items: center;
    justify-content: center;
    @media (max-width: 480px) {
        margin: 20px 0px;
    }
`
export const Button = styled.button`
    background: none;
    border: 1px solid #ffffff;
    margin: 0px 3px;
    padding: 5px 30px;
    color: #ffffff;
    font-size: 12px;
    @media (max-width: 480px) {
        font-size: 10px;
    }
`
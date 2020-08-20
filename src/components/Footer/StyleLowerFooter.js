import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background: #000000;
`
export const Address = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 40px 0px;
    @media (max-width: 480px) {
        margin: 20px 0px;
    }
`
export const H5 = styled.h5`
    color: #ffffff;
    margin: 0;
    padding: 0;
    font-size: 12px;
`
export const P = styled.p`
    color: #ffffff;
    margin: 0;
    padding: 0;
    font-size: 12px;
    opacity: 0.6;
    letter-spacing: 2px;

`